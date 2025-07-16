import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import vector8 from "../assets/Vector8.png";
import ab2 from "../assets/ab2.png";

export default function TimelineSection() {
  // Extended milestones data with more detailed information
  const milestones = [
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
      details: {
        description:
          "Shyam Metalics began its journey in 1991 with the incorporation of Shyam SEL and Power Ltd. This marked the foundation of what would become one of India's leading integrated metal producers.",
        achievements: [
          "First manufacturing facility established",
          "Initial team of 50 employees",
          "Started with basic metal processing",
        ],
        impact:
          "Laid the groundwork for future expansion and technological advancement",
      },
    },
    {
      year: "1995",
      title: "Expansion Phase",
      subtitle: "First Major Production Facility",
      image: ab2,
      details: {
        description:
          "Established the first major production facility, marking significant growth in manufacturing capacity and technological capabilities.",
        achievements: [
          "Production capacity increased by 300%",
          "Introduced modern equipment",
          "Expanded workforce to 200 employees",
        ],
        impact: "Positioned company as a serious player in the metal industry",
      },
    },
    {
      year: "2000",
      title: "Technology Integration",
      subtitle: "Advanced Manufacturing Systems",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Implemented cutting-edge manufacturing systems and automation technologies to improve efficiency and product quality.",
        achievements: [
          "Automated production lines",
          "Quality certification ISO 9001",
          "Reduced production costs by 25%",
        ],
        impact: "Enhanced competitiveness and market position",
      },
    },
    {
      year: "2005",
      title: "Market Leadership",
      subtitle: "Became Regional Market Leader",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Achieved market leadership position in the regional metal industry through strategic expansion and superior product quality.",
        achievements: [
          "Market share increased to 35%",
          "Expanded to 5 states",
          "Launched premium product lines",
        ],
        impact: "Established strong brand presence and customer loyalty",
      },
    },
    {
      year: "2010",
      title: "Global Expansion",
      subtitle: "International Operations",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Expanded operations internationally, establishing partnerships and export channels in multiple countries.",
        achievements: [
          "Export to 15 countries",
          "International partnerships",
          "Global supply chain network",
        ],
        impact: "Transformed into a global player in the metal industry",
      },
    },
    {
      year: "2015",
      title: "Sustainability Focus",
      subtitle: "Green Manufacturing Initiative",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Launched comprehensive sustainability initiatives focusing on environmental responsibility and green manufacturing practices.",
        achievements: [
          "Reduced carbon footprint by 40%",
          "Renewable energy adoption",
          "Waste reduction programs",
        ],
        impact: "Positioned as an environmentally responsible industry leader",
      },
    },
    {
      year: "2018",
      title: "Digital Transformation",
      subtitle: "Industry 4.0 Implementation",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Embraced digital transformation with Industry 4.0 technologies, IoT integration, and smart manufacturing systems.",
        achievements: [
          "IoT-enabled production",
          "AI-driven quality control",
          "Digital supply chain management",
        ],
        impact: "Enhanced efficiency and positioned for future growth",
      },
    },
    {
      year: "2020",
      title: "Pandemic Resilience",
      subtitle: "Adapting to New Challenges",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Successfully navigated the global pandemic by implementing safety measures and adapting business operations.",
        achievements: [
          "Zero production downtime",
          "Employee safety protocols",
          "Remote work capabilities",
        ],
        impact: "Demonstrated resilience and adaptability in crisis situations",
      },
    },
    {
      year: "2022",
      title: "Innovation Hub",
      subtitle: "R&D Center Establishment",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Established a state-of-the-art research and development center to drive innovation and product development.",
        achievements: [
          "50+ research projects",
          "Patent applications filed",
          "Breakthrough technologies developed",
        ],
        impact: "Strengthened position as an innovation leader",
      },
    },
    {
      year: "2023",
      title: "Market Consolidation",
      subtitle: "Strategic Acquisitions",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Executed strategic acquisitions to consolidate market position and expand product portfolio.",
        achievements: [
          "3 major acquisitions",
          "Expanded product range",
          "Increased market share to 45%",
        ],
        impact: "Enhanced market dominance and operational scale",
      },
    },
    {
      year: "2024",
      title: "Next Generation",
      subtitle: "Future Technologies",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Invested in next-generation technologies including AI, machine learning, and advanced materials research.",
        achievements: [
          "AI integration in production",
          "Advanced materials development",
          "Smart factory implementation",
        ],
        impact: "Prepared for the future of manufacturing",
      },
    },
    {
      year: "2025",
      title: "Sustainable Future",
      subtitle: "Carbon Neutral Goals",
      image: "/api/placeholder/126/77",
      details: {
        description:
          "Committed to achieving carbon neutrality and leading the industry in sustainable manufacturing practices.",
        achievements: [
          "Carbon neutral roadmap",
          "Renewable energy 100%",
          "Circular economy initiatives",
        ],
        impact: "Setting new standards for environmental responsibility",
      },
    },
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleCount = 11; // Number of milestones visible at once

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStartIndex((prev) => {
          const maxStart = Math.max(0, milestones.length - visibleCount);
          return prev >= maxStart ? 0 : prev + 1;
        });
        setIsAnimating(false);
      }, 300);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [milestones.length]);

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStartIndex((prev) => {
        const maxStart = Math.max(0, milestones.length - visibleCount);
        return prev <= 0 ? maxStart : prev - 1;
      });
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStartIndex((prev) => {
        const maxStart = Math.max(0, milestones.length - visibleCount);
        return prev >= maxStart ? 0 : prev + 1;
      });
      setIsAnimating(false);
    }, 300);
  };

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedMilestone(null);
  };

  const visibleMilestones = milestones.slice(
    currentStartIndex,
    currentStartIndex + visibleCount
  );

  return (
    <div className="relative w-full mt-[50px]">
      {/* Navigation Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-30">
        <button
          onClick={handlePrevious}
          className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md z-30">
        <span className="text-sm font-medium">
          {currentStartIndex + 1}-
          {Math.min(currentStartIndex + visibleCount, milestones.length)} of{" "}
          {milestones.length}
        </span>
      </div>
    </div>
  );
}
