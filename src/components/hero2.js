import React, { useEffect, useState, useRef } from "react";
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
      >
        <source src={video} type="video/webm" />
      </video>

      {/* Banner Text - Bottom Left */}
      <div className="absolute bottom-[10%] left-[10%] text-white max-w-2xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {banners[currentSlide].heading}
        </h1>
        <p className="text-lg sm:text-xl">
          {banners[currentSlide].subline}
        </p>
      </div>
    </div>
  );
};

export default Hero;