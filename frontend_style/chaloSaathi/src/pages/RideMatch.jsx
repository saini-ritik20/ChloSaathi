// import React, { useState, useEffect } from "react";
// import DriverCard from "../components/DriverCard";
// import RideMap from "../components/RideMap";
// import { getDistanceFromLatLonInKm } from "../utils/distance";
// import axios from "axios";
// import "./RideMatch.css";

// export default function RideMatchRealtime() {
//   const [drivers, setDrivers] = useState([]);
//   const [pickupLocation, setPickupLocation] = useState(null);
//   const [rideBooked, setRideBooked] = useState(false);

//   // Fetch drivers from backend
//   useEffect(() => {
//     const fetchDrivers = async () => {
//       try {
//         const res = await axios.get("/api/drivers"); // replace with your API endpoint
//         setDrivers(res.data);
//       } catch (err) {
//         console.error("Error fetching drivers:", err);
//       }
//     };
//     fetchDrivers();
//   }, []);

//   // Book ride handler
//   const handleBookRide = (driverId) => {
//     setDrivers(drivers.map(d =>
//       d.id === driverId
//         ? { ...d, status: "booked" }
//         : { ...d, status: "unavailable" }
//     ));
//     setRideBooked(true);
//   };

//   // Pickup location input
//   const handlePickupChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     // You can integrate a proper geocoding API later
//     if (value.includes("kanpur")) setPickupLocation({ lat: 26.4499, lng: 80.3319 });
//     else if (value.includes("lucknow")) setPickupLocation({ lat: 26.8467, lng: 80.9462 });
//     else setPickupLocation({ lat: 26.4499, lng: 80.3319 }); // fallback
//   };

//   return (
//     <div className="ride-match-realtime">
//       <h2>🚗 Request a Ride</h2>

//       <div className="ride-location">
//         <input
//           type="text"
//           placeholder="Enter pickup location..."
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


import React, { useState, useEffect } from "react";
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

  // Fetch drivers by area from backend
const fetchDrivers = async () => {
  if (!pickupLocation || !pickupLocation.name) return; // don't call API if undefined

  try {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/available-drivers/?area=${pickupLocation.name}`
    );
    setDrivers(res.data);
  } catch (err) {
    console.error("Error fetching drivers:", err);
  }
};


useEffect(() => {
  fetchDrivers();
}, [pickupLocation]);


  // Book ride handler
  const handleBookRide = (driverId) => {
    setDrivers(drivers.map(d =>
      d.id === driverId
        ? { ...d, status: "booked" }
        : { ...d, status: "unavailable" }
    ));
    setRideBooked(true);
  };

  // Handle pickup location input
  const handlePickupChange = (e) => {
    const area = e.target.value.trim();
    setSearchArea(area);

    // Set coordinates for map
    if (area.toLowerCase().includes("kanpur")) setPickupLocation({ lat: 26.4499, lng: 80.3319 });
    else if (area.toLowerCase().includes("lucknow")) setPickupLocation({ lat: 26.8467, lng: 80.9462 });
    else setPickupLocation({ lat: 26.4499, lng: 80.3319 }); // fallback

    // Fetch drivers in this area
    fetchDrivers(area);
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

      <RideMap drivers={drivers} pickupLocation={pickupLocation} />

      <h3>Nearby Drivers</h3>
      <div className="drivers-list">
        {drivers.map(driver => {
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
    </div>
  );
}
