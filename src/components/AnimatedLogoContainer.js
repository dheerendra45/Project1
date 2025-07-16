import React, { useState } from "react";
import img1 from "../assets/clientsimages/1.png";
import img2 from "../assets/clientsimages/2.png";
import img3 from "../assets/clientsimages/3.jpg";
import img4 from "../assets/clientsimages/4.jpg";
import img5 from "../assets/clientsimages/5.jpg";
import img6 from "../assets/clientsimages/6.png";
import img7 from "../assets/clientsimages/7.png";
import img8 from "../assets/clientsimages/8.png";
import img9 from "../assets/clientsimages/9.jpg";

const AnimatedLogoContainer = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // First row logos (5 items)
  const row1Logos = [
    { id: 1, image: img1, company: "GPT Solutions" },
    { id: 2, image: img2, company: "Engineers India Ltd" },
    { id: 3, image: img3, company: "Shapoorji Pallonji" },
    { id: 4, image: img4, company: "BHEL" },
    { id: 5, image: img5, company: "GAIL India" },
  ];

  // Second row logos (4 items)
  const row2Logos = [
    { id: 6, image: img6, company: "GRIL Tech" },
    { id: 7, image: img7, company: "PWD West Bengal" },
    { id: 8, image: img8, company: "PWD Infrastructure" },
    { id: 9, image: img9, company: "State Government" },
  ];

  // Create enough duplicates for seamless looping
  const createLogoItems = (logos, count = 4) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(
        ...logos.map((logo) => ({ ...logo, uniqueId: `${logo.id}-${i}` }))
      );
    }
    return items;
  };

  const logoItems1 = createLogoItems(row1Logos, 4); // 5 logos × 4 sets = 20 items
  const logoItems2 = createLogoItems(row2Logos, 5); // 4 logos × 5 sets = 20 items

  // Logo Item Component
  const LogoItem = ({ company, image, borderColor }) => (
    <div
      className={`
        flex-shrink-0 w-45 h-20 bg-white rounded-xl flex items-center justify-center
        shadow-lg hover:shadow-xl hover:-translate-y-1
        overflow-hidden relative ${borderColor}
      `}
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
    >
      <img
        src={image}
        alt={company}
        className="w-full h-full object-contain p-2 rounded-lg"
        loading="lazy"
      />
    </div>
  );

  return (
    <div className="w-full my[2vw] bg-white">
      <div
        className="relative w-full h-63 overflow-hidden bg-white
                   my-[2vw]"
      >
        {/* Gradient fade effects */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* First row - 5 logos moving left */}
        <div className="h-32 flex items-center relative overflow-hidden border-b border-gray-300">
          <div
            className="flex items-center gap-10 px-5 whitespace-nowrap"
            style={{
              animation: `scrollLeft 40s linear infinite`,
              animationPlayState: isHovered1 ? "paused" : "running",
            }}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            {logoItems1.map((item) => (
              <LogoItem
                key={item.uniqueId}
                company={item.company}
                image={item.image}
                borderColor="border-2 border-orange-500"
              />
            ))}
          </div>
        </div>

        {/* Second row - 4 logos moving right */}
        <div className="h-32 flex items-center relative overflow-hidden">
          <div
            className="flex items-center gap-10 px-5 whitespace-nowrap"
            style={{
              animation: `scrollRight 40s linear infinite`,
              animationPlayState: isHovered2 ? "paused" : "running",
            }}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {logoItems2.map((item) => (
              <LogoItem
                key={item.uniqueId}
                image={item.image}
                borderColor="border-2 border-orange-500"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogoContainer;
