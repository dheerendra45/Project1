import React from 'react';
import cardimg from '../../assets/awards/c1.jpg';

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
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            THE EVENTS
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
            This is more than a wall of fame — It's a tribute to dedication, belief, and resilience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer w-[360px] h-[450px] mx-auto">
              <div className="relative overflow-hidden rounded-xl w-full h-full shadow-lg">
                {/* Image */}
                <img 
                  src={cardimg} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-orange-400 text-sm">{event.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
       
      </div>
    </section>
  );
};

export default AwardsEvents;
