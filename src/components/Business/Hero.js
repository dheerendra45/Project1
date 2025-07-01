import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import herobg from '../../assets/Business/businessbg.jpg';
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    }
  };

  const gradientVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="h-screen md:h-[815px] bg-gray-100 mx-auto overflow-hidden relative -mt-[65px]"
    >
      {/* Enhanced Background Image Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        initial="hidden"
        animate={controls}
      >
        <motion.img
          src={herobg}
          alt="Business Background"
          className="absolute inset-0 w-full h-full object-cover"
          variants={backgroundVariants}
        />
      </motion.div>

      {/* Dynamic Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { duration: 1.5 }
        }}
      />
      
      {/* Enhanced Floating Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm"
          style={{
            width: Math.random() * 12 + 3 + 'px',
            height: Math.random() * 12 + 3 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, (Math.random() - 0.5) * 120],
            x: [0, (Math.random() - 0.5) * 80],
            opacity: [0, 0.7, 0],
            rotate: [0, Math.random() * 360]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}

      {/* Content with Enhanced Staggering */}
      <motion.div
        className="px-6 md:px-12 lg:px-[114px] pt-[150px] md:pt-[200px] lg:pt-[275px] text-white relative z-20 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-space-grotesk font-bold mb-4 md:mb-6 tracking-tight"
          variants={itemVariants}
        >
          Businesses
        </motion.h1>
        
        
        
        <motion.div
          variants={gradientVariants}
          className="h-[2px] rounded-full mb-6 sm:mb-8"
          style={{ background: "linear-gradient(to right, #FF6B00, #FF9E00, white)" }}
        />
        
        <motion.div 
          className="flex items-center space-x-2 font-space-grotesk font-medium text-sm md:text-[16px] leading-[1.7]"
          variants={itemVariants}
        >
          <Link to="/" className="hover:text-orange-300 transition-colors">Home</Link>
          <span>&gt;</span>
          <span >Business</span>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 20],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <span className="text-xs mb-1">Scroll</span>
        <FiChevronDown size={28} className="text-orange-400" />
      </motion.div>

      {/* Subtle Glow Effect */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          transition: { duration: 8, repeat: Infinity }
        }}
      />
    </div>
  );
};

export default Hero;