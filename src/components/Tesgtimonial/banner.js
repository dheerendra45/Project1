import React, { useRef } from 'react';
import banner from '../../assets/Testimonials/banner1.jpg';
import { motion, useInView } from 'framer-motion';

const Banner = () => {
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { amount: 0.4, once: false });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div
      ref={bannerRef}
      className="relative h-[542.65px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-60"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 text-white px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p
          className="uppercase text-sm tracking-widest mb-4 text-orange-400 font-semibold"
          variants={fadeInUp}
        >
          Our Mission
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
          variants={fadeInUp}
        >
          Custom solutions, unique
          <br />
          manufacturing process &
          <br />
          quality, crafted by <span className="text-orange-500 underline underline-offset-4 decoration-2">skill.</span>
        </motion.h1>

        <motion.div variants={fadeInUp} className="mt-8 text-sm text-gray-200">
          <p className="font-semibold text-base">Piter Bowman</p>
          <p className="text-gray-300">Creative Director</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
