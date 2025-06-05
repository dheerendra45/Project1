import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import a1 from "../assets/businessareasbg.png";
import a2 from "../assets/business1.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";

export default function BusinessAreas() {
  // Original images (always shown first)
  const originalImages = [a2, a3, a4, a5];
  
  // Random external images for rotation
  const randomImages = [
    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581094271901-8022df4466f3?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1587385789097-0197a7fbd179?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop'
  ];

  // All image sets - original first, then random combinations
  const allImageSets = [
    originalImages, // First set is always the original
    [randomImages[0], randomImages[1], randomImages[2], randomImages[3]],
    [randomImages[4], randomImages[5], randomImages[6], randomImages[7]],
    [randomImages[1], randomImages[3], randomImages[5], randomImages[0]],
    [randomImages[2], randomImages[6], randomImages[4], randomImages[7]]
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
        staggerChildren: 0.2,
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
      <div className="absolute inset-0 bg-orange-600 opacity-60 z-0"></div>

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

        {/* Images Container with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSetIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Left 60% block */}
            <div className="w-full md:w-3/5 space-y-6">
              {/* First Row */}
              <div className="flex gap-4">
                {[0, 1].map((idx) => (
                  <motion.div
                    key={`image-${idx}-${currentSetIndex}`}
                    variants={imageVariants}
                    className="relative w-1/2 overflow-hidden rounded-xl group cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={currentImages[idx]}
                      alt={`Business ${idx + 1}`}
                      className="rounded-xl shadow-lg w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = originalImages[idx]; // Fallback to original image
                      }}
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
                      {hoveredImageIndex === idx && (
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
              </div>

              {/* Second Row */}
              <motion.div
                key={`image-2-${currentSetIndex}`}
                variants={imageVariants}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={currentImages[2]}
                  alt="Business 3"
                  className="rounded-xl shadow-lg w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = originalImages[2]; // Fallback to original image
                  }}
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
                  {hoveredImageIndex === 2 && (
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
            </div>

            {/* Right 40% block */}
            <div className="w-full md:w-3/5 flex justify-end">
              <motion.div
                key={`image-3-${currentSetIndex}`}
                variants={imageVariants}
                className="relative w-full md:w-[95%] overflow-hidden rounded-xl group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={currentImages[3]}
                  alt="Business 4"
                  className="rounded-xl shadow-lg w-full h-[26rem] object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = originalImages[3]; // Fallback to original image
                  }}
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
                  {hoveredImageIndex === 3 && (
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
            </div>
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