import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Mission from "../assets/mission(2).jpg";
import Vision from "../assets/vision(2).png";
import Values from "../assets/values(3).png";

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
  visible: { opacity: 1, y: 0 },
};

function MissionVisionValues() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentCycle, setCurrentCycle] = useState(0);

  const sections = [
    {
      backgroundImage: Vision,
      title: "Vision",
      description:
        "We aspire to be the global benchmark in the metal industry by engineering high-performance solutions through value creation and process innovation. Our vision is to transform Shyam Metalics into a next-generation steel leader by pioneering advanced alloys and empowering Bharat's growth with clean, smart, globally competitive 'Made in India' steel.",
    },
    {
      backgroundImage: Mission,
      title: "Mission",
      description:
        "Consistent with our vision, we strive to engineer stronger metal solutions through integrated operations, cost-efficiency, and responsible business practices. Our mission is to empower industries and drive sustainable growth by optimizing both natural and human resources, thereby strengthening India's industrial base.",
    },
    {
      backgroundImage: Values,
      title: "Values",
      description:
        "We aspire to be the global benchmark in the metal industry by engineering high-performance solutions through value creation and process innovation. Our vision is to transform Shyam Metalics into a next-generation steel leader by pioneering advanced alloys and empowering Bharat's growth with clean, smart, globally competitive 'Made in India' steel.",
    },
  ];

  // Animation cycle control
  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setCurrentCycle((prev) => prev + 1);
    }, 8000); // 3s animation + 5s pause

    return () => clearTimeout(timer);
  }, [currentCycle, isAnimating]);

  return (
    <div className="relative py-[2%] overflow-hidden mx-[10%] my-[2%]">
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={`${index}-${currentCycle}`}
              className="relative rounded-2xl shadow-lg border border-orange-300 overflow-hidden"
              style={{
                width: "100%",
                minHeight: "410px",
                height: "auto",
              }}
              initial={{ opacity: 0, x: "100vw" }}
              animate={
                isAnimating
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: index * 0.5,
                        duration: 1,
                        ease: "easeOut",
                      },
                    }
                  : { opacity: 1, x: 0 }
              }
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setIsAnimating(false)}
              onHoverEnd={() => setIsAnimating(true)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url("${section.backgroundImage}")`,
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
              
              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-center mb-6 text-white drop-shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(249, 115, 22, 0.8)",
                    transition: { duration: 0.3 },
                  }}
                >
                  {section.title}
                </motion.h3>

                <motion.div
                  className="font-normal text-sm md:text-base leading-relaxed tracking-normal font-['Inter'] flex-grow px-2 md:px-0 flex flex-wrap justify-center gap-x-[4px] text-white text-center"
                  style={{ lineHeight: "24px", letterSpacing: "-0.3px" }}
                  variants={wordContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {section.description.split(" ").map((word, idx) => (
                    <motion.span 
                      key={idx} 
                      variants={wordItem}
                      className="drop-shadow-md"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Hover Overlay Effect */}
              <motion.div
                className="absolute inset-0 bg-orange-500/20 opacity-0"
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionVisionValues;