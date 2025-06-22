import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img from '../../assets/Sustainability/Drawing .jpg';

const TrustSustainability = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div className="bg-white py-16" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Section */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <img
                src={img}
                alt="Aerial view of solar panel farm with electrical infrastructure"
                className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
              Living our mission
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              At Shyam Metalics, we understand that genuine success is not solely defined by the volume of steel we produce but also by the lives we impact and the communities we uplift. Our CSR efforts represent the practical application of our core values, showcasing our dedication to creating a more fair, sustainable, and thriving India.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Through our educational initiatives, we unlock the potential in young individuals, offering scholarships, upgraded school facilities, and delivering digital literacy programs that pave the way for opportunities. Our healthcare projects deliver medical assistance directly to people through mobile clinics and specialized camps, ensuring that wellness is accessible to all.
            </p>
            <motion.button
              className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustSustainability;
