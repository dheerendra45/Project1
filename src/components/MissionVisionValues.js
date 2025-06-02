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
      icon: VisionIcon,
      title: 'Our Vision',
      description: 'We\'re engineering the future of steel through smarter processes, stronger partnerships, and seizing every opportunity to raise the bar for quality and sustainability worldwide.',
      image: SteelFactoryImage
    },
    {
      icon: MissionIcon,
      title: 'Our Mission',
      description: 'We bring Shri. M. P. Agarwal\'s values into action—efficiency, sustainability, and dynamic management to deliver world-class steel solutions for a stronger India.',
      image: HardhatImage
    },
    {
      icon: ValuesIcon,
      title: 'Our Values',
      description: 'Built on Integrity & Transparency, Collaboration & Synergy, Ownership & Accountability, and Commitment to Excellence—the foundation of our success.',
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