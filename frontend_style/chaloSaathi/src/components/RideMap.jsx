// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Custom marker icons
// const driverIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
//   iconSize: [30, 30],
// });
// const customerIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
//   iconSize: [30, 30],
// });

// export default function RideMap({ drivers, pickupLocation }) {
//   // Default map center
//   const center = pickupLocation
//     ? [pickupLocation.lat, pickupLocation.lng]
//     : [26.4499, 80.3319]; // Kanpur fallback

//   return (
//     <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {/* Customer marker */}
//       {pickupLocation && (
//         <Marker position={[pickupLocation.lat, pickupLocation.lng]} icon={customerIcon}>
//           <Popup>Pickup Location</Popup>
//         </Marker>
//       )}

//       {/* Drivers */}
//       {drivers.map((d) => (
//         <Marker
//           key={d.id}
//           position={[d.lat, d.lng]}
//           icon={driverIcon}
//         >
//           <Popup>
//             {d.name} - {d.status.toUpperCase()}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// }


import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icons
const driverIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [30, 30],
});
const customerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  iconSize: [30, 30],
});

export default function RideMap({ drivers = [], pickupLocation }) {
  const center = pickupLocation
    ? [pickupLocation.lat, pickupLocation.lng]
    : [26.4499, 80.3319];

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Customer marker */}
      {pickupLocation && (
        <Marker position={[pickupLocation.lat, pickupLocation.lng]} icon={customerIcon}>
          <Popup>Pickup Location</Popup>
        </Marker>
      )}

      {/* Driver markers */}
      {drivers
        .filter(d => d?.lat && d?.lng) // ✅ Skip invalid drivers
        .map((d) => (
          <Marker key={d.id} position={[d.lat, d.lng]} icon={driverIcon}>
            <Popup>
              {(d.name || "Unknown").toUpperCase()} - {(d.status || "available").toUpperCase()}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
