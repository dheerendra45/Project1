import React from 'react';
import img from '../../assets/Sustainability/teamwork.jpg';

const HumanityEmphasis = () => {
  return (
    <div 
      className="relative h-[886px] bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full text-center">
        <h2 className="text-5xl font-light text-white mb-6">
          We emphasize humanity
        </h2>
        <p className="text-white text-xl mb-8 opacity-90">
          tolerated by us.
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto">
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HumanityEmphasis;
