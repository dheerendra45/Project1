import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Import your assets
import csr1 from "../assets/csr1.png";
import csr2 from "../assets/csr2.png";
import csr3 from "../assets/csr3.png";
import csr4 from "../assets/csr4.png";
import logo1 from "../assets/csr/icon1.svg";
import logo2 from "../assets/csr/icon2.svg";
import logo3 from "../assets/csr/31.svg";
import logo4 from "../assets/csr/41.svg";
import logo5 from "../assets/csr/51.svg";
import logo6 from "../assets/csr/61.svg";
import video1 from "../assets/Sustainability/school.mp4";
import video2 from "../assets/Sustainability/sewing.mp4";
import video3 from "../assets/Sustainability/football.mp4";
import video4 from "../assets/draming_min (1).mp4";

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
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

const CSRPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const csrAreas = [
    { icon: logo1, label: "Education" },
    { icon: logo2, label: "Healthcare" },
    { icon: logo3, label: "Sanitation & Hygiene" },
    { icon: logo4, label: "Livelihood Empowerment" },
    { icon: logo5, label: "Environmental Sustainability" },
    { icon: logo6, label: "Community Development" },
  ];

  const videoData = [
    {
      id: 1,
      image: csr1,
      video: video1,
      alt: "Community children",
    },
    {
      id: 2,
      image: csr2,
      video: video2,
      alt: "Woman in traditional dress",
    },
    {
      id: 3,
      image: csr3,
      video: video3,
      alt: "Traditional building",
    },
    {
      id: 4,
      image: csr4,
      video: video4,
      alt: "Children together",
    },
  ];

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div className="bg-white my-[2%]">
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-orange-500"
            >
              ×
            </button>
            <video controls autoPlay className="w-full h-auto max-h-[80vh]">
              <source
                src={videoData.find((v) => v.id === activeVideo)?.video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <div className="max-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
          {/* Left Side - Images Grid with Always-Visible Play Buttons */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {videoData.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded shadow-lg cursor-pointer group"
                  onClick={() => handlePlayVideo(item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[266px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Always Visible Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-40 rounded-full p-3 hover:bg-opacity-60 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <h1 className="text-2xl text-header-style sm:text-3xl font-bold text-gray-900 mb-3">
              Corporate Social Responsibility
            </h1>

            <h2 className="text-lg sm:text-xl text-header-style font-semibold text-orange-500 mb-4">
              Building Communities, Empowering Lives
            </h2>

            <motion.div
              className="font-normal text-base leading-[16px] tracking-normal font-['Inter'] text-gray-700 mb-5  flex flex-wrap gap-x-[4px]"
              style={{ lineHeight: "26px", letterSpacing: "-0.3px" }}
              variants={wordContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {"Empowering Bharat with purpose beyond profits and progress beyond steel."
                .split(" ")
                .map((word, idx) => (
                  <motion.span key={idx} variants={wordItem}>
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.div>

            <div className="mb-6">
              <motion.div
                className="text-gray-700 font-normal text-base leading-[16px] tracking-normal font-['Inter'] text-paragraph-style  flex flex-wrap gap-x-[4px]"
                style={{ lineHeight: "24px", letterSpacing: "-0.3px" }}
                variants={wordContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {"Shyam Metalics has always stood tall for more than just steel, because we believe that true strength lies not only in the steel we forge, but in the lives we uplift. We go beyond infrastructure to empathize with people, drive impact, and build a more equitable, educated, and empowered Bharat. Our commitment to Corporate Social Responsibility is not just an initiative, it's a way of life, aimed at creating opportunity, dignity, and sustainable growth for the communities we serve."
                  .split(" ")
                  .map((word, idx) => (
                    <motion.span key={idx} variants={wordItem}>
                      {word}&nbsp;
                    </motion.span>
                  ))}
              </motion.div>
            </div>

            {/* CSR Areas */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
              {csrAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center hover:scale-95 transition-transform duration-200"
                >
                  <div className="rounded-full p-2 mb-2">
                    <img
                      src={area.icon}
                      alt={area.label}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-base font-medium text-gray-700 leading-tight">
                    {area.label}
                  </span>
                </div>
              ))}
            </div>

            <motion.div
              className="text-gray-700  mb-6 font-normal text-base leading-[16px] tracking-normal font-['Inter'] flex flex-wrap gap-x-[4px]"
              style={{ lineHeight: "24px", letterSpacing: "-0.3px" }}
              variants={wordContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {"Our CSR efforts are rooted in empathy and driven by impact to shape not just steel, but a future that's stronger, greener, and more inclusive for all."
                .split(" ")
                .map((word, idx) => (
                  <motion.span key={idx} variants={wordItem}>
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.div>
            <Link to="/csr">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold border border-white transition-all duration-300 shadow-lg w-fit text-sm sm:text-base">
                Learn More About Our Impact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRPage;
