import React, { useState } from "react";
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

  // Random testimonials for each user
  const testimonials = [
    {
      text: "Outstanding quality and timely delivery. Shyam Metalics has been our trusted partner for over 5 years.",
      author: "– Amit Sharma, Construction Manager, Metro Projects",
    },
    {
      text: "The structural integrity of our buildings is uncompromised thanks to Shyam Metalics' superior TMT bars.",
      author: "– Dr. Priya Singh, Structural Engineer, Urban Development",
    },
    {
      text: "Exceptional customer service and product reliability. Highly recommend for large-scale projects.",
      author: "– Vikram Patel, Site Supervisor, Housing Corporation",
    },
    {
      text: "Cost-effective solutions without compromising on quality. Shyam Metalics delivers excellence every time.",
      author: "– Neha Gupta, Project Coordinator, Smart City Initiative",
    },
    {
      text: "Their technical support team is outstanding. Always available for consultation and problem-solving.",
      author: "– Ravi Kumar, Chief Engineer, Bridge Construction Ltd",
    },
    {
      text: "Consistent quality across all product lines. Shyam Metalics sets the industry standard.",
      author: "– Sanjay Joshi, Quality Control Manager, Infrastructure Pvt Ltd",
    },
    {
      text: "Fast delivery and excellent material quality. Our go-to supplier for all steel requirements.",
      author: "– Meera Reddy, Procurement Head, Real Estate Group",
    },
    {
      text: "Innovative products and sustainable practices. Shyam Metalics leads the way in responsible manufacturing.",
      author:
        "– Arjun Malhotra, Environmental Engineer, Green Building Council",
    },
    {
      text: "Reliable partnership for over a decade. Their commitment to excellence is unmatched.",
      author: "– Kavita Nair, Director, Construction Solutions",
    },
    {
      text: "Superior tensile strength and durability. Perfect for our high-rise construction projects.",
      author: "– Rohit Agarwal, Senior Architect, Skyline Developers",
    },
    {
      text: "Excellent value for money and consistent performance. Shyam Metalics never disappoints.",
      author: "– Deepak Chopra, Project Manager, Industrial Construction",
    },
    {
      text: "World-class manufacturing standards and prompt customer service. Highly satisfied with their products.",
      author: "– Sunita Rao, Technical Advisor, Government Projects",
    },
    {
      text: "Their TMT bars exceed all safety standards. We trust Shyam Metalics for critical infrastructure.",
      author: "– Manoj Verma, Safety Engineer, Highway Construction",
    },
  ];

  const handleImageHover = (index) => {
    setCurrentTestimonial(testimonials[index]);
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
    <>
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
          <div className="flex flex-col justify-end items-center min-h-screen py-[75px]">
            <div className="text-center space-y-8 relative z-10 max-w-4xl pl-12 -ml-[100px]">
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
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden bg-gray-50 py-8 px-4 min-h-screen">
        <div className="max-w-md mx-auto">
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
          {renderMobileImageGrid()}

          {/* Dynamic Testimonial */}
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-gray-600 text-base"
              >
                <p className="mb-4">"{currentTestimonial.text}"</p>
                <p className="font-semibold">{currentTestimonial.author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomePage;
