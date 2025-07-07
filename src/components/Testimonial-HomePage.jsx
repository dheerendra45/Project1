import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import a1 from "./images-testimonial-homepage/1.png";
import a2 from "./images-testimonial-homepage/2.png";
import a3 from "./images-testimonial-homepage/3.png";
import a4 from "./images-testimonial-homepage/4.png";
import a5 from "./images-testimonial-homepage/5.png";
import a6 from "./images-testimonial-homepage/6.png";
import a7 from "./images-testimonial-homepage/7.png";
import a8 from "./images-testimonial-homepage/8.png";
import a9 from "./images-testimonial-homepage/9.png";
import a10 from "./images-testimonial-homepage/10.png";
import a11 from "./images-testimonial-homepage/11.png";
import a12 from "./images-testimonial-homepage/12.png";
import a13 from "./images-testimonial-homepage/13.png";
import t1 from "../assets/t1.jpg";

const TestimonialHomePage = () => {
  // Images arrays
  const a1 = t1;
  const a2 = t1;
  const a3 = t1;
  const a4 = t1;
  const a5 = t1;
  const a6 = t1;
  const a7 = t1;
  const a8 = t1;
  const a9 = t1;
  const a10 = t1;
  const a11 = t1;
  const a12 = t1;
  const a13 = t1;

  const leftMembers = [a1, a2, a3, a4, a5];
  const rightMembers = [a6, a7, a8, a9, a10];
  const topMembers = [a11, a12, a13];
  const allMembers = [...leftMembers, ...topMembers, ...rightMembers];

  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [headerTextIndex, setHeaderTextIndex] = useState(0);

  // Random testimonials for each user
  const testimonials = [
    {
      text: "Shyam Metalics' TMT bars have been the backbone of our infrastructure projects— their strength and reliability ensure long-lasting quality.",
      author: "– Rajiv Mehta, Project Head, National Highway Authority",
    },
    {
      text: "Consistent quality in billets for 8 years. A partner who understands automotive steel needs.",
      author: "– Priya Sharma, Purchase Head (Tata Autocomp)",
    },
    {
      text: "From Vietnam to Qatar, SMEL pellets meet our blast furnace specs every time.",
      author: "– David Müller, Procurement Director (Global Steel Corp)",
    },
    {
      text: "Their high-carbon ferro manganese improved our steel alloy efficiency by 15%.",
      author: "– Arjun Reddy, Chief Metallurgist (JSW Steel)",
    },
    {
      text: "First Indian supplier whose ESG commitments match ours. Carbon-neutral pellets are revolutionary!",
      author: "– Elena K., Sustainability Officer (European Steel Consortium)",
    },
    {
      text: "Local availability + global quality. Our small fabrication unit thrives with their wire rods.",
      author: "– Sunil Agarwal, Owner (Agarwal Engineering Works)",
    },
  ];

  const headerText = "Voices of Trust in Shyam Metalics";
  const fullText =
    "Shyam Metalics' TMT bars have been the backbone of our infrastructure projects— their strength and reliability ensure long-lasting quality.";

  // Animation effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && headerTextIndex < headerText.length) {
      const timer = setTimeout(() => {
        setHeaderTextIndex(headerTextIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, headerTextIndex, headerText.length]);

  useEffect(() => {
    if (
      isVisible &&
      headerTextIndex >= headerText.length &&
      textIndex < fullText.length
    ) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [
    isVisible,
    textIndex,
    fullText.length,
    headerTextIndex,
    headerText.length,
  ]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // State to track current testimonial
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Current testimonial based on index
  const currentTestimonial = testimonials[currentTestimonialIndex];

  // Auto-play functionality - FIXED
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => {
          return (prevIndex + 1) % testimonials.length;
        });
      }, 3000); // Change testimonial every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleImageHover = (index) => {
    if (index < testimonials.length) {
      setCurrentTestimonialIndex(index);
      setIsAutoPlaying(false); // Stop auto-play when user hovers
    }
  };

  const handleReadAllToggle = () => {
    setIsAutoPlaying(!isAutoPlaying);
    // If starting auto-play, start from the next testimonial
    if (!isAutoPlaying) {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }
  };

  const handleReadAll = () => {
    console.log("Read All button clicked");
  };

  const renderImageSection = (
    members,
    sectionPositions,
    sectionStyle,
    startIndex
  ) => {
    return (
      <div className="absolute z-20" style={sectionStyle}>
        {members.map((src, i) => {
          const pos = sectionPositions[i];
          const globalIndex = startIndex + i;
          return (
            <div
              key={i}
              className={`absolute overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-out ${
                isHovered
                  ? "translate-x-0 opacity-100 scale-100"
                  : startIndex === 0
                  ? "-translate-x-24 opacity-0 scale-90"
                  : startIndex === 5
                  ? "-translate-y-24 opacity-0 scale-90"
                  : "translate-x-24 opacity-0 scale-90"
              }`}
              style={{
                width: "132px",
                height: "161px",
                top: pos.top,
                left: pos.left,
                borderRadius: "10px",
                transitionDelay: `${globalIndex * 100 + 200}ms`,
              }}
              onMouseEnter={() => handleImageHover(globalIndex)}
            >
              <img
                src={src}
                alt={`Team member ${globalIndex + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          );
        })}
      </div>
    );
  };

  const renderMobileImageGrid = () => {
    return (
      <div className="grid grid-cols-4 gap-3 px-4 mb-8">
        {allMembers.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden shadow-lg cursor-pointer rounded-lg aspect-[4/5]"
            onTouchStart={() => handleImageHover(index)}
            onMouseEnter={() => handleImageHover(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img
              src={src}
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:brightness-110"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Desktop Version */}
      <div
        className="hidden lg:block bg-gray-50 py-5 overflow-hidden relative"
        style={{ height: "735px", margin: "0 auto" }}
      >
        <div
          className="relative h-full"
          style={{
            top: "20px",
            left: "20px",
            width: "1400px",
            height: "695px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Side Images */}
          {renderImageSection(
            leftMembers,
            [
              { top: 58, left: 0 },
              { top: 233, left: 0 },
              { top: 0, left: 143 },
              { top: 171, left: 143 },
              { top: 73, left: 287 },
            ],
            {
              width: "419px",
              height: "395px",
              top: "50px",
              left: "40px",
            },
            0
          )}

          {/* Center Images */}
          {renderImageSection(
            topMembers,
            [
              { top: 5, left: 0 },
              { top: 42, left: 142 },
              { top: 0, left: 285 },
            ],
            {
              width: "418px",
              height: "204px",
              top: "50px",
              left: "480px",
            },
            5
          )}

          {/* Right Side Images */}
          {renderImageSection(
            rightMembers,
            [
              { top: 73, left: 0 },
              { top: 0, left: 144 },
              { top: 192, left: 144 },
              { top: 59, left: 287 },
              { top: 235, left: 287 },
            ],
            {
              width: "419px",
              height: "396px",
              top: "50px",
              left: "900px",
            },
            8
          )}

          {/* Center Content - FIXED positioning */}
          <div
            className="flex flex-col justify-center items-center h-[650px] pt-60 absolute inset-0"
            style={{ left: "-10px" }}
          >
            <div className="text-center space-y-8 relative z-10 max-w-4xl">
              {/* Animated Header */}
              <div className="space-y-4">
                <p
                  className={`text-orange-500 font-semibold tracking-wide text-sm lg:text-base transition-all duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  TESTIMONIALS
                </p>

                <h2
                  className={`text-2xl lg:text-4xl xl:text-4xl items-center font-bold transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <span className="text-gray-900">
                    {headerText.substring(0, headerTextIndex)}
                  </span>
                </h2>
              </div>

              {/* Dynamic Description with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-gray-600 max-w-xl mx-auto leading-relaxed text-base lg:text-lg"
                >
                  <p>
                    "{currentTestimonial.text}"
                    <br />
                    <span className="mt-4 block font-semibold">
                      {currentTestimonial.author}
                    </span>
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Read All Button */}
              <motion.button
                onClick={handleReadAllToggle}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAutoPlaying ? "Stop Reading" : "Read All"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden bg-gray-50 py-8 min-h-screen">
        <div className="w-full max-w-md mx-auto px-4">
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-black-800 font-semibold tracking-wide text-sm">
              TESTIMONIALS
            </h2>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Voices of Trust in Shyam Metalics
            </h2>
          </div>

          {/* Mobile Image Grid */}
          <div className="grid grid-cols-4 gap-3 mb-8">
            {allMembers.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden shadow-lg cursor-pointer rounded-lg aspect-[4/5]"
                onTouchStart={() => handleImageHover(index)}
                onMouseEnter={() => handleImageHover(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <img
                  src={src}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:brightness-110"
                />
              </motion.div>
            ))}
          </div>

          {/* Dynamic Testimonial */}
          <div className="text-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-gray-600 text-base mb-6 text-center"
              >
                <p className="mb-4">"{currentTestimonial.text}"</p>
                <p className="font-semibold">{currentTestimonial.author}</p>
              </motion.div>
            </AnimatePresence>

            {/* Auto Play Toggle Button */}
            <button
              onClick={handleReadAllToggle}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto"
            >
              {isAutoPlaying ? "Stop Reading" : "Read All"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHomePage;
