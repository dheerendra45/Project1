import React from 'react';

const AwardsEvents = () => {
  const events = [
    {
      id: 1,
      title: "The Event Headline",
      subtitle: "The sub text the sub story about the news headline"
    },
    {
      id: 2,
      title: "The Event Headline",
      subtitle: "The sub text the sub story about the news headline"
    },
    {
      id: 3,
      title: "The Event Headline",
      subtitle: "The sub text the sub story about the news headline"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            THE EVENTS
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
            This is more than a wall of fame —It's a tribute to dedication, belief, and resilience."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                {/* Image Placeholder */}
                {/* Replace with: <img src={`/assets/awards/event-${event.id}.jpg`} alt={event.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" /> */}
                <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-orange-400 text-sm">{event.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm">1440</span>
            <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm">1425</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsEvents;