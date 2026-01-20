import React, { useEffect, useState } from "react";
import "./DriverRide.css";

const WS_URL = "ws://127.0.0.1:8000/ws/ride-search/global/";

export default function DriverRide() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setRides((prev) => [data, ...prev]);
    };

    ws.onerror = () => console.log("WebSocket error");

    return () => ws.close();
  }, []);

  return (
    <div className="driver-ride-page">
      <header className="driver-header">
        <h2>🚘 Driver Dashboard</h2>
        <span className="online">ONLINE</span>
      </header>

      <div className="ride-list">
        {rides.length === 0 && (
          <p className="no-rides">Waiting for ride requests...</p>
        )}

        {rides.map((ride, index) => (
          <div className="ride-card" key={index}>
            <div className="ride-locations">
              <p><strong>Pickup:</strong> {ride.pickup}</p>
              <p><strong>Drop:</strong> {ride.destination}</p>
            </div>

            <div className="ride-meta">
              <span>📍 {ride.distance} km</span>
              <span>⏱ {ride.time} min</span>
              <span>💰 ₹{ride.fare}</span>
            </div>

            <button className="accept-btn">Accept Ride</button>
          </div>
        ))}
      </div>
    </div>
  );
}
