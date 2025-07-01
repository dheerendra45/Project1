import React, { useEffect, useState, useRef } from "react";
import herobg from '../assets/1.jpg';
import FactoryIcon from '../assets/factory-icon.png';
import RevenueIcon from '../assets/revenue-icon.png';
import IndiaMapIcon from '../assets/india-map-icon.png';

const banners = [
  {
    heading: "Shyam Metalics - Pioneering Steel Excellence Since 1991",
    subline: "Recognized among India's top steel manufacturers for quality and innovation.",
    image: herobg
  },
  {
    heading: "Engineering India's Infrastructure Growth",
    subline: "Preferred steel supplier for landmark projects nationwide.",
    image: herobg
  },
  {
    heading: "Steel Solutions for Tomorrow's Challenges",
    subline: "Innovating tech infrastructure today to build a stronger future.",
    image: herobg
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = banners.length;
  const intervalRef = useRef(null);

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
  }, []);

  return (
    <div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[815px] bg-gray-300 mx-auto overflow-hidden relative font-inter">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={banner.image}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 flex items-center justify-center h-full text-white">
        <div className=" bg-opacity-40 w-full max-w-7xl mx-auto rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6">
          {/* Heading and paragraph */}
          <div className="w-full lg:w-[70%]">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-bold mb-2 sm:mb-4">
              {banners[currentSlide].heading}
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg mb-4 sm:mb-6">
              {banners[currentSlide].subline}
            </p>
          </div>

          {/* Button + Stats in same row */}
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Button */}
            <div className="w-full sm:w-auto">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded border border-white transition-all duration-300 w-full sm:w-auto text-sm sm:text-base md:text-lg">
                Explore More
              </button>
            </div>

            {/* Stats Box - Optional */}
            {/* <div className="flex gap-4 text-white">
              <div className="flex items-center gap-2">
                <img src={FactoryIcon} alt="Factories" className="w-6 h-6" />
                <span>5+ Plants</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={RevenueIcon} alt="Revenue" className="w-6 h-6" />
                <span>₹10,000Cr+ Revenue</span>
              </div>
            </div> */}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 z-30">
            <button
              onClick={prevSlide}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 z-30">
            <button
              onClick={nextSlide}
              className="bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;