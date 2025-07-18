import React, { useState, useEffect, useRef } from "react";

import a2 from "../assets/products/herobg.png";
import a3 from "../assets/business2.png";
import a4 from "../assets/business3.png";
import a5 from "../assets/business4.png";
import { Link } from "react-router-dom";
import sswirerod1 from "../assets/products/sswire.png";
import ss from "../assets/products/ss.png";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.png";
import pipes from "../assets/products/pipes.png";
import pgiron from "../assets/products/pig.png";
import sswire from "../assets/products/Wire.jpg";
import brightbar from "../assets/products/bbar.jpg";
import sswirerod from "../assets/products/wr.jpg";
import blackround from "../assets/products/bbbar.png";
import pellets from "../assets/products/pellets2.png";
import spongeiron from "../assets/products/spounge.png";
import billet from "../assets/products/bill.png";
import strucutal from "../assets/products/struct.png";
import tmt from "../assets/products/tmt1.png";
import stainless from "../assets/products/stainlesssteel.jpg";
import wirerod from "../assets/products/wirerod.png";
import colorocated from "../assets/products/colorcoated.png";
import flatpatta from "../assets/products/flatsrolled.png";
import flats from "../assets/products/flats.png";

import al from "../assets/products/al1.png";
import al2 from "../assets/products/al2.png";
import al3 from "../assets/products/al3.png";
import al4 from "../assets/products/al4.png";
// Map product names to specific images
const productImages = {
  Pellet: pellets,
  "SS Wire": ss,
  "SS Wire Rod": sswirerod1,
  "Sponge Iron": spongeiron,
  Billet: billet,
  "Structural Steel": strucutal,
  "TMT Bars": tmt,
  "Wire Rods": wirerod,
  "Color Coated Sheets": colorocated,
  "Stainless Steel Billets": stainless,
  "Wire Rods": sswirerod,
  "SS Wire": sswire,
  "Bright Bar": brightbar,
  "Black Round Bar": blackround,
  "Flat Rolled Products": flatpatta,
  "Flats/Patta": flats,
  "Pig Iron": pgiron,
  "Pipes & Hollow Sections": pipes,
  // Aluminum products
  "SEL TIGER FOIL–KITCHEN Foil": al,
  "Bare Aluminium Foil": al2,
  "Battery Foil": al3,
  FinStocks: al4,
  // Energy products
  "Captive Power": e1,
  "Renewable Power": e2,
};

