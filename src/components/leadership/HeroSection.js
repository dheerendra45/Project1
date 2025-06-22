import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import herobg from "../../assets/leadership/herobg.jpg";
import companylogo from "../../assets/products/image28.png";
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiSearch, FiFilter } from "react-icons/fi";

const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [mobileNestedMenu, setMobileNestedMenu] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // InView hook for scroll-triggered animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,         // allows re-triggering
    amount: 0.3          // 30% of the component must be visible
  });

  return (
    <div className="h-screen md:h-[815px] bg-gray-100 mx-auto overflow-hidden relative">
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
        <div
          ref={sectionRef}
          className="relative z-20 px-6 md:px-12 lg:px-[114px] pt-[150px] md:pt-[200px] lg:pt-[275px] text-white"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] font-space-grotesk font-bold mb-4 md:mb-6"
          >
            Leadership
          </motion.h1>

          {/* Animated Orange-to-White Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            className="h-[4px] mb-6 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-white"
          ></motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex space-x-1 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
