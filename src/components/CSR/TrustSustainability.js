import React from 'react';
import  img from '../../assets/Sustainability/Drawing .jpg'
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
              Living our mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Shyam Metalics, we understand that genuine success is not solely defined by the volume of steel we produce but also by the lives we impact and the communities we uplift. Our CSR efforts represent the practical application of our core values, showcasing our dedication to creating a more fair, sustainable, and thriving India.

Through our educational initiatives, we unlock the potential in young individuals, offering scholarships, upgraded school facilities, and delivering digital literacy programs that pave the way for opportunities. Our healthcare projects deliver medical assistance directly to people through mobile clinics and specialized camps, ensuring that wellness is accessible to all.

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