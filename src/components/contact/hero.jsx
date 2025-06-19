import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import herobg from "../../assets/contact/contact.png";
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] font-space-grotesk font-bold mb-4 md:mb-6"
            >
              Get In Touch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              Fusce et diam nisl. Curabitur est orci, tempus nec iaculis non,
              hendrerit eget est. Fusce nisi lorem, scelerisque vitae tempus
              eget, consequat ultrices nulla.
            </motion.p>
            {/* Animated Horizontal Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-[2px] mb-6 bg-gradient-to-r from-orange-500 to-white/0"
            />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex space-x-1 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
            >
              <span className="hover:text-orange-400 transition-colors">
                Home
              </span>
              <span>&gt;</span>
              <span>Contact Us</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
