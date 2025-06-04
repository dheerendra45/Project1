import React, { useState } from 'react';

function BusinessAreas() {
  const [showAll, setShowAll] = useState(false);

  // Complete business areas data
  const businessAreas = [
    {
      title: 'Iron Ore Pellet',
      description: 'Pellets are agglomerated iron ore fines that exhibit a higher tumbler index compared to the original iron ore. They serve as a replacement for lump ore in the production of sponge iron and are widely used in blast furnaces to generate hot metal.'
    },
    {
      title: 'Sponge Iron',
      description: 'Sponge iron is a porous form of iron, a metallic product created by directly reducing iron ore or iron pellets in solid form. It serves as a substitute for scrap metal and is predominantly utilised in steelmaking via the secondary route.'
    },
    {
      title: 'Billets',
      description: 'Billets are typically shaped into rectangular or square cross-sections suitable for subsequent processing. They are produced directly via continuous casting or extrusion, or indirectly through hot rolling of an ingot or bloom.'
    },
    {
      title: 'TMT',
      description: 'TMT bars are essential for modern construction projects. Utilising advanced technologies, these Thermo-Mechanically Treated bars are engineered to be strong on the surface strength while retaining flexibility internally.'
    },
    {
      title: 'Structural Steel',
      description: 'Structural steel refers to hot rolled steel products like angles, channels, and beams. Essential for infrastructure projects, these materials provide form and strength to buildings, bridges, transmission line towers, industrial sheds, and various other structures.'
    },
    {
      title: 'Wire Rod',
      description: 'Wire rods find diverse applications across various industries. These are used as Binding wire, Galvanised wire, Barbed wire for fencing, Armoured sealed wire for heavy electrical cables, Nut bolts, nails and screws, Alpine wire ropes and Wire mesh.'
    },
    {
      title: 'Ferro Alloys',
      description: 'Ferro alloys are iron-based alloys with a significant proportion of other elements like manganese, aluminium or silicon. They play a crucial role in the production of steels and alloys, imparting specific qualities to steel and cast iron.'
    },
    {
      title: 'Stainless Steel',
      description: 'Stainless steel is renowned for its versatility, widespread use, corrosion resistance, durability, and diverse applications. Its high recyclability enhances sustainability, as recycled stainless steel maintains its properties and finds utility across various sectors.'
    },
    {
      title: 'Aluminium Foil',
      description: 'Aluminium metal achieves exceptional performance with proper processing techniques. Aluminium foil is widely utilised in packaging, offering significant economic, environmental, and social advantages. Aluminium is infinitely recyclable without any loss in quality.'
    }
  ];

  // Show only first 3 items initially, all items when expanded
  const displayedAreas = showAll ? businessAreas : businessAreas.slice(0, 3);

  const handleExploreAll = () => {
    setShowAll(true);
  };

  const handleExploreMore = (index) => {
    // Handle individual item exploration
    console.log(`Exploring more about: ${businessAreas[index].title}`);
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Business Header */}
        <div className="mb-12">
          <h2 className="text-orange-500 text-2xl font-medium">Business</h2>
        </div>
        
        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mb-12 place-items-center">
          {displayedAreas.map((business, index) => (
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
                  backgroundColor: '#E5E7EB'
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
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">{business.description}</p>
                
                <div 
                  className="flex items-center text-gray-800 hover:text-orange-500 cursor-pointer transition-colors mt-auto"
                  onClick={() => handleExploreMore(index)}
                >
                  <span className="text-sm font-medium mr-2">Explore More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Indicators - Only show when not expanded */}
        {!showAll && (
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="w-8 h-1 bg-gray-700 rounded"></div>
            <div className="w-8 h-1 bg-orange-500 rounded"></div>
            <div className="w-8 h-1 bg-orange-300 rounded"></div>
          </div>
        )}
        
        {/* Explore All Button - Only show when not expanded */}
        {!showAll && (
          <div className="flex justify-center">
            <button 
              onClick={handleExploreAll}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg flex items-center transition-colors font-medium"
            >
              <span className="mr-2">Explore All</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Show Less Button - Only show when expanded */}
        {showAll && (
          <div className="flex justify-center">
            <button 
              onClick={() => setShowAll(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg flex items-center transition-colors font-medium"
            >
              <span className="mr-2">Show Less</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BusinessAreas;