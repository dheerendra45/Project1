import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import a1 from "../assets/product1.png";
import a2 from "../assets/product2.png";
import a3 from "../assets/product3.png";

const images = [a1, a2, a3];

export default function EnvironmentSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // default is center
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-advance images every 8 seconds
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 8000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const imageText = {
    heading: "Stainless Steeltter",
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
        <div className="relative h-96 flex items-center justify-center overflow-hidden">
          {/* Left adjacent image */}
          <motion.div
            className="absolute left-0 w-1/2 z-0 cursor-pointer"
            animate={{ 
              x: 0,
              scale: 0.9, 
              opacity: 0.6 
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier for smooth easing
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
          >
            <div className="relative h-full w-full overflow-hidden">
              <motion.img
                key={`left-${currentIndex}`}
                src={images[(currentIndex - 1 + images.length) % images.length]}
                alt="left"
                className="h-full w-full object-cover rounded-xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 right-6 text-white text-xs md:text-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <p className="font-semibold truncate">{imageText.heading}</p>
                <p className="line-clamp-2 text-ellipsis overflow-hidden">{imageText.subtext}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Center image */}
          <motion.div
            className="z-10 w-[60%] relative cursor-pointer"
            animate={{ scale: 1.05 }}
            whileHover={{ scale: 1.08 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.img
              key={`center-${currentIndex}`}
              src={images[currentIndex]}
              alt="center"
              className="h-full w-full object-cover rounded-xl shadow-xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.2, opacity: 0, y: -50 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
            <motion.div
              className="absolute bottom-6 left-6 right-6 text-white text-sm"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <p className="font-semibold truncate">{imageText.heading}</p>
              <p className="line-clamp-2 text-ellipsis overflow-hidden">{imageText.subtext}</p>
            </motion.div>
          </motion.div>

          {/* Right adjacent image */}
          <motion.div
            className="absolute right-0 w-1/2 z-0 cursor-pointer"
            animate={{ 
              x: 0,
              scale: 0.9, 
              opacity: 0.6 
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          >
            <div className="relative h-full w-full overflow-hidden">
              <motion.img
                key={`right-${currentIndex}`}
                src={images[(currentIndex + 1) % images.length]}
                alt="right"
                className="h-full w-full object-cover rounded-xl"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
              <motion.div 
                className="absolute bottom-6 left-6 right-6 text-white text-xs md:text-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <p className="font-semibold truncate">{imageText.heading}</p>
                <p className="line-clamp-2 text-ellipsis overflow-hidden">{imageText.subtext}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}