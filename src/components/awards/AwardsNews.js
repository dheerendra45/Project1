import React from 'react';

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
            This is more than a wall of fame —It's a tribute to dedication, belief, and resilience."
          </p>
        </div>

        {/* Featured News Card */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0">
              {/* Replace with: <img src="/assets/awards/recent-news-bg.jpg" alt="Industrial scene" className="w-full h-full object-cover" /> */}
              <div className="w-full h-full bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500"></div>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
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
                  —It's a tribute to dedication, belief"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm">1440</span>
            <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm">1136</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsNews;