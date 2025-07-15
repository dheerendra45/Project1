import React from "react";
import { motion } from "framer-motion";
import MissionIcon from "../assets/mission(1).png";
import VisionIcon from "../assets/vission(1).png";
import ValuesIcon from "../assets/values(1).png";

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
    <div className="relative py-16 overflow-hidden mx-16 my-10">
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {" "}
          {/* Changed gap from 8 to 6 */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-orange-300 flex flex-col relative p-8"
              style={{ width: "400px", height: "410px" }}
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
              <div className="flex justify-center mb-5">
                <img
                  src={section.icon}
                  alt={section.title}
                  className="h-16 w-16 object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-center mb-5 text-black-800">
                {section.title}
              </h3>

              <p
                className="text-black-400 text-md text-center leading-relaxed flex-grow"
                style={{
                  fontSize: "16px",
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
