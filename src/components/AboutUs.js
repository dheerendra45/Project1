import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import abt1img from "../assets/abt1.jpg";
import a1 from "../assets/aboutUs.png";
import a2 from "../assets/1.png";
import a3 from "../assets/2.png";
import a4 from "../assets/3.png";
import a5 from "../assets/4.png";
import a6 from "../assets/5.png";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const pauseTimeoutRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // [All your data arrays remain exactly the same...]
  const messages = [
    "Breaking Barriers",
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
    "Smart Steel for a Smarter World",
  ];

  const years = [
    "2005",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
  ];
  const galleryImages = [a2, a2, a3, a4, a5, a6, a6, a6, a2, a3, a4, a5, a2];
  const aboutImages = [
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
    abt1img,
  ];
  const yearContent = [
    {
      year: "2005",
      title: "Igniting India's Steel Revolution",
      content: [
        "• Commissioned our first Integrated Steel company unit",
        "• Achieved commercial production of 0.3 MTPA sponge iron",
        "• Implemented eco-conscious manufacturing processes",
        "Simultaneously at Jamuria:",
        "• Strengthened auxiliary production capabilities",
      ],
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
        "• Created 500+ skilled jobs in West Bengal",
      ],
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
        "• Achieved 92% workforce localization",
      ],
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
        "• Implemented waste-heat recovery systems – cutting carbon emissions",
      ],
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
        "• Implemented an AI-powered predictive maintenance system for enhanced reliability",
      ],
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
        "• Supplied critical materials for 12+ infrastructure projects",
      ],
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
        "• 94 MW power addition - equivalent to electrifying 45,000 homes",
      ],
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
        "• 2 Howrah Bridges every month",
        "• 50,000 km of rural roads annually",
      ],
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
        "• Vertical integration across steel plants in India",
        "• Visionary Shyam Metalics owner leadership",
        "• Strong fundamentals in India's steel sector",
      ],
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
        "Product Breakthroughs:",
        "• S-E-L Tiger TMT Re-Bars:",
        "• Earthquake-resistant reinforcement bars",
        "• IS 1786 certified, 15% stronger than industry standards",
        "• Tiger Grills N Steels:",
        "• Lightweight structural solutions for modern architecture",
        "• 30% faster installation than conventional materials",
      ],
    },
    {
      year: "2023",
      title: "Redefining Excellence in Steel Manufacturing",
      content: [
        "• Unprecedented Growth:",
        "• Surpassed 13 MTPA metal capacity – now producing:",
        "• Steel for 6 Bandra-Worli Sea Links annually",
        "• Enough reinforcement bars for 25 smart cities",
        "• Sustainable Power Solutions:",
        "• 377 MW captive power capacity achieved",
        "• Integrated 4 MW solar energy – reducing carbon footprint by 15,000 tons annually",
        "• Innovation Milestones:",
        "• Coil TMT Technology:",
        "• Revolutionizing construction with zero wastage solutions",
        "• 20% cost savings for infrastructure developers",
        "• Stainless Steel Re-Bars:",
        "• Corrosion-resistant reinforcement designed for coastal projects",
        "• First in Eastern India to introduce this premium product",
        "• Industry Recognition:",
        "• Awarded Most Sustainable Steel Plant",
        "• Certified for 7 new quality benchmarks",
      ],
    },
    {
      year: "2024",
      title: "Forging New Frontiers in Metal Manufacturing",
      content: [
        "• Diversification Breakthroughs:",
        "• Food-Grade Aluminium Foils (40,000 TPA):",
        "• Compliant with FDA & FSSAI standards",
        "• Serving FMCG and pharmaceutical giants",
        "• 30% more hygienic than imported alternatives",
        "• Cold Rolling Mill Expansion:",
        "• Producing premium color-coated/galvanized sheets",
        "• Applications:",
        "• Architectural cladding",
        "• Automotive components",
        "• Solar panel backing",
        "• Stainless Steel Wire Rods & Bright Bars:",
        "• Precision-engineered for aerospace and defense",
        "• 0.01mm tolerance – among India's finest",
        "• Sustainable Growth:",
        "• New DRI Plant (1.5 Lakh TPA):",
        "• Direct Reduced Iron technology",
        "• 35% lower emissions than traditional methods",
        "• 20MW Captive Power Addition:",
        "• Solar-biomass hybrid system",
        "• Powers 8,000+ homes equivalent",
      ],
    },
    {
      year: "2025",
      title: "Smart Steel for a Smarter World",
      content: [
        "Equivalent to producing steel for:",
        "• 4 Mumbai Coastal Roads annually",
        "• 80,000 metro rail coaches",
        "Product Breakthroughs:",
        "• S-E-L Tiger TMT Re-Bars:",
        "• Earthquake-resistant reinforcement bars",
        "• IS 1786 certified, 15% stronger than industry standards",
        "• Tiger Grills N Steels:",
      ],
    },
  ];

  // [All your yearContent data remains exactly the same...]

  const handleTimelineClick = (index) => {
    setActiveIndex(index);
    setProgress(index);
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  useEffect(() => {
    if (!isHovering && !isPaused) {
      progressIntervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1 / 30;

          if (newProgress >= galleryImages.length) {
            setActiveIndex(0);
            return 0;
          } else if (Math.floor(newProgress) > Math.floor(prevProgress)) {
            setActiveIndex(Math.floor(newProgress));
          }

          return newProgress;
        });
      }, 100);
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
    <div className="h-[94vh] flex flex-col overflow-hidden px-4 sm:px-6 lg:px-8 py-4 font-['Inter',sans-serif]">
      {/* Main Content Area - Two Columns */}
      <div className="flex flex-col lg:flex-row flex-grow gap-4 mb-2 overflow-hidden">
        {/* Left Column - About Text */}
        <div className="lg:w-1/2 flex flex-col h-full overflow-hidden">
          <h2 className="text-black-800 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 mt-1">
            Who We Are
          </h2>
          <h4 className="text-orange-500 text-xl sm:text-2xl lg:text-2xl font-semibold leading-snug mb-2 ">
            Engineering Bharat's Growth Since 1950s
          </h4>

          <div className="flex-grow overflow-y-auto pr-2 text-sm sm:text-base leading-relaxed space-y-3 text-justify">
            <p >
              Established in 1953, Shyam Metalics is one of India's leading
              steel producers of high-performance steel and ferro alloys that
              drive India's basic industries and infrastructure. Being the
              nation's sixth largest steel maker, our integrated business covers
              the entire steel value chain — from pellets and sponge iron to
              long steel products and aluminium foil.
            </p>
            <p>
              Our 15.13 MTPA of installed capacity, spread across seven
              strategically located manufacturing facilities, positions us in
              regional and national markets with scale, consistency, and speed.
              With the support of 376 MW of captive power, we are able to ensure
              consistent operations while minimizing external dependencies.
            </p>
            <p>
              A robust ESG foundation in place enables us to integrate
              sustainability into all our processes: right from zero liquid
              discharge systems to circular manufacturing practices. Our
              stakeholders, innovation, and operational flexibility drive us to
              become a future-proof organisation — one that expands responsibly,
              performs predictably, and creates long-term value for industries,
              communities, and the country.
            </p>
          </div>
        </div>

        {/* Right Column - Year Content */}
        <div className="lg:w-1/2 flex flex-col h-full overflow-hidden">
          {/* Large Image */}
          {/* <div className="w-full h-40 sm:h-48 mb-3 rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={`gallery-${activeIndex}`}
                src={aboutImages[activeIndex]}
                alt={`Gallery ${years[activeIndex]}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div> */}

          {/* Year Content */}
          <h2 className="text-black-800 text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            OUR JOURNEY
            </h2>
          <div className="flex-grow bg-white p-4 rounded-lg shadow-lg border border-orange-100 overflow-y-auto mt-1">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-orange-500 text-lg sm:text-xl font-bold mb-2">
                  {yearContent[activeIndex]?.year || years[activeIndex]}:{" "}
                  {yearContent[activeIndex]?.title}
                </h2>
                <div className="space-y-2 text-xs sm:text-sm">
                  {yearContent[activeIndex]?.content.map((item, i) => (
                    <p
                      key={i}
                      className={
                        item.startsWith("•") || item.startsWith("✓")
                          ? "pl-3"
                          : "font-medium"
                      }
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Timeline Section - Fixed at bottom */}
      <div className="relative h-20 sm:h-24 w-full mt-2">
        {/* Progress Line */}
        <div className="absolute left-0 right-0 h-1 bg-gray-300 top-1/2 transform -translate-y-1/2">
          <motion.div
            className="h-full bg-orange-500 absolute left-0 top-0"
            animate={{ width: `${(progress / galleryImages.length) * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Timeline Dots */}
        <div className="relative w-full h-full">
          {galleryImages.map((img, index) => {
            const isActive = index === activeIndex;
            const isPassed = index < progress;
            const position = `${(index / (galleryImages.length - 1)) * 100}%`;

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: position, top: "50%" }}
                onClick={() => handleTimelineClick(index)}
              >
                <motion.div
                  className="flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    setIsPaused(false);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Year Label */}
                  <div
                    className={`text-xs font-medium mb-1 ${
                      isPassed ? "text-orange-600" : "text-gray-500"
                    } ${isActive ? "font-bold" : ""}`}
                  >
                    {years[index]}
                  </div>

                  {/* Dot */}
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center relative z-10 ${
                      isActive
                        ? "bg-orange-500 ring-2 ring-orange-300"
                        : isPassed
                        ? "bg-orange-300"
                        : "bg-gray-300"
                    }`}
                  >
                    <img src={img} alt="" className="w-3 h-3 object-contain" />
                  </div>

                  {/* Active Message */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute bottom-full mb-1 bg-orange-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                    >
                      {messages[index]}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden mt-2">
        <div className="text-center mb-1">
          <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
            {messages[activeIndex]}
          </div>
          <div className="text-orange-600 font-medium text-sm mt-1">
            {years[activeIndex]}
          </div>
        </div>

        <div className="w-full overflow-x-auto pb-1">
          <div className="flex gap-2 min-w-max px-2">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 min-w-[36px]"
                onClick={() => handleTimelineClick(index)}
              >
                <div
                  className={`w-4 h-4 rounded-full mb-1 flex items-center justify-center ${
                    index <= progress
                      ? "bg-orange-500 border-2 border-orange-300"
                      : "bg-gray-300 border border-gray-400"
                  }`}
                >
                  <img src={img} alt="" className="w-2 h-2 object-contain" />
                </div>
                <div className="text-xs text-center">{years[index]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
