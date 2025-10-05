import React from "react";
import "./DriverCard.css";

export default function DriverCard({ driver, rideBooked, onBook }) {
  return (
    <div className={`driver-card ${driver.status}`}>
      <div className="driver-info">
        <h4>{driver.name}</h4>
        <p>Status: {(driver.status || "").toUpperCase()
}</p>
        {driver.distance && <p>Distance: {driver.distance} km</p>}
      </div>

      <button
        disabled={rideBooked || driver.status !== "available"}
        onClick={onBook}
        className="book-btn"
      >
        {driver.status === "booked" ? "Booked" : "Book Ride"}
      </button>
    </div>
  );
}
