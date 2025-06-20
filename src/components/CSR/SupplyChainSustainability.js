import React from 'react';
import img from '../../assets/Sustainability/Plant10.jpg';

const SupplyChainSustainability = () => {
  return (
    <div className="bg-white py-16">
      {/* Outer container with symmetrical padding */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[96%] xl:max-w-7xl">
        <div className="rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content Section */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12 bg-white border-r-0 lg:border-r-2 border-dotted">
              <div>
                <h2 className="text-4xl font-light text-gray-800 mb-8">
                  CSR Focus Areas
                </h2>
                <div className="w-16 h-1 bg-orange-500 mb-8"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-blue-400 pl-4">
                  At Shyam Metalics, our corporate social responsibility initiatives are intentionally concentrated on four vital domains that foster significant and sustainable impact. Through Education & Digital Empowerment efforts, we lay  the groundwork for future achievements by upgrading schools, setting up digital learning hubs, and offering scholarships to nurture young talent, especially in STEM disciplines. Our Healthcare Initiatives deliver essential medical services to underprivileged communities through mobile clinics, permanent healthcare facilities, and specialized camps that address critical needs such as cataract surgeries, maternal healthcare, and child nutritio

                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2">
                  Discover more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="flex-1">
              <div className="h-full flex flex-col">
                <div className="h-[790px]">
                  <img 
                    src={img}
                    alt="Shipping containers at port with airplane"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainSustainability;