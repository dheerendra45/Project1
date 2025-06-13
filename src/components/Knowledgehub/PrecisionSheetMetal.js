import React from 'react';
import img from '../../assets/knowledgehub/p2.png'
const PrecisionSheetMetal = () => {
  return (
    <div className="bg-gray-900 h-[490px] py-16 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side text - matches Figma positioning */}
          <div className="lg:w-[532px] text-white space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
              What is precision sheet metal fabrication?
            </h2>
            
            <p className="text-gray-300 leading-relaxed text-base">
              Precision sheet metal fabrication refers to some of the exact same 
              methods and techniques as non-precision' but to a closer degree 
              of tolerance. This will sometimes take the design engineer more 
              time to look at the material properties, stretch calculations, grain 
              direction, and other in-depth research in order to obtain the 
              precision needed.
            </p>
          </div>
          
          {/* Right side image - matches Figma positioning */}
          <div className="lg:w-[532px] h-[354px] bg-gray-700 rounded-sm overflow-hidden shadow-xl">
            <img 
              src={img}
              alt="Precision sheet metal fabrication with sparks flying"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-600 hidden items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Precision Metal Work</p>
                <p className="text-xs opacity-75">With Sparks & Precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrecisionSheetMetal;