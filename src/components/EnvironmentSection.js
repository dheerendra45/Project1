import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import a1 from "../assets/product1.png";
import a2 from "../assets/product2.png";
import a3 from "../assets/product3.png";

const images = [a1, a2, a3];

export default function EnvironmentSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // default is center

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const imageText = {
    heading:
      "Stainless Steeltter",
    subtext:
      "Pellets are a type of agglomerated iron ore fines which has bet tumbler index when compared with that of parent iron ore",
  };

  return (
    <div className="bg-white py-16 px-6">
      {/* Left-aligned text */}
      <div className="text-left mb-10 max-w-4xl mx-auto">
        <h2 className="text-orange-500 text-xl font-semibold">OUR PRODUCTS</h2>
        <h1 className="text-black text-3xl font-bold">
          Lorem ipsum is simply dummy text of the printing
        </h1>
      </div>

      {/* Carousel container */}
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        {/* Buttons */}
        <div className="flex justify-between items-center mb-4 px-6">
          <button
            onClick={prevImage}
            className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Image section */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Left adjacent image */}
          <div
            className="absolute left-0 transform transition-transform duration-500 ease-in-out scale-90 opacity-60 w-1/2 z-0"
          >
            <div className="relative h-full w-full">
              <img
                src={images[(currentIndex - 1 + images.length) % images.length]}
                alt="left"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
                <p className="font-semibold">
                  {imageText.heading}
                </p>
                <p>{imageText.subtext}</p>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="z-10 transform transition-transform duration-500 ease-in-out scale-105 w-[60%] relative">
            <img
              src={images[currentIndex]}
              alt="center"
              className="h-full w-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-4 left-4 text-white text-sm">
              <p className="font-semibold">
                {imageText.heading}
              </p>
              <p>{imageText.subtext}</p>
            </div>
          </div>

          {/* Right adjacent image */}
          <div
            className="absolute right-0 transform transition-transform duration-500 ease-in-out scale-90 opacity-60 w-1/2 z-0"
          >
            <div className="relative h-full w-full">
              <img
                src={images[(currentIndex + 1) % images.length]}
                alt="right"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
                <p className="font-semibold">
                  {imageText.heading}
                </p>
                <p>{imageText.subtext}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
