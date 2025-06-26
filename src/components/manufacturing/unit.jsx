import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  { src: a1, title: "SAMBALPUR PLANT", desc: "Ore to Metal Integrated Plant Capacity: 6.25 MTPA ", lat: 33.3701, lng: -112.5838 },
  { src: a2, title: "JAMURIA PLANT", desc: "Ore to Metal Integrated Plant Capacity: 6.83 MTPA", lat: 47.269, lng: -122.5517 },
  { src: a3, title: "MANGALPUR PLANT", desc: "Plant Capacity: 0.10 MTPA", lat: 33.9192, lng: -118.4165 },
  { src: a4, title: "PAKURIA PLANT", desc: "Plant Capacity: 0.40 MTPA", lat: 31.7619, lng: -106.485 },
  { src: a5, title: "INDORE PLANT", desc: "Plant Capacity: 0.27 MTPA", lat: 40.9634, lng: -72.1848 },
  { src: a6, title: "KHARAGPUR PLANT", desc: "Plant Capacity: 0.15 MTPA", lat: 47.5914, lng: -122.3325 },
  { src: a7, title: "GIRIDIH PLANT", desc: "Plant Capacity: 3600 TPA", lat: 27.877, lng: -97.2116 },
];

export default function Unit() {
  const [selected, setSelected] = useState(null);
  const detailsRef = useRef(null);

  const handleSelect = (item) => {
    setSelected(item);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <div className="bg-white px-6 py-16">
      {/* Heading and underline inside max-w wrapper for alignment */}
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-black font-space-grotesk"
        >
          Our Units
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-1 origin-left bg-orange-500 my-4"
        />
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(147, 146, 145, 0.5)" }}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleSelect(item)}
          >
            <img src={item.src} alt={item.title} className="w-full h-64 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">{item.title}</h2>
              <p className="text-white text-sm mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Unit Detail Section */}
      {selected && (
        <div
          ref={detailsRef}
          className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8 items-start scroll-mt-20"
        >
          <div className="space-y-4">
            <img
              src={selected.src}
              alt={selected.title}
              className="rounded-lg w-full object-cover"
              style={{ height: "32rem" }} // Custom height
            />
            <h2 className="text-2xl font-bold">{selected.title}</h2>
            <p className="text-gray-600">{selected.desc}</p>
          </div>

          <div
            className="w-full rounded-lg overflow-hidden shadow-lg"
            style={{ height: "32rem" }} // Custom height
          >
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
