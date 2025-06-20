import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import herobg from "../../assets/Companyoverview/Herobg.mp4";
import { Link } from "react-router-dom";

import companylogo from "../../assets/products/image28.png";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiFilter,
} from "react-icons/fi";

const Hero = () => {
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const videoRef = useRef(null);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  // Clear any existing timeout
  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Set timeout to close dropdowns
  const setHoverTimeout = (callback, delay = 150) => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(callback, delay);
  };

  return (
    <div className="h-screen md:h-[815px] bg-gray-100 mx-auto overflow-hidden relative">
      {/* Top Navbar */}

      {/* Middle Navbar */}

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={herobg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        ></motion.div>

        {/* Content */}
        <div className="relative z-20 px-6 md:px-12 lg:px-[114px] pt-[150px] md:pt-[200px] lg:pt-[275px] text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] font-space-grotesk font-bold mb-4 md:mb-6"
          >
            We Live for a Challenge
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex space-x-1 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
          >
            <span>Home</span>
            <span>&gt;</span>
            <span>Unit</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
