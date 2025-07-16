import React from "react";
import { useRef, useEffect, useState } from "react";
import { Factory, Zap, Users, Package, Globe, Leaf } from "lucide-react";
import vector8 from "../assets/Vector8.png";
import ab1 from "../assets/ab1.jpg";
import ab2 from "../assets/ab2.png";
import AnimatedText from "./Styless";

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
      icon: Factory,
      title: "Leading Sponge Iron & Pellet Producers",
      color: "text-orange-600",
    },
    { icon: Zap, title: "Integrated Steel Powerhouse", color: "text-blue-600" },
    {
      icon: Users,
      title: "Leading Ferro Alloys Producer",
      color: "text-gray-700",
    },
    {
      icon: Package,
      title: "Major Aluminium Foil Exporter",
      color: "text-orange-600",
    },
    {
      icon: Globe,
      title: "Future-Ready & Globally Aligned",
      color: "text-orange-600",
    },
    {
      icon: Leaf,
      title: "Driven by Sustainability & Governance",
      color: "text-orange-600",
    },
  ];
  const milestones = [
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
    {
      year: "1991",
      title: "The Beginning of a Legacy",
      subtitle: "Incorporation of Shyam SEL and Power Ltd",
      image: ab2,
    },
  ];

  const [visibleWords, setVisibleWords] = useState(0);
  const sectionRef = useRef(null);

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
              <capability.icon className={`w-8 h-8 ${capability.color}`} />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 leading-tight">
              {capability.title}
            </h4>
          </div>
        ))}
      </div>

      <div className="relative w-full h-[450px] mt-[50px]">
        {/* Vector arrow background (includes bar + head) */}
        <img
          src={vector8}
          alt="arrow"
          className="absolute top-1/2 left-0  w-[calc(100%+120px)] h-[65px] transform -translate-y-1/2 object-cover z-0 "
        />

        <div
          className="absolute left-[-60px] w-full flex justify-around items-end px-2 z-10"
          style={{ bottom: "calc(50% + 10px)" }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "h-[211px]" : "h-[111px]"
              } w-[1.5px] bg-black opacity-100`}
            />
          ))}
        </div>

        {/* Milestone containers for big lines (211px height) - positioned on the right side */}
        <div
          className="absolute left-[-60px] w-full flex justify-around items-end px-2 z-20"
          style={{ bottom: "calc(50% + 10px)" }}
        >
          {[...Array(6)].map((_, i) => {
            // Show containers for big lines (even indices) and text containers for small lines (odd indices)
            if (i % 2 === 0) {
              const milestoneIndex = Math.floor(i / 2); // Get milestone data index
              const milestone = milestones[milestoneIndex];

              return (
                <div
                  key={i}
                  className="relative"
                  style={{ width: "1.5px", height: "211px" }}
                >
                  {/* Milestone container positioned to the right of the line */}
                  <div
                    className="absolute bg-white "
                    style={{
                      width: "139.68px",
                      height: "182.77px",
                      left: "5px",
                      top: "0px",
                      borderRadius: "3.71px",
                      opacity: 1,
                    }}
                  >
                    {/* Text layout container */}
                    <div
                      className="absolute p-2"
                      style={{
                        width: "180px",
                        height: "83.21px",
                        left: "0px",
                        top: "px",
                        opacity: 1,
                      }}
                    >
                      {/* Year */}
                      <div className="text-orange-500 font-bold text-sm mb-1">
                        {milestone?.year}
                      </div>

                      {/* Title */}
                      <div className="text-gray-900 font-semibold text-xs mb-1 leading-tight">
                        {milestone?.title}
                      </div>

                      {/* Subtitle */}
                      <div className="text-gray-600 text-xs leading-tight">
                        {milestone?.subtitle}
                      </div>
                    </div>

                    {/* Image container - positioned below text */}
                    <div
                      className="absolute overflow-hidden"
                      style={{
                        width: "126.31px",
                        height: "77.27px",
                        left: "5px",
                        top: "110.5px",
                        borderRadius: "3.71px",
                        opacity: 1,
                      }}
                    >
                      {/* Placeholder for image - you can import and use your images here */}
                      {milestone?.image ? (
                        <img
                          src={ab2} // Using the imported image directly
                          alt={milestone?.title || "Milestone image"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Image</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            } else {
              // Text containers for small lines (odd indices)
              const milestoneIndex = Math.floor(i / 2) + 6; // Get milestone data index (offset to get different milestones)
              const milestone = milestones[milestoneIndex] || milestones[0]; // Fallback to first milestone if index exceeds array

              return (
                <div
                  key={i}
                  className="relative"
                  style={{ width: "1.5px", height: "111px" }}
                >
                  {/* Text-only container positioned to the right of small lines */}
                  <div
                    className="absolute bg-white  p-2"
                    style={{
                      width: "124.82px",
                      height: "90px",
                      left: "5px",
                      bottom: "40px",
                      opacity: 1,
                    }}
                  >
                    {/* Year */}
                    <div className="text-orange-500 font-bold text-sm mb-1">
                      {milestone?.year}
                    </div>

                    {/* Title */}
                    <div className="text-gray-900 font-semibold text-xs mb-1 leading-tight">
                      {milestone?.title}
                    </div>

                    {/* Subtitle */}
                    <div className="text-gray-600 text-xs leading-tight">
                      {milestone?.subtitle}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Vertical lines below the arrow (5 lines between the spaces of above lines) */}
        <div
          className="absolute left-[-150px] w-full flex justify-around items-start px-2 z-10"
          style={{
            top: "calc(50% + 10px)",
            transform: "translateX(calc(100% / 12))", // Offset to position between above lines
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? "h-[211px]" : "h-[111px]"
              } w-[1.5px] bg-black opacity-100`}
            />
          ))}
        </div>

        {/* Milestone containers for bottom big lines (211px height) - positioned on the right side */}
        <div
          className="absolute left-[-150px] w-full flex justify-around items-start px-2 z-20"
          style={{
            top: "calc(50% + 10px)",
            transform: "translateX(calc(100% / 12))", // Offset to position between above lines
          }}
        >
          {[...Array(5)].map((_, i) => {
            // Show containers for big lines (even indices) and text containers for small lines (odd indices)
            if (i % 2 === 0) {
              const milestoneIndex = Math.floor(i / 2) + 3; // Get milestone data index (offset by 3 to get different milestones)
              const milestone = milestones[milestoneIndex];

              return (
                <div
                  key={i}
                  className="relative"
                  style={{ width: "1.5px", height: "211px" }}
                >
                  {/* Milestone container positioned to the right of the line */}
                  <div
                    className="absolute bg-white "
                    style={{
                      width: "139.68px",
                      height: "182.77px",
                      left: "5px",
                      top: "10px",
                      borderRadius: "3.71px",
                      opacity: 1,
                    }}
                  >
                    {/* Text layout container */}
                    <div
                      className="absolute p-2"
                      style={{
                        width: "150px",
                        height: "83.21px",
                        left: "0px",
                        top: "0px",
                        opacity: 1,
                      }}
                    >
                      {/* Year */}
                      <div className="text-orange-500 font-bold text-sm mb-1">
                        {milestone?.year}
                      </div>

                      {/* Title */}
                      <div className="text-gray-900 font-semibold text-xs mb-1 leading-tight">
                        {milestone?.title}
                      </div>

                      {/* Subtitle */}
                      <div className="text-gray-600 text-xs leading-tight">
                        {milestone?.subtitle}
                      </div>
                    </div>

                    {/* Image container - positioned below text */}
                    <div
                      className="absolute overflow-hidden"
                      style={{
                        width: "126.31px",
                        height: "77.27px",
                        left: "5px",
                        top: "105.5px",
                        borderRadius: "3.71px",
                        opacity: 1,
                      }}
                    >
                      {/* Placeholder for image - you can import and use your images here */}
                      {milestone?.image ? (
                        <img
                          src={ab2} // Using the imported image directly
                          alt={milestone?.title || "Milestone image"}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Image</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            } else {
              // Text containers for small lines (odd indices)
              const milestoneIndex = Math.floor(i / 2) + 8; // Get milestone data index (offset to get different milestones)
              const milestone = milestones[milestoneIndex] || milestones[0]; // Fallback to first milestone if index exceeds array

              return (
                <div
                  key={i}
                  className="relative"
                  style={{ width: "1.5px", height: "111px" }}
                >
                  {/* Text-only container positioned to the right of small lines */}
                  <div
                    className="absolute bg-white  p-2"
                    style={{
                      width: "124.82px",
                      height: "83.21px",
                      left: "5px",
                      top: "10px",
                      opacity: 1,
                    }}
                  >
                    {/* Year */}
                    <div className="text-orange-500 font-bold text-sm mb-1">
                      {milestone?.year}
                    </div>

                    {/* Title */}
                    <div className="text-gray-900 font-semibold text-xs mb-1 leading-tight">
                      {milestone?.title}
                    </div>

                    {/* Subtitle */}
                    <div className="text-gray-600 text-xs leading-tight">
                      {milestone?.subtitle}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Multiple white dots along the arrow */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-[180px] flex justify-between px-2 z-10">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-[10px] h-[1px] bg-white" />
          ))}
        </div>

        {/* 'Future' label after the dots */}
        <span className="absolute right-[70px] top-1/2 transform -translate-y-1/2 text-white text-base font-bold z-10">
          Future
        </span>
      </div>
    </div>
  );
}
