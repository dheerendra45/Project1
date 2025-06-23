import React from "react";
import herobg from '../assets/hero-background.png';
import FactoryIcon from '../assets/factory-icon.png';
import RevenueIcon from '../assets/revenue-icon.png';
import TruckIcon from '../assets/truck-icon.png';
import IndiaMapIcon from '../assets/india-map-icon.png';

const Hero = () => {
  return (
    <div className="h-[815px] bg-gray-300 mx-auto overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-full">
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
        <div className="relative z-20 px-4 py-8 flex items-center justify-center min-h-screen text-white">
          {/* Semi-transparent black content area */}
          <div className="bg-black bg-opacity-40 w-full max-w-7xl mx-auto rounded-xl p-8 flex flex-col gap-6">
            
            {/* Heading and paragraph */}
            <div className="w-full md:w-[70%]">
              <h1 className="text-[60px] md:text-[52px] leading-tight font-space-grotesk font-bold text mb-4">
                Shyam Metalics - Pioneering Steel Excellence Since 1991
              </h1>
              <p className="text-lg mb-6">
                Recognized among India's top steel manufacturers for quality and innovation
              </p>
            </div>

            {/* Button + Stats in same row */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Button */}
              <div className="w-full md:w-[30%]">
                <button className="bg-orange-500 text-white px-6 py-3 rounded border border-white hover:bg-orange-600 transition w-full md:w-auto">
                  Explore More
                </button>
              </div>

              {/* Stats Box */}
              <div className="w-full md:w-[100%] bg-black bg-opacity-50 rounded-xl p-6 flex flex-wrap justify-between items-center gap-6">
                {/* Stat 1 */}
                <div className="flex items-center gap-3 w-[45%] md:w-auto">
                  <img src={FactoryIcon} alt="Factory Icon" className="w-10 h-10" />
                  <div>
                    <h2 className="text-xl font-bold">15.15 MTPA</h2>
                    <p className="text-sm">Installed Capacity</p>
                  </div>
                </div>
                {/* Stat 2 */}
                <div className="flex items-center gap-3 w-[45%] md:w-auto">
                  <img src={RevenueIcon} alt="Revenue Icon" className="w-10 h-10" />
                  <div>
                    <h2 className="text-xl font-bold">₹ 15,680 Cr</h2>
                    <p className="text-sm">Revenue '24</p>
                  </div>
                </div>
                {/* Stat 3 */}
                <div className="flex items-center gap-3 w-[45%] md:w-auto">
                  <div>
                    <h2 className="text-xl font-bold">2,500+</h2>
                    <p className="text-sm">Delivered Nationwide</p>
                  </div>
                </div>
                {/* Stat 4 */}
                <div className="flex items-center gap-3 w-[45%] md:w-auto">
                  <img src={IndiaMapIcon} alt="India Map Icon" className="w-10 h-10" />
                  <div>
                    <h2 className="text-xl font-bold">8</h2>
                    <p className="text-sm">Pan-India Presence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="text-sm flex items-center gap-4 text-white/80 mt-4">
              <span>Home</span>
              <span>&gt;</span>
              <span>Businesses</span>
              <span>&gt;</span>
              <span>Steel</span>
              <span>&gt;</span>
              <span>Carbon Steel</span>
              <span>&gt;</span>
              <span>Pellets</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;