import React, { useState, useEffect, useRef } from "react";
import DriverCard from "../components/DriverCard";
import RideMap from "../components/RideMap";
import { getDistanceFromLatLonInKm } from "../utils/distance";
import axios from "axios";
import "./RideMatch.css";

const BASE_URL = "http://127.0.0.1:8000"; // make sure your backend runs here
const WS_URL = "ws://127.0.0.1:8000"; // WebSocket server

export default function RideMatchRealtime() {
  const [drivers, setDrivers] = useState([]);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [customerDestination, setCustomerDestination] = useState("");
  const [rideBooked, setRideBooked] = useState(false);
  const [rideConfirmed, setRideConfirmed] = useState(false);
  const [searchArea, setSearchArea] = useState("");
  const [assignedDriver, setAssignedDriver] = useState(null);
  const wsRef = useRef(null);

  const [showDriverForm, setShowDriverForm] = useState(false);
  const [driverCurrentLocation, setDriverCurrentLocation] = useState("");
  const [driverDestination, setDriverDestination] = useState("");

  // ---------- DRIVER UTILITY ----------
  const upsertDriver = (driverObj) => {
    setDrivers((prev) => {
      const idx = prev.findIndex((d) => d.id === driverObj.id);
      if (idx === -1) return [...prev, driverObj];
      const copy = [...prev];
      copy[idx] = { ...copy[idx], ...driverObj };
      return copy;
    });
  };

  // ---------- FETCH DRIVERS ----------
  const fetchDrivers = async (area) => {
    if (!area) return;
    try {
      const res = await axios.get(
        `${BASE_URL}/available-drivers/?area=${encodeURIComponent(area)}`
      );
      const data = Array.isArray(res.data) ? res.data : res.data.drivers || [];
      setDrivers(data);
    } catch (err) {
      console.error("Error fetching drivers:", err);
      alert("Cannot fetch drivers. Please check if backend is running.");
    }
  };

  // ---------- WEBSOCKET ----------
  useEffect(() => {
    if (!searchArea || searchArea.length < 1) return;

    if (wsRef.current) {
      try { wsRef.current.close(); } catch (e) {}
      wsRef.current = null;
    }

    const ws = new WebSocket(`${WS_URL}/ws/drivers/${encodeURIComponent(searchArea.toLowerCase())}/`);
    wsRef.current = ws;

    ws.onopen = () => console.log("✅ WebSocket connected:", searchArea);

    ws.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data);
        const { action, driver } = payload;
        if (!driver) return;

        if (action === "remove") {
          setDrivers((prev) => prev.filter((d) => d.id !== driver.id));
        } else {
          upsertDriver({
            id: driver.id,
            name: driver.name || driver.full_name || "Unknown",
            lat: driver.lat,
            lng: driver.lng,
            status: driver.status || "available",
            area: driver.area,
          });
        }
      } catch (err) { console.error("❌ WS parse error", err); }
    };

    ws.onclose = () => console.log("⚠️ WebSocket closed for:", searchArea);
    ws.onerror = (err) => console.error("❌ WebSocket error", err);

    fetchDrivers(searchArea);

    return () => { if (wsRef.current) wsRef.current.close(); };
  }, [searchArea]);

  // ---------- PICKUP LOCATION ----------
  const handlePickupChange = (e) => {
    const area = e.target.value; // do not trim spaces
    setSearchArea(area);
    const locations = {
      kanpur: { lat: 26.4499, lng: 80.3319 },
      lucknow: { lat: 26.8467, lng: 80.9462 },
    };
    const loc = locations[area.toLowerCase()] || locations.kanpur;
    setPickupLocation({ ...loc, name: area });
  };

  // ---------- CUSTOMER REQUEST ----------
  const handleCustomerRequest = () => {
    if (!pickupLocation || !customerDestination) return;

    const sortedDrivers = [...drivers].sort((a, b) => {
      const distA = getDistanceFromLatLonInKm(pickupLocation.lat, pickupLocation.lng, a.lat, a.lng);
      const distB = getDistanceFromLatLonInKm(pickupLocation.lat, pickupLocation.lng, b.lat, b.lng);
      return distA - distB;
    });

    if (!sortedDrivers.length) return alert("No drivers available nearby");

    const closestDriver = sortedDrivers[0];
    setAssignedDriver(closestDriver);

    axios.post(`${BASE_URL}/api/assign-ride/`, {
      driver_id: closestDriver.id,
      pickup: pickupLocation,
      destination: customerDestination,
    }).catch(err => console.error("Error assigning ride:", err));
  };

  // ---------- DRIVER CONFIRM ----------
  const handleDriverConfirm = (driverId) => {
    setRideConfirmed(true);
    setRideBooked(true);
    setDrivers((prev) =>
      prev.map((d) => d.id === driverId ? { ...d, status: "booked" } : d)
    );

    axios.post(`${BASE_URL}/api/ride-confirmed/`, {
      driver_id: driverId,
      customer: pickupLocation,
      destination: customerDestination,
    }).catch(console.error);
  };

  const handleBookRide = (driverId) => {
    setDrivers((prev) =>
      prev.map((d) => d.id === driverId ? { ...d, status: "booked" } : { ...d, status: "unavailable" })
    );
    setRideBooked(true);
  };

  const handleDriverSearchCustomers = () => {
    console.log("Driver searching route:", driverCurrentLocation, "→", driverDestination);
    setShowDriverForm(false);
  };

  const handleCloseDriverForm = () => setShowDriverForm(false);

  const calculateFare = () => {
    if (!pickupLocation || !customerDestination || !assignedDriver) return 0;
    const dist = getDistanceFromLatLonInKm(
      pickupLocation.lat, pickupLocation.lng,
      customerDestination.lat || pickupLocation.lat,
      customerDestination.lng || pickupLocation.lng
    );
    return (dist * 10).toFixed(2);
  };

  return (
    <div className="ride-match-realtime">
      <h2>🚗 Request a Ride</h2>

      {/* CUSTOMER FORM */}
      {!showDriverForm && !rideBooked && (
        <div className="customer-form-overlay">
          <input
            type="text"
            placeholder="Enter pickup location..."
            value={pickupLocation?.name || searchArea}
            onChange={handlePickupChange}
          />
          <input
            type="text"
            placeholder="Enter destination..."
            value={customerDestination}
            onChange={(e) => setCustomerDestination(e.target.value)}
          />
          <button className="search-ride-btn" onClick={handleCustomerRequest}>🔍 Find Ride</button>
        </div>
      )}

      {/* DRIVER MODE BUTTON */}
      <div className="driver-mode-trigger">
        <button className="driver-mode-btn" onClick={() => setShowDriverForm(true)}>
          I am a Driver – Share My Route
        </button>
      </div>

      {/* MAP */}
      {!showDriverForm && (
        <RideMap
          drivers={drivers}
          pickupLocation={pickupLocation}
          customerDestination={customerDestination}
          assignedDriver={assignedDriver}
          rideConfirmed={rideConfirmed}
        />
      )}

      {/* DRIVER LIST */}
      <h3>Nearby Drivers</h3>
      <div className="drivers-list">
        {drivers.map((driver) => {
          const distance = pickupLocation
            ? getDistanceFromLatLonInKm(pickupLocation.lat, pickupLocation.lng, driver.lat, driver.lng)
            : null;

          return (
            <DriverCard
              key={driver.id}
              driver={{ ...driver, distance }}
              rideBooked={rideBooked}
              onBook={() =>
                assignedDriver?.id === driver.id
                  ? handleDriverConfirm(driver.id)
                  : handleBookRide(driver.id)
              }
              showConfirm={assignedDriver?.id === driver.id && !rideConfirmed}
            />
          );
        })}
      </div>

      {/* DRIVER FORM OVERLAY */}
      {showDriverForm && (
        <div className="driver-form-overlay">
          <div className="driver-form-card">
            <div className="driver-form-header">
              <div className="driver-form-title">
                <h3>Share Your Route</h3>
                <span>We’ll find riders going your way</span>
              </div>
              <button className="driver-form-close" onClick={handleCloseDriverForm}>×</button>
            </div>

            <div className="driver-form-body">
              <div className="driver-field">
                <div className="driver-field-label">📍 Current Location</div>
                <input
                  type="text"
                  placeholder="e.g., Kakadeo, Kanpur"
                  value={driverCurrentLocation}
                  onChange={(e) => setDriverCurrentLocation(e.target.value)}
                />
              </div>

              <div className="driver-field">
                <div className="driver-field-label">🎯 Destination</div>
                <input
                  type="text"
                  placeholder="e.g., CSA University"
                  value={driverDestination}
                  onChange={(e) => setDriverDestination(e.target.value)}
                />
              </div>
            </div>

            <div className="driver-form-footer">
              <button className="driver-search-btn" onClick={handleDriverSearchCustomers}>
                Search Customers
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RIDE CONFIRMATION */}
      {rideConfirmed && assignedDriver && (
        <div className="ride-confirmation">
          ✅ Ride confirmed with {assignedDriver.name}!
          <br />
          Estimated fare: ₹{calculateFare()}
        </div>
      )}
    </div>
  );
}

