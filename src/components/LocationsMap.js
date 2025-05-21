
// components/LocationsMap.js - Locations Map and Statistics Component
import React from 'react';
import WorldMapImage from '../assets/world-map.png'; // Placeholder path
import IndiaMapImage from '../assets/india-map.jpg'; // Placeholder path

function LocationsMap() {
  // Company statistics
  const stats = [
    { label: 'Clients', value: '12K' },
    { label: 'Annual growth', value: '55%' },
    { label: 'No of projects', value: '5K' },
    { label: 'Positive ratings', value: '80%' }
  ];
  
  // Global reach data
  const globalData = [
    { value: '82+', label: 'countries', subLabel: 'Footprint' },
    { value: '09', label: 'Manufacturing', subLabel: 'facilities worldwide' },
    { value: '27', label: 'Manufacturing', subLabel: 'units in India' }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-orange-500 text-xl mb-12">Locations</h2>
        
        {/* Statistics Section */}
        <div className="flex justify-between mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-gray-700 text-xl mb-2">{stat.label}</p>
              <p className="text-orange-500 text-5xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        
        {/* Maps and Global Presence */}
        <div className="flex">
          {/* Global Data */}
          <div className="w-1/4">
            {globalData.map((item, index) => (
              <div key={index} className="flex items-start mb-6">
                <div className="text-orange-500 font-bold text-lg mr-2">{item.value}</div>
                <div className="flex flex-col">
                  <span className="text-gray-800">{item.label}</span>
                  <span className="text-gray-600 text-xs">{item.subLabel}</span>
                </div>
              </div>
            ))}
            
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
              View Global Presence
            </button>
          </div>
          
          {/* World Map */}
          <div className="w-1/2">
            <img src={WorldMapImage} alt="World Map" className="w-full" />
          </div>
          
          {/* India Map */}
          <div className="w-1/4">
            <img src={IndiaMapImage} alt="India Map" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationsMap;