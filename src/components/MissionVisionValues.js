import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MissionIcon from "../assets/mission-icon.png";
import VisionIcon from "../assets/vision-icon.png";
import ValuesIcon from "../assets/values-icon.png";
import SteelFactoryImage from "../assets/steel-factory.png";
import HardhatImage from "../assets/hardhat.png";
import WorkerImage from "../assets/worker.png";

function MissionVisionValues() {
  const sections = [
    {
      icon: VisionIcon,
      title: "Our Vision",
      description: [
        "With a farsighted vision of strengthening India's infrastructure and redefining the future of steel,",
        "Shyam Metalics and Energy Limited strives to set new benchmarks in excellence by leading with innovation, championing sustainability, and driving inclusive growth,",
        "Empowering India to emerge as a global industrial force while shaping a resilient, responsible, and progressive world.",
      ],
      // image: SteelFactoryImage,
      direction: "left",
    },
    {
      icon: MissionIcon,
      title: "Our Mission",
      description: [
        "Shyam Metalics and Energy Limited aims to lead the transformation of the steel industry through responsible manufacturing, digital innovation, and nation-building excellence,",
        "Leveraging cost-efficiency and the optimal utilization of natural and human resources to drive high productivity,",
        "Strengthen India’s industrial backbone, and create enduring value for all stakeholders.",
      ],
      // image: HardhatImage,
      direction: "up",
    },
    {
      icon: ValuesIcon,
      title: "Our Values",
      description: [
        "Rooted in our values, we continue to grow with integrity and purpose.",
        "Integrity – Transparency ,Collaboration – Synergy",
        "Ownership – Accountability ,Commitment – Excellence",
      ],
      // image: WorkerImage,
      direction: "right",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-transparent to-white py-10 px-6 sm:px-10 lg:px-8 xl:px-18">
      {/* Transparent Navbar */}
      <div className="flex justify-center space-x-8 mb-8">
        {sections.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-lg font-semibold ${
              activeIndex === index ? "text-orange-600" : "text-gray-400"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div className="flex flex-col items-start space-y-4 text-left bg-white px-8 ">
        <img
          src={sections[activeIndex].icon}
          alt={sections[activeIndex].title}
          className="h-16 w-16"
        />
        <h3 className="text-[24px] font-bold font-[Inter] text-black">
          {sections[activeIndex].title}
        </h3>
        <div className="text-gray-600 text-base font-normal leading-6 text-left font-[Inter] break-words">
          {sections[activeIndex].description.map((line, i) => (
            <p key={i} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MissionVisionValues;
