import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Repeat product data to always have 16 items
  const generateImageSet = () => {
    const items = [];
    for (let i = 0; i < 16; i++) {
      const image = originalImages[i % originalImages.length];
      const name = productNames[i % productNames.length];
      items.push({ image, name });
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
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-xl shadow-lg w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Product name */}
                <div className="absolute bottom-3 left-3 text-xs font-semibold bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                  {item.name}
                </div>

                {/* Next Button */}
                <motion.button
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-orange-500 text-white text-lg flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300"
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  →
                </motion.button>

                {/* Hover overlay */}
                <AnimatePresence>
                  {hoveredImageIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-orange-500/20 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div
          className="flex justify-center mt-10 space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={prevSlide}
            className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full transition-all duration-300 shadow-lg font-medium"
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
