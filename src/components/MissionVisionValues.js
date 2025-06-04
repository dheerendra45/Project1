import React from 'react';
import MissionIcon from '../assets/mission-icon.png'; // Placeholder path
import VisionIcon from '../assets/vision-icon.png'; // Placeholder path
import ValuesIcon from '../assets/values-icon.png'; // Placeholder path
import SteelFactoryImage from '../assets/steel-factory.png'; // Placeholder path
import HardhatImage from '../assets/hardhat.png'; // Placeholder path
import WorkerImage from '../assets/worker.png'; // Placeholder path

function MissionVisionValues() {
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
    <div className="relative py-16 px-4 bg-gray-100 overflow-hidden">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-orange-500 font-semibold uppercase mb-2">BRAND SLOGAN</h1>
        <h1 className="text-2xl text-black font-bold">
          Lorem Ipsum is Simply dummy text of <br /> The Printing
        </h1>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative"
            >
              {/* Orange horizontal line at the top of the section */}
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 rounded-tr-lg rounded-tl-lg"></div>

              {/* Text Content Section */}
              <div className="p-8 pt-6 pb-6 flex-grow flex flex-col">
                <div className="flex justify-center mb-6 mt-2">
                  <img 
                    src={section.icon}
                    alt={section.title}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-base text-center leading-relaxed px-2 flex-grow">
                  {section.description}
                </p>
              </div>
              
              {/* Image Section */}
              <div className="relative h-72">
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
