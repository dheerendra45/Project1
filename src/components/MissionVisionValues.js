import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MissionIcon from "../assets/mission(2).svg";
import VisionIcon from "../assets/vision(2).svg";
import ValuesIcon from "../assets/values(2).svg";

function MissionVisionValues() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentCycle, setCurrentCycle] = useState(0);

  const sections = [
    {
      icon: VisionIcon,
      title: "Vision",
      description:
        "We aspire to be the global benchmark in the metal industry by engineering high-performance solutions through value creation and process innovation. Our vision is to transform Shyam Metalics into a next-generation steel leader by pioneering advanced alloys and empowering Bharat’s growth with clean, smart, globally competitive ‘Made in India’ steel.",
    },
    {
      icon: MissionIcon,
      title: "Mission",
      description:
        "Consistent with our vision, we strive to engineer stronger metal solutions through integrated operations, cost-efficiency, and responsible business practices. Our mission is to empower industries and drive sustainable growth by optimizing both natural and human resources, thereby strengthening India’s industrial base.",
    },
    {
      icon: ValuesIcon,
      title: "Values",
      description:
        "We aspire to be the global benchmark in the metal industry by engineering high-performance solutions through value creation and process innovation. Our vision is to transform Shyam Metalics into a next-generation steel leader by pioneering advanced alloys and empowering Bharat’s growth with clean, smart, globally competitive ‘Made in India’ steel.",
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
              key={`${index}-${currentCycle}`} // Force re-animation on cycle change
              className="bg-white rounded-2xl shadow-lg border border-orange-300 flex flex-col relative p-6 md:p-8"
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
              <div className="flex justify-center mb-4 md:mb-5">
                <motion.img
                  src={section.icon}
                  alt={section.title}
                  className="h-14 w-14 md:h-16 md:w-16 object-contain"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 },
                  }}
                />
              </div>

              <motion.h3
                className="text-xl text-header-style :text-2xl font-semibold text-center mb-4 md:mb-5 text-black-800"
                whileHover={{
                  scale: 1.1,
                  color: "#f97316",
                  transition: { duration: 0.3 },
                }}
              >
                {section.title}
              </motion.h3>

              <p
                className="font-normal  text-paragraph-style text-sm md:text-base text-center leading-relaxed flex-grow px-2 md:px-0"
                style={{ lineHeight: "24px", letterSpacing: "-0.5px" }}
              >
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionVisionValues;
