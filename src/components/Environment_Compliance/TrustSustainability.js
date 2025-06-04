import React from 'react';
import  img from '../../assets/Sustainability/trustsustainability.png'
const TrustSustainability = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <img 
                src={img} 
                alt="Aerial view of solar panel farm with electrical infrastructure"
                className="w-full h-96 object-cover rounded-lg "
              />
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl font-light text-gray-800 mb-8">
              The cornerstone for trust and sustainability
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ethics & compliance are of crucial importance at Swiss Steel Group as they strengthen trust and are indispensable 
              in a social, environmentally conscious, global industry.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Discover more
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2">
              Discover more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSustainability;