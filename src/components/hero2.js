import React, { useEffect, useState, useRef } from "react";
import herobg from "../assets/1.jpg";
import video from "../assets/WebsiteBanner.webm";

// Banner data with corrected spelling
const banners = [
  {
    heading: "From Roots to Rise, Building a Steel Empire for Bharat",
    subline:
      "With pure strength and a proven legacy, Shyam Metalics' steel meets the spirit of Bharat.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = banners.length;
  const intervalRef = useRef(null);

  // Next and previous slide (for future if multiple banners are added)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[815px] bg-gray-300 mx-auto overflow-hidden relative font-inter w-full">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={herobg} // Fallback image as poster attribute
      >
        <source src={video} type="video/webm" />
        {/* No <img> inside <video>! */}
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8 py-8 flex items-center justify-center h-full text-white w-full">
        <div className="bg-opacity-40 w-full max-w-7xl mx-auto rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6">
          {/* Heading and paragraph */}
          <div className="w-full lg:w-[70%]">
            <h1 className="text-header-style text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-bold mb-2 sm:mb-4">
              {banners[currentSlide].heading}
            </h1>
            <p className="text-paragraph-style text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg mb-4 sm:mb-6">
              {banners[currentSlide].subline}
            </p>
          </div>

          {/* Button + Stats in same row */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Button */}
            <div className="w-full sm:w-auto">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded border border-white transition-all duration-300 w-full sm:w-auto text-sm sm:text-base md:text-lg"
                onClick={() => {
                  const element = document.getElementById("business-areas");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
