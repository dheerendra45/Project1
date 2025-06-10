import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Integer consectetur arcu a purus dignissim elementum. Aenean quis urna non eros suscipit pretium cursus non ipsum. Nam ultrices laoreet semper.",
      name: "Peter Parker",
      role: "Expert",
      rating: 5,
      height: "short"
    },
    {
      id: 2,
      text: "Integer consectetur arcu a purus dignissim elementum. Aenean quis urna non eros suscipit pretium cursus non ipsum. Nam ultrices laoreet semper.",
      name: "Jason Bright",
      role: "Expert", 
      rating: 5,
      height: "short"
    },
    {
      id: 3,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. Lorem ipsum dolor sit amet adipisim elit omnis dolor repellendus.",
      name: "Kelly Jean",
      role: "Client",
      rating: 5,
      height: "tall"
    },
    {
      id: 4,
      text: "Integer consectetur arcu a purus dignissim elementum. Aliquip elit, sed do eiusmod tempor quis nostrud exercitation pretium cursus non ipsum. Nam ultrices laoreet.",
      name: "Piter Johnson",
      role: "Client",
      rating: 4,
      height: "medium"
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Sarah Wilson",
      role: "Expert",
      rating: 5,
      height: "short"
    },
    {
      id: 6,
      text: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
      name: "Mike Davis",
      role: "Client",
      rating: 5,
      height: "medium"
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-orange-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const getCardHeight = (height) => {
    switch (height) {
      case 'short':
        return 'h-64';
      case 'medium':
        return 'h-72';
      case 'tall':
        return 'h-80';
      default:
        return 'h-64';
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push({
        ...testimonials[index],
        position: i
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full max-w-7xl mx-auto mt-8 bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
      </div>

      {/* Testimonial Cards Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 transition-all duration-1000 ease-in-out">
          {visibleCards.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentIndex}`}
              className={`
                flex-shrink-0 w-80 bg-gray-100 rounded-lg shadow-lg p-6 
                ${getCardHeight(testimonial.height)}
                transform transition-all duration-1000 ease-in-out
                ${index === 0 ? 'translate-x-0 opacity-100' : ''}
                ${index === 1 ? 'translate-x-0 opacity-100' : ''}
                ${index === 2 ? 'translate-x-0 opacity-100' : ''}
                ${index === 3 ? 'translate-x-0 opacity-90' : ''}
                hover:shadow-xl hover:scale-105
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: index === 0 ? 'translateX(-20px)' : 
                          index === 3 ? 'translateX(20px)' : 'translateX(0)',
              }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="mt-auto">
                <h4 className="font-semibold text-orange-500 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'}
              hover:bg-orange-400
            `}
          />
        ))}
      </div>

      {/* Progress Bar */}
     
    </div>
  );
};

export default TestimonialCarousel;