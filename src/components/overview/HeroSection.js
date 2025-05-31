import React from 'react';
import herobg from '../../assets/overview/herobg.jpg';
import MissionIcon from '../../assets/mission-icon.png';
import VisionIcon from '../../assets/vision-icon.png';
import ValuesIcon from '../../assets/values-icon.png';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative z-10 h-[500px] w-full">
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            POWERING PROGRESS<br />
            WITH EVERY TON.
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold">
            View Our Product
          </button>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto px-4 mt-[-80px] pb-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="text-center bg-white shadow-md p-6 border-2 rounded-md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src={MissionIcon} alt="Mission Icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. 
              Eu condimentum ut ipsum elementum 
              lectus. In vulputate pulvinar.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center bg-white shadow-md p-6 border-2 rounded-md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src={VisionIcon} alt="Vision Icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. 
              Eu condimentum ut ipsum elementum 
              lectus. In vulputate pulvinar.
            </p>
          </div>

          {/* Values */}
          <div className="text-center bg-white shadow-md p-6 border-2 rounded-md">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src={ValuesIcon} alt="Values Icon" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. 
              Eu condimentum ut ipsum elementum 
              lectus. In vulputate pulvinar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
