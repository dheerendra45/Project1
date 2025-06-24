import React from 'react';
import WorldMapImage from '../assets/world-map.png';
import IndiaMapImage from '../assets/india-map.jpg';
import icon from '../assets/industry.png';

function LocationsMap() {
  const stats = [
    { label: 'Clients Served', value: '25,000+ (Domestic & Global)' },
    { label: 'Annual growth', value: '32% (Revenue: 12,500 Cr)' },
    { label: 'Active projects', value: '1200+ (Incl. Govt. Infrastructure)' },
    { label: 'Customer Satisfaction', value: '92% (Third-Party Survey)' }
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
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">Locations</h2>
            <p className="text-gray-700 max-w-xl text-sm sm:text-base">
              Metric Verified Data (2023-24)
            </p>
          </div>
          <button className="flex items-center bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition-colors self-start sm:self-auto">
            View Global Presence
            <span className="ml-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-xl font-extrabold">
              →
            </span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-50 shadow-md rounded-xl grid grid-cols-2 sm:flex sm:justify-between items-center px-4 sm:px-10 py-5 w-full max-w-[1160px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center px-3 sm:px-6 py-3 ${index < stats.length - 1 ? 'sm:border-r border-gray-400' : ''}`}
              >
                <p className="text-gray-700 text-xs sm:text-base font-semibold mb-1">{stat.label}</p>
                <p className="text-orange-600 text-xl sm:text-3xl font-extrabold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maps Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
          {/* World Map */}
          <div className="lg:w-3/5 shadow-md rounded-xl overflow-hidden border border-gray-300">
            <img src={WorldMapImage} alt="World Map" className="w-full object-cover" />
          </div>
          
          {/* India Map with Icons */}
          <div className="lg:w-2/5 relative shadow-md rounded-xl overflow-hidden border border-gray-300">
            <img src={IndiaMapImage} alt="India Map" className="w-full object-cover" />
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
