import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

import a2 from "../assets/products/herobg.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";

export default function BusinessAreas() {
  const originalImages = [a2, a3, a4, a5];
  const productNames = [
    "Pellet", "Sponge Iron", "Pig Iron", "Billet",
    "Structural Steel", "TMT Bars", "Wire Rods", "Pipes & Hollow Sections",
    "Color Coated Sheets", "Stainless Steel Billets", "SS Wire Rod", "SS Wire",
    "Black Round Bar", "Bright Bar", "Flats/Patta", "Flat Rolled Products"
  ];

  const productDescriptions = [
    "High-quality iron ore pellets for steel production",
    "Direct reduced iron used as raw material in steelmaking",
    "Crude iron obtained from smelting iron ore",
    "Semi-finished casting product for rolling mills",
    "Versatile steel sections for construction projects",
    "Thermo-mechanically treated bars for reinforced concrete",
    "Long steel product used for wire drawing",
    "Steel tubes for structural and mechanical applications",
    "Pre-painted steel sheets with decorative finishes",
    "High-quality stainless steel intermediate product",
    "Stainless steel rods for wire production",
    "Fine stainless steel wires for various applications",
    "Unpolished steel bars for machining purposes",
    "Precision-ground steel bars with smooth finish",
    "Flat steel products for fabrication and construction",
    "Rolled steel sheets and plates for industrial use"
  ];

  const generateImageSet = () => {
    const items = [];
    for (let i = 0; i < 16; i++) {
      const image = originalImages[i % originalImages.length];
      const name = productNames[i % productNames.length];
      const description = productDescriptions[i % productDescriptions.length];
      items.push({ image, name, description });
    }
    return items;
  };

  const allImageSets = [
    generateImageSet(),
    generateImageSet(),
    generateImageSet(),
    generateImageSet()
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const intervalRef = useRef(null);

  const SLIDE_DURATION = 10000;

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % allImageSets.length);
    }, SLIDE_DURATION);
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setCurrentSetIndex((prev) => (prev + 1) % allImageSets.length);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSetIndex((prev) =>
      prev === 0 ? allImageSets.length - 1 : prev - 1
    );
    startTimer();
  };

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setHoveredImageIndex(index);
    stopTimer();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImageIndex(null);
    if (!isHovered) startTimer();
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  useEffect(() => {
    if (!isHovered && hoveredImageIndex === null) {
      startTimer();
    }
  }, [isHovered, hoveredImageIndex]);

  const currentImages = allImageSets[currentSetIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, staggerChildren: 0.1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -30,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  return (
    <div className="relative bg-gray-200 text-white py-16 px-6">
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-black text-3xl md:text-4xl font-bold mb-8">
            Our Products
          </h1>

          <div className="flex justify-center space-x-3">
            {allImageSets.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSetIndex(index);
                  startTimer();
                }}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSetIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSetIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {currentImages.map((item, index) => (
              <motion.div
                key={`image-${index}-${currentSetIndex}`}
                variants={imageVariants}
                className="relative overflow-hidden group cursor-pointer h-full shadow-lg"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Orange overlay on hover */}
                <AnimatePresence>
                  {hoveredImageIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-60 z-10"
                    />
                  )}
                </AnimatePresence>

                {/* Product Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Next Button */}
                <motion.button
  className="absolute bottom-3 right-3 w-10 h-10 bg-orange-500 group-hover:bg-gray-700 hover:bg-orange-600 text-white text-lg flex items-center justify-center shadow-lg transition-all duration-300 z-30"
  onClick={nextSlide}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  &gt;
</motion.button>


              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.div
          className="flex justify-center mt-10 space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={prevSlide}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-800 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-300 shadow-lg font-semibold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
