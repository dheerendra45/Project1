import React from 'react';
import herobg from '../assets/school.mp4';

const CSRPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full border-b-2">
        {/* Left side with video and overlay text */}
        <div className="w-full md:w-1/2 bg-gray-800 relative h-96 md:h-auto">
          <video
            src={herobg}
            autoPlay
            loop
            muted
            playsInline
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
          <h3 className="text-4xl font-bold mb-4">Corporate Social Responsibility</h3>
          <h2 className="text-2xl font-bold mb-12">Building Communities, Empowering Lives</h2>

          <div className="flex flex-wrap justify-between mb-16">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-orange-500">112 schools</h2>
              <p className="text-xl font-semibold">Schools<br />Supported</p>
              <p className="text-lg">85% improved pass rates</p>
            </div>
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-orange-500">23 institutions</h2>
              <p className="text-xl font-semibold">Adopted<br />Schools</p>
              <p className="text-lg">100% electrification</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-500">12,500+ beneficiaries</h2>
              <p className="text-xl font-semibold">Student<br />Upliftment</p>
              <p className="text-lg">2,000+ girls enrolled in STEM</p>
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
