import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';
import bg from '../../assets/awards/bg.jpg';
import companylogo from '../../assets/products/image28.png'

const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2
    }
  }
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.4
    }
  }
};




const AwardsHero = () => {
 
  return (
    <div className="min-h-screen bg-gray-100 mx-auto overflow-hidden">
      {/* Top Navbar */}
      
      {/* Middle Navbar */}
      
      {/* Hero Section with Awards Content */}
      <div className="relative h-[553px] sm:h-[600px] md:h-[700px] bg-gray-900 overflow-hidden -mt-[57px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bg}
            alt="Industrial sparks"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Black overlay with 56% opacity */}
        <div className="absolute inset-0 bg-black opacity-[0.56] z-0"></div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-[57px]">
            <div className="max-w-4xl">
              <motion.h1
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
              >
                  NEWS & ACHIEVEMENTS
              </motion.h1>

             <motion.p
  variants={paragraphVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-3xl leading-relaxed"
>
  "Recognizing milestones that define our journey — a showcase of excellence. 
  Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, 
  a bold step forward. This is more than a wall of fame — It's a tribute to dedication, belief, and resilience."
</motion.p>

{/* Orange line */}
<motion.div
  variants={paragraphVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="h-1 w-full bg-orange-600 rounded mb-6 sm:mb-8"
/>

<motion.button
  variants={buttonVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300"
>
  Learn More
</motion.button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsHero;