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
      "• Sambalpur Plant:\n  • Pellet production capacity increased by 1.2 MTPA; commissioned a new 14 MW captive power plant\n• Jamuria Plant:\n  • WHRS & Power expansion\n  • Total Metalicos' capacity reached 5.71 MTPA",
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
    subtitle: "Taratala Corporate HQ",
    description:
      "• Taratala Corporate HQ:\n  • Established a new 3-acre Corporate Headquarters in Kolkata\n• Aluminium Division:\n  • Broadened product portfolio with the addition of battery foil and flat rolled aluminium products\n• Kharagpur Plant (Greenfield Project):\n  • Started construction of Wagon Manufacturing Plant with a capacity of 4,800 wagons per year\n  • 85% of the power requirement was met via captive generation\n• Ductile Iron & Steel Production:\n  • Commissioned new lines for DI Pipes, Sponge Iron, Billets, and Color-Coated Sheets\n• Jamuria Plant:\n  • Introduced the Cold Rolling Mill project (0.25 MTPA) under the PLI scheme\n• Brand Expansion:\n  • Introduced 4 new SEL Tiger roofing sheet brands such as Royale, Elite, Azure, and Alfa",
  },
  {
    year: "Upcoming",
    title: "Plan for Upcoming Years…",
    subtitle: "Product Diversification",
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
  const [clickedMilestone, setClickedMilestone] = useState(null);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [dragButtonPosition, setDragButtonPosition] = useState(50); // Percentage position
  const [isDragging, setIsDragging] = useState(false);
  const [dragHoveredMilestone, setDragHoveredMilestone] = useState(null);
  const [persistentHoveredMilestone, setPersistentHoveredMilestone] =
    useState(null); // This will stay until user moves to another milestone
  const timelineRef = useRef(null);

  const filteredMilestones = showFutureTimeline
    ? milestones.filter((m) => parseInt(m.year) >= 2023)
    : milestones;

  // Show only first 16 milestones
  const visibleMilestones = filteredMilestones.slice(0, 16);
  const topMilestones = visibleMilestones.slice(0, 8);
  const bottomMilestones = visibleMilestones.slice(8, 16);

  const handleCardClick = (milestone) => {
    setClickedMilestone(milestone);
  };

  const closePopup = () => {
    setClickedMilestone(null);
  };

  const handleMouseEnter = (milestone) => {
    if (!isDragging) {
      setHoveredMilestone(milestone);
      // Clear persistent hover when user manually hovers over a different milestone
      if (
        persistentHoveredMilestone &&
        persistentHoveredMilestone.year !== milestone.year
      ) {
        setPersistentHoveredMilestone(null);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setHoveredMilestone(null);
    }
  };

  // Calculate which milestone is closest to the drag button
  const calculateNearestMilestone = useCallback(
    (position) => {
      const totalMilestones = visibleMilestones.length;
      const topMilestonesCount = topMilestones.length;
      const bottomMilestonesCount = bottomMilestones.length;

      // Calculate positions for top milestones (first 8)
      for (let i = 0; i < topMilestonesCount; i++) {
        const segmentSize = 100 / (topMilestonesCount + 1); // +1 for proper spacing
        const milestonePosition = (i + 1) * segmentSize;
        const threshold = 3; // Much smaller threshold for precise positioning

        if (Math.abs(position - milestonePosition) <= threshold) {
          return topMilestones[i];
        }
      }

      // Calculate positions for bottom milestones (remaining 8, offset by half segment)
      for (let i = 0; i < bottomMilestonesCount; i++) {
        const segmentSize = 100 / (bottomMilestonesCount + 1);
        const offset = segmentSize / 2; // Offset for bottom milestones
        const milestonePosition = offset + i * segmentSize + segmentSize / 2;
        const threshold = 3; // Much smaller threshold for precise positioning

        if (Math.abs(position - milestonePosition) <= threshold) {
          return bottomMilestones[i];
        }
      }

      return null;
    },
    [visibleMilestones, topMilestones, bottomMilestones]
  );

  // Handle drag button mouse down
  const handleDragStart = (e) => {
    setIsDragging(true);
    setHoveredMilestone(null); // Clear regular hover when dragging starts

    const handleMouseMove = (moveEvent) => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const newPosition =
          ((moveEvent.clientX - rect.left) / rect.width) * 100;
        const clampedPosition = Math.max(2, Math.min(98, newPosition));
        setDragButtonPosition(clampedPosition);

        // Check for nearby milestones with more precise positioning
        const nearestMilestone = calculateNearestMilestone(clampedPosition);
        setDragHoveredMilestone(nearestMilestone);

        // Update persistent hover if we're on a different milestone
        if (
          nearestMilestone &&
          (!persistentHoveredMilestone ||
            persistentHoveredMilestone.year !== nearestMilestone.year)
        ) {
          setPersistentHoveredMilestone(nearestMilestone);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      // Keep the current drag hovered milestone as persistent
      if (dragHoveredMilestone) {
        setPersistentHoveredMilestone(dragHoveredMilestone);
      }
      setDragHoveredMilestone(null);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Determine which milestone should be highlighted
  // Priority: dragHoveredMilestone > hoveredMilestone > persistentHoveredMilestone
  const activeHoveredMilestone =
    dragHoveredMilestone || hoveredMilestone || persistentHoveredMilestone;

  return (
    <div className="w-full">
      <div class="pt-[2%] pb-[2%] pl-[10%] font-inter">
        <h1 className="text-gray-900 text-header-style mb-2 text-3xl font-semibold">
          The Shyam <span class="text-orange-600 font-bold">Journey </span>
        </h1>
      </div>

      <div
        ref={timelineRef}
        className="relative w-full h-[450px] overflow-hidden"
        style={{ userSelect: "none" }}
      >
        <VectorArrow />

        {/* Draggable button on the arrow */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 z-30 cursor-grab active:cursor-grabbing"
          style={{
            left: `${dragButtonPosition}%`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={handleDragStart}
        >
          <div className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-200 select-none">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              {!isDragging && (
                <span className="text-xs font-medium whitespace-nowrap">
                  Drag Here
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Top milestones */}
        <div
          className="absolute left-[-60px] w-[calc(100%+120px)] flex items-end z-10"
          style={{
            bottom: "calc(50% + 10px)",
          }}
        >
          {topMilestones.map((milestone, index) => {
            const lineHeight = "111px";
            const isHovered = activeHoveredMilestone?.year === milestone.year;
            const cardWidth = isHovered ? "150px" : "130.82px";
            const cardHeight = isHovered ? "180px" : "110px";

            return (
              <div
                key={`top-${index}`}
                className="flex-shrink-0"
                style={{
                  width: `${100 / 9}%`,
                  display: "flex",
                  justifyContent: "center",
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
                      onMouseEnter={() => handleMouseEnter(milestone)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="absolute bg-white border border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                        style={{
                          width: cardWidth,
                          height: cardHeight,
                          left: "5px",
                          top: isHovered ? "-95px" : "-30px", // Grow upwards for top cards
                          borderRadius: "3.71px",
                          display: "flex",
                          flexDirection: "column",
                          zIndex: isHovered ? 20 : 10,
                        }}
                      >
                        {isHovered && milestone.image && (
                          <div
                            className="overflow-hidden"
                            style={{
                              width: "120px",
                              height: "60px",
                              margin: "5px auto 0",
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
                        <div className="p-2 flex-grow">
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
          className="absolute left-[-130px] w-[calc(100%+120px)] flex items-start z-10"
          style={{
            top: "calc(50% + 10px)",
            transform: `translateX(${100 / 16}%)`,
          }}
        >
          {bottomMilestones.map((milestone, index) => {
            const lineHeight = "111px";
            const isHovered = activeHoveredMilestone?.year === milestone.year;
            const cardWidth = isHovered ? "150px" : "130.82px";
            const cardHeight = isHovered ? "180px" : "110px";

            return (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0"
                style={{
                  width: `${100 / 8}%`,
                  display: "flex",
                  justifyContent: "center",
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
                      onMouseEnter={() => handleMouseEnter(milestone)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="absolute bg-white border border-gray-200 hover:border-orange-300 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                        style={{
                          width: cardWidth,
                          height: cardHeight,
                          left: "5px",
                          top: isHovered ? "10px" : "30px", // Grow downwards for bottom cards
                          borderRadius: "3.71px",
                          display: "flex",
                          flexDirection: "column",
                          zIndex: isHovered ? 20 : 10,
                        }}
                      >
                        {isHovered && milestone.image && (
                          <div
                            className="overflow-hidden"
                            style={{
                              width: "120px",
                              height: "60px",
                              margin: "5px auto 0",
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
                        <div className="p-2 flex-grow">
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
