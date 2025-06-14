import React from 'react';
import WorldMapImage from '../assets/world-map.png';
import IndiaMapImage from '../assets/india-map.jpg';
import icon from '../assets/industry.png';

function LocationsMap() {
  const stats = [
    { label: 'Clients', value: '12K' },
    { label: 'Annual growth', value: '55%' },
    { label: 'No of projects', value: '5K' },
    { label: 'Positive ratings', value: '80%' }
  ];

  const iconPositions = [
    { top: '35%', left: '45%' },
    { top: '42%', left: '48%' },
    { top: '40%', left: '38%' },
    { top: '58%', left: '42%' },
    { top: '65%', left: '35%' },
    { top: '80%', left: '40%' }
  ];

  return (
    <div className="py-6 md:py-12 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title & Description with Button Row */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-2">Locations</h2>
            <p className="text-gray-700 max-w-xl text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <button className="flex items-center bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition-colors self-start sm:self-auto">
            View All
            <span className="ml-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-xl font-extrabold">
              →
            </span>
          </button>
        </div>

        {/* Statistics Box with Vertical Dividers */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-gray-50 shadow-sm rounded-xl grid grid-cols-2 sm:flex sm:justify-between items-center px-4 sm:px-10 py-4 sm:py-6 w-full max-w-[1160px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center px-2 sm:px-4 py-2 sm:py-0 ${index < stats.length - 1 ? 'sm:border-r border-gray-400' : ''} ${index % 2 === 0 ? 'border-r border-gray-400 sm:border-r-0' : ''}`}
              >
                <p className="text-gray-700 text-xs sm:text-base mb-1">{stat.label}</p>
                <p className="text-orange-500 text-xl sm:text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maps Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">

          {/* World Map */}
          <div className="lg:w-1/2">
            <img src={WorldMapImage} alt="World Map" className="w-full" />
          </div>

          {/* India Map with Icons */}
          <div className="lg:w-1/4 relative">
            <img src={IndiaMapImage} alt="India Map" className="w-full" />
            {iconPositions.map((pos, idx) => (
              <img
                key={idx}
                src={icon}
                alt="Industry Icon"
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: '22px',
                  height: '22px',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationsMap;