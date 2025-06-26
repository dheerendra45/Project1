import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import herobg from "../../assets/manufacturing/herobg.png";
import unit1 from '../../assets/manufacturing/unit-1.png';
import unit2 from '../../assets/manufacturing/unit-2.jpg';
import unit3 from '../../assets/manufacturing/unit-3.jpg';
import unit4 from '../../assets/manufacturing/unit-4.jpg';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselTimeoutRef = useRef(null);

  // Background images for carousel
  const backgroundImages = [
    herobg,
    unit1,
    unit2,
    unit3,
    unit4,
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const gradientVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  // Auto-rotate carousel
  useEffect(() => {
    const rotateCarousel = () => {
      carouselTimeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
      }, 5000); // Change slide every 5 seconds
    };

    rotateCarousel();
    return () => {
      if (carouselTimeoutRef.current) {
        clearTimeout(carouselTimeoutRef.current);
      }
    };
  }, [currentSlide, backgroundImages.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    // Reset auto-rotate timer
    if (carouselTimeoutRef.current) {
      clearTimeout(carouselTimeoutRef.current);
    }
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
    // Reset auto-rotate timer
    if (carouselTimeoutRef.current) {
      clearTimeout(carouselTimeoutRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset auto-rotate timer
    if (carouselTimeoutRef.current) {
      clearTimeout(carouselTimeoutRef.current);
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="h-screen md:h-[815px] bg-gray-100 mx-auto overflow-hidden relative -mt-[65px]"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={backgroundImages[currentSlide]}
            alt="Manufacturing Unit"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />
      
      {/* Floating particles animation */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="px-6 md:px-12 lg:px-[114px] pt-[150px] md:pt-[200px] lg:pt-[275px] text-white relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] font-space-grotesk font-bold mb-4 md:mb-6"
          variants={itemVariants}
        >
          Manufacturing <br />Unit
        </motion.h1>
        
        <motion.div
          variants={gradientVariants}
          className="h-1 rounded mb-6 sm:mb-8"
          style={{ background: "linear-gradient(to right, #FF6B00, white)" }}
        />
        
        <motion.div 
          className="flex space-x-1 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
          variants={itemVariants}
        >
          <span>Home</span>
          <span>&gt;</span>
          <span>Unit</span>
        </motion.div>
      </motion.div>

      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20 focus:outline-none"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20 focus:outline-none"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Scroll indicator for mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <FiChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;