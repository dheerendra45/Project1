import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import a2 from "../assets/products/herobg.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";

import pellets from '../assets/products/pellets.png';
import spongeiron from '../assets/products/spongeiron.png';
import billet from '../assets/products/billets.jpg';
import strucutal from '../assets/products/structure.png';
import tmt from '../assets/products/tmt.png';
import stainless from '../assets/products/stainless.png';
import wirerod from '../assets/products/wirerod.png';
import colorocated from '../assets/products/image.png';

// Map product names to specific images
const productImages = {
  "Pellet": pellets,
  "Sponge Iron": spongeiron,
  "Billet": billet,
  "Structural Steel": strucutal,
  "TMT Bars": tmt,
  "Wire Rods": wirerod,
  "Color Coated Sheets": colorocated,
  "Stainless Steel Billets": stainless
};

export default function BusinessAreas2() {
  const fallbackImages = [a2, a4, a5];

  const productData = [
    { name: "Pellet", desc: "High-quality iron ore pellets for steel production" },
    { name: "Sponge Iron", desc: "Direct reduced iron used as raw material in steelmaking" },
    { name: "Pig Iron", desc: "Crude iron obtained from smelting iron ore" },
    { name: "Billet", desc: "Semi-finished casting product for rolling mills" },
    { name: "Structural Steel", desc: "Versatile steel sections for construction projects" },
    { name: "TMT Bars", desc: "Thermo-mechanically treated bars for reinforced concrete" },
    { name: "Wire Rods", desc: "Long steel product used for wire drawing" },
    { name: "Pipes & Hollow Sections", desc: "Steel tubes for structural and mechanical applications" },
    { name: "Color Coated Sheets", desc: "Pre-painted steel sheets with decorative finishes" },
    { name: "Stainless Steel Billets", desc: "High-quality stainless steel intermediate product" },
    { name: "SS Wire Rod", desc: "Stainless steel rods for wire production" },
    { name: "SS Wire", desc: "Fine stainless steel wires for various applications" },
    { name: "Black Round Bar", desc: "Unpolished steel bars for machining purposes" },
    { name: "Bright Bar", desc: "Precision-ground steel bars with smooth finish" },
    { name: "Flats/Patta", desc: "Flat steel products for fabrication and construction" },
    { name: "Flat Rolled Products", desc: "Rolled steel sheets and plates for industrial use" }
  ];

  const generateImageSet = () => {
    return productData.map((product, index) => {
      const image = productImages[product.name] || fallbackImages[index % fallbackImages.length];
      return {
        image,
        name: product.name,
        description: product.desc
      };
    });
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
        <div className="text-center mb-12">
          <div className='pt-0 mb-12'>
            <h1 className="text-black text-4xl md:text-5xl font-bold">
              Our Products
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentImages.map((item, index) => (
            <div
              key={`image-${index}-${currentSetIndex}`}
              className="relative overflow-hidden group cursor-pointer h-full shadow-lg rounded-lg"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Hover overlay */}
              {hoveredImageIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-transparent z-15" />
              )}

              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-20 text-center">
                <h3 className="text-white font-bold text-lg mb-2 drop-shadow-lg">
                  {item.name}
                </h3>
                <p className="text-white/90 text-sm drop-shadow-md leading-tight">
                  {item.description}
                </p>
              </div>

              <button
                className="absolute bottom-3 right-3 w-10 h-10 bg-orange-500 group-hover:bg-gray-700 hover:bg-orange-600 text-white text-lg flex items-center justify-center shadow-lg transition-all duration-300 rounded z-20"
                onClick={nextSlide}
              >
                &gt;
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}