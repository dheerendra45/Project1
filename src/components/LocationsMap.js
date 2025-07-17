import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import worldExport from "../assets/asia map.mp4";
import indiaMapVideo from "../assets/IndiaMap1.mp4";

function LocationsMap() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const worldVideoRef = useRef(null);
  const indiaVideoRef = useRef(null);

  // Handle video play/pause based on viewport only
  useEffect(() => {
    if (isInView) {
      if (worldVideoRef.current) {
        worldVideoRef.current.currentTime = 0;
        worldVideoRef.current.play().catch((e) => {
          console.log("World video play failed:", e);
        });
      }
      if (indiaVideoRef.current) {
        indiaVideoRef.current.currentTime = 0;
        indiaVideoRef.current.play().catch((e) => {
          console.log("India video play failed:", e);
        });
      }
    } else {
      if (worldVideoRef.current) {
        worldVideoRef.current.pause();
      }
      if (indiaVideoRef.current) {
        indiaVideoRef.current.pause();
      }
    }
  }, [isInView]);

  // Stats data
  const stats = [
    {
      label: " Clients Served",
      value: "25,000+ ",
      numericValue: 25000,
      symbol: "+",
      suffix: "(Domestic & Global)",
    },
    {
      label: "Annual Growth",
      value: "32% (Revenue: 12,500 Cr)",
      numericValue: 32,
      symbol: "%",
      suffix: "(Revenue: 12,500 Cr)",
    },
    {
      label: "Active Projects",
      value: "1,200+ (Incl. Govt. Infrastructure)",
      numericValue: 1200,
      symbol: "+",
      suffix: "(Incl. Govt. Infrastructure)",
    },
    {
      label: "Customer Satisfaction",
      value: "92% (Third-Party Survey)",
      numericValue: 92,
      symbol: "%",
      suffix: "(Third-Party Survey)",
    },
  ];

  // Track when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-[2%] px-[10%] bg-white font-inter"
      id="locations"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Title & Description with Button Row */}
        <motion.div
          className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                }
              : {}
          }
        >
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black-800 mb-2">
              Our Global Footprint
            </h2>
            <p className="text-gray-700 max-w-xl text-sm sm:text-base">
              Metric Verified Data (2023-24)
            </p>
          </div>
          <motion.button
            className="flex items-center bg-orange-500 text-white px-5 py-2 rounded border-2 border-white transition-colors self-start sm:self-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Global Presence
            <motion.span
              className="ml-2 bg-white text-orange-500 rounded border-2 w-6 h-6 flex items-center justify-center text-xl font-extrabold"
              animate={{
                x: [0, 5, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Animated Stats Row */}
        <div className="flex justify-center mb-10">
          <motion.div
            className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-y-4 px-4 sm:px-10 py-6 w-full max-w-[1160px] border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    },
                  }
                : {}
            }
          >
            {stats.map((stat, index) => (
              <StatCounter key={index} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Maps Section */}
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-4">
          {/* World Map with Heading */}
          <div className="lg:w-2/3">
            <motion.h3
              className="text-xl font-bold text-gray-800 mb-3 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.4 },
                    }
                  : {}
              }
            >
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              Countries We Export To
            </motion.h3>
            <motion.div
              className="shadow-md rounded-xl overflow-hidden border border-gray-300 h-[450px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.5 },
                    }
                  : {}
              }
            >
              <video
                ref={worldVideoRef}
                src={worldExport}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
              />
            </motion.div>
          </div>

          {/* India Map with Heading */}
          <div className="lg:w-1/3">
            <motion.h3
              className="text-xl font-bold text-gray-800 mb-3 flex items-center text-header-style "
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.6 },
                    }
                  : {}
              }
            >
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              Our Manufacturing Locations
            </motion.h3>
            <motion.div
              className="shadow-md rounded-xl overflow-hidden border border-gray-300 h-[450px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.7 },
                    }
                  : {}
              }
            >
              <video
                ref={indiaVideoRef}
                src={indiaMapVideo}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// StatCounter component
function StatCounter({ stat }) {
  const count = useCountUp(stat.numericValue, 2000, stat.index * 200);

  return (
    <div className="text-center px-2">
      <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-1">
        {count}
        <span className="text-orange-400">{stat.symbol}</span>
      </div>
      <div className="text-xs sm:text-sm text-gray-600">
        {stat.label}
        <br />
        <span className="text-gray-500 text-xs">{stat.suffix}</span>
      </div>
    </div>
  );
}

// useCountUp hook
function useCountUp(end, duration = 3000, delay = 0) {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const startTime = performance.now();
      const startValue = 0;

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const currentValue = Math.floor(
          startValue + (end - startValue) * easeOutCubic(progress)
        );

        setCount(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [end, duration, delay]);

  return count;
}

export default LocationsMap;
