import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import herobg from '../../assets/Sustainability/school.mp4';
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden" ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative h-full -mt-[65px]">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={herobg}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <motion.div
          className="relative h-[193px] w-[750px] z-20 pl-[144px] pt-[275px] text-white"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[62px] leading-[62px] font-space-grotesk font-bold mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            Forging Stronger Steel, Empowering Stronger Communities
          </motion.h1>

          <motion.div
            className="flex space-x-1 font-space-grotesk font-medium text-[16px] leading-[27.2px]"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>Home</span>
            <span>&gt;</span>
            <span>CSR</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
