import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const certificates = [
    { id: 1, title: "Certificate 1" },
    { id: 2, title: "Certificate 2" },
    { id: 3, title: "Certificate 3" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

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
            className="text-4xl font-bold text-gray-900 mb-8"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            custom={0.1}
          >
            Certificates
          </motion.h2>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-gray-300 h-48 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                custom={index + 1}
              >
                <div className="text-gray-600 text-lg font-semibold">{cert.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <motion.div
            className="flex justify-center space-x-2"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            custom={4}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-sm transition-colors duration-300 ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
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
