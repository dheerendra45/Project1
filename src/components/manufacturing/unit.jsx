import { motion } from "framer-motion";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import a1 from "../../assets/manufacturing/unit-1.png";
import a2 from "../../assets/manufacturing/unit-2.jpg";
import a3 from "../../assets/manufacturing/unit-3.jpg";
import a4 from "../../assets/manufacturing/unit-4.jpg";
import a5 from "../../assets/manufacturing/unit-5.jpg";
import a6 from "../../assets/manufacturing/unit-6.jpg";
import a7 from "../../assets/manufacturing/unit-7.jpg";
import a8 from "../../assets/manufacturing/unit-8.jpg";
import a9 from "../../assets/manufacturing/unit-9.png";

// Set default Leaflet icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const images = [
  { src: a1, title: "JACKIE A. MECK WATER CAMPUS", desc: "Buckeye, Arizona", lat: 33.3701, lng: -112.5838 },
  { src: a2, title: "TACOMA NARROWS BRIDGE", desc: "Tacoma, Washington", lat: 47.2690, lng: -122.5517 },
  { src: a3, title: "EL SEGUNDO REFINERY", desc: "El Segundo, California", lat: 33.9192, lng: -118.4165 },
  { src: a4, title: "KAY BAILEY HUTCHISON DESALINATION PLANT", desc: "El Paso, Texas", lat: 31.7619, lng: -106.4850 },
  { src: a5, title: "SOUTH FORK SUBSTATION", desc: "East Hampton, New York", lat: 40.9634, lng: -72.1848 },
  { src: a6, title: "SAFECO FIELD", desc: "Seattle, Washington", lat: 47.5914, lng: -122.3325 },
  { src: a7, title: "SOUTH PASS 89E EXPANSION", desc: "Ingleside, Texas", lat: 27.8770, lng: -97.2116 },
  { src: a8, title: "MVC 4100 SOUTH TO SR-201", desc: "Salt Lake City, Utah", lat: 40.7608, lng: -111.8910 },
  { src: a9, title: "RODEO RENEWABLE FUELS FACILITY", desc: "San Francisco, California", lat: 37.7749, lng: -122.4194 },
];

export default function Unit() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white px-6 py-16">
      <motion.h1
        className="text-2xl md:text-6xl font-bold text-left mb-12 select-none"
        animate={{
          textShadow: [
            "0 0 5px rgba(96, 92, 84, 0.7)",
            "0 0 20px rgb(52, 49, 42)",
            "0 0 5px rgba(141, 138, 134, 0.7)",
          ],
          color: ["Black"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        OUR UNITS
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(255, 165, 0, 0.5)" }}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <img src={item.src} alt={item.title} className="w-full h-64 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">{item.title}</h2>
              <p className="text-white text-sm mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Unit Details + Map */}
      {selected && (
        <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8 items-start">
          {/* Details */}
          <div className="space-y-4">
            <img src={selected.src} alt={selected.title} className="rounded-lg w-full h-64 object-cover" />
            <h2 className="text-2xl font-bold">{selected.title}</h2>
            <p className="text-gray-600">{selected.desc}</p>
          </div>

          {/* Map */}
          <div className="h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={[selected.lat, selected.lng]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[selected.lat, selected.lng]}>
                <Popup>{selected.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
}
