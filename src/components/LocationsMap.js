import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import worldExport from "../assets/worldExport1.mp4";

function LocationsMap() {
  const mapRef = useRef(null);
  const sectionRef = useRef(null);
  const [map, setMap] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);

  // Handle component hover for video play
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to start
      videoRef.current.play().catch((e) => {
        console.log("Video play failed:", e);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  // Stats data with enhanced values (removed icons)
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

  // Plant locations data
  const plantLocations = [
    {
      id: 1,
      name: "SMEL Sambalpur Plant",
      address:
        "Vill- Pandloi, P.O - Lapanga, beside Rengali, Sambalpur 768212, Odisha",
      lat: 21.4669,
      lng: 83.9812,
      type: "SMEL",
    },
    {
      id: 2,
      name: "SSPL Jamuria Plant",
      address:
        "Village: Dasna, P.S: Jamuria, P.O: Bahadurpur, District: Paschim Bardhaman, West Bengal - 713362",
      lat: 23.7022,
      lng: 87.0841,
      type: "SSPL",
    },
    {
      id: 3,
      name: "SSPL Pakuria Plant",
      address:
        "NH-6, Domjur, Pakuria, Lakshmanpur, Howrah, West Bengal – 711114",
      lat: 22.6203,
      lng: 88.1821,
      type: "SSPL",
    },
    {
      id: 4,
      name: "SSPL Mangalpur Plant",
      address:
        "G-6, Mangalpur Industrial Estate, P.O.-Baktarnagar, P.S.- Raniganj, Dist. -Paschim Bardhaman, Pin-713347",
      lat: 23.6276,
      lng: 87.1245,
      type: "SSPL",
    },
    {
      id: 5,
      name: "RIL Kharagpur Plant",
      address:
        "Saha Chowk, Rakha Jungle, Kharagpur, Paschim Midnapur, West Bengal – 721301",
      lat: 22.3464,
      lng: 87.232,
      type: "RIL",
    },
    {
      id: 6,
      name: "SSPL Indore Plant",
      address:
        "Plot No. 164C, Industrial Area, Pithampur Industrial Area, Madhya Pradesh – 454774",
      lat: 22.5937,
      lng: 75.7004,
      type: "SSPL",
    },
    {
      id: 7,
      name: "Shree Venkateswara Electrocast Pvt. Ltd.",
      address: "Tundi Road, Bhorandiha, Giridih - 815301 (JH)",
      lat: 24.1854,
      lng: 86.2998,
      type: "Subsidiary",
    },
  ];

  // Enhanced count-up animation with smooth restart functionality
  const useCountUp = (end, duration = 3000, delay = 0) => {
    const [count, setCount] = useState(0);
    const animationRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
      // Clear any existing animations and timeouts
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (isInView) {
        // Reset count immediately when coming into view
        setCount(0);

        // Start the animation after delay
        timeoutRef.current = setTimeout(() => {
          const startTime = performance.now();
          const startValue = 0;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth easing function (ease-out-cubic)
            const easeOutCubic = (t) => {
              return 1 - Math.pow(1 - t, 3);
            };

            const currentValue = Math.floor(
              startValue + (end - startValue) * easeOutCubic(progress)
            );

            setCount(currentValue);

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            } else {
              setCount(end);
              animationRef.current = null;
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        }, delay);
      } else {
        // Reset count when out of view
        setCount(0);
      }

      // Cleanup function
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    }, [end, duration, delay, isInView]);

    return count;
  };

  // Track when section comes into view with enhanced options
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Trigger a bit before the section is fully visible
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

  // Load Leaflet CSS and JS
  useEffect(() => {
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
        document.head.appendChild(cssLink);
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);
      } else {
        setIsLoaded(true);
      }
    };

    loadLeaflet();
  }, []);

  // Initialize map when Leaflet is loaded
  useEffect(() => {
    if (isLoaded && mapRef.current && !map && window.L) {
      // Calculate bounds to fit all plant locations
      const bounds = window.L.latLngBounds(
        plantLocations.map((plant) => [plant.lat, plant.lng])
      );

      // Initialize the map with bounds that show all plants
      const leafletMap = window.L.map(mapRef.current, {
        center: [23.5937, 78.9629], // Center of India
        zoom: 5,
        minZoom: 4, // Minimum zoom to keep focus on India
        maxZoom: 12, // Maximum zoom for detailed view
        zoomControl: true,
        scrollWheelZoom: true,
      });

      // Add tile layer (OpenStreetMap)
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(leafletMap);

      // Fit map to show all plant locations with padding
      leafletMap.fitBounds(bounds, { padding: [30, 30] });

      setMap(leafletMap);

      // Create custom icon
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background-color: #f97316;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          ">
            <div style="
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 50%;
            "></div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      // Add markers for each plant
      plantLocations.forEach((plant) => {
        const marker = window.L.marker([plant.lat, plant.lng], {
          icon: customIcon,
          title: plant.name,
        }).addTo(leafletMap);

        // Create popup content
        const popupContent = `
          <div style="font-family: Inter, sans-serif; max-width: 280px;">
            <h3 style="color: #f97316; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">
              ${plant.name}
            </h3>
            <div style="margin-bottom: 8px;">
              <span style="
                background-color: #fed7aa;
                color: #c2410c;
                font-size: 11px;
                padding: 2px 8px;
                border-radius: 12px;
                font-weight: 600;
              ">
                ${plant.type}
              </span>
            </div>
            <p style="color: #374151; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
              ${plant.address}
            </p>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 8px;">
              <a href="https://www.google.com/maps/search/?api=1&query=${plant.lat},${plant.lng}" 
                 target="_blank" 
                 style="color: #f97316; font-size: 12px; font-weight: 600; text-decoration: none;">
                Get Directions →
              </a>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: "custom-popup",
        });

        // Add hover effect
        marker.on("mouseover", function () {
          this.openPopup();
        });
      });
    }
  }, [isLoaded, map]);

  // Stat counter component with enhanced animations (removed icons)
  const StatCounter = ({ stat, index }) => {
    const count = useCountUp(stat.numericValue, 3000, index * 200);

    return (
      <motion.div
        className="flex flex-col items-center text-center px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }
            : { opacity: 0, y: 20 }
        }
      >
        <motion.div
          className="text-orange-600 text-lg sm:text-xl font-extrabold"
          animate={
            isInView
              ? {
                  scale: [1, 1.1, 1],
                  transition: {
                    delay: index * 0.2 + 0.5,
                    duration: 0.8,
                    repeat: 1,
                    repeatType: "reverse",
                  },
                }
              : {}
          }
        >
          <div>
            {count.toLocaleString()}
            {stat.symbol}
          </div>
          <div className="text-xs font-medium text-gray-600 mt-1">
            {stat.suffix}
          </div>
        </motion.div>
        <p className="text-gray-700 text-xs sm:text-sm font-semibold mt-1">
          {stat.label}
        </p>
      </motion.div>
    );
  };
  return (
    <div
      ref={sectionRef}
      className="py-16 px-4 bg-white font-inter"
      id="locations"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
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
            className="flex items-center bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition-colors self-start sm:self-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Global Presence
            <motion.span
              className="ml-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-xl font-extrabold"
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
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
          {/* World Map with Heading */}
          <div className="lg:w-3/5">
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
              className="shadow-md rounded-xl overflow-hidden border border-gray-300"
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
              {/* <img 
                src={WorldMapImage} 
                alt="World Map" 
                className="w-full object-cover"
              /> */}
              <video
                ref={videoRef}
                src={worldExport}
                className="w-full object-cover"
                muted
                playsInline
              />
            </motion.div>
          </div>

          {/* India Map with Heading */}
          <div className="lg:w-2/5">
            <motion.h3
              className="text-xl font-bold text-gray-800 mb-3 flex items-center"
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
              className="relative shadow-md rounded-xl overflow-hidden border border-gray-300 z-10 h-96"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.7 },
                    }
                  : {}
              }
            >
              {!isLoaded ? (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    />
                    <p className="text-gray-600">Loading Interactive Map...</p>
                  </div>
                </div>
              ) : (
                <div ref={mapRef} className="w-full h-full" />
              )}

              {/* Map Legend */}
              <motion.div
                className="absolute bottom-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]"
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        transition: { delay: 1.2 },
                      }
                    : {}
                }
              >
                <h4 className="font-semibold text-sm text-gray-800 mb-2">
                  Plant Locations
                </h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2 border border-white"></div>
                    <span className="text-gray-700">Manufacturing Plants</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">
                    Hover/Click for details
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Plant List for Mobile */}
        <motion.div
          className="mt-8 lg:hidden"
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: { delay: 0.8 },
                }
              : {}
          }
        >
          <h3 className="text-xl font-bold text-black mb-4">
            Our Plant Locations
          </h3>
          <div className="grid gap-4">
            {plantLocations.map((plant, index) => (
              <motion.div
                key={plant.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.9 + index * 0.1 },
                      }
                    : {}
                }
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-orange-600">
                    {plant.name}
                  </h4>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {plant.type}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{plant.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${plant.lat},${plant.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-semibold mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for better popup styling */}
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .custom-popup .leaflet-popup-tip {
          background-color: white;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}

export default LocationsMap;
