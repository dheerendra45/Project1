import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bgVideo from '../../assets/Sustainability/football.mp4';

const HumanityEmphasis = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div 
      className="relative h-[886px] bg-black flex items-center overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Foreground Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
          Empowering Lives Beyond Business
        </h2>
        <p className="text-white text-lg sm:text-xl mb-8 opacity-90">
          We believe in uplifting communities through education, healthcare, and skill development—because humanity is our greatest responsibility.
        </p>
        <motion.button
          className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HumanityEmphasis;
