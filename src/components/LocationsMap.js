import React from 'react';
import WorldMapImage from '../assets/world-map.png'; // Placeholder path
import IndiaMapImage from '../assets/india-map.jpg'; // Placeholder path
import icon from '../assets/industry.png'

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
    { value: '28', label: 'countries', subLabel: 'Footprint' },
    { value: '09', label: 'Manufacturing', subLabel: 'facilities worldwide' },
    { value: '27', label: 'Manufacturing', subLabel: 'units in India' }
  ];

  // Icon positions for India map (random positions for MP, MH, and South India)
  const iconPositions = [
    { top: '35%', left: '45%' }, // MP region
    { top: '42%', left: '48%' }, // MP region
    { top: '40%', left: '38%' }, // MH region  
    { top: '58%', left: '42%' }, // MH region
    { top: '65%', left: '35%' }, // South India
    { top: '80%', left: '40%' }  // South India
  ];

  return (
    <div className="py-12 bg-white">
     <div className="w-full max-w-7xl mx-auto px-1">

        <h2 className="text-orange-500 text-xl mb-1">Locations</h2>
        
        {/* Centered Statistics Box with exact specifications */}
        <div className="flex justify-center mb-12">
          <div 
            className="bg-gray-50 shadow-sm"
            style={{
              width: '1160px',
              height: '149.46px',
              borderRadius: '10.89px',
              paddingTop: '21.78px',
              paddingRight: '43.57px',
              paddingBottom: '21.78px',
              paddingLeft: '43.57px',
              gap: '65.35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-gray-700 text-base mb-2">{stat.label}</p>
                <p className="text-orange-500 text-4xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
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
                     
          {/* India Map with Icons */}
          <div className="w-1/4 relative">
            <img src={IndiaMapImage} alt="India Map" className="w-full" />
            {/* Industry Icons placed randomly across MP, MH, and South India */}
            {iconPositions.map((position, index) => (
              <img
                key={index}
                src={icon}
                alt="Industry Icon"
                className="absolute"
                style={{
                  top: position.top,
                  left: position.left,
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