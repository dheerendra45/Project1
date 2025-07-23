import React, { useRef, useEffect, useState, useCallback } from "react";

// Import all milestone images
import vector8 from "../assets/Vector8.png";
import Img1991 from "../assets/aboutus/Picture 1, 1991-min.png";
import Img2001 from "../assets/aboutus/Picture 2 2001 (Mangalpur Plant)-min.jpg";
import Img2013 from "../assets/aboutus/Picture 3 2013 (Sambalpur)-min.jpeg";
import Img2013New from "../assets/aboutus/Picture 4 2013 (Jamuria Plant)-min.jpg";
import Img2014 from "../assets/aboutus/Picture 5 2014 (Ferro)-min.jpg";
import Img2015 from "../assets/aboutus/Picture 6,  2015 (Sambalpur Plant)-min.jpg";
import Img2019 from "../assets/aboutus/Picture 8, 2019 (TMT Bar)-min.jpg";
import Img2021 from "../assets/aboutus/Picture 9,  2021 Wire Rod 2-min.jpg";
import Img2024 from "../assets/aboutus/Picture 10,  CRM 2024-min.jpg";

// Timeline data
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

// Vector arrow component using the actual image
const VectorArrow = () => (
  <img
    src={vector8}
    alt="arrow"
    className="absolute top-1/2 left-0 w-[calc(100%+120px)] h-[65px] transform -translate-y-1/2 object-cover z-0"
  />
);

export default function Timeline({ showFutureTimeline = false }) {
  // DRAG SENSITIVITY CONTROL - Adjust these values to make dragging smoother or faster
  const DRAG_SENSITIVITY = 0.8; // Lower = slower/smoother, Higher = faster/more sensitive (0.1 to 2.0)
  const ANIMATION_SPEED = 150; // Transition duration in ms (50-300ms recommended)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedMilestone, setClickedMilestone] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const [smoothCarPosition, setSmoothCarPosition] = useState(0);
  const sliderRef = useRef(null);
  const dragTextRef = useRef(null);

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

    if (totalMilestones <= 11) {
      return filteredMilestones.map((milestone, index) => ({
        ...milestone,
        originalIndex: index,
        opacity: 1,
        scale: 1,
        translateX: 0,
        isSmall:
          (index < 6 && index % 2 === 1) || (index >= 6 && index % 2 === 0),
      }));
    }

    const progress = smoothCarPosition / sliderWidth;
    const totalSlots = Math.max(0, totalMilestones - 11);
    const currentPosition = progress * totalSlots;
    const startIndex = Math.floor(currentPosition);
    const scrollFraction = currentPosition - startIndex;

    for (let i = 0; i < 11; i++) {
      const milestoneIndex = startIndex + i;

      if (milestoneIndex >= totalMilestones) break;

      const isSmall =
        (milestoneIndex < 6 && milestoneIndex % 2 === 1) ||
        (milestoneIndex >= 6 && milestoneIndex % 2 === 0);

      const milestone = {
        ...filteredMilestones[milestoneIndex],
        originalIndex: milestoneIndex,
        isSmall,
        translateX: -scrollFraction * (100 / 11),
        opacity: 1,
        scale: 1,
      };

      visible.push(milestone);
    }

    return visible;
  };

  const visibleMilestones = getSmoothVisibleMilestones();
  const topMilestones = visibleMilestones.slice(0, 6);
  const bottomMilestones = visibleMilestones.slice(6, 11);

  const handleCardClick = (milestone) => {
    setClickedMilestone(milestone);
  };

  const closePopup = () => {
    setClickedMilestone(null);
  };

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

      const deltaX = (e.clientX - dragStartX) * DRAG_SENSITIVITY;
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
      DRAG_SENSITIVITY,
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
            cursor: isDragging ? "grabbing" : "grab",
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
    <div className="w-full">
      <div
        className="relative w-full h-[450px] overflow-hidden"
        style={{ userSelect: "none" }}
      >
        <VectorArrow />

        <div
          className="absolute left-[90px] top-1/2 transform -translate-y-1/2 z-20"
          style={{
            left: `${(smoothCarPosition / sliderWidth) * 98}%`,
            transition: isDragging
              ? "none"
              : `left ${ANIMATION_SPEED}ms ease-out`,
          }}
        >
          <CarSVG />
        </div>

        {/* Top milestones */}
        <div
          className="absolute left-[-60px] w-[calc(100%+120px)] flex items-end z-10"
          style={{
            bottom: "calc(50% + 10px)",
            transform: `translateX(${visibleMilestones[0]?.translateX || 0}%)`,
            transition: isDragging
              ? "none"
              : `transform ${ANIMATION_SPEED}ms ease-out`,
          }}
        >
          {topMilestones.map((milestone) => {
            const lineHeight = milestone.isSmall ? "111px" : "211px";
            const cardWidth = milestone.isSmall ? "130.82px" : "156.68px";
            const cardHeight = milestone.isSmall ? "90px" : "189.77px";

            return (
              <div
                key={`top-${milestone.originalIndex}`}
                className="flex-shrink-0"
                style={{
                  width: `${100 / 6}%`,
                  display: "flex",
                  justifyContent: "center",
                  opacity: milestone.opacity,
                  transform: `scale(${milestone.scale})`,
                  transition: isDragging
                    ? "none"
                    : `opacity ${ANIMATION_SPEED}ms ease-out, transform ${ANIMATION_SPEED}ms ease-out`,
                }}
              >
                <div className="relative">
                  <div
                    className="relative"
                    style={{ width: "1.5px", height: lineHeight }}
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
                          top: milestone.isSmall ? "5px" : "0px",
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
                        {!milestone.isSmall && (
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
                            {milestone.image ? (
                              <img
                                src={milestone.image}
                                alt={milestone.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-100"></div>
                            )}
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
            transition: isDragging
              ? "none"
              : `transform ${ANIMATION_SPEED}ms ease-out`,
          }}
        >
          {bottomMilestones.map((milestone) => {
            const lineHeight = milestone.isSmall ? "111px" : "211px";
            const cardWidth = milestone.isSmall ? "130.82px" : "156.68px";
            const cardHeight = milestone.isSmall ? "90px" : "189.77px";

            return (
              <div
                key={`bottom-${milestone.originalIndex}`}
                className="flex-shrink-0"
                style={{
                  width: `${100 / 5}%`,
                  display: "flex",
                  justifyContent: "center",
                  opacity: milestone.opacity,
                  transform: `scale(${milestone.scale})`,
                  transition: isDragging
                    ? "none"
                    : `opacity ${ANIMATION_SPEED}ms ease-out, transform ${ANIMATION_SPEED}ms ease-out`,
                }}
              >
                <div className="relative">
                  <div
                    className="relative"
                    style={{ width: "1.5px", height: lineHeight }}
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
                        {!milestone.isSmall && (
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
                            {milestone.image ? (
                              <img
                                src={milestone.image}
                                alt={milestone.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-100"></div>
                            )}
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
