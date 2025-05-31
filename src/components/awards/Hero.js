import React from 'react';

const AwardsHero = () => {
  return (
    <div className="relative h-96 bg-gray-900 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        {/* Replace with: <img src="/assets/awards/hero-bg.jpg" alt="Industrial sparks" className="w-full h-full object-cover" /> */}
        <div className="w-full h-full bg-gradient-to-r from-orange-600 to-yellow-500 opacity-80"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AWARDS & ACHIEVEMENTS
            </h1>
            <p className="text-lg text-white mb-8 max-w-3xl leading-relaxed">
              "Recognizing milestones that define our journey — a showcase of excellence. 
              Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
              This is more than a wall of fame —It's a tribute to dedication, belief, and resilience."
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