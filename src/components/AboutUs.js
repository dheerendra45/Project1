import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import a1 from '../assets/aboutUs.png';
import a2 from "../assets/1.png";
import a3 from "../assets/2.png";
import a4 from "../assets/3.png";
import a5 from "../assets/4.png";
import a6 from "../assets/5.png";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const messages = [
    "Empowering industries with innovation.",
    "Trusted by thousands across the nation.",
    "Quality and strength you can count on.",
    "Engineering the future of steel.",
    "Sustainable solutions for tomorrow.",
    "Built on legacy, powered by vision.",
  ];

  const years = ["1848", "1902", "1964", "1998", "2008", "2023"];
  const galleryImages = [a2, a3, a4, a5, a6, a6];
  const aboutImages = [a1, a1, a1, a1, a1, a1];
  const aboutTexts = [
    "Shyam Metalics is the 6th largest metal producing company based in India providing end-to-end solutions with integrated capabilities (Source: CRISIL Report) with a focus on long steel products and ferro alloys. Our state-of-the-art facilities and commitment to quality have made us a leader in the industry.",
    "Founded in 1848, we've grown to become a leader in steel production with state-of-the-art facilities across multiple locations in India. Our early adoption of innovative production techniques set us apart from competitors.",
    "Our 1902 expansion marked the beginning of our journey towards becoming an integrated steel producer with mining capabilities. This vertical integration allowed us to control quality from raw materials to finished products.",
    "The 1964 revolution in our production techniques set new benchmarks for quality in the steel industry. We introduced advanced quality control measures that became industry standards.",
    "In 1998, we pioneered several sustainable steel production methods that reduced our carbon footprint by 40%. Our environmental initiatives have been recognized with multiple awards.",
    "Our 2023 vision focuses on digital transformation and AI-powered manufacturing processes. We're investing heavily in Industry 4.0 technologies to maintain our competitive edge."
  ];

  // Stats data for each year
  const statsData = [
    { employee: '120', rating: 'B', capacity: '0.05 MTPA' },
    { employee: '1,250', rating: 'BB', capacity: '0.5 MTPA' },
    { employee: '3,450', rating: 'BBB', capacity: '1.2 MTPA' },
    { employee: '8,760', rating: 'A', capacity: '4.5 MTPA' },
    { employee: '12,340', rating: 'AA-', capacity: '9.8 MTPA' },
    { employee: '16,660', rating: 'AA/Stable', capacity: '15.13 MTPA' }
  ];

  // Auto-cycle through timeline items every 10 seconds when not hovering
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [galleryImages.length, isHovering]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* ABOUT US Section */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        {/* Left Text Section */}
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-black space-y-4 lg:space-y-6"
        >
          <h1 className="text-orange-500 text-lg sm:text-xl font-semibold">ABOUT US</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-snug">
            A Steel Company With Integrated <br className="hidden sm:block" /> Operations.
          </h1>
          <p className="text-base sm:text-lg mb-4 lg:mb-6 leading-relaxed">
            {aboutTexts[activeIndex]}
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-sm sm:text-base">
            Read More -&gt;
          </button>
        </motion.div>

        {/* Image and Stats Section */}
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={aboutImages[activeIndex]}
              alt="About Us"
              className="w-full max-w-sm sm:max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            />
          </AnimatePresence>
          
          {/* Stats Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-4 lg:mt-6 w-full max-w-2xl">
            {[
              { title: statsData[activeIndex].employee, desc: 'Employee Strength' },
              { title: statsData[activeIndex].rating, desc: 'Credit Rating' },
              { title: statsData[activeIndex].capacity, desc: 'Production Capacity' },
            ].map((stat, i) => (
              <div key={i} className="border border-orange-500 p-3 sm:p-4 rounded-lg shadow-lg bg-white text-center">
                <div className="flex items-center justify-center gap-2 text-lg sm:text-xl font-bold text-black mb-1">
                  <span className="text-orange-500 text-xl sm:text-2xl">↑</span>
                  <h1 className="text-sm sm:text-base lg:text-lg">{stat.title}</h1>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Gallery with Horizontal Line */}
      <div className="relative mt-12 sm:mt-16 lg:mt-20">
        {/* Orange Horizontal Line - responsive positioning */}
        <div
          className="absolute left-0 right-0 h-0.5 sm:h-1 bg-orange-500 z-0"
          style={{ 
            top: window.innerWidth < 640 ? 'calc(50% + 8px)' : 'calc(50% + 12px)' 
          }}
        />

        {/* Timeline Gallery - Responsive Layout */}
        <div className="relative z-10 w-full">
          {/* Desktop/Tablet Timeline */}
          <div className="hidden sm:flex justify-between items-center gap-2 lg:gap-4 max-w-6xl mx-auto overflow-x-auto pb-4">
            {galleryImages.map((img, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex flex-col items-center cursor-pointer flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Fixed height container for message/year */}
                  <div className="h-16 sm:h-20 lg:h-[72px] flex flex-col items-center justify-end mb-1">
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
                          className="text-orange-600 font-semibold whitespace-nowrap text-sm sm:text-base lg:text-lg h-6 sm:h-8 lg:h-[36px] flex items-end"
                        >
                          {years[index]}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Image container */}
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full p-1 flex items-center justify-center transition-colors duration-300
                      ${isActive ? 'bg-orange-500' : 'bg-gray-300'}`}
                    layout
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <motion.img
                      src={img}
                      alt={`img-${index}`}
                      className="object-contain w-full h-full"
                      animate={{
                        y: isActive ? 0 : -8,
                        scale: isActive ? 1.1 : 0.9
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
            {/* Current Active Item Display */}
            <div className="text-center mb-6">
              <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-lg inline-block mb-2">
                {messages[activeIndex]}
              </div>
              <div className="text-orange-600 font-semibold text-lg">
                {years[activeIndex]}
              </div>
            </div>

            {/* Mobile Timeline Navigation */}
            <div className="flex justify-center items-center gap-3 overflow-x-auto pb-4">
              {galleryImages.map((img, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="flex flex-col items-center cursor-pointer flex-shrink-0"
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full p-1 flex items-center justify-center transition-colors duration-300
                        ${isActive ? 'bg-orange-500' : 'bg-gray-300'}`}
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <motion.img
                        src={img}
                        alt={`img-${index}`}
                        className="object-contain w-full h-full"
                        animate={{
                          scale: isActive ? 1.1 : 0.9
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </motion.div>
                    <div className="text-orange-600 font-medium text-xs mt-1">
                      {years[index]}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Progress Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'
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