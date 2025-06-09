import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import a1 from "../assets/businessareasbg.png";
import a2 from "../assets/business1.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";

export default function BusinessAreas() {
  // Original images (your 4 images)
  const originalImages = [a2, a3, a4, a5];
  
  // Function to create random combinations of 16 images using only your 4 images
  const createRandomImageSet = () => {
    const imageSet = [];
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * originalImages.length);
      imageSet.push(originalImages[randomIndex]);
    }
    return imageSet;
  };

  // All image sets - first set is original pattern, then random combinations
  const allImageSets = [
    [...originalImages, ...originalImages, ...originalImages, ...originalImages], // First set repeats your 4 images 4 times
    createRandomImageSet(),
    createRandomImageSet(),
    createRandomImageSet(),
    createRandomImageSet()
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const intervalRef = useRef(null);

  const SLIDE_DURATION = 10000; // 10 seconds

  // Start auto-slide timer
  const startTimer = () => {
    // Clear existing timer
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Main slide timer
    intervalRef.current = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % allImageSets.length);
    }, SLIDE_DURATION);
  };

  // Stop timer
  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Handle next slide
  const nextSlide = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % allImageSets.length);
    startTimer(); // Restart timer after manual navigation
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSetIndex((prevIndex) => 
      prevIndex === 0 ? allImageSets.length - 1 : prevIndex - 1
    );
    startTimer(); // Restart timer after manual navigation
  };

  // Handle mouse enter/leave for individual images
  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setHoveredImageIndex(index);
    stopTimer();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImageIndex(null);
    if (!isHovered) {
      startTimer();
    }
  };

  // Initialize timer on component mount
  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);

  // Restart timer when hover state changes
  useEffect(() => {
    if (!isHovered && hoveredImageIndex === null) {
      startTimer();
    }
  }, [isHovered, hoveredImageIndex]);

  const currentImages = allImageSets[currentSetIndex];

  // Animation variants for image transitions (smoother)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -30,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-6"
      style={{
        backgroundImage: `url(${a1})`,
      }}
    >
      {/* Orange overlay */}
      <div className="absolute inset-0 bg-grey-600 opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Lorem ipsum is simply dummy text of the printing
          </h1>
          
          {/* Set Indicators */}
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

        {/* 4x4 Grid Container with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSetIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {currentImages.map((image, index) => (
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
                  src={image}
                  alt={`Business ${index + 1}`}
                  className="rounded-xl shadow-lg w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-3 left-3 text-sm font-medium bg-black/60 px-3 py-2 rounded-lg backdrop-blur-sm">
                  Lorem Ipsum is simply dummy
                </div>
                
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

        {/* Navigation Controls */}
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