export default function BusinessAreas({ id }) {
  const fallbackImages = [a2, a4, a5];

  const productData = {
    "Iron and Steel": [
      {
        name: "Pellet",
        desc: "High-quality iron ore pellets for steel production",
        href: "/pellet",
      },
      {
        name: "Sponge Iron",
        desc: "Direct reduced iron used as raw material in steelmaking",
        href: "/sponge_iron",
      },
      {
        name: "Pig Iron",
        desc: "Crude iron obtained from smelting iron ore",
        href: "/pig_iron",
      },
      {
        name: "Billet",
        desc: "Semi-finished casting product for rolling mills",
        href: "/billets",
      },
      {
        name: "Structural Steel",
        desc: "Versatile steel sections for construction projects",
        href: "/structural_steel",
      },
      {
        name: "TMT Bars",
        desc: "Thermo-mechanically treated bars for reinforced concrete",
        href: "/tmt_bars",
      },
      {
        name: "Wire Rods",
        desc: "Long steel product used for wire drawing",
        href: "/wire_rods",
      },
      {
        name: "Pipes & Hollow Sections",
        desc: "Steel tubes for structural and mechanical applications",
        href: "/pipes_hollow_sections",
      },
      {
        name: "Color Coated Sheets",
        desc: "Pre-painted steel sheets with decorative finishes",
        href: "/color_coated_sheets",
      },
      {
        name: "Stainless Steel Billets",
        desc: "High-quality stainless steel intermediate product",
        href: "/stainless_steel_billets",
      },
      {
        name: "SS Wire Rod",
        desc: "Stainless steel rods for wire production",
        href: "/SS_Wire_Rod",
      },
      {
        name: "SS Wire",
        desc: "Fine stainless steel wires for various applications",
        href: "#", // No specific href found in navItems
      },
      {
        name: "Black Round Bar",
        desc: "Unpolished steel bars for machining purposes",
        href: "/blackround_bar",
      },
      {
        name: "Bright Bar",
        desc: "Precision-ground steel bars with smooth finish",
        href: "/bright_bar",
      },
      {
        name: "Flats/Patta",
        desc: "Flat steel products for fabrication and construction",
        href: "/flats",
      },
      {
        name: "Flat Rolled Products",
        desc: "Rolled steel sheets and plates for industrial use",
        href: "#", // No specific href found in navItems
      },
    ],
    Aluminium: [
      {
        name: "SEL TIGER FOIL–KITCHEN Foil",
        desc: "Premium quality kitchen aluminum foil for domestic use",
        href: "#", // From navItems subItems
      },
      {
        name: "Bare Aluminium Foil",
        desc: "Versatile aluminum foil for packaging and industrial applications",
        href: "#", // From navItems subItems
      },
      {
        name: "Battery Foil",
        desc: "High-performance aluminum foil for battery manufacturing",
        href: "#", // From navItems subItems
      },
      {
        name: "FinStocks",
        desc: "Durable aluminum foil for HVAC and heat exchanger applications",
        href: "#", // From navItems subItems
      },
    ],
    "Energy and Others": [
      {
        name: "Captive Power",
        desc: "Dedicated power generation for industrial operations",
        href: "/capatve-power",
      },
      {
        name: "Renewable Power",
        desc: "Sustainable energy solutions including solar and wind power",
        href: "/renewable-power",
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
        href: product.href, // Use the href from productData
      };
    });
  };
  const allImageSets = {
    "Iron and Steel": [
      generateImageSet(productData["Iron and Steel"]),
      generateImageSet(productData["Iron and Steel"]),
      generateImageSet(productData["Iron and Steel"]),
      generateImageSet(productData["Iron and Steel"]),
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
  const [activeTab, setActiveTab] = useState("Iron and Steel");
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

  const tabs = ["Iron and Steel", "Aluminium", "Energy and Others"];

  return (
    <div
      id={id}
      className="relative bg-gray-200 text-white py-[2%] px-[10%] font-inter"
    >
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="pt-0 mb-8">
            <h2 className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">
              Integrated Steel Solutions
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

        {/* Modified grid container with responsive columns and gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {currentImages.map((item, index) => (
            <div
              key={`image-${index}-${currentSetIndex}`}
              className="w-full h-[208px] bg-white rounded-lg shadow-none relative overflow-hidden group"
            >
              {/* Hover Orange Overlay */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300/70 to-transparent rounded-lg" />
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute top-[102px] left-[60%] transform -translate-x-1/2 w-[196px] h-[114px] object-cover z-0"
              />

              {/* Header */}
              <h3 className="absolute top-[31px] left-[20px] w-[calc(100%-40px)] h-[28px] text-black font-semibold text-[16px] leading-[28px] z-20">
                {item.name}
              </h3>

              {/* Subheader */}
              <p className="absolute top-[60px] left-[20px] w-[calc(100%-40px)] h-[53px] text-gray-700 text-[16px] leading-[18px] z-20">
                {item.description}
              </p>

              {/* Button */}
              <button
                className="absolute top-[136px] left-[20px] w-[40px] h-[40px] bg-orange-500 text-white text-lg rounded-[4px] flex items-center justify-center z-20"
                onClick={nextSlide}
              >
                &gt;
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/business">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold border border-white transition-all duration-300 shadow-lg w-fit text-sm sm:text-base">
              Explore All →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
