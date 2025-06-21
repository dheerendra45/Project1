import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img from '../../assets/Sustainability/Plant10.jpg';

const SupplyChainSustainability = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div className="bg-white py-16" ref={sectionRef}>
      {/* Outer container with symmetrical padding */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[96%] xl:max-w-7xl">
        <div className="rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Content Section */}
            <motion.div
              className="flex-1 flex items-center justify-center p-8 lg:p-12 bg-white border-r-0 lg:border-r-2 border-dotted"
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
                  CSR Focus Areas
                </h2>
                <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 border-l-4 border-blue-400 pl-4">
                  At Shyam Metalics, our corporate social responsibility initiatives are intentionally concentrated on four vital domains that foster significant and sustainable impact. Through Education & Digital Empowerment efforts, we lay the groundwork for future achievements by upgrading schools, setting up digital learning hubs, and offering scholarships to nurture young talent, especially in STEM disciplines. Our Healthcare Initiatives deliver essential medical services to underprivileged communities through mobile clinics, permanent healthcare facilities, and specialized camps that address critical needs such as cataract surgeries, maternal healthcare, and child nutrition.
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
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="h-full flex flex-col">
                <div className="h-[400px] sm:h-[600px] lg:h-[790px]">
                  <img 
                    src={img}
                    alt="Shipping containers at port with airplane"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainSustainability;
