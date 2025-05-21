// components/AboutUs.js - About Us Component with Timeline
import React from 'react';
import LaserCuttingImage from '../assets/laser-cutting.jpg'; // Placeholder path
import WorkerImage from '../assets/factory-worker.png'; // Placeholder path

function AboutUs() {
  // Timeline data
  const timelineYears = [1848, 1902, 1964, 1998, 2008, 2023];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex">
          {/* Left Content */}
          <div className="w-1/3">
            <p className="text-orange-500 text-xl mb-2">About Us</p>
            <h2 className="text-3xl font-bold mb-6">HOW WE STARTED</h2>
            
            <p className="mb-4">Lorem Ipsum</p>
            
            <p className="text-gray-600 mb-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi.
            </p>
            
            <div className="bg-gray-100 p-4 mb-8 w-32">
              <p className="text-sm text-gray-800">
                Lorem Ipsum dollar sit lorem ipsulias
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative mt-16">
              <div className="h-1 bg-orange-500 w-full absolute top-4"></div>
              <div className="flex justify-between relative">
                {timelineYears.map((year, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full ${index === 0 ? 'bg-orange-500' : 'bg-gray-300'} flex items-center justify-center relative z-10`}>
                      {index === 0 && (
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span className={`mt-4 text-${index === 0 ? 'orange' : 'gray'}-500`}>{year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center Image - Laser Cutting */}
          <div className="w-1/3 px-4">
            <img 
              src={LaserCuttingImage} 
              alt="Laser Cutting Machine" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right Image - Factory Worker */}
          <div className="w-1/3">
            <img 
              src={WorkerImage} 
              alt="Factory Worker" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;