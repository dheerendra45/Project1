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

// milestones image
import Img1991 from "../assets/aboutus/Picture 1, 1991-min.png";
import Img2001 from "../assets/aboutus/Picture 2 2001 (Mangalpur Plant)-min.jpg";
import Img2013 from "../assets/aboutus/Picture 3 2013 (Sambalpur)-min.jpeg";
import Img2013New from "../assets/aboutus/Picture 4 2013 (Jamuria Plant)-min.jpg";

import Img2014 from "../assets/aboutus/Picture 5 2014 (Ferro)-min.jpg";
import Img2015 from "../assets/aboutus/Picture 6,  2015 (Sambalpur Plant)-min.jpg";
import Img2019 from "../assets/aboutus/Picture 8, 2019 (TMT Bar)-min.jpg";
import Img2021 from "../assets/aboutus/Picture 9,  2021 Wire Rod 2-min.jpg";
import Img2024 from "../assets/aboutus/Picture 10,  CRM 2024-min.jpg";

export default function ShyamMetalicsProfile() {
  const milestones = [
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      description: "Incorporation of Shyam SEL and Power Ltd.",
      image: Img1991,
    },
    {
      year: "2002",
      title: "The First Spark",
      subtitle: "Mangalpur Plant",
      description:
        "• Mangalpur Plant:\n  • Commercial production started at the Sponge Iron plant (0.6 MTPA)",
      image: Img2001,
    },
    {
      year: "2013",
      title: "Building the Foundation",
      subtitle: "Sambalpur Plant",
      description:
        "• Sambalpur Plant:\n • Commercial production started at the Sponge Iron plant (0.3 MTPA)\n• Jamuria Plant:\n  • Started production of Sponge Iron, Iron Pellets, and Billets (0.6 MTPA)",
      image: Img2013,
    },
    {
      year: "2013",
      title: "Jamuria Plant Expansion",
      subtitle: "Jamuria Plant",
      description:
        "• Jamuria Plant:\n  • Started production of Sponge Iron, Iron Pellets, and Billets (0.6 MTPA)",
      image: Img2013New,
    },
    {
      year: "2014",
      title: "Integrating Strength",
      subtitle: "Sambalpur Plant",
      description:
        "• Sambalpur Plant:\n  • Commissioned the first Ferro Alloy unit\n  • Sponge Iron upgraded by 0.3 MTPA\n• Jamuria Plant:\n  • Captive Railway Siding established",
      image: Img2014,
    },
    {
      year: "2015",
      title: "Infrastructure in Motion",
      subtitle: "Sambalpur Plant",
      description:
        "• Sambalpur Plant:\n  • Railway siding operationalized\n• Jamuria Plant:\n  • Commissioned another Captive Power Plant\n  • Complete integration of Sponge Iron, Billets, and Ferro Alloys\n  • Capacity increased by 0.9 MTPA",
      image: Img2015,
    },
    {
      year: "2016",
      title: "Scaling New Heights",
      subtitle: "Sambalpur Plant",
      description:
        "• Sambalpur Plant:\n  • Billet capacity increased by 0.27 MTPA\n• Jamuria Plant:\n  • Iron Pellets and Billets capacity enhanced by 0.60 MTPA",
    },
    {
      year: "2017",
      title: "Powering Progress",
      subtitle: "Sambalpur Plant",
      description:
        "• Sambalpur Plant:\n  • Capacity expansion of Sponge Iron and Billets by 0.67 MTPA\n• Crossing the 2.60 MTPA Milestone:\n  • Total Metalics' capacity reached 2.60 MTPA",
    },
    {
      year: "2019",
      title: "Strengthening the Core",
      subtitle: "Sambalpur Plant",
      description:
        "• Sambalpur Plant:\n  • Expansion in Sponge Iron, TMT, and Wire Rods by 1.81 MTPA\n• Jamuria Plant:\n  • Upgraded key facilities and added 15 MW Captive Power",
      image: Img2019,
    },
    {
      year: "2020",
      title: "Resilience and Renewal",
      subtitle: "Sambalpur Plant",
      description:
        "• Sambalpur Plant:\n  • Pellet production capacity increased by 1.2 MTPA; commissioned a new 14 MW captive power plant\n• Jamuria Plant:\n  • WHRS & Power expansion\n  • Total Metalics' capacity reached 5.71 MTPA",
    },
    {
      year: "2021",
      title: "Emerging Stronger",
      subtitle: "-",
      description:
        "• Expanded TMT & Wire Rod capacities\n• Launched Aluminium Foil line (4000 TPA)\n• Listed on NSE and BSE, marking a new chapter of trust",
      image: Img2021,
    },
    {
      year: "2022",
      title: "Diversifying the Future",
      subtitle: "-",
      description:
        "• TMT Bar capacity touched 1.17 MTPA\n• Introduced Roofing Sheets and High Mast Poles\n• Expanded Aluminium Foil production\n• Broadened product offerings",
    },
    {
      year: "2023",
      title: "Innovating for Tomorrow",
      subtitle: "-",
      description:
        "• Metal capacity increased to 6.37 MTPA\n• Launched Crash Barriers and Railway Wagons\n• Zero-Waste Aluminium Foil line commissioned\n• Exports expanded to 25+ countries\n• GreenPro certified, Great Place to Work, and National Export Award recipient",
    },
    {
      year: "2024",
      title: "Leading with Purpose",
      subtitle: "-",
      description:
        "• Forayed into Food Grade Aluminium Foils\n• Commissioned Colour-Coated Roofing Sheet mill\n• Scaling Railway Wagons and High Mast Poles\n• First in Eastern India with an Integrated Wagon facility\n• Certified Clean & Green Manufacturer",
      image: Img2024,
    },
    {
      year: "2025",
      title: "Scaling with Next-Gen Transformation",
      subtitle:
        "Taratala Corporate HQ, Aluminium Division, Kharagpur Plant, Ductile Iron & Steel Production, Jamuria Plant, Brand Expansion",
      description:
        "• Taratala Corporate HQ:\n  • Established a new 3-acre Corporate Headquarters in Kolkata\n• Aluminium Division:\n  • Broadened product portfolio with the addition of battery foil and flat rolled aluminium products\n• Kharagpur Plant (Greenfield Project):\n  • Started construction of Wagon Manufacturing Plant with a capacity of 4,800 wagons per year\n  • 85% of the power requirement was met via captive generation\n• Ductile Iron & Steel Production:\n  • Commissioned new lines for DI Pipes, Sponge Iron, Billets, and Color-Coated Sheets\n• Jamuria Plant:\n  • Introduced the Cold Rolling Mill project (0.25 MTPA) under the PLI scheme\n• Brand Expansion:\n  • Introduced 4 new SEL Tiger roofing sheet brands such as Royale, Elite, Azure, and Alfa",
    },
    {
      year: "Upcoming",
      title: "Plan for Upcoming Years…",
      subtitle:
        "Product Diversification, Nation-Building Contribution, Market Expansion, Sustainability Commitment, Smart Operations",
      description:
        "• Product Diversification:\n  • Focus on high-margin, value-added products such as stainless steel flats, aluminium battery foil, CR coils, and DI pipes\n• Nation-Building Contribution:\n  • Commitment to national infrastructure development\n• Market Expansion:\n  • Outreach into newer Indian states with a focus on retail penetration, branding, and distribution scale-up\n• Sustainability Commitment:\n  • Advance the 100 MW solar plant expansion and enhanced use of waste heat recovery systems\n• Smart Operations:\n  • Incorporate smart technologies in operations and supply chain to boost cost-efficiency and productivity",
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

  const [visibleWords, setVisibleWords] = useState(0);
  const sectionRef = useRef(null);
  const [showFutureTimeline, setShowFutureTimeline] = useState(false);

  // Updated state for smooth dragging
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedMilestone, setClickedMilestone] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const [smoothCarPosition, setSmoothCarPosition] = useState(0);
  const sliderRef = useRef(null);

  const paragraph1 =
    "Shyam Metalics is one of India's fastest-growing and most trusted integrated metal producers, with a diversified portfolio spanning carbon steel, stainless steel, ferro alloys, aluminium foil, and long steel products. Headquartered in Kolkata and driven by the ethos of 'Made in India, Made for Bharat,' we are committed to shaping the nation's infrastructure and industrial future through sustainable and scalable growth.";
  const paragraph2 =
    "As a diversified metal conglomerate, Shyam Metalics operates with a fully integrated ore-to-metal manufacturing model, supported by 83% captive power generation and state-of-the-art facilities strategically located across India's key industrial hubs. Our operations are anchored in engineering excellence, operational efficiency, and robust forward and backward integration, ensuring unmatched product quality, consistency, and cost competitiveness.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const totalWords =
            paragraph1.split(" ").length + paragraph2.split(" ").length;
          let currentWord = 0;

          const interval = setInterval(() => {
            currentWord += 1;
            setVisibleWords(currentWord);
            if (currentWord >= totalWords) {
              clearInterval(interval);
            }
          }, 50);

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
            </React.Fragment>
          );
        })}
      </p>
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
    setCarPosition(0);
    setSmoothCarPosition(0);
  }, [showFutureTimeline]);

  const filteredMilestones = showFutureTimeline
    ? milestones.filter((m) => parseInt(m.year) >= 2023)
    : milestones;

  const maxIndex = Math.max(0, filteredMilestones.length - 11);
  const sliderWidth = 400;

  const getSmoothVisibleMilestones = () => {
    const visible = [];
    const totalMilestones = filteredMilestones.length;
    const exactPosition = (smoothCarPosition / sliderWidth) * totalMilestones;
    const baseIndex = Math.floor(exactPosition);
    const fraction = exactPosition - baseIndex;

    // 14 cards (11 visible + buffer)
    for (let i = -1; i < 13; i++) {
      const index = (baseIndex + i + totalMilestones) % totalMilestones;
      const milestone = { ...filteredMilestones[index], originalIndex: index };

      milestone.opacity = 1;
      milestone.scale = 1;
      milestone.translateX = -fraction * (100 / 11);

      if (i === -1) {
        milestone.opacity = Math.max(0, 1 - fraction * 1.5);
        milestone.scale = Math.max(0.7, 1 - fraction * 0.3);
      } else if (i === 11) {
        milestone.opacity = Math.max(0, fraction * 1.5);
        milestone.scale = Math.max(0.7, 0.7 + fraction * 0.3);
      } else if (i === 12) {
        milestone.opacity = 0;
        milestone.scale = 0.7;
      }

      visible.push(milestone);
    }

    return visible;
  };

  const visibleMilestones = getSmoothVisibleMilestones();

  const handleCardClick = (milestone) => {
    setClickedMilestone(milestone);
  };

  const closePopup = () => {
    setClickedMilestone(null);
  };

  // Only start drag if mousedown is on the Drag text
  const handleMouseDown = (e) => {
    if (dragTextRef.current && dragTextRef.current.contains(e.target)) {
      setIsDragging(true);
      setDragStartX(e.clientX);
      e.preventDefault();
    }
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStartX;
      const newSmoothPosition = Math.max(
        0,
        Math.min(sliderWidth, smoothCarPosition + deltaX)
      );

      setSmoothCarPosition(newSmoothPosition);
      setDragStartX(e.clientX);

      const newIndex = Math.round((newSmoothPosition / sliderWidth) * maxIndex);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= maxIndex) {
        setCurrentIndex(newIndex);
        setCarPosition(newSmoothPosition);
      }
    },
    [
      isDragging,
      dragStartX,
      smoothCarPosition,
      sliderWidth,
      maxIndex,
      currentIndex,
    ]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Orange circle with white 'Drag' text, only the text is draggable
  const dragTextRef = useRef(null);
  const CarSVG = () => (
    <div style={{ position: "relative", width: 48, height: 48 }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "orange",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <span
          ref={dragTextRef}
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            textAlign: "center",
            lineHeight: 1.2,
            userSelect: "none",
            cursor: "grab",
            padding: "6px 16px",
            borderRadius: "16px",
            background: "rgba(0,0,0,0.08)",
            display: "inline-block",
          }}
          onMouseDown={handleMouseDown}
        >
          Drag
        </span>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-[10%] py-[2%] bg-white" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-gray-900 text-header-style mb-2 text-3xl font-semibold">
              Who are <span className="text-orange-500">we?</span>
            </h1>
          </div>

          <div>
            <h2 className="text-orange-500 text-header-style mb-2 text-2xl font-semibold">
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 capability-item hover:scale-95 transition-all duration-200"
          >
            <div className="flex justify-center mb-3">
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

      <div
        className="relative w-full h-[450px] overflow-hidden"
        style={{ userSelect: "none" }}
      >
        {/* Vector arrow background */}
        <img
          src={vector8}
          alt="arrow"
          className="absolute top-1/2 left-0 w-[calc(100%+120px)] h-[65px] transform -translate-y-1/2 object-cover z-0"
        />

        {/* Smooth draggable orange circle */}
        <div
          className="absolute left-[90px] top-1/2 transform -translate-y-1/2 z-20"
          style={{
            left: `${(smoothCarPosition / sliderWidth) * 98}%`,
            transition: isDragging ? "none" : "left 0.1s ease-out",
          }}
        >
          <CarSVG />
        </div>

        {/* Smooth milestone containers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top milestones */}
          <div
            className="absolute left-[-60px] w-[calc(100%+120px)] flex items-end z-10"
            style={{
              bottom: "calc(50% + 10px)",
              transform: `translateX(${
                visibleMilestones[0]?.translateX || 0
              }%)`,
              transition: isDragging ? "none" : "transform 0.15s ease-out",
            }}
          >
            {visibleMilestones.slice(1, 7).map((milestone, i) => {
              const isSmallLine = i % 2 === 1;
              const lineHeight = isSmallLine ? "111px" : "211px";
              const cardWidth = isSmallLine ? "130.82px" : "156.68px";
              const cardHeight = isSmallLine ? "90px" : "189.77px";

              return (
                <div
                  key={`top-${milestone.originalIndex}-${Math.floor(
                    smoothCarPosition
                  )}`}
                  className="flex-shrink-0"
                  style={{
                    width: `${100 / 6}%`,
                    display: "flex",
                    justifyContent: "center",
                    opacity: milestone.opacity,
                    transform: `scale(${milestone.scale})`,
                    transition: isDragging
                      ? "none"
                      : "opacity 0.3s ease-out, transform 0.3s ease-out",
                  }}
                >
                  <div className="relative">
                    <div
                      className="relative"
                      style={{
                        width: "1.5px",
                        height: lineHeight,
                      }}
                    >
                      <div className="absolute bottom-0 w-full h-full bg-black"></div>
                      <div
                        className="relative cursor-pointer"
                        onClick={() => handleCardClick(milestone)}
                      >
                        <div
                          className="absolute bg-white border border-gray-200 hover:border-orange-300 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                          style={{
                            width: cardWidth,
                            height: cardHeight,
                            left: "5px",
                            top: isSmallLine ? "5px" : "0px",
                            borderRadius: "3.71px",
                          }}
                        >
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
                          {!isSmallLine && (
                            <div
                              className="absolute overflow-hidden"
                              style={{
                                width: "142.31px",
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
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom milestones */}
          <div
            className="absolute left-[-60px] w-[calc(100%+120px)] flex items-start z-10"
            style={{
              top: "calc(50% + 10px)",
              transform: `translateX(${
                (visibleMilestones[0]?.translateX || 0) + 100 / 12
              }%)`,
              transition: isDragging ? "none" : "transform 0.15s ease-out",
            }}
          >
            {visibleMilestones.slice(7, 12).map((milestone, i) => {
              const isSmallLine = i % 2 === 1;
              const lineHeight = isSmallLine ? "111px" : "211px";
              const cardWidth = isSmallLine ? "130.82px" : "156.68px";
              const cardHeight = isSmallLine ? "90px" : "189.77px";

              return (
                <div
                  key={`bottom-${milestone.originalIndex}-${Math.floor(
                    smoothCarPosition
                  )}`}
                  className="flex-shrink-0"
                  style={{
                    width: `${100 / 5}%`,
                    display: "flex",
                    justifyContent: "center",
                    opacity: milestone.opacity,
                    transform: `scale(${milestone.scale})`,
                    transition: isDragging
                      ? "none"
                      : "opacity 0.3s ease-out, transform 0.3s ease-out",
                  }}
                >
                  <div className="relative">
                    <div
                      className="relative"
                      style={{
                        width: "1.5px",
                        height: lineHeight,
                      }}
                    >
                      <div className="absolute top-0 w-full h-full bg-black"></div>
                      <div
                        className="relative cursor-pointer"
                        onClick={() => handleCardClick(milestone)}
                      >
                        <div
                          className="absolute bg-white border border-gray-200 hover:border-orange-300 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                          style={{
                            width: cardWidth,
                            height: cardHeight,
                            left: "5px",
                            top: "10px",
                            borderRadius: "3.71px",
                          }}
                        >
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
                          {!isSmallLine && (
                            <div
                              className="absolute overflow-hidden"
                              style={{
                                width: "142.31px",
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
                  </div>
                </div>
              );
            })}
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

        {/* Removed Early Years and Future labels */}
      </div>

      {/* Popup Modal */}
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
                className="text-gray-500 hover:text-gray-700 text-xl font-bold transition-colors duration-200 p-1"
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
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {clickedMilestone.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
