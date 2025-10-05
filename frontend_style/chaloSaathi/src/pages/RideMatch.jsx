// import React, { useState, useEffect, useRef } from "react";
// import DriverCard from "../components/DriverCard";
// import RideMap from "../components/RideMap";
// import { getDistanceFromLatLonInKm } from "../utils/distance";
// import axios from "axios";
// import "./RideMatch.css";

// export default function RideMatchRealtime() {
//   const [drivers, setDrivers] = useState([]);
//   const [pickupLocation, setPickupLocation] = useState(null);
//   const [rideBooked, setRideBooked] = useState(false);
//   const [searchArea, setSearchArea] = useState("");
//   const wsRef = useRef(null);

//   // helper to set/merge driver into state by id
//   const upsertDriver = (driverObj) => {
//     setDrivers(prev => {
//       const idx = prev.findIndex(d => d.id === driverObj.id);
//       if (idx === -1) return [...prev, driverObj];
//       const copy = [...prev];
//       copy[idx] = { ...copy[idx], ...driverObj };
//       return copy;
//     });
//   };

//   // fetch initial drivers for area (one-off)
//   const fetchDrivers = async (area) => {
//     if (!area) return;
//     try {
//       const res = await axios.get(`http://127.0.0.1:8000/available-drivers/?area=${encodeURIComponent(area)}`);
//       // If your API returns {drivers: [...]}, use res.data.drivers
//       const data = Array.isArray(res.data) ? res.data : (res.data.drivers || []);
//       setDrivers(data);
//     } catch (err) {
//       console.error("Error fetching drivers:", err);
//     }
//   };

//   // open websocket for area
//   useEffect(() => {
//     if (!searchArea) return;

//     // close previous
//     if (wsRef.current) {
//       try { wsRef.current.close(); } catch (e) {}
//       wsRef.current = null;
//     }

//     const area = encodeURIComponent(searchArea.toLowerCase());
//     // Use ws:// for local dev
//     const wsUrl = `ws://127.0.0.1:8000/ws/drivers/${area}/`;
//     const ws = new WebSocket(wsUrl);
//     wsRef.current = ws;

//     ws.onopen = () => {
//       console.log("WebSocket connected to area", searchArea);
//     };

//     ws.onmessage = (e) => {
//       try {
//         const payload = JSON.parse(e.data); // {action: 'update', driver: {...}}
//         const { action, driver } = payload;
//         if (!driver) return;

//         if (action === "remove") {
//           setDrivers(prev => prev.filter(d => d.id !== driver.id));
//         } else {
//           upsertDriver({
//             id: driver.id,
//             name: driver.name || driver.full_name,
//             lat: driver.lat,
//             lng: driver.lng,
//             status: driver.status || "available",
//             area: driver.area
//           });
//         }
//       } catch (err) {
//         console.error("WS message parse error", err);
//       }
//     };

//     ws.onclose = () => {
//       console.log("WebSocket closed for area", searchArea);
//     };

//     ws.onerror = (err) => {
//       console.error("WebSocket error", err);
//     };

//     // fetch initial list
//     fetchDrivers(searchArea);

//     return () => {
//       if (wsRef.current) {
//         try { wsRef.current.close(); } catch (e) {}
//         wsRef.current = null;
//       }
//     };
//   }, [searchArea]);

//   // handle pickup input (unchanged, but ensure we set searchArea)
//   const handlePickupChange = (e) => {
//     const area = e.target.value.trim();
//     setSearchArea(area);

//     if (area.toLowerCase().includes("kanpur")) setPickupLocation({ lat: 26.4499, lng: 80.3319, name: area });
//     else if (area.toLowerCase().includes("lucknow")) setPickupLocation({ lat: 26.8467, lng: 80.9462, name: area });
//     else setPickupLocation({ lat: 26.4499, lng: 80.3319, name: area });
//   };


//   return (
//     <div className="ride-match-realtime">
//       <h2>🚗 Request a Ride</h2>

//       <div className="ride-location">
//         <input
//           type="text"
//           placeholder="Enter pickup location..."
//           value={searchArea}
//           onChange={handlePickupChange}
//         />
//       </div>

//       <RideMap drivers={drivers} pickupLocation={pickupLocation} />

//       <h3>Nearby Drivers</h3>
//       <div className="drivers-list">
//         {drivers.map(driver => {
//           const distance = pickupLocation
//             ? getDistanceFromLatLonInKm(
//                 pickupLocation.lat,
//                 pickupLocation.lng,
//                 driver.lat,
//                 driver.lng
//               )
//             : null;

//           return (
//             <DriverCard
//               key={driver.id}
//               driver={{ ...driver, distance }}
//               rideBooked={rideBooked}
//               onBook={() => handleBookRide(driver.id)}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }


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
        `http://127.0.0.1:8000/available-drivers/?area=${encodeURIComponent(area)}`
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
      try { wsRef.current.close(); } catch (e) {}
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
        try { wsRef.current.close(); } catch (e) {}
        wsRef.current = null;
      }
    };
  }, [searchArea]);

  const handlePickupChange = (e) => {
    const area = e.target.value.trim();
    setSearchArea(area);

    if (area.toLowerCase().includes("kanpur")) setPickupLocation({ lat: 26.4499, lng: 80.3319, name: area });
    else if (area.toLowerCase().includes("lucknow")) setPickupLocation({ lat: 26.8467, lng: 80.9462, name: area });
    else setPickupLocation({ lat: 26.4499, lng: 80.3319, name: area });
  };

  const handleBookRide = (driverId) => {
    setDrivers((prev) =>
      prev.map((d) =>
        d.id === driverId ? { ...d, status: "booked" } : { ...d, status: "unavailable" }
      )
    );
    setRideBooked(true);
  };

  return (
    <div className="ride-match-realtime">
      <h2>🚗 Request a Ride</h2>

      <div className="ride-location">
        <input type="text" placeholder="Enter pickup location..." value={searchArea} onChange={handlePickupChange} />
      </div>

      <RideMap drivers={drivers} pickupLocation={pickupLocation} />

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
              onBook={() => handleBookRide(driver.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
