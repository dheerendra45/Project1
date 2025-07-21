import React, { useState, useRef, useEffect } from "react";
import { X, GripHorizontal } from "lucide-react";
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
const Timeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragButtonPosition, setDragButtonPosition] = useState(0);
  const timelineRef = useRef(null);
  const dragButtonRef = useRef(null);

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
        "• Sambalpur Plant:• Commercial production started at the Sponge Iron plant (0.3 MTPA)\n• Jamuria Plant:\n  • Started production of Sponge Iron, Iron Pellets, and Billets (0.6 MTPA)",
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
  const cardWidth = 100 / milestones.length; // Percentage width per card

  // Update drag button position when active card changes
  useEffect(() => {
    setDragButtonPosition(activeCardIndex * cardWidth);
  }, [activeCardIndex, cardWidth]);

  const handleDragButtonMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

    const startX = e.clientX;
    const startPosition = dragButtonPosition;
    const containerWidth = timelineRef.current?.offsetWidth || 1;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const deltaPercent = (deltaX / containerWidth) * 100;
      const newPosition = Math.max(
        0,
        Math.min(
          startPosition + deltaPercent,
          (milestones.length - 1) * cardWidth
        )
      );

      setDragButtonPosition(newPosition);

      // Update active card based on drag position
      const nearestIndex = Math.round(newPosition / cardWidth);
      if (
        nearestIndex !== activeCardIndex &&
        nearestIndex >= 0 &&
        nearestIndex < milestones.length
      ) {
        setActiveCardIndex(nearestIndex);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);

      // Snap to nearest card position
      const nearestIndex = Math.max(
        0,
        Math.min(
          Math.round(dragButtonPosition / cardWidth),
          milestones.length - 1
        )
      );
      const snapPosition = nearestIndex * cardWidth;

      setActiveCardIndex(nearestIndex);
      setDragButtonPosition(snapPosition);

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
    const clickedIndex = Math.max(
      0,
      Math.min(Math.floor(clickPercent / cardWidth), milestones.length - 1)
    );

    setActiveCardIndex(clickedIndex);
  };

  const openPopup = (milestone) => {
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
          className="relative w-full pb-8 select-none"
          onClick={handleTimelineClick}
        >
          <div className="relative w-full">
            {/* Main Orange Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-500 transform -translate-y-1/2 z-10"></div>

            {/* Draggable Button */}
            <div
              ref={dragButtonRef}
              className={`absolute top-1/2 w-6 h-6 bg-black rounded-full transform -translate-y-1/2 -translate-x-1/2 z-30 ${
                isDragging
                  ? "cursor-grabbing scale-110 shadow-xl"
                  : "cursor-grab hover:scale-105"
              } transition-all duration-200 border-3 border-white shadow-lg`}
              style={{ left: `${dragButtonPosition + cardWidth / 2}%` }}
              onMouseDown={handleDragButtonMouseDown}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="flex items-center w-full">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                const isActive = index === activeCardIndex;

                return (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col items-center ${
                      isEven ? "" : "flex-col-reverse"
                    }`}
                    style={{ width: `${cardWidth}%` }}
                  >
                    {/* Large Card for Active Item */}
                    {isActive && (
                      <div
                        className={`bg-white rounded-lg shadow-xl cursor-pointer p-4 w-40 border-2 border-orange-200 z-20 duration-500 transform ${
                          isEven ? "mb-[350px] " : "mt-[350px] "
                        } hover:shadow-2xl`}
                        onClick={(e) => {
                          e.stopPropagation();
                          openPopup(milestone);
                        }}
                      >
                        <div className="w-full h-20 bg-gray-200 rounded-lg mb-3 overflow-hidden">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                          {milestone.title}
                        </h3>
                        <p className="text-base text-orange-600 mb-2 font-medium line-clamp-1">
                          {milestone.subtitle}
                        </p>
                        <p className="text-base text-gray-600 line-clamp-3">
                          {milestone.description}
                        </p>
                        {milestone.description.length > 120 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openPopup(milestone);
                            }}
                            className="text-orange-500 text-sm mt-2 hover:underline font-medium"
                          >
                            Read more...
                          </button>
                        )}
                      </div>
                    )}

                    {/* Small Cards for Inactive Items */}
                    {!isActive && (
                      <div
                        className={`bg-orange-500 text-white rounded-lg p-3 cursor-pointer hover:bg-orange-600 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 ${
                          isEven ? "mb-[110px]" : "mt-[110px]"
                        }`}
                        style={{ width: "135.82px", height: "83.21px" }}
                      >
                        <h4 className="text-[12px] font-bold  line-clamp-2">
                          {milestone.year}
                        </h4>
                        <p className="text-[12px] opacity-90 line-clamp-2">
                          {milestone.title}
                        </p>
                      </div>
                    )}

                    {/* Orange Dot on Timeline */}
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-500 z-15 transition-all duration-300 ${
                        isActive
                          ? "w-5 h-5 bg-orange-400 scale-110"
                          : "w-3 h-3 bg-orange-200 hover:bg-orange-300"
                      }`}
                    ></div>

                    {/* Year Label */}
                  </div>
                );
              })}
            </div>

            {/* Instructions */}
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
