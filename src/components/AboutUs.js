import React from "react";
import { useRef, useEffect, useState, useCallback } from "react";
import { Factory, Zap, Users, Package, Globe, Leaf } from "lucide-react";
import vector8 from "../assets/Vector8.png";
import ab1 from "../assets/ab1.jpg";
import ab2 from "../assets/ab2.png";
// import AnimatedText from "./Styless";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/Icon 4.png";
import icon5 from "../assets/Icon 5.png";
import icon6 from "../assets/icon6.png";

export default function ShyamMetalicsProfile() {
  const milestones1 = [
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam DI and Shyam Alloy",
    },
  ];

  const capabilities = [
    {
      icon: icon1,
      title: "Leading Sponge Iron & Pellet Producers",
      color: "text-orange-600",
    },
    {
      icon: icon2,
      title: "Integrated Steel Powerhouse",
      color: "text-blue-600",
    },
    {
      icon: icon3,
      title: "Leading Ferro Alloys Producer",
      color: "text-gray-700",
    },
    {
      icon: icon4,
      title: "Major Aluminium Foil Exporter",
      color: "text-orange-600",
    },
    {
      icon: icon5,
      title: "Future-Ready & Globally Aligned",
      color: "text-orange-600",
    },
    {
      icon: icon6,
      title: "Driven by Sustainability & Governance",
      color: "text-orange-600",
    },
  ];
  const milestones = [
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      description:
        "Started our journey with the incorporation of Shyam SEL and Power Ltd, marking the beginning of our industrial legacy.",
      image: ab2,
    },
    {
      year: "1995",
      title: "Expansion Phase",
      subtitle: "First Manufacturing Unit",
      description:
        "Established our first manufacturing unit with state-of-the-art technology and equipment.",
      image: ab2,
    },
    {
      year: "2000",
      title: "Technology Advancement",
      subtitle: "Modernization Initiative",
      description:
        "Implemented cutting-edge technology to improve production efficiency and product quality.",
      image: ab2,
    },
    {
      year: "2005",
      title: "Market Leadership",
      subtitle: "Industry Recognition",
      description:
        "Achieved significant market share and received multiple industry awards for excellence.",
      image: ab2,
    },
    {
      year: "2010",
      title: "Global Expansion",
      subtitle: "International Markets",
      description:
        "Expanded operations to international markets and established global partnerships.",
      image: ab2,
    },
    {
      year: "2015",
      title: "Innovation Hub",
      subtitle: "R&D Center Launch",
      description:
        "Launched our dedicated R&D center to foster innovation and develop new products.",
      image: ab2,
    },
    {
      year: "2018",
      title: "Sustainability Focus",
      subtitle: "Green Initiative",
      description:
        "Implemented comprehensive sustainability programs and eco-friendly processes.",
      image: ab2,
    },
    {
      year: "2020",
      title: "Digital Transformation",
      subtitle: "Industry 4.0 Adoption",
      description:
        "Embraced digital technologies and automated processes for enhanced efficiency.",
      image: ab2,
    },
    {
      year: "2021",
      title: "Strategic Partnerships",
      subtitle: "Global Alliances",
      description:
        "Formed strategic partnerships with leading global companies to expand our reach.",
      image: ab2,
    },
    {
      year: "2022",
      title: "Product Diversification",
      subtitle: "New Product Lines",
      description:
        "Launched new product lines to meet evolving market demands and customer needs.",
      image: ab2,
    },
    {
      year: "2023",
      title: "Market Excellence",
      subtitle: "Industry Leadership",
      description:
        "Achieved market leadership position with record-breaking sales and customer satisfaction.",
      image: ab2,
    },
    {
      year: "2024",
      title: "Future Vision",
      subtitle: "Next Generation Solutions",
      description:
        "Developing next-generation solutions for future market requirements and challenges.",
      image: ab2,
    },
    {
      year: "2025",
      title: "Innovation Drive",
      subtitle: "Advanced Technologies",
      description:
        "Investing in advanced technologies like AI and IoT for smart manufacturing solutions.",
      image: ab2,
    },
    {
      year: "2026",
      title: "Global Leader",
      subtitle: "Market Domination",
      description:
        "Aspiring to become the global leader in our industry segment with innovative products.",
      image: ab2,
    },
    {
      year: "2027",
      title: "Sustainable Future",
      subtitle: "Carbon Neutral Goals",
      description:
        "Working towards achieving carbon neutrality and sustainable business practices.",
      image: ab2,
    },
  ];

  const [visibleWords, setVisibleWords] = useState(0);
  const sectionRef = useRef(null);
  const [showFutureTimeline, setShowFutureTimeline] = useState(false);
  const filteredMilestones = showFutureTimeline
    ? milestones.filter((m) => parseInt(m.year) >= 2023)
    : milestones;
  const getVisibleMilestones1 = () => {
    const visible = [];
    for (let i = 0; i < 11; i++) {
      const index = (currentIndex + i) % filteredMilestones.length;
      visible.push({ ...filteredMilestones[index], originalIndex: index });
    }
    return visible;
  };

  const paragraph1 =
    "Shyam Metalics is one of India's fastest-growing and most trusted integrated metal producers, with a diversified portfolio spanning carbon steel, stainless steel, ferro alloys, aluminium foil, and long steel products. Headquartered in Kolkata and driven by the ethos of 'Made in India, Made for Bharat,' we are committed to shaping the nation's infrastructure and industrial future through sustainable and scalable growth.";
  const paragraph2 =
    "As a diversified metal conglomerate, Shyam Metalics operates with a fully integrated ore-to-metal manufacturing model, supported by 83% captive power generation and state-of-the-art facilities strategically located across India's key industrial hubs. Our operations are anchored in engineering excellence, operational efficiency, and robust forward and backward integration, ensuring unmatched product quality, consistency, and cost competitiveness.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Calculate total words when component is visible
          const totalWords =
            paragraph1.split(" ").length + paragraph2.split(" ").length;
          let currentWord = 0;

          const interval = setInterval(() => {
            currentWord += 1;
            setVisibleWords(currentWord);

            if (currentWord >= totalWords) {
              clearInterval(interval);
            }
          }, 50); // Faster animation (50ms per word)

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
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

  const AnimatedParagraph = ({ text, startCount }) => {
    const words = text.split(" ");

    return (
      <p className="mb-4 text-gray-700 whitespace-normal">
        {words.map((word, index) => {
          const globalIndex = startCount + index;
          return (
            <React.Fragment key={index}>
              <span
                className={`inline transition-opacity duration-100 ${
                  globalIndex < visibleWords ? "opacity-100" : "opacity-0"
                }`}
              >
                {word}
              </span>{" "}
              {/* Explicit space between words */}
            </React.Fragment>
          );
        })}
      </p>
    );
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [animationOffset, setAnimationOffset] = useState(0);
  const intervalRef = useRef(null);
  const [clickedMilestone, setClickedMilestone] = useState(null);
  // Auto-scroll functionality with smooth continuous animation
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setAnimationOffset((prev) => prev - 0.5);
        if (Math.abs(animationOffset) >= 100) {
          setAnimationOffset(0);
          setCurrentIndex((prev) => {
            const maxIndex = filteredMilestones.length - 11;
            return prev >= maxIndex ? 0 : prev + 1;
          });
        }
      }, 30);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, animationOffset, filteredMilestones.length]);
  // Get visible milestones (11 items)
  const getVisibleMilestones = () => {
    const visible = [];
    for (let i = 0; i < 11; i++) {
      const index = (currentIndex + i) % filteredMilestones.length;
      visible.push({ ...filteredMilestones[index], originalIndex: index });
    }
    return visible;
  };

  const visibleMilestones = getVisibleMilestones();

  // Handle hover events - IMPROVED
  const handleCardClick = (milestone) => {
    setClickedMilestone(milestone);
    setIsPaused(true);
  };

  // 3. Update the popup close handler
  const closePopup = () => {
    setClickedMilestone(null);
    setIsPaused(false);
  };

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = milestones.length - 11;
      return prev <= 0 ? maxIndex : prev - 1;
    });
    setAnimationOffset(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = milestones.length - 11;
      return prev >= maxIndex ? 0 : prev + 1;
    });
    setAnimationOffset(0);
  };

  return (
    <div className="max-w-7xl  mx-[10%] py-[2%] bg-white" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-gray-900  text-header-style mb-2 text-3xl font-semibold">
              Who are <span className="text-orange-500">we?</span>
            </h1>
          </div>

          <div>
            <h2 className="text-orange-500 text-header-style   mb-2 text-2xl font-semibold">
              Shyam Metalics:{" "}
              <span className="text-gray-900">
                India's Leading Integrated Metal Conglomerate
              </span>
            </h2>

            <AnimatedParagraph text={paragraph1} startCount={0} />
            <AnimatedParagraph
              text={paragraph2}
              startCount={paragraph1.split(" ").length}
            />

            <div className="mt-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Read More →
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Industrial Image */}
        <div className="relative h-full min-h-[386px]">
          <img
            src={ab1}
            alt="Industrial Background"
            className="w-full h-full object-cover rounded-lg"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
        </div>
      </div>
      {/* Capabilities Grid */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-center mb-3">
              {/* Use img tag instead of component */}
              <img
                src={capability.icon}
                alt={capability.title}
                className="w-[42px] h-[43px]"
              />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 leading-tight">
              {capability.title}
            </h4>
          </div>
        ))}
      </div>

      <div className="relative w-full h-[450px] overflow-hidden">
        {/* Vector arrow background */}
        <img
          src={vector8}
          alt="arrow"
          className="absolute top-1/2 left-0 w-[calc(100%+120px)] h-[65px] transform -translate-y-1/2 object-cover z-0"
        />

        {/* Top vertical lines and milestone containers */}
        <div
          className="absolute inset-0 transition-transform duration-75 ease-linear"
          style={{
            transform: `translateX(${animationOffset}px)`,
          }}
        >
          {/* Top vertical lines and milestone containers - ORIGINAL LAYOUT */}
          <div
            className="absolute left-[-60px] w-full flex justify-around items-end px-2 z-10"
            style={{ bottom: "calc(50% + 10px)" }}
          >
            {visibleMilestones.slice(0, 6).map((milestone, i) => (
              <div
                key={`top-${milestone.originalIndex}`}
                className="relative transition-all duration-300 ease-in-out"
                style={{
                  width: "1.5px",
                  height: i % 2 === 0 ? "211px" : "111px",
                }}
              >
                {/* Vertical line */}
                <div className="absolute bottom-0 w-full h-full bg-black"></div>

                {/* Milestone container - Wrapped in a div that handles hover */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCardClick(milestone)}
                >
                  <div
                    className={`absolute bg-white transition-all duration-300 cursor-pointer ${
                      hoveredMilestone?.originalIndex ===
                      milestone.originalIndex
                        ? "scale-110 border-orange-500 shadow-xl"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                    style={{
                      width: i % 2 === 0 ? "139.68px" : "124.82px",
                      height: i % 2 === 0 ? "182.77px" : "90px",
                      left: "5px",
                      top: i % 2 === 0 ? "px" : "5px",
                      borderRadius: "3.71px",
                    }}
                  >
                    {/* Text content */}
                    <div className="p-2">
                      <div className="text-orange-500 font-bold text-sm mb-1">
                        {milestone.year}
                      </div>
                      <div className="text-gray-900 font-semibold text-xs mb-1 leading-tight">
                        {milestone.title}
                      </div>
                      <div className="text-gray-600 text-xs leading-tight">
                        {milestone.subtitle}
                      </div>
                    </div>

                    {/* Image container (only for big containers) */}
                    {i % 2 === 0 && (
                      <div
                        className="absolute overflow-hidden"
                        style={{
                          width: "126.31px",
                          height: "77.27px",
                          left: "5px",
                          top: "105.5px",
                          borderRadius: "3.71px",
                        }}
                      >
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom vertical lines and milestone containers - ORIGINAL LAYOUT */}
          <div
            className="absolute left-[-150px] w-full flex justify-around items-start px-2 z-10"
            style={{
              top: "calc(50% + 10px)",
              transform: "translateX(calc(100% / 12))",
            }}
          >
            {visibleMilestones.slice(6, 11).map((milestone, i) => (
              <div
                key={`bottom-${milestone.originalIndex}`}
                className="relative transition-all duration-300 ease-in-out"
                style={{
                  width: "1.5px",
                  height: i % 2 === 0 ? "211px" : "111px",
                }}
              >
                {/* Vertical line */}
                <div className="absolute top-0 w-full h-full bg-black"></div>

                {/* Milestone container - Wrapped in a div that handles hover */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCardClick(milestone)}
                >
                  <div
                    className={`absolute bg-white  transition-all duration-300 cursor-pointer ${
                      hoveredMilestone?.originalIndex ===
                      milestone.originalIndex
                        ? "scale-110 border-orange-500 shadow-xl"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                    style={{
                      width: i % 2 === 0 ? "139.68px" : "124.82px",
                      height: i % 2 === 0 ? "182.77px" : "90px",
                      left: "5px",
                      top: "10px",
                      borderRadius: "3.71px",
                    }}
                  >
                    {/* Text content */}
                    <div className="p-2">
                      <div className="text-orange-500 font-bold text-sm mb-1">
                        {milestone.year}
                      </div>
                      <div className="text-gray-900 font-semibold text-xs mb-1 leading-tight">
                        {milestone.title}
                      </div>
                      <div className="text-gray-600 text-xs leading-tight">
                        {milestone.subtitle}
                      </div>
                    </div>

                    {/* Image container (only for big containers) */}
                    {i % 2 === 0 && (
                      <div
                        className="absolute overflow-hidden"
                        style={{
                          width: "126.31px",
                          height: "77.27px",
                          left: "5px",
                          top: "105.5px",
                          borderRadius: "3.71px",
                        }}
                      >
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated dots on the arrow */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-[180px] flex justify-between px-2 z-10">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="w-[10px] h-[1px] bg-white animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>

        {/* Future label */}
        <span
          className="absolute right-[70px] top-1/2 transform -translate-y-1/2 text-white text-base font-bold z-10 cursor-pointer hover:text-orange-300 transition-colors"
          onClick={() => {
            setShowFutureTimeline(!showFutureTimeline);
            setCurrentIndex(0); // Reset to first item
            setAnimationOffset(0); // Reset animation
          }}
        >
          {showFutureTimeline ? "Future" : "Future"}
        </span>

        {/* Navigation arrows */}

        {/* Progress indicator */}
      </div>

      {/* Fixed Popup - PROPER CLOSE FUNCTIONALITY */}
      {clickedMilestone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-orange-500 font-bold text-lg mb-1">
                  {clickedMilestone.year}
                </h3>
                <h4 className="text-gray-900 font-semibold text-base mb-2">
                  {clickedMilestone.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {clickedMilestone.subtitle}
                </p>
              </div>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold transition-colors duration-200 p-4"
              >
                ×
              </button>
            </div>
            {clickedMilestone.image && (
              <img
                src={clickedMilestone.image}
                alt={clickedMilestone.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-gray-700 text-sm leading-relaxed">
              {clickedMilestone.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
