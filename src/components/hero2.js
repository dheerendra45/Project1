import React, { useEffect, useState, useRef } from "react";
import herobg from '../assets/hero-background.png';
import FactoryIcon from '../assets/factory-icon.png';
import RevenueIcon from '../assets/revenue-icon.png';
import IndiaMapIcon from '../assets/india-map-icon.png';

const banners = [
  {
    heading: "Shyam Metalics - Pioneering Steel Excellence Since 1991",
    subline: "Recognized among India's top steel manufacturers for quality and innovation",
    image: herobg
  },
  {
    heading: "Engineering India's Infrastructure Growth",
    subline: "Preferred steel supplier for landmark projects nationwide",
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
    <div className="h-[815px] bg-gray-300 mx-auto overflow-hidden relative">
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
      <div className="relative z-20 px-4 py-8 flex items-center justify-center min-h-screen text-white">
        <div className="bg-black bg-opacity-40 w-full max-w-7xl mx-auto rounded-xl p-8 flex flex-col gap-6">
          {/* Heading and paragraph */}
          <div className="w-full md:w-[70%]">
            <h1 className="text-[60px] md:text-[52px] leading-tight font-space-grotesk font-bold mb-4">
              {banners[currentSlide].heading}
            </h1>
            <p className="text-lg mb-6">{banners[currentSlide].subline}</p>
          </div>

          {/* Button + Stats in same row */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Button */}
            <div className="w-full md:w-[30%]">
              <button className="bg-orange-500 text-white px-6 py-3 rounded border border-white hover:bg-orange-600 transition w-full md:w-auto">
                Explore More
              </button>
            </div>

            {/* Stats */}
            <div className="w-full md:w-[100%] bg-black bg-opacity-50 rounded-xl p-6 flex flex-wrap justify-between items-center gap-6">
              <div className="flex items-center gap-3 w-[45%] md:w-auto">
                <img src={FactoryIcon} alt="Factory Icon" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold">15.15 MTPA</h2>
                  <p className="text-sm">Installed Capacity</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-[45%] md:w-auto">
                <img src={RevenueIcon} alt="Revenue Icon" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold">₹ 15,680 Cr</h2>
                  <p className="text-sm">Revenue '24</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-[45%] md:w-auto">
                <div>
                  <h2 className="text-xl font-bold">2,500+</h2>
                  <p className="text-sm">Delivered Nationwide</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-[45%] md:w-auto">
                <img src={IndiaMapIcon} alt="India Map Icon" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-bold">8</h2>
                  <p className="text-sm">Pan-India Presence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="text-sm flex items-center gap-4 text-white/80 mt-4">
            <span>Home</span>
            <span>&gt;</span>
            <span>Businesses</span>
            <span>&gt;</span>
            <span>Steel</span>
            <span>&gt;</span>
            <span>Carbon Steel</span>
            <span>&gt;</span>
            <span>Pellets</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
        >
          &#8594;
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
