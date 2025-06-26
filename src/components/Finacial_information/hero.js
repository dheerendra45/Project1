import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import a1 from "../../assets/p1/logo.png";
import a2 from "../../assets/p1/sustainability.png";
import { ChevronDown, Search, Menu, X } from "lucide-react";

export default function Hero() {
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const gradientVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-cover bg-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${a2})`,
        backgroundPosition: "center calc(50% - 50px)",
      }}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Floating particles animation */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="px-4 sm:px-6 lg:px-9 pt-[150px] md:pt-[200px] lg:pt-[275px] max-w-6xl w-full mx-auto lg:ml-12 text-left"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.1] sm:leading-[1.2] md:leading-[1.3] font-space-grotesk font-bold mb-4 sm:mb-6"
          variants={itemVariants}
        >
        Financial Information
        </motion.h1>

        
        <motion.div
          variants={gradientVariants}
          className="h-1 rounded mb-6 sm:mb-8"
          style={{ background: "linear-gradient(to right, #FF6B00, white)" }}
        />

        <motion.a
          href="#"
          className="text-base sm:text-lg text-white hover:text-orange-200 transition-colors duration-300 inline-block"
          variants={itemVariants}
          whileHover={{ x: 5 }}
        >
           <span>Home</span>
            <span>&gt;</span>
            <span>Investors</span>
            <span>&gt;</span>
            <span>Finacial Information</span>
           
        </motion.a>
      </motion.div>

      {/* Scroll indicator for mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
}
