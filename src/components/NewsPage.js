import React, { useState } from "react";
import { motion } from "framer-motion";
import news1 from "../assets/news.png";
import news2 from "../assets/news2.png";
const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const NewsPage = () => {
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <div className="w-full bg-white py-[2%] px-[10%]">
      <div className="w-full mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-0">
          <h2 className="text-black-800 text-2xl sm:text-3xl lg:text-4xl font-semibold">
            LATEST NEWS
          </h2>
          <p className="text-orange-500 text-paragraph-style text-xl sm:text-2xl lg:text-2xl font-semibold leading-snug">
            Innovating Today, Leading Tomorrow
          </p>
        </div>

        {/* Main News Container - 520px height */}
        <div className="relative w-full h-[520px] bg-white overflow-hidden mt-8">
          {/* Left Large Image Section */}
          <div className="absolute left-0 top-0 w-[38%]">
            {/* Main Image */}
            <div
              className="absolute rounded-[2.9px] overflow-hidden"
              style={{
                width: "100%",
                height: "416.53px",
                top: "30px",
              }}
            >
              <img
                src={news1}
                alt="Main news"
                className="w-full h-full object-cover"
              />

              {/* Category Badge with Border */}
              <div className="absolute left-[20px] top-5 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
                Finance
              </div>
              {/* '5 Comments' label aligned to right */}
              <div className="absolute right-[20px] top-[370px] text-white px-2 py-1 text-sm font-medium">
                5 Comments
              </div>

              {/* News Content */}
              <div
                className="absolute text-white p-4 rounded"
                style={{
                  width: "calc(100% - 40px)",
                  height: "132.27px",
                  top: "255.37px",
                  left: "20px",
                }}
              >
                <h3 className="font-bold text-lg mb-2 leading-tight text-header-style ">
                  Tanishi Agarwal | Recognised for leadership in advancing
                  strategic philanthropy | Shyam Metalics Cares.
                </h3>
                <div className="flex text-sm text-gray-300 mb-1">
                  <span className="mr-4">01 JUN 2025</span>
                  <span className="mr-4">Philanthropy</span>
                  <span className="mr-4">Admin</span>
                </div>
              </div>
            </div>

            {/* View All Case Studies Button */}
            <button
              className="absolute text-black px-4 py-2 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
              style={{
                width: "200px",
                height: "28px",
                top: "470px",
                left: "0px",
              }}
            >
              <span className="text-sm">View All Case Studies</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slide Arrow Button */}
            <button
              className="absolute top-[470px] right-0 bg-orange-600 text-white p-2 rounded-sm"
              style={{ zIndex: 20 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* First Right Column */}
          <div
            className="absolute"
            style={{ left: "40%", width: "30%", top: "30px", margin: "0 1.5%" }}
          >
            {/* First Right Image */}
            <div
              className="rounded-[2.9px] overflow-hidden relative mb-3"
              style={{
                width: "100%",
                height: "208.26px",
              }}
            >
              <img
                src={news2}
                alt="Export news"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-5 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
                News
              </div>
            </div>

            {/* First News Content Box */}
            <div className="bg-white p-4 mb-4 h-[198.53px]">
              <h4 className="font-bold text-sm mb-2 text-header-style ">
                Shyam Metalics Secures Major Export Order to Southeast Asia
              </h4>
              <div className="flex text-sm text-gray-500 mb-2">
                <span className="mr-3">15 MAY 2025</span>
                <span className="mr-3">Admin</span>
                <span>2 Comments</span>
              </div>
              <motion.div
                className="text-gray-700  font-normal text-base leading-[16px] tracking-normal font-['Inter'] flex flex-wrap gap-x-[4px]"
                style={{ lineHeight: "22px", letterSpacing: "-0.5px" }}
                variants={wordContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {"Expanding Global Footprint with 50,000 MT Steel Shipment to Vietnam & Indonesia. High-grade TMT bars and wire rods to support infrastructure project"
                  .split(" ")
                  .map((word, idx) => (
                    <motion.span key={idx} variants={wordItem}>
                      {word}&nbsp;
                    </motion.span>
                  ))}
              </motion.div>
            </div>

            {/* First Column Buttons */}
            <div className="flex flex-col gap-2">
              <button className="text-black px-4 py-2 rounded hover:bg-gray-50 transition-colors flex items-center gap-2 w-full justify-start">
                <span className="text-sm">View Full News</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Second Right Column */}
          <div
            className="absolute"
            style={{ left: "72%", width: "28%", top: "30px" }}
          >
            {/* Second Right Image */}
            <div
              className="rounded-[2.9px] overflow-hidden relative mb-3"
              style={{
                width: "100%",
                height: "208.26px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop"
                alt="Innovation news"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
                News
              </div>
            </div>

            {/* Second News Content Box */}
            <div className="bg-white p-4 mb-4  h-[198.26px]">
              <h4 className="font-bold text-sm mb-2 text-header-style ">
                Shyam Metalics Partners with IIT Bombay for Green Steel Research
              </h4>
              <div className="flex text-sm text-gray-500 mb-2">
                <span className="mr-1">20 MAY 2025</span>
                <span className="mr-1">Research</span>
                <span>3 Comments</span>
              </div>
              <motion.div
                className="text-gray-700 font-normal text-base leading-[16px] tracking-normal font-['Inter'] flex flex-wrap gap-x-[4px]"
                style={{ lineHeight: "22px", letterSpacing: "-0.5px" }}
                variants={wordContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {"Pioneering Sustainable Steel Solutions with Cutting-Edge Technology. Joint R&D focus: Hydrogen-based steel production & carbon capture."
                  .split(" ")
                  .map((word, idx) => (
                    <motion.span key={idx} variants={wordItem}>
                      {word}&nbsp;
                    </motion.span>
                  ))}
              </motion.div>
            </div>

            {/* Second Column Buttons */}
            <button className="text-black px-4 py-2 rounded hover:bg-gray-50 transition-colors flex items-center gap-2 w-full justify-start">
              <span className="text-sm">View Full News</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
