import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AwardsStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const stories = [
    {
      id: 1,
      title: "The news Headline",
      organization: "By XYZ Organization",
      description: "Their attention to detail and timely delivery made all the difference in our project. andbf Alrit efmab aNlFBI Truly a partner we can count on.'l jHfC Lzrtn lzem re fg fgas fzxarn frgelgerg"
    },
    {
      id: 2,
      title: "The news Headline",
      organization: "By XYZ Organization", 
      description: "Their attention to detail and timely delivery made all the difference in our project. andbf Alrit efmab aNlFBI Truly a partner we can count on.'l jHfC Lzrtn lzem re fg fgas fzxarn frgelgerg"
    },
    {
      id: 3,
      title: "The news Headline",
      organization: "By XYZ Organization",
      description: "Their attention to detail and timely delivery made all the difference in our project. andbf Alrit efmab aNlFBI Truly a partner we can count on.'l jHfC Lzrtn lzem re fg fgas fzxarn frgelgerg"
    },
    {
      id: 4,
      title: "The news Headline",
      organization: "By XYZ Organization",
      description: "Their attention to detail and timely delivery made all the difference in our project. andbf Alrit efmab aNlFBI Truly a partner we can count on.'l jHfC Lzrtn lzem re fg fgas fzxarn frgelgerg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            REAL STORIES. REAL SATISFACTION.
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            "Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
            This is more than a wall of fame —It's a tribute to dedication, belief, and resilience."
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Stories Grid */}
          <div className="mx-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stories.map((story, index) => (
                <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500">
                    {/* Replace with: <img src={`/assets/awards/story-${story.id}.jpg`} alt={story.title} className="w-full h-full object-cover" /> */}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-orange-500 font-semibold mb-3">
                      {story.organization}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsStories;