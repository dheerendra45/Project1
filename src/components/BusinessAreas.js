import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import a2 from "../assets/products/herobg.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";

export default function BusinessAreas() {
  const originalImages = [a2, a3, a4, a5];
  const productNames = [
    "Pellet", "Sponge Iron", "Pig Iron", "Billet",
    "Structural Steel", "TMT Bars", "Wire Rods", "Pipes & Hollow Sections",
    "Color Coated Sheets", "Stainless Steel Billets", "SS Wire Rod", "SS Wire",
    "Black Round Bar", "Bright Bar", "Flats/Patta", "Flat Rolled Products"
  ];

  const productDescriptions = [
    "High-quality iron ore pellets for steel production",
    "Direct reduced iron used as raw material in steelmaking",
    "Crude iron obtained from smelting iron ore",
    "Semi-finished casting product for rolling mills",
    "Versatile steel sections for construction projects",
    "Thermo-mechanically treated bars for reinforced concrete",
    "Long steel product used for wire drawing",
    "Steel tubes for structural and mechanical applications",
    "Pre-painted steel sheets with decorative finishes",
    "High-quality stainless steel intermediate product",
    "Stainless steel rods for wire production",
    "Fine stainless steel wires for various applications",
    "Unpolished steel bars for machining purposes",
    "Precision-ground steel bars with smooth finish",
    "Flat steel products for fabrication and construction",
    "Rolled steel sheets and plates for industrial use"
  ];

  const generateImageSet = () => {
    const items = [];
    for (let i = 0; i < 16; i++) {
      const image = originalImages[i % originalImages.length];
      const name = productNames[i % productNames.length];
      const description = productDescriptions[i % productDescriptions.length];
      items.push({ image, name, description });
    }
    return items;
  };

  const allImageSets = [
    generateImageSet(),
    generateImageSet(),
    generateImageSet(),
    generateImageSet()
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const intervalRef = useRef(null);

  const SLIDE_DURATION = 10000;

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % allImageSets.length);
    }, SLIDE_DURATION);
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setCurrentSetIndex((prev) => (prev + 1) % allImageSets.length);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSetIndex((prev) =>
      prev === 0 ? allImageSets.length - 1 : prev - 1
    );
    startTimer();
  };

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setHoveredImageIndex(index);
    stopTimer();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredImageIndex(null);
    if (!isHovered) startTimer();
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  useEffect(() => {
    if (!isHovered && hoveredImageIndex === null) {
      startTimer();
    }
  }, [isHovered, hoveredImageIndex]);

  const currentImages = allImageSets[currentSetIndex];

  return (
    <div className="relative bg-gray-200 text-white py-12 px-8 font-inter">
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12"> 
          <div className='pt-0 mb-12'>
            <h1 className="text-black text-4xl md:text-5xl font-bold">
              Our Products
            </h1>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentImages.map((item, index) => (
            <div
              key={`image-${index}-${currentSetIndex}`}
              className="relative overflow-hidden group cursor-pointer h-full shadow-lg"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Orange overlay on hover */}
              {hoveredImageIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-60 z-10"/>
              )}

              {/* Product Info */}
              <div className="absolute bottom-10 inset-0 flex flex-col justify-end p-4 z-20">
                <h3 className="text-white font-bold text-2xl mb-1">
                  {item.name}
                </h3>
                <p className="text-white/90 text-sm">
                  {item.description}
                </p>
              </div>

              {/* Next Button */}
              <button
                className="absolute bottom-3 right-3 w-10 h-10 bg-orange-500 group-hover:bg-gray-700 hover:bg-orange-600 text-white text-lg flex items-center justify-center shadow-lg transition-all duration-300"
                onClick={nextSlide}
              >
                &gt;
              </button>
            </div>
          ))}
        </div>
        
        

        {/* Navigation Buttons */}
       
      </div>
    </div>
  );
}