// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import { motion, useInView } from "framer-motion";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { useState, useRef, useMemo } from "react";

// const locations = [
//   { id: 1, name: "New York", coords: [40.7128, -74.006] },
//   { id: 2, name: "London", coords: [51.5074, -0.1278] },
//   { id: 3, name: "Paris", coords: [48.8566, 2.3522] },
//   { id: 4, name: "Tokyo", coords: [35.6895, 139.6917] },
//   { id: 5, name: "Sydney", coords: [-33.8688, 151.2093] },
//   { id: 6, name: "Rio de Janeiro", coords: [-22.9068, -43.1729] },
//   { id: 7, name: "Cape Town", coords: [-33.9249, 18.4241] },
//   { id: 8, name: "Dubai", coords: [25.2048, 55.2708] },
//   { id: 9, name: "Delhi", coords: [28.6139, 77.209] },
//   { id: 10, name: "Toronto", coords: [43.6532, -79.3832] },
// ];

// const types = ["Factory", "Warehouse", "Office"];

// const createIcon = (selected) =>
//   L.divIcon({
//     className: "custom-marker",
//     html: `
//       <div style="
//         width: 32px;
//         height: 32px;
//         background: ${selected ? "white" : "orange"};
//         border: 3px solid orange;
//         border-radius: 50%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//       ">
//         ${
//           selected
//             ? '<div style="width: 8px; height: 8px; background: orange; border-radius: 50%;"></div>'
//             : '<span style="color:white;font-weight:bold;">•</span>'
//         }
//       </div>
//     `,
//     iconSize: [32, 32],
//     iconAnchor: [16, 16],
//   });

// export default function LocationMap() {
//   const [selectedId, setSelectedId] = useState(1);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const mapRef = useRef(null);
//   const isInView = useInView(mapRef, { once: false, margin: "0px 0px -100px 0px" });

//   const filteredLocations = useMemo(() => {
//     return locations.filter((loc) =>
//       loc.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm]);

//   const center = useMemo(() => {
//     const loc = locations.find((l) => l.id === parseInt(selectedLocation));
//     return loc ? loc.coords : [20, 0];
//   }, [selectedLocation]);

//   return (
//     <div className="bg-white px-6 py-16">
//       <motion.h1
//         className="text-3xl md:text-5xl font-bold text-center text-black"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         animate={{ y: [0, -5, 0] }}
//         transition={{
//           duration: 1.5,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatDelay: 2,
//         }}
//         viewport={{ once: false }}
//       >
//         We are where you are
//       </motion.h1>

//       <div className="w-16 h-1 bg-orange-500 my-4 mx-auto" />

//       {/* Search + Dropdowns */}
//       <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-8 w-full max-w-3xl mx-auto">
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search location..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg w-full md:w-1/3"
//         />

//         {/* Location Dropdown */}
//         <select
//           value={selectedLocation}
//           onChange={(e) => setSelectedLocation(e.target.value)}
//           className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg w-full md:w-1/3"
//         >
//           <option value="">Select Location</option>
//           {filteredLocations.map((loc) => (
//             <option key={loc.id} value={loc.id}>
//               {loc.name}
//             </option>
//           ))}
//         </select>

//         {/* Type Dropdown */}
//         <select
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg w-full md:w-1/3"
//         >
//           <option value="">Select Type</option>
//           {types.map((type, idx) => (
//             <option key={idx} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Map Section */}
//       <motion.div
//         ref={mapRef}
//         className="h-[500px] max-w-6xl mx-auto rounded-xl overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {isInView && (
//           <MapContainer
//             center={center}
//             zoom={2}
//             scrollWheelZoom={true}
//             style={{ height: "100%", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//             />
//             {locations.map((loc) => (
//               <Marker
//                 key={loc.id}
//                 position={loc.coords}
//                 icon={createIcon(parseInt(selectedLocation) === loc.id)}
//                 eventHandlers={{
//                   click: () => setSelectedLocation(loc.id.toString()),
//                 }}
//               />
//             ))}
//           </MapContainer>
//         )}
//       </motion.div>
//     </div>
//   );
// }
