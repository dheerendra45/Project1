import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import herobg from "../../assets/Environmentcompliance/Herobg.jpg";
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

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
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

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

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
            Beyond Compliance: Committed to a Sustainable Legacy
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex space-x-1 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
          >
            <span>Home</span>
            <span>&gt;</span>
            <span>Sustainability</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
