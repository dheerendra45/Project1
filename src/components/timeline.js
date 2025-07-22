import React, { useState, useRef } from "react";
import { X } from "lucide-react";

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

// Placeholder for vector8 import - replace with your actual vector image
import vector8 from "../assets/Vector8.png";

// CarSVG Component
const CarSVG = () => (
  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
    <div className="w-2 h-2 bg-white rounded-full"></div>
  </div>
);

const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0); // 0 to 100 percentage
  const [isMouseOverTimeline, setIsMouseOverTimeline] = useState(false);
  const timelineRef = useRef(null);

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

  // Calculate visible milestones based on drag position
  const getVisibleMilestones = () => {
    const totalMilestones = milestones.length;
    const cardsToShow = 11; // Fixed number of cards to show
    const maxScroll = Math.max(0, totalMilestones - cardsToShow);
    const scrollIndex = Math.floor((dragPosition / 100) * maxScroll);

    return milestones.slice(scrollIndex, scrollIndex + cardsToShow);
  };

  const visibleMilestones = getVisibleMilestones();

  // Smooth dragging handlers
  const handleMouseDown = (e) => {
    if (!timelineRef.current) return;

    e.preventDefault();
    setIsDragging(true);

    const rect = timelineRef.current.getBoundingClientRect();
    const startX = e.clientX;
    const startPosition = dragPosition;

    const handleMouseMove = (e) => {
      if (!isDragging || !timelineRef.current) return;

      const deltaX = e.clientX - startX;
      const containerWidth = rect.width;
      const deltaPercent = (deltaX / containerWidth) * 100;

      let newPosition = startPosition + deltaPercent;
      newPosition = Math.max(0, Math.min(100, newPosition));

      setDragPosition(newPosition);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTimelineClick = (e) => {
    if (isDragging || !timelineRef.current) return;

    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = (clickX / rect.width) * 100;

    setDragPosition(clickPercent);
  };

  const handleCardClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const closePopup = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="w-full my-[2%] px-12 bg-white">
      <div className="w-full">
        <h2 className="text-4xl font-inter font-bold text-center mb-2 text-gray-800">
          Our Journey
        </h2>

        {/* Timeline Container */}
        <div
          ref={timelineRef}
          className="relative w-full h-[450px] overflow-hidden"
          style={{
            userSelect: "none",
            cursor: isMouseOverTimeline
              ? isDragging
                ? "grabbing"
                : "grab"
              : "default",
          }}
          onClick={handleTimelineClick}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsMouseOverTimeline(true)}
          onMouseLeave={() => setIsMouseOverTimeline(false)}
        >
          {/* Vector arrow background */}
          <div
            className="absolute top-1/2 left-0 w-[calc(100%+120px)] h-[65px] transform -translate-y-1/2 z-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${vector8})`,
              clipPath:
                "polygon(0% 20%, 90% 20%, 95% 0%, 100% 50%, 95% 100%, 90% 80%, 0% 80%)",
            }}
          />

          {/* Smooth draggable orange circle */}
          <div
            className="absolute left-[90px] top-1/2 transform -translate-y-1/2 z-20"
            style={{
              left: `${dragPosition}%`,
              transition: isDragging
                ? "none"
                : "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <CarSVG />
          </div>

          {/* Top milestones - showing exactly 11 cards */}
          <div
            className="absolute left-0 w-full flex items-end z-10"
            style={{
              bottom: "calc(50% + 10px)",
              transition: isDragging
                ? "none"
                : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {visibleMilestones
              .filter((_, index) => index % 2 === 1)
              .map((milestone, i) => {
                const isSmallLine = i % 2 === 1;
                const lineHeight = isSmallLine ? "111px" : "211px";
                const cardWidth = isSmallLine ? "130.82px" : "156.68px";
                const cardHeight = isSmallLine ? "90px" : "189.77px";

                return (
                  <div
                    key={`top-${milestone.year}-${i}`}
                    className="flex-shrink-0"
                    style={{
                      width: `${100 / 11}%`,
                      display: "flex",
                      justifyContent: "center",
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(milestone);
                          }}
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
                            {!isSmallLine && milestone.image && (
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

          {/* Bottom milestones - showing exactly 11 cards */}
          <div
            className="absolute left-0 w-full flex items-start z-10"
            style={{
              top: "calc(50% + 10px)",
              transition: isDragging
                ? "none"
                : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {visibleMilestones
              .filter((_, index) => index % 2 === 0)
              .map((milestone, i) => {
                const isSmallLine = i % 2 === 1;
                const lineHeight = isSmallLine ? "111px" : "211px";
                const cardWidth = isSmallLine ? "130.82px" : "156.68px";
                const cardHeight = isSmallLine ? "90px" : "189.77px";

                return (
                  <div
                    key={`bottom-${milestone.year}-${i}`}
                    className="flex-shrink-0"
                    style={{
                      width: `${100 / 10}%`,
                      display: "flex",
                      justifyContent: "center",
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
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(milestone);
                          }}
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
                            {!isSmallLine && milestone.image && (
                              <div
                                className="absolute overflow-hidden"
                                style={{
                                  width: "142.31px",
                                  height: "77.27px",
                                  left: "50px",
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
      </div>

      {/* Popup Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedMilestone.year}
              </h2>
              <button
                onClick={closePopup}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {selectedMilestone.image && (
                <div className="w-full h-80 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={selectedMilestone.image}
                    alt={selectedMilestone.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedMilestone.title}
              </h3>
              <h4 className="text-lg font-semibold text-orange-600 mb-4">
                {selectedMilestone.subtitle}
              </h4>
              <p className="text-gray-700 leading-relaxed font text-base whitespace-pre-line">
                {selectedMilestone.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
