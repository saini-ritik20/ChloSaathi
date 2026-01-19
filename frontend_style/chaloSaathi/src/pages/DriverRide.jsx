import React, { useState } from "react";
import "./DriverRide.css";

export default function DriverRide() {
  const [isOnline] = useState(true);

  const [requests, setRequests] = useState([
    {
      id: 1,
      pickup: "Kakadeo, Kanpur",
      destination: "CSA University",
      distance: "3.2 km",
      time: "8 mins",
      fare: "₹120"
    },
    {
      id: 2,
      pickup: "Govind Nagar",
      destination: "Rawatpur",
      distance: "5.6 km",
      time: "14 mins",
      fare: "₹210"
    }
  ]);

  const handleAccept = (id) => {
    alert("Ride Accepted");
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const handleReject = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="driver-wrapper">
      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <h1>Driver</h1>
          <span>Ride Requests</span>
        </div>

        <div className={`online-pill ${isOnline ? "active" : ""}`}>
          <span className="pulse" />
          Online
        </div>
      </div>

      {/* CARDS */}
      <div className="rides-container">
        {requests.length === 0 ? (
          <div className="no-rides">
            <h3>No Requests</h3>
            <p>Waiting for nearby passengers</p>
          </div>
        ) : (
          requests.map((ride) => (
            <div className="ride-box" key={ride.id}>
              <div className="location-block">
                <div className="loc-row">
                  <div className="pickup-dot" />
                  <p>{ride.pickup}</p>
                </div>

                <div className="route-line" />

                <div className="loc-row">
                  <div className="drop-dot" />
                  <p>{ride.destination}</p>
                </div>
              </div>

              <div className="ride-info">
                <div>
                  <span>Distance</span>
                  <strong>{ride.distance}</strong>
                </div>
                <div>
                  <span>ETA</span>
                  <strong>{ride.time}</strong>
                </div>
                <div>
                  <span>Fare</span>
                  <strong className="fare">{ride.fare}</strong>
                </div>
              </div>

              <div className="action-row">
                <button
                  className="decline"
                  onClick={() => handleReject(ride.id)}
                >
                  Decline
                </button>
                <button
                  className="accept"
                  onClick={() => handleAccept(ride.id)}
                >
                  Accept Ride
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
