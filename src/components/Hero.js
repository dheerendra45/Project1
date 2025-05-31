import React from 'react';
import FactoryIcon from '../assets/factory-icon.png'; 
import RevenueIcon from '../assets/revenue-icon.png'; 
import TruckIcon from '../assets/truck-icon.png'; 
import IndiaMapIcon from '../assets/india-map-icon.png';
import HeroBackground from '../assets/hero-background.png';

// This is a combined component that integrates both Hero and Statistics sections
export default function Hero() {
  // Statistics data
  const stats = [
    {
      icon: FactoryIcon,
      value: '15.15MTPA',
      description: 'Installed Capacity'
    },
    {
      icon: RevenueIcon,
      value: '₹15,680 cr',
      description: 'Revenue \'24'
    },
    {
      icon: TruckIcon,
      value: '2,500+',
      description: 'Delivered Nationwide'
    },
    {
      icon: IndiaMapIcon,
      value: '7',
      description: 'Pan-India Presence'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[700px]">
        {/* Background Image - Worker with helmet */}
        <div className="absolute inset-0">
          <img
            src={HeroBackground}
            alt="Steel Worker"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white  top-[-100px]">
          <h1 className="text-5xl font-bold mb-2 tracking-wider text-center">POWERING PROGRESS</h1>
          <h1 className="text-5xl font-bold tracking-wider text-center">WITH EVERY TON.</h1>
          
          {/* Explore More Button */}
          <button className="mt-8 border-2 border-[#F48120] px-8 py-3 hover:bg-white hover:text-gray-800 transition-colors">
            Explore More
          </button>
        
         </div>
        {/* Statistics Bar */}
        <div className="absolute h-[204.09px] w-[845px] bottom-0 left-[298px] top-[450.96px] right-0 bg-[#97979752] bg-opacity-70 py-8">
          <div className="container mx-auto">
            <div className="flex justify-around flex-wrap">
              {stats.map((stat, index) => (
                <div key={index} className="text-center flex flex-col items-center px-4">
                  <img src={stat.icon} alt={stat.description} className="h-16 mb-4" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}