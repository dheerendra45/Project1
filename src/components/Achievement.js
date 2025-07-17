import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

// achievements images
import AAI2 from "../assets/achievements/AAI 2.png";
import ach2 from "../assets/achievements/ach2.jpg";
import ach3 from "../assets/achievements/ach3.jpg";
import BIS2 from "../assets/achievements/BIS 2.png";
import CertificateShyamMetalics from "../assets/achievements/Certificate.jpg";
import GREENPRO1 from "../assets/achievements/GREEN PRO 1.png";
import Images23 from "../assets/achievements/images (23).jpg";
import ISO3 from "../assets/achievements/ISO 3.png";
import ISO6 from "../assets/achievements/ISO 6.png";
import NABL2 from "../assets/achievements/NABL 2.png";
import QST1 from "../assets/achievements/QST 1.png";
import ShyamMetalicsListing131 from "../assets/achievements/sml(131).JPG";
import WBPWD from "../assets/achievements/WB PWD.jpg";
import AAILOGO from "../assets/achievements/AAI LOGO.png";
import ach6 from "../assets/achievements/ach6.jpg";
import BIS from "../assets/achievements/BIS.png";
import CRM from "../assets/achievements/CRM.jpg";
import GREENPRO2 from "../assets/achievements/GREEN PRO 2.png";
import ISO1 from "../assets/achievements/ISO 1.png";
import ISO4 from "../assets/achievements/ISO 4.png";
import ISODETAILS from "../assets/achievements/ISO DETAILS.png";
import NABL from "../assets/achievements/NABL.png";
import QST2 from "../assets/achievements/QST 2.png";
import ShyamMetalicsListing142 from "../assets/achievements/sml(142).JPG";
import ach1 from "../assets/achievements/ach1.jpg";
import ach4 from "../assets/achievements/ach4.jpg";
import AIRPORTAUTHORITIESOFINDIA from "../assets/achievements/AIRPORT AUTHORITIES OF INDIA.png";
import BROLOGO from "../assets/achievements/BRO LOGO.webp";
import DJL from "../assets/achievements/DJI.jpg";
import images22 from "../assets/achievements/images (22).jpg";
import ISO2 from "../assets/achievements/ISO 2.png";
import ISO5 from "../assets/achievements/ISO 5.png";
import MAJORCLIENTS from "../assets/achievements/MAJOR CLIENTS.png";
import NationalHighwaysAuthorityofIndialogo from "../assets/achievements/NHAI.png";
import ShyamMetalicsListing101 from "../assets/achievements/sml(101).JPG";
import wagonrdsoapprovalservice from "../assets/achievements/wagon.jpg";

// arrows 
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
  
  // Array of all achievement images
  const certificates = [
    AAI2,
    ach2,
    ach3,
    BIS2,
    CertificateShyamMetalics,
    GREENPRO1,
    Images23,
    ISO3,
    ISO6,
    NABL2,
    QST1,
    ShyamMetalicsListing131,
    WBPWD,
    AAILOGO,
    ach6,
    BIS,
    CRM,
    GREENPRO2,
    ISO1,
    ISO4,
    ISODETAILS,
    NABL,
    QST2,
    ShyamMetalicsListing142,
    ach1,
    ach4,
    AIRPORTAUTHORITIESOFINDIA,
    BROLOGO,
    DJL,
    images22,
    ISO2,
    ISO5,
    MAJORCLIENTS,
    NationalHighwaysAuthorityofIndialogo,
    ShyamMetalicsListing101,
    wagonrdsoapprovalservice
  ];

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
  className="text-orange-500 text-paragraph-style text-base leading-relaxed max-w-md mx-auto lg:mx-0 text-center mt-[20%] ml-[10%] flex flex-wrap justify-center lg:justify-start gap-x-[4px]"
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
          <div className="flex items-center justify-start gap-4 relative w-full h-[400px] pl-8 pt-12">
            <AnimatePresence mode="popLayout">
              {[0, 1, 2, 3].map((i) => {
                const cardIndex = (activeIndex + i) % certificates.length;
                const isMain = i === 0;
                return (
                  <motion.img
                    key={`${cardIndex}-${i}`}
                    src={certificates[cardIndex]}
                    alt={`Achievement ${cardIndex + 1}`}
                    className={
                      isMain
                        ? "w-[253px] h-[335px] object-contain border border-gray-300 rounded-[8px] z-10 bg-white mt-[-10%]"
                        : "w-[115px] h-[153px] object-contain border border-gray-300 rounded-[4px] opacity-80 bg-white mt-[-10%]"
                    }
                    style={{
                      imageRendering: "auto",
                      filter: "drop-shadow(0px 4px 8px rgba(255, 165, 0, 0.3))",
                    }}
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

          {/* View All - Fixed position */}
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