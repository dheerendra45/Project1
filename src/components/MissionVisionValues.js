import React from "react";
import { motion } from "framer-motion";
import MissionIcon from "../assets/mission(2).svg";
import VisionIcon from "../assets/vision(2).svg";
import ValuesIcon from "../assets/values(2).svg";

function MissionVisionValues() {
  const sections = [
    {
      icon: VisionIcon,
      title: "Vision",
      description:
        "We aspire to be the global benchmark in the metal industry by engineering high-performance solutions through value creation and process innovation. Our vision is to transform Shyam Metalics into a next-generation steel leader by pioneering advanced alloys and empowering Bharat's growth with clean, smart, globally competitive 'Made in India' steel.",
    },
    {
      icon: MissionIcon,
      title: "Mission",
      description:
        "Consistent with our vision, we strive to engineer stronger metal solutions through integrated operations, cost-efficiency, and responsible business practices. Our mission is to empower industries and drive sustainable growth by optimizing both natural and human resources, thereby strengthening India's industrial base.",
    },
    {
      icon: ValuesIcon,
      title: "Values",
      description:
        "We aspire to be the global benchmark in the metal industry by engineering high-performance solutions through value creation and process innovation. Our vision is to transform Shyam Metalics into a next-generation steel leader by pioneering advanced alloys and empowering Bharat's growth with clean, smart, globally competitive 'Made in India' steel.",
    },
  ];

  return (
    <div className="relative py-[2%] overflow-hidden mx-[10%] my-[2%]">
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-orange-300 flex flex-col relative p-6 md:p-8"
              style={{
                width: "100%",
                minHeight: "410px",
                height: "auto",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 md:mb-5">
                <img
                  src={section.icon}
                  alt={section.title}
                  className="h-14 w-14 md:h-16 md:w-16 object-contain"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-5 text-black-800">
                {section.title}
              </h3>

              <p
                className="font-normal text-sm md:text-base text-center leading-relaxed flex-grow px-2 md:px-0"
                style={{
                  lineHeight: "24px",
                  letterSpacing: "-0.5px",
                }}
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
