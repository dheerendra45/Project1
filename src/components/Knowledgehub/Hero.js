import React, { useState, useEffect, useRef } from "react";
import herobg from '../../assets/Testimonials/herobg.jpg'
import companylogo from '../../assets/products/image28.png'
import { Link } from "react-router-dom";


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
        <div className="relative z-20 px-[100px] pt-[275px] text-white">
          <h1 className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6">Welcome to Shyam’s knowledge center</h1>
          <div className="text-sm flex items-center gap-4 text-white/80">
            <span>Home</span>
            <span>&gt;</span>
            <span>knowledge Hub</span>
           
           
          </div>
        </div>
    

  
      </div>
    </div>
  );
};

export default Hero;