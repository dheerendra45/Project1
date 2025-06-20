import React from 'react';
import img from '../../assets/Sustainability/Plant11.jpg';

const EnvironmentalCommitment = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-24">
          {/* Text Section */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl font-light text-gray-800 mb-8">
              Our CSR Philosophy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Shyam Metalics, we see a business not merely as a profit-making entity, but as a force for positive change. We believe that fostering sustainable community development is crucial for the balanced growth of both the community and the industry. We strive to make a positive impact, especially on marginalized communities, by backing various socio-economic, educational, and health initiatives, while employing the needs assessment and carrying out sustainable social development projects.

            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2">
              Discover more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-xl">
            <div className="relative w-full">
              <img 
                src={img} 
                alt="Environmental Commitment"
                className="w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalCommitment;
