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
  const [progress, setProgress] = useState(0); // New state for continuous progress
  const pauseTimeoutRef = useRef(null);
  const progressIntervalRef = useRef(null);

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
  const galleryImages = [a2, a3, a4, a5, a6, a6,a6,a2,a3,a4,a5];
  const aboutImages = [abt1img, abt1img, abt1img, abt1img, abt1img, abt1img,abt1img,abt1img,abt1img,abt1img,abt1img,abt1img];

  // Year-wise content data (keeping your existing data)
  const yearContent = [
  {
    year: "2013",
    title: "Igniting India's Steel Revolution",
    content: [
      "• Commissioned our first Integrated Steel company unit (Sambalpur)",
      "• Achieved commercial production of 0.3 MTPA sponge iron",
      "• Implemented eco-conscious manufacturing processes",
      "• Strengthened auxiliary production capabilities (Jamuria)",
      "• Established efficient raw material supply chains",
      "• Created 500+ skilled jobs in West Bengal"
    ]
  },
  {
    year: "2014",
    title: "Multiplying Excellence, Maximizing Impact",
    content: [
      "• Scaled up sponge iron production capacity to 0.3 MTPA",
      "• Enhanced Integrated Steel Plant capabilities",
      "• Implemented advanced quality control systems",
      "• Optimized power generation for smoother operations",
      "• Expanded raw material procurement networks",
      "• Achieved 92% workforce localization"
    ]
  },
  {
    year: "2015",
    title: "Powering Progress Through Innovation",
    content: [
      "• Commissioned a captive railway siding – boosting logistics efficiency by 40%",
      "• Enhanced power reliability across Integrated Steel Plant operations",
      "• Scaled sponge iron/billets capacity by 0.38 MTPA",
      "• Added a new 25MW Captive Power Plant – reducing energy costs by 30%",
      "• Expanded Ferro Alloys production by 9 MTPA",
      "• Implemented waste-heat recovery systems – cutting carbon emissions"
    ]
  },
  {
    year: "2016",
    title: "Precision Growth & Strategic Scaling",
    content: [
      "• Boosted billets capacity by 0.27 MTPA - equivalent to steel needed for 135 km of highways",
      "• Optimized Integrated Steel Plant workflows for maximum efficiency",
      "• Upgraded quality control labs for premium-grade output",
      "• Implemented AI-powered predictive maintenance for enhanced reliability"
    ]
  },
  {
    year: "2017",
    title: "Breaking Capacity Barriers",
    content: [
      "• Added 0.96 MTPA across sponge iron and billets - enough to build 3 Howrah Bridges",
      "• Achieved 2.90 MTPA total capacity - a 3x growth since 2013",
      "• Became Eastern India's largest sponge iron producer",
      "• Supplied critical materials for 12+ infrastructure projects"
    ]
  },
  {
    year: "2019",
    title: "Engineering India's Steel Future",
    content: [
      "• Increased capacity by 1.81 MTPA across sponge iron, TMT/Wire Rods",
      "• Became Odisha's most advanced Integrated Steel Plant",
      "• Expanded capacity by 1.09 MTPA in long products and Ferro Alloys",
      "• Added 94 MW power - enough to electrify 45,000 homes"
    ]
  },
  {
    year: "2020",
    title: "Powering Through Challenges",
    content: [
      "• Added 1.2 MTPA pellet capacity - raw material for 600,000 EVs",
      "• Expanded captive power to 212 MW",
      "• Maintained zero production downtime during pandemic",
      "• Boosted Jamuria plant by 2.64 MTPA",
      "• Achieved 5.71 MTPA total capacity",
      "• Enough steel to build 2 Howrah Bridges/month or 50,000 km rural roads/year"
    ]
  },
  {
    year: "2021",
    title: "From Foundry to Fortune 500",
    content: [
      "• Scaled premium TMT/Wire Rod production by 1.8 MTPA",
      "• Maintained 5.71 MTPA capacity during volatile markets",
      "• Historic IPO launched on NSE/BSE",
      "• Share price reflected confidence in vertical integration and visionary leadership"
    ]
  },
  {
    year: "2022",
    title: "Scaling New Heights in Steel Innovation",
    content: [
      "• Achieved 8.12 MTPA capacity - 42% increase in one year",
      "• Equivalent to 4 Mumbai Coastal Roads or 80,000 metro coaches",
      "• Launched S-E-L Tiger TMT Re-Bars – 15% stronger, earthquake-resistant",
      "• Introduced Tiger Grills N Steels – 30% faster installation, lightweight design"
    ]
  },
  {
    year: "2023",
    title: "Redefining Excellence in Steel Manufacturing",
    content: [
      "• Surpassed 13 MTPA metal capacity",
      "• Enough steel for 6 Bandra-Worli Sea Links annually",
      "• Achieved 377 MW captive power and integrated 4 MW solar energy",
      "• Introduced Coil TMT Technology – zero wastage, 20% cost savings",
      "• Launched corrosion-resistant stainless steel re-bars for coastal projects",
      "• Awarded Most Sustainable Steel Plant",
      "• Certified for 7 new quality benchmarks"
    ]
  },
  {
    year: "2024",
    title: "Forging New Frontiers in Metal Manufacturing",
    content: [
      "• Launched Food-Grade Aluminium Foils (40,000 TPA) – FDA & FSSAI compliant",
      "• Expanded Cold Rolling Mill for color-coated/galvanized sheets",
      "• Applications: architecture, automotive, solar",
      "• Introduced Stainless Steel Wire Rods & Bright Bars – 0.01mm tolerance",
      "• Commissioned new DRI Plant (1.5 Lakh TPA) – 35% lower emissions",
      "• Added 20MW solar-biomass hybrid power – powers 8,000+ homes"
    ]
  }
];

  // Handle timeline item click
  const handleTimelineClick = (index) => {
    setActiveIndex(index);
    setProgress(index); // Set progress to match the clicked item
    setIsPaused(true);
    
    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    // Set a new timeout to resume auto-scrolling after 10 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  // Continuous progress animation effect
  useEffect(() => {
    if (!isHovering && !isPaused) {
      progressIntervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (1 / 30); // Progress increment (10 seconds / 300 frames)
          
          // Check if we need to move to next item
          if (newProgress >= galleryImages.length) {
            setActiveIndex(0);
            return 0;
          } else if (Math.floor(newProgress) > Math.floor(prevProgress)) {
            setActiveIndex(Math.floor(newProgress));
          }
          
          return newProgress;
        });
      }, 100); // Update every 100ms for smooth animation
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [galleryImages.length, isHovering, isPaused]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-8 font-['Inter',sans-serif]">
      {/* ABOUT US Section */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        {/* Left Text Section - Now Static */}
        <div className="lg:w-1/2 text-black space-y-4 lg:space-y-6">
          <h1 className="text-orange-500 text-lg sm:text-xl font-semibold">ABOUT US</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-snug">
            A Steel Company With Integrated <br className="hidden sm:block" /> Operations.
          </h1>
          <div className="text-base sm:text-lg mb-4 lg:mb-6 leading-relaxed space-y-4">
            <p>
              Shyam Metalics and Energy Limited is an Indian integrated metal producing Company with a strong presence across the metal value chain. The Company is one of the largest integrated steel producers in India, currently ranked 6th, and is also among the country's leading ferro alloy manufacturers.
            </p>
            <p>
              Shyam Metalics and Energy Limited operates an "ore-to-metal" integrated business model, with steel manufacturing facilities located strategically near mineral reserves in West Bengal, Odisha, Chhattisgarh and Madhya Pradesh. The Company has a combined installed production capacity of 13.2 million metric tonnes per annum (MTPA) as of March 2025 across various product lines.
            </p>
            <p>
              Since FY2005, the company has demonstrated consistent operational profitability and has maintained a track record of positive EBITDA every year. Its distribution network spans both domestic and international markets, with a presence in over 28 countries.
            </p>
            <p>
              Shyam Metalics and Energy credit facilities have been rated AA/Stable for long-term banking facilities and A1+ for short-term banking facilities by Crisil. The outlook for the long-term rating remains stable.
            </p>
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
              <h2 className="text-orange-500 text-xl sm:text-2xl font-bold mb-2">
                {yearContent[activeIndex]?.year || years[activeIndex]}: {yearContent[activeIndex]?.title}
              </h2>
              <div className="space-y-2 text-sm sm:text-base max-h-64 overflow-y-auto pr-2">
                {yearContent[activeIndex]?.content.map((item, i) => (
                  <p key={i} className={item.startsWith('•') || item.startsWith('✓') ? 'pl-4' : ''}>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Timeline Gallery with Horizontal Line */}
      <div className="relative mt-12 sm:mt-16 lg:mt-20">
        {/* Orange Horizontal Line - responsive positioning */}
        <div className="absolute left-0 right-0 h-0.5 sm:h-1 z-0" 
             style={{ 
               top: window.innerWidth < 640 ? 'calc(50% + 8px)' : 'calc(50% + 12px)' 
             }}>
          {/* Progressive line animation - FIXED */}
          <div className="h-full bg-gray-300 w-full relative z-0">
            <motion.div
              className="h-full bg-orange-500 absolute left-0 top-0"
              animate={{ 
                width: `${(progress / galleryImages.length) * 100}%` 
              }}
              transition={{ 
                duration: 0.1, 
                ease: "linear" 
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
              const isPassed = index < progress;

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
                  {/* Fixed height container for message/year */}
                  <div className="h-[40px] sm:h-70 lg:h-[72px] flex flex-col items-center justify-end mb-1">
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

                  {/* Image container */}
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
                const isPassed = index < progress;

                return (
                  <motion.div
                    key={index}
                    onClick={() => handleTimelineClick(index)}
                    className="flex flex-col items-center cursor-pointer flex-shrink-0"
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Mobile Circle Container */}
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
                    <div className={`font-medium text-xs mt-1 ${
                      isPassed ? 'text-orange-600' : 'text-gray-400'
                    }`}>
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
                  onClick={() => handleTimelineClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index < progress ? 'bg-orange-500' : 'bg-gray-300'
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