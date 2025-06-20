import React from 'react';
import bg from '../../assets/Sustainability/Tution5.jpg';

const ResponsibilityHero = () => {
  return (
    <div className="bg-gray-50">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col">
          <div className="w-[444.26px] mb-8">
            <h1 className="text-4xl font-light text-gray-800 mb-2">
              Responsibility
            </h1>
          </div>
          <div className="w-[870px] ml-60">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Shyam Metalics, Corporate Social Responsibility (CSR) transcends a mere legal obligation it is an essential aspect of our identity. We hold the conviction that genuine business success is intertwined with the welfare of the communities we serve. Driven by this conviction, we integrate social and environmental responsibility into the core of our operations. Our CSR initiatives aim to promote sustainable growth, uplift underprivileged communities, and generate enduring positive impact.

            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2">
                Discover more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
                Non financial Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section with Background Image */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center mt-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional dark overlay for better text contrast */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-center">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl font-light text-white mb-8 leading-tight">
               <span className='text-orange-500'>"</span>At Shyam Metalics, we measure our success not just in tonnes of steel, but in lives transformed, communities empowered, and futures built. This is the true temper of our responsibility.<span className='text-orange-500'>"</span>
              </h2>
              <div className="w-16 h-1 bg-orange-500 mb-4 mx-auto"></div>
              <p className="text-white text-lg">
                {/* Frank Koch, CEO Lorem Ipsum */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityHero;
