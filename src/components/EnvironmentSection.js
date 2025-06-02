import React from "react";
import envimg from '../assets/env.jpg'
import bg2 from '../assets/bg2.png'

const EnvironmentSection = () => {
  return (
    <div 
      className="relative"
      style={{ 
        height: '728.48px',
        backgroundImage: `url(${envimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      {/* Left Side - Round Image Container */}
      <div 
        className="absolute border border-white"
        style={{
          width: '538.96px',
          height: '538.96px',
          top: '94.77px',
          left: '82px',
          borderRadius: '269.48px',
          borderWidth: '0.98px'
        }}
      >
        {/* Inner Image Circle */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          style={{
            width: '489.96px',
            height: '489.96px',
            borderRadius: '244.98px'
          }}
        >
          <img 
            src={envimg}
            alt="Environment image"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Green Icon Circle */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
            />
          </svg>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div 
        className="absolute text-white"
        style={{
          width: '609.85px',
          height: '315.81px',
          top: '206.34px',
          left: '743.15px'
        }}
      >
        <h2 className="text-4xl font-bold mb-6">Environment</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Safety is one of the highest priorities within Steeler. It is imperative that 
          everyone follows the policies and guidelines to ensure their own safety and the 
          safety of others around them. We are providing different. Lorem Ipsum is simply 
          dummy text of the printing and typesetting industry.
        </p>
        
        {/* Checklist Items */}
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full mr-4 mt-0.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">
              Industrial waste treatment up to international standards
            </span>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full mr-4 mt-0.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">
              Exhaust fumes on time and carbon content as regulated
            </span>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full mr-4 mt-0.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">
              Do not allow radioactive leakage to the environment
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-4 mt-8">
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-md transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-md transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentSection;