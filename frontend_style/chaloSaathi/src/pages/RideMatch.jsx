import React, { useState } from "react";
import axios from "axios";
import "./RideMatch.css";

const BASE_URL = "http://127.0.0.1:8000";

export default function RideMatchRealtime() {
  const [pickupInput, setPickupInput] = useState("");
  const [destination, setDestination] = useState("");
  const [searchStarted, setSearchStarted] = useState(false);

  const handleFindRide = async () => {
    if (!pickupInput || !destination) {
      alert("Enter pickup and destination");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/start-ride-search/`, {
        pickup: pickupInput,
        destination: destination,
      });

      setSearchStarted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to start ride search");
    }
  };

  return (
    <div className="ride-match-realtime">
      <h2>🚗 Request a Ride</h2>

      {!searchStarted && (
        <div className="customer-form-overlay">
          <input
            type="text"
            placeholder="Pickup location"
            value={pickupInput}
            onChange={(e) => setPickupInput(e.target.value)}
          />

          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <button className="search-ride-btn" onClick={handleFindRide}>
            🔍 Find Ride
          </button>
        </div>
      )}

      {searchStarted && (
        <div className="searching-ui">
          <h3>🔄 Searching nearby drivers...</h3>
          <p>Please wait</p>
        </div>
      )}
    </div>
  );
}
