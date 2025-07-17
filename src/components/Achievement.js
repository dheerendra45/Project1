import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

import largeCard from "../assets/largeCard.png";
import smallCard from "../assets/largeCard.png";
import leftarrow from "../assets/left-arrow.png";
import rightarrow from "../assets/right-arrow.png";

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const certificates = [largeCard, smallCard, smallCard, smallCard];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    // Added margins: left/right 10%, top/bottom 2%, increased min-height for better visibility
    <div className="bg-white px-4 py-16 mx-[10%] my-[2%] min-h-[600px]">
      {/* Heading */}
      <h2 className="text-2xl text-header-style  font-semibold text-center mb-12">
        Accreditations <span className="text-orange-500">&</span> Achievements
      </h2>

      {/* Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Text Block */}
        <div className="lg:w-[40%] text-center lg:text-left">
          <motion.div
            className="text-orange-500 text-paragraph-style text-sm leading-relaxed max-w-md mx-auto lg:mx-0 text-center mt-[9%] ml-[10%] flex flex-wrap justify-center lg:justify-start gap-x-[4px]"
            style={{ lineHeight: "24px", letterSpacing: "-0.5px" }}
            variants={wordContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {"Recognized by industry leaders, endorsed by global platforms — our journey is marked by trust, quality, and performance. At Shyam Metallics, excellence isn't just a pursuit — it's a consistent outcome. Our dedication to sustainable growth, employee well-being, innovation, and industry leadership has been recognized by premier national and international forums. Each award, certification, and endorsement stands as a testament to the trust we've built and the impact we've created."
              .split(" ")
              .map((word, idx) => (
                <motion.span key={idx} variants={wordItem}>
                  {word}&nbsp;
                </motion.span>
              ))}
          </motion.div>

          {/* Arrows - Simply use the images as they are */}
          <div className="flex items-center justify-center lg:justify-start mt-8 ml-[28%]">
            <div className="mr-[5%]">
               <img src={leftarrow} alt="Left arrow" />
            </div>
            
            <img src={rightarrow} alt="Right arrow" />
          </div>
        </div>

        {/* Right Card Block - Increased height to ensure View All button is visible */}
        <div className="flex flex-col items-start lg:w-[60%] overflow-hidden">
          {/* Card container with increased height */}
          <div className="flex items-center justify-center gap-2 relative w-full ">
            <AnimatePresence mode="popLayout">
              {[0, 1, 2, 3].map((i) => {
                const cardIndex = (activeIndex + i) % certificates.length;
                const isMain = i === 0;

                return (
                  <motion.img
                    key={`${cardIndex}-${i}`}
                    src={certificates[cardIndex]}
                    alt={`Card ${i}`}
                    className={
                      isMain
                        ? "w-[230px] h-auto z-10"
                        : "w-[100px] h-auto opacity-80"
                    }
                    initial={{ x: 100, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -100, opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* View All - Added more spacing and ensured visibility */}
          <div className="w-[125px] h-[48px] mt-8">
            <button className="w-full h-full bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;