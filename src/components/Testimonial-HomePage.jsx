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

const TestimonialHomePage = () => {
  // Images arrays
  const leftMembers = [a1, a2, a3, a4, a5];
  const rightMembers = [a6, a7, a8, a9, a10];
  const topMembers = [a11, a12, a13];
  const allMembers = [...leftMembers, ...topMembers, ...rightMembers];

  // State to track current testimonial
  const [currentTestimonial, setCurrentTestimonial] = useState({
    text: "Shyam Metalics' TMT bars have been the backbone of our infrastructure projects— their strength and reliability ensure long-lasting quality.",
    author: "– Rajiv Mehta, Project Head, National Highway Authority",
  });

  // New state for Read All functionality
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

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

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % testimonials.length;
          setCurrentTestimonial(testimonials[nextIndex]);
          return nextIndex;
        });
      }, 3000); // Change testimonial every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials]);

  const handleImageHover = (index) => {
    setCurrentTestimonial(testimonials[index]);
    setCurrentTestimonialIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user hovers
  };

  const handleReadAllToggle = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleReadAll = () => {
    // You can implement what happens when "Read All" is clicked
    console.log("Read All button clicked");
    // For example, navigate to a testimonials page or show all testimonials
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
            <motion.div
              key={i}
              className="absolute overflow-hidden shadow-lg cursor-pointer"
              style={{
                width: "132px",
                height: "161px",
                top: pos.top,
                left: pos.left,
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleImageHover(globalIndex)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={src}
                alt={`Team member ${globalIndex + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:brightness-110"
              />
            </motion.div>
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
        className="hidden lg:block bg-gray-50 py-5 overflow-hidden relative w-full"
        style={{ height: "735px" }}
      >
        <div className="flex justify-center w-full">
          <div
            className="relative"
            style={{
              width: "1400px",
              height: "695px",
              maxWidth: "100%",
            }}
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

            {/* Center Content */}
            <div className="flex flex-col justify-center items-center h-[640px] pt-60 absolute inset-0">
              <div className="text-center space-y-8 relative z-10 max-w-4xl">
                {/* Static Header */}
                <div className="space-y-4">
                  <p className="text-orange-500 font-semibold tracking-wide text-sm lg:text-base">
                    TESTIMONIALS
                  </p>

                  <h2 className="text-4xl lg:text-6xl xl:text-6xl font-bold text-gray-900">
                    Voices of Trust in Shyam Metalics
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
                    className="text-gray-600 text-lg max-w-2xl mx-auto"
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

                {/* Read All Button - Desktop */}
                <motion.button
                  onClick={handleReadAll}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read All
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden bg-gray-50 py-8 min-h-screen">
        <div className="w-full max-w-md mx-auto px-4">
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <p className="text-orange-500 font-semibold tracking-wide text-sm">
              TESTIMONIALS
            </p>
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
                className="text-gray-600 text-base mb-6"
              >
                <p className="mb-4">"{currentTestimonial.text}"</p>
                <p className="font-semibold">{currentTestimonial.author}</p>
              </motion.div>
            </AnimatePresence>

            {/* Auto Play Toggle Button */}
            <button
              onClick={() => {
                handleReadAllToggle();
                if (!isAutoPlaying) {
                  handleReadAll(); // Call this when starting auto-play
                }
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto"
            >
              {isAutoPlaying ? "Stop Reading" : "Read All"}
            </button>
          </div>

          {/* Read All Button - Mobile */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialHomePage;
