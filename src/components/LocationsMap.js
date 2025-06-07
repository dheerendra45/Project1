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
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8 lg:space-y-12">
        {/* Title & Description with Button Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Locations
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          
          <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap self-start lg:self-auto">
            View All
            <span className="ml-2 text-lg">→</span>
          </button>
        </div>

        {/* Statistics Box with Responsive Layout */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center ${
                  index < stats.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
                } ${
                  index < 2 ? 'border-b border-gray-200 pb-6 lg:pb-0 lg:border-b-0' : ''
                } lg:px-6`}
              >
                <div className="text-sm sm:text-base text-gray-600 mb-2 font-medium">
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maps Section - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* World Map */}
          <div className="relative">
            <img 
              src={WorldMapImage} 
              alt="World Map" 
              className="w-full h-auto rounded-lg shadow-md object-contain"
            />
          </div>

          {/* India Map with Icons */}
          <div className="relative">
            <img 
              src={IndiaMapImage} 
              alt="India Map" 
              className="w-full h-auto rounded-lg shadow-md object-contain"
            />
            {iconPositions.map((pos, idx) => (
              <img
                key={idx}
                src={icon}
                alt="Location"
                className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200"
                style={{ 
                  top: pos.top, 
                  left: pos.left 
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