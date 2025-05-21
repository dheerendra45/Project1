// components/MissionVisionValues.js - Mission, Vision, and Values Component
import React from 'react';
import MissionIcon from '../assets/mission-icon.png'; // Placeholder path
import VisionIcon from '../assets/vision-icon.png'; // Placeholder path
import ValuesIcon from '../assets/values-icon.png'; // Placeholder path
import SteelFactoryImage from '../assets/steel-factory.png'; // Placeholder path
import HardhatImage from '../assets/hardhat.png'; // Placeholder path
import WorkerImage from '../assets/worker.png'; // Placeholder path

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
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white w-1/3">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img src={section.icon} alt={section.title} className="h-10" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{section.title}</h3>
                <p className="text-gray-500 text-sm text-center">{section.description}</p>
              </div>
              <div className="h-48">
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
