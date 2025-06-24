import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const certificates = [
    { id: 1, title: "ISO 9001:2015 -  Quality Management System certified" },
    { id: 2, title: "ASTM A580/A555 - Compliance with international standards" },
    { id: 3, title: "Mill Test Certificates (MTC) per batch - Issued for every batch to guarantee quality" },
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(certificates.length / cardsPerSlide);

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  const scrollToSlide = (index) => {
    const container = slideRef.current;
    if (container) {
      const cardWidth = container.offsetWidth / cardsPerSlide;
      container.scrollTo({
        left: index * cardWidth * cardsPerSlide,
        behavior: 'smooth',
      });
    }
    setCurrentSlide(index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="border-2 border-blue-500 rounded-lg p-8"
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={0}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-8 text-center"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            custom={0.1}
          >
            Certificates
          </motion.h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Button */}
            <button
              onClick={() =>
                scrollToSlide(Math.max(currentSlide - 1, 0))
              }
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-orange-500 hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable Certificate Cards */}
            <div
              ref={slideRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
            >
              <div className="flex gap-6 min-w-[100%] transition-transform duration-500">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="min-w-[300px] h-48 bg-gray-300 rounded-lg flex items-center justify-center text-center hover:scale-105 transition-transform duration-300 flex-shrink-0"
                    initial="hidden"
                    animate={controls}
                    variants={fadeUp}
                    custom={index + 1}
                  >
                    <div className="text-gray-700 text-lg font-semibold px-4">
                      {cert.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={() =>
                scrollToSlide(Math.min(currentSlide + 1, totalSlides - 1))
              }
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-orange-500 hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination Dots */}
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            custom={4}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide
                    ? 'bg-orange-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
