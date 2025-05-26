// components/MissionVisionValues.js - Mission, Vision, and Values Component
import React from 'react';
import MissionIcon from '../assets/mission-icon.png'; // Placeholder path
import VisionIcon from '../assets/vision-icon.png'; // Placeholder path
import ValuesIcon from '../assets/values-icon.png'; // Placeholder path
import SteelFactoryImage from '../assets/steel-factory.png'; // Placeholder path
import HardhatImage from '../assets/hardhat.png'; // Placeholder path
import WorkerImage from '../assets/worker.png'; // Placeholder path
import BackgroundImage from '../assets/mission-vision-bg.png'; // Background image path

function MissionVisionValues() {
  // Mission, Vision, Values data
  const sections = [
    {
      icon: MissionIcon,
      title: 'Our Mission',
      description: 'Lorem ipsum dolor sit amet consectetur. Eu condimentum ut ipsum elementum lectus. In vulputate pulvinar.',
      image: SteelFactoryImage
    },
    {
      icon: VisionIcon,
      title: 'Our Vision',
      description: 'Lorem ipsum dolor sit amet consectetur. Velit ut integer et duis erat platea id quis arcu. Mauris sed consectetur iaculis ac orci.',
      image: HardhatImage
    },
    {
      icon: ValuesIcon,
      title: 'Our Values',
      description: 'Lorem ipsum dolor sit amet consectetur. In eget lacus amet faucibus sagittis in est etiam. Euismod cursus fusce fusce mattis.',
      image: WorkerImage
    }
  ];

  return (
    <div 
      className="relative py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Semi-transparent overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#D5D5D5A6', // 85% opacity overlay
          opacity: 0.85
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ height: '530px' }}
            >
              {/* Text Content Section */}
              <div className="p-8 pb-6" style={{ height: '240px' }}>
                <div className="flex justify-center mb-6">
                  <img 
                    src={section.icon} 
                    alt={section.title} 
                    className="h-12 w-12 object-contain" 
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-base text-center leading-relaxed px-2">
                  {section.description}
                </p>
              </div>
              
              {/* Image Section */}
              <div className="relative" style={{ height: '290px' }}>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionVisionValues;