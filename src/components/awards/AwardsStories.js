import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import real1 from '../../assets/awards/real1.jpg';
import real2 from '../../assets/awards/real2.jpg';
import real3 from '../../assets/awards/real3.jpg';
import real4 from '../../assets/awards/real4.jpg';

const AwardsStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      id: 1,
      title: "Innovation Award Winner",
      organization: "By Tech Summit",
      description: "Recognized for developing cutting-edge tech that transformed logistics across rural India.",
      image: real1,
    },
    {
      id: 2,
      title: "Social Impact Leader",
      organization: "By CSR India",
      description: "Awarded for impactful initiatives in empowering underprivileged students with digital skills.",
      image: real2,
    },
    {
      id: 3,
      title: "Excellence in Design",
      organization: "By UX Global",
      description: "Praised for creating an intuitive and accessible user experience in health-tech applications.",
      image: real3,
    },
    {
      id: 4,
      title: "AI Research Champion",
      organization: "By AI Forum",
      description: "Honored for pioneering work in AI ethics and sustainable model deployment.",
      image: real4,
    },
  ];

  const totalSlides = stories.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentSlide + 1) % totalSlides;

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.3 }} 
          className="text-center mb-12 px-4"
        >
          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold text-orange-500 mb-4"
          >
            REAL STORIES. REAL SATISFACTION.
          </motion.h2>
          <motion.p 
            variants={paragraphVariants} 
            className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed"
          >
            "Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
            This is more than a wall of fame — it's a tribute to dedication, belief, and resilience."
          </motion.p>
        </motion.div>

        {/* Carousel container */}
        <div className="relative flex justify-center items-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
            style={{ width: 44, height: 44 }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Cards container */}
          <div className="flex justify-center items-center gap-8 px-4 sm:px-12 max-w-[calc(100vw-120px)] overflow-hidden">
            {/* Previous card */}
            <motion.div
              key={stories[prevIndex].id}
              initial={{ scale: 0.85, opacity: 0.7 }}
              whileInView={{ scale: 0.85, opacity: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden"
              style={{ width: 260, minWidth: 260, height: 410, flexShrink: 0 }}
            >
              <img
                src={stories[prevIndex].image}
                alt={stories[prevIndex].title}
                className="w-full h-[280px] object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-[16px] font-bold text-gray-900">{stories[prevIndex].title}</h3>
                <p className="text-orange-500 font-medium text-sm mb-2">{stories[prevIndex].organization}</p>
                <p className="text-gray-600 text-[13px] leading-snug">{stories[prevIndex].description}</p>
              </div>
            </motion.div>

            {/* Current (center) card */}
            <motion.div
              key={stories[currentSlide].id}
              initial={{ scale: 0.95, opacity: 1 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden"
              style={{ width: 320, minWidth: 320, height: 460, flexShrink: 0 }}
            >
              <img
                src={stories[currentSlide].image}
                alt={stories[currentSlide].title}
                className="w-full h-[320px] object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{stories[currentSlide].title}</h3>
                <p className="text-orange-500 font-semibold text-base mb-2">{stories[currentSlide].organization}</p>
                <p className="text-gray-600 text-sm leading-snug">{stories[currentSlide].description}</p>
              </div>
            </motion.div>

            {/* Next card */}
            <motion.div
              key={stories[nextIndex].id}
              initial={{ scale: 0.85, opacity: 0.7 }}
              whileInView={{ scale: 0.85, opacity: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex flex-col bg-white rounded-lg shadow-2xl overflow-hidden"
              style={{ width: 260, minWidth: 260, height: 410, flexShrink: 0 }}
            >
              <img
                src={stories[nextIndex].image}
                alt={stories[nextIndex].title}
                className="w-full h-[280px] object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-[16px] font-bold text-gray-900">{stories[nextIndex].title}</h3>
                <p className="text-orange-500 font-medium text-sm mb-2">{stories[nextIndex].organization}</p>
                <p className="text-gray-600 text-[13px] leading-snug">{stories[nextIndex].description}</p>
              </div>
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
            style={{ width: 44, height: 44 }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwardsStories;
