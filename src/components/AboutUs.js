import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import abt1img from '../assets/abt1.jpg';
import a1 from '../assets/aboutUs.png';
import a2 from "../assets/1.png";
import a3 from "../assets/2.png";
import a4 from "../assets/3.png";
import a5 from "../assets/4.png";
import a6 from "../assets/5.png";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef(null);

  const messages = [
    "Lighting the Spark",
    "Doubling Down",
    "Powering Progress",
    "Precision Scaling",
    "Breaking Barriers",
    "Engineering Futures",
    "Pandemic Resilience",
    "IPO Milestone",
    "Product Innovation",
    "13 MTPA Benchmark",
    "Multi-Metal Expansion"
  ];

  const years = ["2013", "2014", "2015", "2016", "2017","2019","2020","2021","2022","2023","2024"];
  const galleryImages = [a2, a3, a4, a5, a6, a6,a6,a2,a3,a4,a5,a6];
  const aboutImages = [abt1img, abt1img, abt1img, abt1img, abt1img, abt1img,abt1img,abt1img,abt1img,abt1img,abt1img,abt1img];

  // Year-wise content data
  const yearContent = [
    {
      year: "2013",
      title: "Igniting India's Steel Revolution",
      content: [
        "At Our Sambalpur Plant:",
        "• Commissioned our first Integrated Steel company unit",
        "• Achieved commercial production of 0.3 MTPA sponge iron",
        "• Implemented eco-conscious manufacturing processes",
        "Simultaneously at Jamuria:",
        "• Strengthened auxiliary production capabilities",
        "• Established efficient raw material supply chains",
        "• Created 500+ skilled jobs in West Bengal"
      ]
    },
    // ... (keep all other year content objects the same)
  ];

  const handleTimelineClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
    
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && !isPaused) {
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
      }
    }, 3000);
    
    return () => {
      clearInterval(interval);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [galleryImages.length, isHovering, isPaused]);

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 font-inter">
      {/* ABOUT US Section */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-black space-y-4 lg:space-y-6">
          <h1 className="text-orange-500 text-base sm:text-lg font-semibold">ABOUT US</h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            A Steel Company With Integrated <br className="hidden sm:block" /> Operations.
          </h1>
          <div className="text-sm sm:text-base md:text-lg mb-4 lg:mb-6 leading-relaxed space-y-4">
            {[
              "Shyam Metalics and Energy Limited is an Indian integrated metal producing Company with a strong presence across the metal value chain. The Company is one of the largest integrated steel producers in India, currently ranked 6th, and is also among the country's leading ferro alloy manufacturers.",
              "Shyam Metalics and Energy Limited operates an 'ore-to-metal' integrated business model, with steel manufacturing facilities located strategically near mineral reserves in West Bengal, Odisha, Chhattisgarh and Madhya Pradesh. The Company has a combined installed production capacity of 13.2 million metric tonnes per annum (MTPA) as of March 2025 across various product lines.",
              "Since FY2005, the company has demonstrated consistent operational profitability and has maintained a track record of positive EBITDA every year. Its distribution network spans both domestic and international markets, with a presence in over 28 countries.",
              "Shyam Metalics and Energy credit facilities have been rated AA/Stable for long-term banking facilities and A1+ for short-term banking facilities by Crisil. The outlook for the long-term rating remains stable."
            ].map((para, i) => (
              <p key={i} className="font-semibold">{para}</p>
            ))}
          </div>
        </div>

        {/* Year-wise Content and Gallery Section */}
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Gallery Image Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`gallery-${activeIndex}`}
              className="w-full mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={aboutImages[activeIndex]}
                alt={`Gallery ${years[activeIndex]}`}
                className="w-full h-auto max-h-64 sm:max-h-80 object-cover rounded-lg shadow-lg border border-orange-100"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Year Content Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-orange-100"
            >
              <h2 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                {yearContent[activeIndex]?.year || years[activeIndex]}: {yearContent[activeIndex]?.title}
              </h2>
              <div className="space-y-2 text-xs sm:text-sm md:text-base max-h-64 overflow-y-auto pr-2">
                {yearContent[activeIndex]?.content.map((item, i) => (
                  <p key={i} className={`font-semibold ${item.startsWith('•') || item.startsWith('✓') ? 'pl-4' : ''}`}>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Timeline Gallery with Horizontal Line */}
      <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        {/* Orange Horizontal Line */}
        <div className="absolute left-0 right-0 h-0.5 sm:h-1 z-0" 
             style={{ 
               top: window.innerWidth < 640 ? 'calc(50% + 8px)' : 'calc(50% + 12px)' 
             }}>
          <div className="h-full bg-gray-300 w-full relative z-0">
            <motion.div
              className="h-full bg-orange-500 absolute left-0 top-0"
              initial={{ width: '0%' }}
              animate={{ 
                width: `${((activeIndex + 1) / galleryImages.length) * 100}%` 
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </div>

        {/* Timeline Gallery - Responsive Layout */}
        <div className="relative z-10 w-full">
          {/* Desktop/Tablet Timeline */}
          <div className="hidden sm:flex justify-between items-center gap-2 lg:gap-4 max-w-6xl mx-auto overflow-x-auto pt-[-10px] pb-4">
            {galleryImages.map((img, index) => {
              const isActive = index === activeIndex;
              const isPassed = index <= activeIndex;

              return (
                <motion.div
                  key={index}
                  onClick={() => handleTimelineClick(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex flex-col items-center cursor-pointer flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="h-[40px] sm:h-[60px] lg:h-[72px] flex flex-col items-center justify-end mb-1">
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key={`active-${index}`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center"
                        >
                          <div className="mb-1 bg-orange-500 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-md shadow-lg whitespace-nowrap w-max border-2 border-orange-600 max-w-[180px] text-center">
                            {messages[index]}
                          </div>
                          <div className="text-orange-600 font-semibold whitespace-nowrap text-sm sm:text-base lg:text-lg">
                            {years[index]}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`inactive-${index}`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className={`font-semibold whitespace-nowrap text-sm sm:text-base lg:text-lg h-6 sm:h-8 lg:h-[36px] flex items-end ${
                            isPassed ? 'text-orange-600' : 'text-gray-400'
                          }`}
                        >
                          {years[index]}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    className={`w-6 h-6 sm:w-6 sm:h-6 lg:w-6 lg:h-6 rounded-full p-1 flex items-center justify-center transition-colors duration-300
                      ${isActive ? 'bg-orange-500' : isPassed ? 'bg-orange-300' : 'bg-gray-300'}`}
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <motion.img
                      src={img}
                      alt={`img-${index}`}
                      className="object-contain w-full h-full filter-none"
                      style={{ filter: 'none' }}
                      animate={{
                        y: isActive ? 0 : -6,
                        scale: isActive ? 1.05 : 0.95
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Timeline - Vertical Layout */}
          <div className="sm:hidden">
            <div className="text-center mb-6">
              <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-lg inline-block mb-2">
                {messages[activeIndex]}
              </div>
              <div className="text-orange-600 font-semibold text-lg">
                {years[activeIndex]}
              </div>
            </div>

            <div className="flex justify-center items-center gap-3 overflow-x-auto pb-4">
              {galleryImages.map((img, index) => {
                const isActive = index === activeIndex;
                const isPassed = index <= activeIndex;

                return (
                  <motion.div
                    key={index}
                    onClick={() => handleTimelineClick(index)}
                    className="flex flex-col items-center cursor-pointer flex-shrink-0"
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full p-1 flex items-center justify-center transition-colors duration-300
                        ${isActive ? 'bg-orange-500' : isPassed ? 'bg-orange-300' : 'bg-gray-300'}`}
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <motion.img
                        src={img}
                        alt={`img-${index}`}
                        className="object-contain w-full h-full filter-none"
                        style={{ filter: 'none' }}
                        animate={{
                          scale: isActive ? 1.05 : 0.95
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </motion.div>
                    <div className={`font-semibold text-xs mt-1 ${
                      isPassed ? 'text-orange-600' : 'text-gray-400'
                    }`}>
                      {years[index]}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTimelineClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index <= activeIndex ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}