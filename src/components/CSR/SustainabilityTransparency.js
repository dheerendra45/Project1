import React from 'react';
import box1bg from '../../assets/Sustainability/Football4.jpg';
import box2bg from '../../assets/Sustainability/Football5.jpg';
import box3bg from '../../assets/Sustainability/Football6.jpg';
import box4bg from '../../assets/Sustainability/Tution6.jpg';

const SustainabilityTransparency = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-6">
             Expanded CSR Initiatives
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            At Shyam Metalics, we are committed to Corporate Social Responsibility programs that go beyond compliance programs that create real, lasting change. Our CSR initiatives span across education, healthcare, livelihoods, and sustainable infrastructure, designed to empower communities at the grassroots. 
In the education sector, we are establishing Digital Education Hubs in underserved rural areas. These include setting up smart classrooms in government schools, offering coding and digital literacy classes to school children, and providing free community internet zones in remote locations. These initiatives aim to close the digital divide and equip the next generation with future-ready skills.

          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 h-96">
          {/* Ethics & Compliance Card */}
          <div className="bg-gray-800 rounded-lg p-6 text-white relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${box1bg})` }}></div>
           <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-300 mb-2">Sustainability</p>
                <h3 className="text-xl font-medium mb-4">Ethics & compliance</h3>
                <p className="text-sm text-gray-300">Integrity in action</p>
              </div>
              <button className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors self-start">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Management & Board Card */}
          <div className="bg-gray-800 rounded-lg p-6 text-white relative overflow-hidden row-span-2" style={{ backgroundColor: '#000000' }}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${box2bg})` }}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-300 mb-2">Group</p>
                <h3 className="text-xl font-medium mb-6">Management & Board of Directors</h3>
              </div>
              <button className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors self-start">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Strategy & Values Card */}
          <div className="bg-gray-800 rounded-lg p-6 text-white relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${box3bg})` }}></div>
            <div className="absolute inset-0 bg-gray opacity-50"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-300 mb-2">Group</p>
                <h3 className="text-xl font-medium mb-2">Strategy & values</h3>
                <p className="text-sm text-gray-300">A Strategy that Connects - Values That Inspire</p>
              </div>
              <button className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors self-start">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Permits & Certifications Card */}
          <div className="bg-gray-800 rounded-lg p-6 text-white relative overflow-hidden row-span-2" style={{ backgroundColor: '#000000' }}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${box4bg})` }}></div>
           <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-300 mb-2">Services</p>
                <h3 className="text-xl font-medium mb-2">Permits & certifications</h3>
                <p className="text-sm text-gray-300 mb-4">Relevant standards and regulations</p>
              </div>
              <button className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors self-start">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityTransparency;
