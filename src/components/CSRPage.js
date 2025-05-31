import React from 'react';
import csr from "../assets/csr.png";

const CSRPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full border-b-2">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 bg-gray-800 relative h-96 md:h-auto">
          <div className="absolute inset-0">
            <img 
              src={csr} 
              alt="Student in classroom" 
              className="w-full h-full object-cover opacity-80" 
            />
          </div>
          <div className="absolute bottom-0 left-0 p-8 text-white z-10">
            <h2 className="text-4xl font-bold mb-2">Building Communities,</h2>
            <h2 className="text-4xl font-bold">Empowering Lives</h2>
          </div>
        </div>
        
        {/* Right side with content - Added margin-right here */}
        <div className="w-full md:w-1/2 bg-white p-8 pr-12"> {/* Added pr-12 for 48px (3rem) right padding */}
          <h3 className="text-2xl font-bold mb-4">Corporate Social Responsibility</h3>
          <h2 className="text-4xl font-bold mb-12">Building Communities, Empowering Lives</h2>
          
          <div className="flex flex-wrap justify-between mb-16">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-orange-500">100+</h2>
              <p className="text-xl font-semibold">Schools Supported</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-orange-500">20+</h2>
              <p className="text-xl font-semibold">Schools Supported</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500">10,000+</h2>
              <p className="text-xl font-semibold">Schools Supported</p>
            </div>
          </div>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">
            Learn More About Our Impact
          </button>
        </div>
      </div>

      {/* Additional content sections can be added below */}
    </div>
  );
};

export default CSRPage;