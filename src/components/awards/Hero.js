import React from 'react';
import bg from '../../assets/awards/bg.jpg';

const AwardsHero = () => {
  return (
    <div className="relative h-[553px] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bg} 
          alt="Industrial sparks" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Black overlay with 56% opacity */}
      <div className="absolute inset-0 bg-black opacity-[0.56] z-0"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              NEWS & ACHIEVEMENTS
            </h1>
            <p className="text-lg text-white mb-8 max-w-3xl leading-relaxed">
              "Recognizing milestones that define our journey — a showcase of excellence. 
              Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
              This is more than a wall of fame — It's a tribute to dedication, belief, and resilience."
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsHero;
