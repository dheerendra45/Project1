import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import a1 from '../assets/aboutUs.png';
import a2 from "../assets/1.png";
import a3 from "../assets/2.png";
import a4 from "../assets/3.png";
import a5 from "../assets/4.png";
import a6 from "../assets/5.png";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const messages = [
    "Empowering industries with innovation.",
    "Trusted by thousands across the nation.",
    "Quality and strength you can count on.",
    "Engineering the future of steel.",
    "Sustainable solutions for tomorrow.",
    "Built on legacy, powered by vision.",
  ];

  const years = ["1848", "1902", "1964", "1998", "2008", "2023"];
  const galleryImages = [a2, a3, a4, a5, a6, a6];
  const aboutImages = [a1, a1, a1, a1, a1, a1];
  const aboutTexts = [
    "Shyam Metalics is the 6th largest metal producing company based in India providing end-to-end solutions with integrated capabilities (Source: CRISIL Report) with a focus on long steel products and ferro alloys. Our state-of-the-art facilities and commitment to quality have made us a leader in the industry.",
    "Founded in 1848, we've grown to become a leader in steel production with state-of-the-art facilities across multiple locations in India. Our early adoption of innovative production techniques set us apart from competitors.",
    "Our 1902 expansion marked the beginning of our journey towards becoming an integrated steel producer with mining capabilities. This vertical integration allowed us to control quality from raw materials to finished products.",
    "The 1964 revolution in our production techniques set new benchmarks for quality in the steel industry. We introduced advanced quality control measures that became industry standards.",
    "In 1998, we pioneered several sustainable steel production methods that reduced our carbon footprint by 40%. Our environmental initiatives have been recognized with multiple awards.",
    "Our 2023 vision focuses on digital transformation and AI-powered manufacturing processes. We're investing heavily in Industry 4.0 technologies to maintain our competitive edge."
  ];

  // Stats data for each year
  const statsData = [
    { employee: '120', rating: 'B', capacity: '0.05 MTPA' },
    { employee: '1,250', rating: 'BB', capacity: '0.5 MTPA' },
    { employee: '3,450', rating: 'BBB', capacity: '1.2 MTPA' },
    { employee: '8,760', rating: 'A', capacity: '4.5 MTPA' },
    { employee: '12,340', rating: 'AA-', capacity: '9.8 MTPA' },
    { employee: '16,660', rating: 'AA/Stable', capacity: '15.13 MTPA' }
  ];

  // Auto-cycle through timeline items every 10 seconds when not hovering
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [galleryImages.length, isHovering]);

  return (
    <div className="p-8">
      {/* ABOUT US Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left Text Section */}
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 text-black space-y-6"
        >
          <h1 className="text-orange-500 text-xl font-semibold">ABOUT US</h1>
          <h1 className="text-3xl font-bold leading-snug">
            A Steel Company With Integrated <br /> Operations.
          </h1>
          <p className="text-lg mb-6">
            {aboutTexts[activeIndex]}
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Read More -&gt;
          </button>
        </motion.div>

        {/* Image and Stats Section */}
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={aboutImages[activeIndex]}
              alt="About Us"
              className="w-full max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            />
          </AnimatePresence>
          <div className="flex gap-6 mt-6">
            {[
              { title: statsData[activeIndex].employee, desc: 'Employee Strength' },
              { title: statsData[activeIndex].rating, desc: 'Credit Rating' },
              { title: statsData[activeIndex].capacity, desc: 'Production Capacity' },
            ].map((stat, i) => (
              <div key={i} className="border border-orange-500 p-4 rounded-lg shadow-lg bg-white w-40 text-center">
                <div className="flex items-center justify-center gap-2 text-xl font-bold text-black mb-1">
                  <span className="text-orange-500 text-2xl">↑</span>
                  <h1>{stat.title}</h1>
                </div>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Gallery with Horizontal Line */}
      <div className="relative mt-20">
        {/* Orange Horizontal Line - passes vertically through selected image center */}
        <div
          className="absolute left-0 right-0 h-1 bg-orange-500 z-0"
          style={{ top: 'calc(50% + 12px)' }}
        />

        {/* Timeline Gallery */}
        <div className="relative z-10 flex justify-between items-center gap-4 max-w-6xl mx-auto">
          {galleryImages.map((img, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Fixed height container for message/year to prevent layout shift */}
                <div className="h-[72px] flex flex-col items-center justify-end mb-1">
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key={`active-${index}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center"
                      >
                        <div className="mb-1 bg-orange-500 text-white text-sm font-semibold px-3 py-2 rounded-md shadow-lg whitespace-nowrap w-max border-2 border-orange-600">
                          {messages[index]}
                        </div>
                        <div className="text-orange-600 font-semibold whitespace-nowrap text-lg">
                          {years[index]}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`inactive-${index}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-orange-600 font-semibold whitespace-nowrap text-lg h-[36px] flex items-end"
                      >
                        {years[index]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Image container - will not shift because parent height is fixed */}
                <motion.div
                  className={`w-16 h-16 rounded-full p-1 flex items-center justify-center transition-colors duration-300
                    ${isActive ? 'bg-orange-500' : 'bg-gray-300'}`}
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <motion.img
                    src={img}
                    alt={`img-${index}`}
                    className="object-contain"
                    animate={{
                      y: isActive ? 0 : -12,
                      scale: isActive ? 1.1 : 0.9
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}