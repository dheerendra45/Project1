import React, { useState, useEffect, useRef } from "react";

import a2 from "../assets/products/herobg.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";

import al1 from "../assets/al1.jpg";
import al2 from "../assets/al2.jpg";
import al3 from "../assets/al3.jpg";

import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.png";

import sswire from "../assets/products/Wire.jpg";
import brightbar from "../assets/products/brightbar.jpg";
import sswirerod from "../assets/products/wirerod.jpg";
import blackround from "../assets/products/blackrounbar.jpg";
import pellets from "../assets/products/Pellets.jpg";
import spongeiron from "../assets/products/spongeiron.jpg";
import billet from "../assets/products/billets.jpg";
import strucutal from "../assets/products/structure.png";
import tmt from "../assets/products/tmt.jpg";
import stainless from "../assets/products/stainless.jpg";
import wirerod from "../assets/products/wirerod.png";
import colorocated from "../assets/products/image.png";
import flatpatta from "../assets/products/flat.png";
import flats from "../assets/products/flats.jpg";
// Map product names to specific images
const productImages = {
  Pellet: pellets,
  "Sponge Iron": spongeiron,
  Billet: billet,
  "Structural Steel": strucutal,
  "TMT Bars": tmt,
  "Wire Rods": wirerod,
  "Color Coated Sheets": colorocated,
  "Stainless Steel Billets": stainless,
  "SS Wire Rod": sswirerod,
  "SS Wire": sswire,
  "Bright Bar": brightbar,
  "Black Round Bar": blackround,
  "Flat Rolled Products": flatpatta,
  "Flats/Patta": flats,
  // Aluminum products
  "SEL TIGER FOIL – KITCHEN Foil": al1,
  "Aluminium Foil": al2,
  "Battery Foil": al3,
  FinStocks: sswire,
  // Energy products
  "Captive Power": e1,
  "Renewable Power": e2,
};

export default function BusinessAreas() {
  const fallbackImages = [a2, a4, a5];

  const productData = {
    "Steel and Iron": [
      {
        name: "Pellet",
        desc: "High-quality iron ore pellets for steel production",
      },
      {
        name: "Sponge Iron",
        desc: "Direct reduced iron used as raw material in steelmaking",
      },
      { name: "Pig Iron", desc: "Crude iron obtained from smelting iron ore" },
      {
        name: "Billet",
        desc: "Semi-finished casting product for rolling mills",
      },
      {
        name: "Structural Steel",
        desc: "Versatile steel sections for construction projects",
      },
      {
        name: "TMT Bars",
        desc: "Thermo-mechanically treated bars for reinforced concrete",
      },
      { name: "Wire Rods", desc: "Long steel product used for wire drawing" },
      {
        name: "Pipes & Hollow Sections",
        desc: "Steel tubes for structural and mechanical applications",
      },
      {
        name: "Color Coated Sheets",
        desc: "Pre-painted steel sheets with decorative finishes",
      },
      {
        name: "Stainless Steel Billets",
        desc: "High-quality stainless steel intermediate product",
      },
      { name: "SS Wire Rod", desc: "Stainless steel rods for wire production" },
      {
        name: "SS Wire",
        desc: "Fine stainless steel wires for various applications",
      },
      {
        name: "Black Round Bar",
        desc: "Unpolished steel bars for machining purposes",
      },
      {
        name: "Bright Bar",
        desc: "Precision-ground steel bars with smooth finish",
      },
      {
        name: "Flats/Patta",
        desc: "Flat steel products for fabrication and construction",
      },
      {
        name: "Flat Rolled Products",
        desc: "Rolled steel sheets and plates for industrial use",
      },
    ],
    Aluminium: [
      {
        name: "SEL TIGER FOIL – KITCHEN Foil",
        desc: "Premium quality kitchen aluminum foil for domestic use",
      },
      {
        name: "Bare Aluminium Foil",
        desc: "Versatile aluminum foil for packaging and industrial applications",
      },
      {
        name: "Battery Foil",
        desc: "High-performance aluminum foil for battery manufacturing",
      },
      {
        name: "FinStocks",
        desc: "Durable aluminum foil for HVAC and heat exchanger applications",
      },
    ],
    "Energy and Others": [
      {
        name: "Captive Power",
        desc: "Dedicated power generation for industrial operations",
      },
      {
        name: "Renewable Power",
        desc: "Sustainable energy solutions including solar and wind power",
      },
    ],
  };

  const generateImageSet = (products) => {
    return products.map((product, index) => {
      const image =
        productImages[product.name] ||
        fallbackImages[index % fallbackImages.length];
      return {
        image,
        name: product.name,
        description: product.desc,
      };
    });
  };

  const allImageSets = {
    "Steel and Iron": [
      generateImageSet(productData["Steel and Iron"]),
      generateImageSet(productData["Steel and Iron"]),
      generateImageSet(productData["Steel and Iron"]),
      generateImageSet(productData["Steel and Iron"]),
    ],
    Aluminium: [
      generateImageSet(productData["Aluminium"]),
      generateImageSet(productData["Aluminium"]),
      generateImageSet(productData["Aluminium"]),
    ],
    "Energy and Others": [
      generateImageSet(productData["Energy and Others"]),
      generateImageSet(productData["Energy and Others"]),
      generateImageSet(productData["Energy and Others"]),
    ],
  };

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Steel and Iron");
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const intervalRef = useRef(null);
  const SLIDE_DURATION = 10000;

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSetIndex((prev) => (prev + 1) % allImageSets[activeTab].length);
    }, SLIDE_DURATION);
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextSlide = () => {
    setCurrentSetIndex((prev) => (prev + 1) % allImageSets[activeTab].length);
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
  }, [activeTab]);

  useEffect(() => {
    if (!isHovered && hoveredImageIndex === null) {
      startTimer();
    }
  }, [isHovered, hoveredImageIndex]);

  const currentImages = allImageSets[activeTab][currentSetIndex];

  const tabs = ["Steel and Iron", "Aluminium", "Energy and Others"];

  return (
    <div className="relative bg-gray-200 text-white py-12 px-8 font-inter">
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="pt-0 mb-8">
            <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold  mb-6 sm:mb-8">
              OUR RANGE OF PRODUCTS
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentSetIndex(0);
                }}
                className={`text-lg font-semibold pb-2 border-b-2 transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-orange-500 border-orange-500"
                    : "text-gray-700 border-transparent hover:text-orange-400"
                }`}
              >
                {tab}
              </button>
            ))}
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
          <a
            href="/business"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-2 transition-colors duration-300 shadow-lg"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
