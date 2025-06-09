import { motion } from "framer-motion";

import a1 from "../../assets/manufacturing/unit-1.png";
import a2 from "../../assets/manufacturing/unit-2.jpg";
import a3 from "../../assets/manufacturing/unit-3.jpg";
import a4 from "../../assets/manufacturing/unit-4.jpg";
import a5 from "../../assets/manufacturing/unit-5.jpg";
import a6 from "../../assets/manufacturing/unit-6.jpg";
import a7 from "../../assets/manufacturing/unit-7.jpg";
import a8 from "../../assets/manufacturing/unit-8.jpg";
import a9 from "../../assets/manufacturing/unit-9.png";

const images = [
  { src: a1, title: "JACKIE A. MECK WATER CAMPUS", desc: "Buckeye, Arizona" },
  { src: a2, title: "TACOMA NARROWS BRIDGE", desc: "Tacoma, Washington" },
  { src: a3, title: "EL SEGUNDO REFINERY", desc: "El Segundo, California" },
  { src: a4, title: "KAY BAILEY HUTCHISON DESALINATION PLANT", desc: "El Paso, Texas" },
  { src: a5, title: "SOUTH FORK SUBSTATION", desc: "East Hampton, New York" },
  { src: a6, title: "SAFECO FIELD", desc: "Seattle, Washingto" },
  { src: a7, title: "SOUTH PASS 89E EXPANSION", desc: "Ingleside, Texas" },
  { src: a8, title: "MVC 4100 SOUTH TO SR-201", desc: "Salt Lake City, Utah" },
  { src: a9, title: "RODEO RENEWABLE FUELS FACILITY", desc: "San Francisco, California" },
];

export default function Unit() {
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
          color: [
            "Black"
          ],
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
        {images.map(({ src, title, desc }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(255, 165, 0, 0.5)" }}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            style={{ willChange: "transform, box-shadow" }}
          >
            <img
              src={src}
              alt={title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">{title}</h2>
              <p className="text-white text-sm mt-2">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
