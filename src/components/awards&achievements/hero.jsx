import React from "react";
import { motion } from "framer-motion";
import herobg from "../../assets/Testimonials/herobg.jpg";

const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[815px] bg-gray-100 mx-auto overflow-hidden">
      {/* Hero Section - Awards & Achievements */}
      <div className="relative h-full -mt-[65px]">
        {/* Background Image */}
        <img
          src={herobg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-white text-center px-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AWARDS & ACHIEVEMENTS
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 leading-relaxed">
              "Recognizing milestones that define our journey - a showcase of
              excellence, innovation, and dedication"
            </h2>
            <h2 className="text-xl md:text-2xl mb-4 leading-relaxed">
              "Trophies fade, but the stories behind them stay. Every
              recognition marks a breakthrough, a bold step forward."
            </h2>
            <h2 className="text-xl md:text-2xl mb-8 leading-relaxed">
              This is more than a wall of fame - It's a tribute to dedication,
              belief, and resilience.
            </h2>

            {/* Animated Orange Line */}
            <motion.div
              variants={paragraphVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="h-1 w-32 bg-orange-600 rounded mb-6 sm:mb-8 mx-auto"
            />

            {/* CTA Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 border-none rounded-lg text-lg font-medium cursor-pointer transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Our Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
