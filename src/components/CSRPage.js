import React from 'react';
import csr from "../assets/csr.png"; // your image path

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CSRPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full border-b-2">
        {/* Left side with image and overlay text */}
        <div className="w-full md:w-1/2 bg-gray-800 relative h-96 md:h-auto">
          <img 
            src={csr} 
            alt="Student in classroom" 
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Building <br className="block md:hidden" />
              Communities,<br />
              Empowering Lives
            </h2>
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2 bg-white p-10 pr-12">
          <h3 className="text-2xl font-bold mb-4">Corporate Social Responsibility</h3>
          <h2 className="text-4xl font-bold mb-12">Building Communities, Empowering Lives</h2>
          
          <div className="flex flex-wrap justify-between mb-16">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-orange-500">100+</h2>
              <p className="text-xl font-semibold">Schools<br />Supported</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-orange-500">20+</h2>
              <p className="text-xl font-semibold">Schools<br />Supported</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500">10,000+</h2>
              <p className="text-xl font-semibold">Schools<br />Supported</p>
            </div>
          </div>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md">
            Learn More About Our Impact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSRPage;
