import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: false, amount: 0.3 });

  const testimonials = [
    {
      id: 1,
      text: "Integer consectetur arcu a purus dignissim elementum...",
      name: "Peter Parker",
      role: "Expert",
      rating: 5,
      height: "short"
    },
    {
      id: 2,
      text: "Integer consectetur arcu a purus dignissim elementum...",
      name: "Jason Bright",
      role: "Expert",
      rating: 5,
      height: "short"
    },
    {
      id: 3,
      text: "Sed ut perspiciatis unde omnis iste natus error...",
      name: "Kelly Jean",
      role: "Client",
      rating: 5,
      height: "tall"
    },
    {
      id: 4,
      text: "Integer consectetur arcu a purus dignissim elementum...",
      name: "Piter Johnson",
      role: "Client",
      rating: 4,
      height: "medium"
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur...",
      name: "Sarah Wilson",
      role: "Expert",
      rating: 5,
      height: "short"
    },
    {
      id: 6,
      text: "Ut enim ad minim veniam quis nostrud exercitation...",
      name: "Mike Davis",
      role: "Client",
      rating: 5,
      height: "medium"
    }
  ];

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Responsive card count
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-orange-400' : 'text-gray-300'}`}>★</span>
    ));

  const getCardHeight = (height) => {
    switch (height) {
      case 'short': return 'h-64';
      case 'medium': return 'h-72';
      case 'tall': return 'h-80';
      default: return 'h-64';
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push(testimonials[index]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div ref={carouselRef} className="w-full max-w-7xl mx-auto bg-white py-20 px-4">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 transition-all duration-700 ease-in-out"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {visibleCards.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${currentIndex}`}
            className={`bg-gray-100 rounded-lg shadow-lg p-6 w-full sm:w-[45%] lg:w-[22%] ${getCardHeight(testimonial.height)} hover:shadow-xl hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">{testimonial.text}</p>
            <div>
              <h4 className="font-semibold text-orange-500 text-lg">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'} hover:bg-orange-400`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
