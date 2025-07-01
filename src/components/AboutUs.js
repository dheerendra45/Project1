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
    "",
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
    "Multi-Metal Expansion",
    "",
  ];

  const years = ["2005","2013", "2014", "2015", "2016", "2017","2019","2020","2021","2022","2023","2024","2025"];
  const galleryImages = [a2,a2, a3, a4, a5, a6, a6,a6,a2,a3,a4,a5,a2];
  const aboutImages = [abt1img,abt1img, abt1img, abt1img, abt1img, abt1img, abt1img,abt1img,abt1img,abt1img,abt1img,abt1img,abt1img,abt1img];

  // Year-wise content data (keeping your existing data)
  const yearContent = [
    {
    year: "2005",
    title: "",
    content: []
  },
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
    {
      year: "2014",
      title: "Multiplying Excellence, Maximizing Impact",
      content: [
        "Sambalpur Plant Achievements:",
        "• Scaled up sponge iron production capacity to 0.3 MTPA",
        "• Enhanced Integrated Steel Plant capabilities",
        "• Implemented advanced quality control systems",
        "Jamuria Plant Progress:",
        "• Optimized power generation for smoother operations",
        "• Expanded raw material procurement networks",
        "• Achieved 92% workforce localization"
      ]
    },
    {
      year: "2015",
      title: "Powering Progress Through Innovation",
      content: [
  "• Sambalpur Plant Breakthroughs:",
    "• Commissioned a captive railway siding – boosting logistics efficiency by 40%",
    "• Enhanced power reliability across our Integrated Steel Plant operations",
    "• Scaled sponge iron/billets capacity by 0.38 MTPA to meet growing demand",
    "• Jamuria Plant Advancements:",
    "• Added a new 25MW Captive Power Plant – reducing energy costs by 30%",
    "• Expanded Ferro Alloys production by 9 MTPA – diversifying our product portfolio",
    "• Implemented waste-heat recovery systems – cutting carbon emissions"
]

    },
    {
      year: "2016",
      title: "Precision Growth & Strategic Scaling",
      content: [
        "At Sambalpur Plant:",
        "• Boosted billets capacity by 0.27 MTPA - equivalent to steel needed for 135 km of highways",
        "• Optimized Integrated Steel Plant workflows for maximum efficiency",
        "At Jamuria Facility:",
        "• Upgraded quality control labs for premium-grade output",
        "• Implemented an AI-powered predictive maintenance system for enhanced reliability"
      ]
    },
    {
      year: "2017",
      title: "Breaking Capacity Barriers",
      content: [
        "Sambalpur Milestones:",
        "• Added 0.96 MTPA across sponge iron and billets - enough to build 3 Howrah Bridges",
        "• Achieved 2.90 MTPA total capacity - a 3x growth since 2013",
        "Industry Impact:",
        "• Became Eastern India's largest sponge iron producer",
        "• Supplied critical materials for 12+ infrastructure projects"
      ]
    },
    {
      year: "2019",
      title: "Engineering India's Steel Future",  
      content: [
        "Sambalpur Plant Transformation:",
        "• Increased capacity by 1.81 MTPA across critical products",
        "Sponge Iron (core raw material)",
        "TMT/Wire Rods (construction essentials)",
        "• Became Odisha's most advanced Integrated Steel Plant",
        "Jamuria Plant Advancements:",
        "• Expanded capacity by 1.09 MTPA, including specialty products",
        "Long products (for infrastructure)",
        "Ferro Alloys (for value-added steel)",
        "• 94 MW power addition - equivalent to electrifying 45,000 homes"
      ]
    },
    {
      year: "2020",
      title: "Powering Through Challenges",
      content: [
        "Sambalpur Plant Achievements:",
        "• 1.2 MTPA pellet capacity addition - raw material for 600,000 electric vehicles",
        "• 118 MW power expansion (now totaling 212 MW captive capacity)",
        "• Pandemic-proof operations with zero production downtime",
        "Jamuria Plant Growth:",
        "• 2.64 MTPA capacity boost across critical product lines",
        "• Achieved 5.71 MTPA combined capacity - enough steel to build:",
        "✓ 2 Howrah Bridges every month",
        "✓ 50,000 km of rural roads annually"
      ]
    },
    {
      year: "2021",
      title: "From Foundry to Fortune 500",
      content: [
        "Operational Excellence:",
        "• Scaled premium TMT/Wire Rod production by 1.8 MTPA",
        "• Maintained 5.71 MTPA capacity despite market volatility",
        "Market Milestone:",
        "• Historic IPO launch on NSE/BSE (June 2021)",
        "• Share price reflected investor confidence in:",
        "Vertical integration across steel plants in India",
        "Visionary Shyam Metalics owner leadership",
        "Strong fundamentals in India's steel sector"
      ]
    },
    {
      year: "2022",
      title: "Scaling New Heights in Steel Innovation",
      content: [
        "Record-Breaking Growth:",
        "• Achieved an 8.12 MTPA capacity post-IPO - making a 42% increase in just 1 year",
        "• Equivalent to producing steel for:",
        "• 4 Mumbai Coastal Roads annually",
        "• 80,000 metro rail coaches",
        "• Product Breakthroughs:",
        "• S-E-L Tiger TMT Re-Bars:",
        "• Earthquake-resistant reinforcement bars",
        "• IS 1786 certified, 15% stronger than industry standards",
        "• Tiger Grills N Steels:",
        "• Lightweight structural solutions for modern architecture",
        "• 30% faster installation than conventional materials"
      ]
    },
    {
      year: "2023",
      title: "Redefining Excellence in Steel Manufacturing",
      content: [
  "• Unprecedented Growth:",
  "  • Surpassed 13 MTPA metal capacity – now producing:",
  "    • Steel for 6 Bandra-Worli Sea Links annually",
  "    • Enough reinforcement bars for 25 smart cities",
  "• Sustainable Power Solutions:",
  "  • 377 MW captive power capacity achieved",
  "  • Integrated 4 MW solar energy – reducing carbon footprint by 15,000 tons annually",
  "• Innovation Milestones:",
  "  • Coil TMT Technology:",
  "    • Revolutionizing construction with zero wastage solutions",
  "    • 20% cost savings for infrastructure developers",
  "  • Stainless Steel Re-Bars:",
  "    • Corrosion-resistant reinforcement designed for coastal projects",
  "    • First in Eastern India to introduce this premium product",
  "• Industry Recognition:",
  "  • Awarded Most Sustainable Steel Plant",
  "  • Certified for 7 new quality benchmarks"
]

    },
    {
      year: "2024",
      title: "Forging New Frontiers in Metal Manufacturing",
      content: [
  "• Diversification Breakthroughs:",
  "  • Food-Grade Aluminium Foils (40,000 TPA):",
  "    • Compliant with FDA & FSSAI standards",
  "    • Serving FMCG and pharmaceutical giants",
  "    • 30% more hygienic than imported alternatives",
  "  • Cold Rolling Mill Expansion:",
  "    • Producing premium color-coated/galvanized sheets",
  "    • Applications:",
  "      • Architectural cladding",
  "      • Automotive components",
  "      • Solar panel backing",
  "  • Stainless Steel Wire Rods & Bright Bars:",
  "    • Precision-engineered for aerospace and defense",
  "    • 0.01mm tolerance – among India's finest",
  "• Sustainable Growth:",
  "  • New DRI Plant (1.5 Lakh TPA):",
  "    • Direct Reduced Iron technology",
  "    • 35% lower emissions than traditional methods",
  "  • 20MW Captive Power Addition:",
  "    • Solar-biomass hybrid system",
  "    • Powers 8,000+ homes equivalent"
]

    },
    {
    year: "2025",
    title: "",
    content: []
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