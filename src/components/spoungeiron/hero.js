import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import herobg from '../../assets/Business/e1.jpg'
import companylogo from '../../assets/products/image28.png'


const Hero = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeBusinessSub, setActiveBusinessSub] = useState(null);
  const [activeNestedSub, setActiveNestedSub] = useState(null);
  
  // Timeout refs for delayed closing
  const hoverTimeoutRef = useRef(null);
  const businessSubTimeoutRef = useRef(null);
  const nestedSubTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

 

  // Clear all timeouts
  const clearAllTimeouts = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (businessSubTimeoutRef.current) {
      clearTimeout(businessSubTimeoutRef.current);
      businessSubTimeoutRef.current = null;
    }
    if (nestedSubTimeoutRef.current) {
      clearTimeout(nestedSubTimeoutRef.current);
      nestedSubTimeoutRef.current = null;
    }
  };

  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden">
      {/* Top Navbar */}
      
      {/* Middle Navbar */}
    

      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
        />
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-20 px-[114px] pt-[275px] text-white">
          <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">Sponge Iron</h1>
          <div className="text-sm flex items-center gap-4 text-white/80">
            <span>Home</span>
            <span>&gt;</span>
            <span>Businesses</span>
            <span>&gt;</span>
            <span>Steel</span>
            <span>&gt;</span>
            <span>Carbon Steel</span>
            <span>&gt;</span>
            <span>Sponge Iron</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;