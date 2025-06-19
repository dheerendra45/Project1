import React, { useState, useEffect, useRef } from "react";
import herobg from '../../assets/overview/herobg.jpg';
import companylogo from '../../assets/products/image28.png'
import MissionIcon from '../../assets/mission-icon.png';
import VisionIcon from '../../assets/vision-icon.png';
import ValuesIcon from '../../assets/values-icon.png';

const HeroSection = () => {
  
  return (
    <div className="bg-gray-100 mx-auto overflow-hidden">
     

      {/* Hero Section - Updated with Overview content */}
      <div className="relative z-10 h-[500px] w-full -mt-[57px]">
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Dream big, We build big                      
          </h1>
          <p>Ranked Among India's Top Steel Plants for Quality, Scale, and Innovation</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white mt-2 px-8 py-3 rounded font-semibold">
            View Our Product
          </button>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto px-4 mt-[-80px] pb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center bg-white shadow-md p-6 border-2 rounded-md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src={MissionIcon} alt="Mission Icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We Shri. M. P. Agarwal's values into action—efficiency, sustainability, and dynamic management to world-class steel solutions for a stronger India.             
            </p>
          </div>
           
          {/* Vision */}
          <div className="text-center bg-white shadow-md p-6 border-2 rounded-md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src={VisionIcon} alt="Vision Icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We're engineering the future of steel through smarter processes, stronger partnerships, and seizing every opportunity to raise the bar for quality and sustainability worldwide.             
            </p>
          </div>
           
          {/* Values */}
          <div className="text-center bg-white shadow-md p-6 border-2 rounded-md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src={ValuesIcon} alt="Values Icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur.               
              Eu condimentum ut ipsum elementum               
              lectus. In vulputate pulvinar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;