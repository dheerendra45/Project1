import React, { useState, useEffect, useRef } from "react";
import herobg from '../../assets/Sustainability/bg.jpg'
import companylogo from '../../assets/products/image28.png'
import { Link } from "react-router-dom";


const Hero = () => {
 
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };




  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden">
  

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
        <div className="relative h-[193px] w-[750px] z-20 pl-[144px] pt-[275px] text-white">
         <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">
  Forging Stronger Steel, Empowering Stronger    
                           Communities

</h1>

         <div className="flex space-x-1 font-space-grotesk font-medium text-[16px] leading-[27.2px]">
  <span>Home</span>
  <span>&gt;</span>
  <span>Sustainability</span>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;