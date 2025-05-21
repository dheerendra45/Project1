import React from 'react';

const SteelRodsSVG = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="#2C3E50"/>
    <g>
      {[...Array(8)].map((_, i) => (
        <rect 
          key={i} 
          x={50 + i * 40} 
          y="30" 
          width="25" 
          height="140" 
          rx="2"
          fill="#E67E22" 
          opacity={0.7 + (i % 3) * 0.1}
        />
      ))}
    </g>
    <circle cx="50" cy="50" r="20" fill="#F39C12" opacity="0.5"/>
    <circle cx="350" cy="150" r="25" fill="#F39C12" opacity="0.3"/>
  </svg>
);

const SteelBarsSVG = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="#34495E"/>
    {[...Array(15)].map((_, i) => (
      <line 
        key={i} 
        x1="0" 
        y1={20 + i * 12} 
        x2="400" 
        y2={20 + i * 12} 
        stroke="#95A5A6" 
        strokeWidth="6"
      />
    ))}
    <rect x="100" y="70" width="200" height="60" fill="#3498DB" opacity="0.7"/>
    <text x="120" y="105" fill="white" fontWeight="bold" fontSize="20">401.74</text>
    <text x="230" y="105" fill="white" fontWeight="bold" fontSize="20">282.21</text>
  </svg>
);

const FactorySVG = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="#2C3E50"/>
    <rect x="20" y="80" width="360" height="100" fill="#7F8C8D"/>
    <rect x="40" y="100" width="80" height="60" fill="#34495E"/>
    <rect x="160" y="100" width="80" height="60" fill="#34495E"/>
    <rect x="280" y="100" width="80" height="60" fill="#34495E"/>
    
    <rect x="50" y="20" width="300" height="40" fill="#7F8C8D"/>
    <rect x="70" y="30" width="260" height="20" fill="#95A5A6"/>
    
    <line x1="20" y1="80" x2="380" y2="80" stroke="#ECF0F1" strokeWidth="2"/>
    <line x1="100" y1="20" x2="100" y2="60" stroke="#ECF0F1" strokeWidth="2"/>
    <line x1="200" y1="20" x2="200" y2="60" stroke="#ECF0F1" strokeWidth="2"/>
    <line x1="300" y1="20" x2="300" y2="60" stroke="#ECF0F1" strokeWidth="2"/>
  </svg>
);

function BusinessAreas() {
  // Business areas data
  const businessAreas = [
    {
      SvgComponent: SteelRodsSVG,
      title: 'Lorem Ipsum',
      description: 'Anti-smog gun/Air Misting Machine is a device that sprays atomized water into the atmosphere to reduce air pollution.'
    },
    {
      SvgComponent: SteelBarsSVG,
      title: 'Lorem Ipsum',
      description: 'We are prominent conveyor manufacturers in Delhi NCR offering high-quality trusted and certified products at a reasonable price.'
    },
    {
      SvgComponent: FactorySVG,
      title: 'Lorem Ipsum',
      description: 'Multi-Sorting System Separating Mixed Wastes into Three Categories Separation Technology for Various Physical...'
    }
  ];
  
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-orange-500 text-xl mb-8">Business</h2>
        
        <div className="flex flex-col md:flex-row justify-between md:space-x-6 space-y-6 md:space-y-0 mb-8">
          {businessAreas.map((business, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md w-full md:w-1/3">
              <div className="h-48">
                <business.SvgComponent />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">{business.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{business.description}</p>
                <div className="flex items-center text-gray-800 hover:text-orange-500 cursor-pointer">
                  <span className="mr-1">Explore More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-6 h-1 bg-gray-800"></div>
          <div className="w-6 h-1 bg-orange-500"></div>
          <div className="w-6 h-1 bg-orange-300"></div>
        </div>
        
        {/* Explore All Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white px-6 py-3 rounded flex items-center hover:bg-orange-600 transition-colors">
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