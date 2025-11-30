import React, { useState, useEffect, useRef } from "react";
import DriverCard from "../components/DriverCard";
import RideMap from "../components/RideMap";
import { getDistanceFromLatLonInKm } from "../utils/distance";
import axios from "axios";
import "./RideMatch.css";

export default function RideMatchRealtime() {
  const [drivers, setDrivers] = useState([]);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [rideBooked, setRideBooked] = useState(false);
  const [searchArea, setSearchArea] = useState("");
  const wsRef = useRef(null);

  // ▶️ driver mode UI state
  const [showDriverForm, setShowDriverForm] = useState(false);
  const [driverCurrentLocation, setDriverCurrentLocation] = useState("");
  const [driverDestination, setDriverDestination] = useState("");

  const upsertDriver = (driverObj) => {
    setDrivers((prev) => {
      const idx = prev.findIndex((d) => d.id === driverObj.id);
      if (idx === -1) return [...prev, driverObj];
      const copy = [...prev];
      copy[idx] = { ...copy[idx], ...driverObj };
      return copy;
    });
  };

  const fetchDrivers = async (area) => {
    if (!area) return;
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/available-drivers/?area=${encodeURIComponent(
          area
        )}`
      );
      const data = Array.isArray(res.data) ? res.data : res.data.drivers || [];
      setDrivers(data);
    } catch (err) {
      console.error("Error fetching drivers:", err);
    }
  };

  useEffect(() => {
    if (!searchArea || searchArea.length < 3) return; // ✅ Avoid WS spam

    if (wsRef.current) {
      try {
        wsRef.current.close();
      } catch (e) {}
      wsRef.current = null;
    }

    const area = encodeURIComponent(searchArea.toLowerCase());
    const wsUrl = `ws://127.0.0.1:8000/ws/drivers/${area}/`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WebSocket connected to:", searchArea);
    };

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
      } catch (err) {
        console.error("❌ WS message parse error", err);
      }
    };

    ws.onclose = () => console.log("⚠️ WebSocket closed for:", searchArea);
    ws.onerror = () => console.warn("❌ WebSocket error (likely backend off)");

    fetchDrivers(searchArea);

    return () => {
      if (wsRef.current) {
        try {
          wsRef.current.close();
        } catch (e) {}
        wsRef.current = null;
      }
    };
  }, [searchArea]);

  const handlePickupChange = (e) => {
    const area = e.target.value.trim();
    setSearchArea(area);

    if (area.toLowerCase().includes("kanpur"))
      setPickupLocation({ lat: 26.4499, lng: 80.3319, name: area });
    else if (area.toLowerCase().includes("lucknow"))
      setPickupLocation({ lat: 26.8467, lng: 80.9462, name: area });
    else setPickupLocation({ lat: 26.4499, lng: 80.3319, name: area });
  };

  const handleBookRide = (driverId) => {
    setDrivers((prev) =>
      prev.map((d) =>
        d.id === driverId
          ? { ...d, status: "booked" }
          : { ...d, status: "unavailable" }
      )
    );
    setRideBooked(true);
  };

  // ▶️ Driver submits route to search for customers
  const handleDriverSearchCustomers = () => {
    console.log(
      "Driver searching customers on route:",
      driverCurrentLocation,
      "→",
      driverDestination
    );

    // TODO: here you can call your backend:
    // axios.get(`/available-customers/?from=${driverCurrentLocation}&to=${driverDestination}`)
    //      .then(...) to show matched customers

    // ✅ After submitting, close form → map visible again
    setShowDriverForm(false);
  };

  // ✅ close form helper (also re-shows map)
  const handleCloseDriverForm = () => {
    setShowDriverForm(false);
  };

  return (
    <div className="ride-match-realtime">
      <h2>🚗 Request a Ride</h2>

      <div className="ride-location">
        <input
          type="text"
          placeholder="Enter pickup location..."
          value={searchArea}
          onChange={handlePickupChange}
        />
      </div>

      {/* Driver Mode trigger button */}
      <div className="driver-mode-trigger">
        <button
          className="driver-mode-btn"
          onClick={() => setShowDriverForm(true)}
        >
          I am a Driver – Share My Route
        </button>
      </div>

      {/* ✅ Map is hidden when driver form is open */}
      {!showDriverForm && (
        <RideMap drivers={drivers} pickupLocation={pickupLocation} />
      )}

      <h3>Nearby Drivers</h3>
      <div className="drivers-list">
        {drivers.map((driver) => {
          const distance = pickupLocation
            ? getDistanceFromLatLonInKm(
                pickupLocation.lat,
                pickupLocation.lng,
                driver.lat,
                driver.lng
              )
            : null;

          return (
            <DriverCard
              key={driver.id}
              driver={{ ...driver, distance }}
              rideBooked={rideBooked}
              onBook={() => handleBookRide(driver.id)}
            />
          );
        })}
      </div>

      {/* DRIVER OVERLAY FORM */}
      {showDriverForm && (
        <div className="driver-form-overlay">
          <div className="driver-form-card">
            <div className="driver-form-header">
              <div className="driver-form-title">
                <h3>Share Your Route</h3>
                <span>We’ll find riders going your way</span>
              </div>
              <button
                className="driver-form-close"
                onClick={handleCloseDriverForm}
              >
                ×
              </button>
            </div>

            <div className="driver-form-body">
              <div className="driver-field">
                <div className="driver-field-label">
                  <span className="icon">📍</span>
                  <span>CURRENT LOCATION</span>
                </div>
                <div className="driver-field-input">
                  <span className="input-icon">📍</span>
                  <input
                    type="text"
                    placeholder="e.g., Kakadeo, Kanpur"
                    value={driverCurrentLocation}
                    onChange={(e) => setDriverCurrentLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="driver-field">
                <div className="driver-field-label">
                  <span className="icon">🎯</span>
                  <span>DESTINATION</span>
                </div>
                <div className="driver-field-input">
                  <span className="input-icon">🎯</span>
                  <input
                    type="text"
                    placeholder="e.g., CSA University"
                    value={driverDestination}
                    onChange={(e) => setDriverDestination(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="driver-form-footer">
              <button
                className="driver-search-btn"
                onClick={handleDriverSearchCustomers}
              >
                Search Customers
              </button>
              <p className="driver-form-hint">
                We’ll show customers whose pickup is near your current location
                and whose drop matches your route.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
