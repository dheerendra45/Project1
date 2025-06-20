import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import herobg from '../../assets/faq/faqbg.jpg'
import companylogo from '../../assets/products/image28.png'

const Hero = () => {
 

  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden">
      {/* Top Navbar */}
    
     
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
          <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">Frequently Asked Questions</h1>
          <div className="text-sm flex items-center gap-4 text-white/80">
            <span>Home</span>
            <span>&gt;</span>
            <span>Faq</span>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;