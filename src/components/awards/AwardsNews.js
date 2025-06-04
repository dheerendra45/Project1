import React from 'react';
import newsbg from '../../assets/awards/newsbg.jpg';

const AwardsNews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            THE MOST RECENT NEWS
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            "Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
            This is more than a wall of fame — It's a tribute to dedication, belief, and resilience."
          </p>
        </div>

        {/* Featured News Card */}
        <div className="mx-auto" style={{ width: '1168.2px', height: '484px' }}>
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
            
            {/* Background Image */}
            <img 
              src={newsbg} 
              alt="Recent news"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Custom Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(270.04deg, rgba(0, 0, 0, 0) 0.03%, #000000 99.97%)',
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
                  THE MOST RECENT NEWS HEADLINE
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  "Trophies fade, but the stories behind them stay. 
                  Every recognition marks a breakthrough, a bold step forward. 
                  This is more than a wall of fame 
                  — It's a tribute to dedication, belief."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        
      </div>
    </section>
  );
};

export default AwardsNews;
