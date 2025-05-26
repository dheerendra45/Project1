// components/AboutUs.js
import React from 'react';
import LaserCuttingImage from '../assets/laser-cutting.jpg';
import WorkerImage from '../assets/factory-worker.png';

function AboutUs() {
  const timelineYears = [1848, 1902, 1964, 1998, 2008, 2023]
  return (
    <div className="bg-white py-12">
      {/* Main Content Section */}
      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Left Content */}
          <div className="w-1/3 relative">
<p className="text-orange-500 text-xl mb-2 font-bold text-[24px] tracking-[4.3px] leading-[30.01px] font-['Helvetica_Neue']">
  About Us
</p>

<h2 className="text-[36px] leading-[50.4px] font-bold tracking-[0%] align-middle font-['LEMON_MILK'] mb-6">
  HOW WE STARTED
</h2>

           <p className="font-[400] text-[24px] leading-[40.01px] tracking-[0%] font-['Manrope'] mb-4">
  Lorem Ipsum
</p>


           <p className="font-[300] text-[18px] leading-[30.01px] tracking-[0%] font-['Manrope'] text-gray-600 mb-8">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
</p>


            {/* Positioned Box */}
            <div className="absolute top-[550px] bg-gray-100 p-4 w-32">
              <p className="text-sm text-gray-800">
                Lorem Ipsum dollar sit lorem ipsulias
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-1/3 px-4">
            <img
              src={LaserCuttingImage}
              alt="Laser Cutting Machine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="w-1/3">
            <img
              src={WorkerImage}
              alt="Factory Worker"
              className="w-full h-full object-cover right-0"
            />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative mt-20 px-4">
          {/* Horizontal Line */}
          <div className="h-1 bg-orange-500 w-full absolute top-4 left-0"></div>

          {/* Timeline Points */}
          <div className="flex justify-between relative z-10">
            {timelineYears.map((year, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full ${index === 0 ? 'bg-orange-500' : 'bg-gray-300'} flex items-center justify-center`}>
                  {index === 0 && <div className="w-4 h-4 rounded-full bg-white" />}
                </div>
                <span className={`mt-4 text-${index === 0 ? 'orange' : 'gray'}-500`}>
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
