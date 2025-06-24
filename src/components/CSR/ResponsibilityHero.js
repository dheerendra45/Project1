import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bg from '../../assets/Sustainability/school.mp4';

const ResponsibilityHero = () => {
  const topRef = useRef(null);
  const quoteRef = useRef(null);

  const isTopInView = useInView(topRef, { triggerOnce: false, threshold: 0.2 });
  const isQuoteInView = useInView(quoteRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div className="bg-gray-50">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12" ref={topRef}>
        <motion.div
          className="flex flex-col items-start gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isTopInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-light text-gray-800"
            initial={{ opacity: 0, x: -30 }}
            animate={isTopInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Responsibility
          </motion.h1>

          <motion.div
            className="w-full lg:w-[90%] text-gray-600 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            animate={isTopInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <p className="mb-6">
              At Shyam Metalics, Corporate Social Responsibility (CSR) transcends a mere legal obligation — it is an essential aspect of our identity. We hold the conviction that genuine business success is intertwined with the welfare of the communities we serve.
              Driven by this conviction, we integrate social and environmental responsibility into the core of our operations. Our CSR initiatives aim to promote sustainable growth, uplift underprivileged communities, and generate enduring positive impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Discover more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              <motion.button
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Non financial Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Quote Section */}
      <div
        ref={quoteRef}
        className="relative h-[500px] sm:h-[600px] flex items-center mt-10 overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text Content */}
        <motion.div
          className="relative z-20 w-full max-w-5xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isQuoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-6">
            <span className="text-orange-500">"</span>
            At Shyam Metalics, we measure our success not just in tonnes of steel, but in lives transformed,
            communities empowered, and futures built. This is the true temper of our responsibility.
            <span className="text-orange-500">"</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mb-2 mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default ResponsibilityHero;
