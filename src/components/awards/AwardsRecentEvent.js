import React from 'react';

const AwardsRecentEvent = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        {/* Replace with: <img src="/assets/awards/recent-event-bg.jpg" alt="Industrial worker" className="w-full h-full object-cover" /> */}
        <div className="w-full h-full bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400"></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">
            THE MOST RECENT EVENT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The Most Recent Event
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            We successfully cope with tasks of varying complexity, 
            provide long-term guarantees and regularly master new 
            technologies. Our portfolio includes do
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecentEvent;