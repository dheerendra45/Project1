import React from 'react';

function BusinessAreas() {
  // Business areas data
  const businessAreas = [
    {
      title: 'Lorem Ipsum',
      description: 'Anti-smog gun/Air Misting Machine is a device that sprays atomized water into the atmosphere to reduce air pollution.'
    },
    {
      title: 'Lorem Ipsum',
      description: 'We are prominent conveyor manufacturers in Delhi NCR offering high-quality trusted and certified products at a reasonable price.'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Multi-Sorting System Separating Mixed Wastes into Three Categories Separation Technology for Various Physical...'
    }
  ];
  
  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Business Header */}
        <div className="mb-12">
          <h2 className="text-orange-500 text-2xl font-medium">Business</h2>
        </div>
        
        {/* Business Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-12">
          {businessAreas.map((business, index) => (
            <div
              key={index}
              className="relative"
              style={{ width: '401.73px', height: '477.85px' }}
            >
              {/* Image Placeholder */}
              <div 
                className="absolute top-0 left-0"
                style={{
                  width: '401.73px',
                  height: '282.21px',
                  opacity: 0.8,
                  borderRadius: '4.86px',
                  background: 'linear-gradient(270deg, rgba(17, 29, 25, 0) 0%, rgba(17, 29, 25, 0) 0%, rgba(17, 29, 25, 0.42) 83%)',
                  backgroundColor: '#E5E7EB' // fallback gray color for placeholder
                }}
              >
                {/* Empty placeholder for image */}
              </div>

              {/* Content Card - Overlapping */}
              <div 
                className="absolute"
                style={{
                  width: '362.87px',
                  height: '248.11px',
                  top: '229.73px',
                  left: '38.88px',
                  borderRadius: '9.72px',
                  background: '#FFFFFF',
                  boxShadow: '0px 4.86px 41.79px 0px #111D190F',
                  padding: '24px'
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{business.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{business.description}</p>
                
                <div className="flex items-center text-gray-800 hover:text-orange-500 cursor-pointer transition-colors mt-auto">
                  <span className="text-sm font-medium mr-2">Explore More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Indicators */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <div className="w-8 h-1 bg-gray-700 rounded"></div>
          <div className="w-8 h-1 bg-orange-500 rounded"></div>
          <div className="w-8 h-1 bg-orange-300 rounded"></div>
        </div>
        
        {/* Explore All Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center transition-colors font-medium">
            <span className="mr-2">Explore All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessAreas;