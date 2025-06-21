import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img from '../../assets/Sustainability/Plant11.jpg';

const EnvironmentalCommitment = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div className="bg-white py-16" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Text Section */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
              Our CSR Philosophy
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              At Shyam Metalics, we see a business not merely as a profit-making entity, but as a force for positive change. We believe that fostering sustainable community development is crucial for the balanced growth of both the community and the industry. We strive to make a positive impact, especially on marginalized communities, by backing various socio-economic, educational, and health initiatives, while employing the needs assessment and carrying out sustainable social development projects.
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

          {/* Image Section */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full">
              <img 
                src={img} 
                alt="Environmental Commitment"
                className="w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalCommitment;
