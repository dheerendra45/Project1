import React from 'react';
import { Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import envimg from '../assets/env.jpg';

const EnvironmentSection1 = () => {
  return (
    <div className="relative w-full h-screen bg-gray-700 overflow-hidden pb-32">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-gray-600 opacity-50"
        style={{
          backgroundImage: `url(${envimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative z-10 flex items-center justify-between h-full px-16">
        {/* Left Side - Circular Image Section */}
        <div className="relative">
          {/* White Dotted Border Circle */}
          <div 
            className="relative border border-dotted border-white border-opacity-60"
            style={{
              width: '538.96px',
              height: '538.96px',
              borderRadius: '269.48px',
              borderWidth: '0.98px',
            }}
          >
            {/* Inner Image Circle */}
            <div 
              className="absolute bg-gray-300 overflow-hidden"
              style={{
                width: '489.96px',
                height: '489.96px',
                borderRadius: '244.98px',
                top: '24.3px',
                left: '24.3px'
              }}
            >
              {/* Your image */}
              <img 
                src={envimg} 
                alt="Environment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Green Icon Circle */}
          <div 
            className="absolute bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            style={{
              width: '80px',
              height: '80px',
              top: '40px',
              right: '40px'
            }}
          >
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="flex-1 max-w-2xl ml-16">
          <h1 className="text-6xl font-bold text-white mb-8">Environment</h1>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Safety is one of the highest priorities within Steeler. It is imperative that 
            everyone follows the policies and guidelines to ensure their own safety and the 
            safety of others around them. We are providing different. Lorem Ipsum is simply 
            dummy text of the printing and typesetting industry.
          </p>

          {/* Bullet Points */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-white text-lg">
                Industrial waste treatment up to international standards
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-white text-lg">
                Exhaust fumes on time and carbon content as regulated
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-white text-lg">
                Do not allow radioactive leakage to the environment
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4 mt-12">
            <button className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentSection1;