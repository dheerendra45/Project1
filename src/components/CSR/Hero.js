import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import herobg from "../../assets/Sustainability/school.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={herobg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-start justify-center h-full px-6 sm:px-12 md:px-20 text-white max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          Forging Stronger Steel, Empowering Stronger Communities
        </motion.h1>

        <motion.div
          className="flex gap-2 text-sm sm:text-base font-medium"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link to="/" className="hover:underline">Home</Link>
          <span>&gt;</span>
          <span>CSR</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
