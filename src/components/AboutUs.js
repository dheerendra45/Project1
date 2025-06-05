import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sample data for each year
  const timelineData = [
    {
      year: "1848",
      message: "Empowering industries with innovation.",
      title: "A Steel Company With Integrated Operations.",
      description: "Shyam Metalics is the 6th largest metal producing company based in India providing end-to-end solutions with integrated capabilities (Source: CRISIL Report) with a focus on long steel products and ferro alloys...",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
    },
    {
      year: "1902",
      message: "Trusted by thousands across the nation.",
      title: "Expanding Horizons in Steel Manufacturing.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=300&fit=crop"
    },
    {
      year: "1964",
      message: "Quality and strength you can count on.",
      title: "Innovation Through Advanced Technology.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vehicula malesuada lorem.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
    },
    {
      year: "1998",
      message: "Engineering the future of steel.",
      title: "Global Expansion and Market Leadership.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue erat at massa. Sed cursus turpis a purus aliquam cursus. Sed non lorem risus mauris.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop"
    },
    {
      year: "2008",
      message: "Sustainable solutions for tomorrow.",
      title: "Environmental Responsibility and Growth.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Morbi congue faucibus pulvinar.",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop"
    },
    {
      year: "2023",
      message: "Built on legacy, powered by vision.",
      title: "Digital Transformation and Future Ready.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=80&h=80&fit=crop",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=80&h=80&fit=crop"
  ];

  // Auto-advance animation - increased timing from 3s to 6s
  useEffect(() => {
    if (!isHovered && hoveredIndex === null) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % timelineData.length);
      }, 6000); // Changed from 3000 to 6000 (6 seconds)

      return () => clearInterval(interval);
    }
  }, [isHovered, hoveredIndex, timelineData.length]);

  const currentData = timelineData[activeIndex];

  return (
    <div className="p-8">
      {/* ABOUT US Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left Text Section */}
        <motion.div 
          className="lg:w-1/2 text-black space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-orange-500 text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ABOUT US
          </motion.h1>
          
          <AnimatePresence mode="wait">
            <motion.h1 
              key={`title-${activeIndex}`}
              className="text-2xl font-bold leading-snug"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {currentData.title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeIndex}`}
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              {currentData.description}
            </motion.p>
          </AnimatePresence>

          <motion.button 
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 font-medium shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Read More →
          </motion.button>
        </motion.div>

        {/* Image and Stats Section */}
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={`main-img-${activeIndex}`}
              src={currentData.image} 
              alt="About Us" 
              className="w-full max-w-md rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          
          <motion.div 
            className="flex gap-6 mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            {[
              { title: '16,660', desc: 'Employee Strength' },
              { title: 'AA/Stable', desc: 'Credit Rating' },
              { title: '15.13 MTPA', desc: 'Production Capacity' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="border border-orange-500 p-4 rounded-lg shadow-lg bg-white w-40 text-center hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center justify-center gap-2 text-xl font-bold text-black mb-1">
                  <motion.span 
                    className="text-orange-500 text-2xl"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ↑
                  </motion.span>
                  <h1>{stat.title}</h1>
                </div>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline Gallery with Horizontal Line */}
      <motion.div 
        className="relative mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {/* Orange Horizontal Line */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-orange-500 z-0 rounded-full"
          style={{ top: 'calc(50% + 12px)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
        />

        {/* Timeline Gallery */}
        <div className="relative z-10 flex justify-between items-center gap-4 max-w-6xl mx-auto">
          {galleryImages.map((img, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setHoveredIndex(index);
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsHovered(false);
                }}
                className="flex flex-col items-center gap-1 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.8, ease: "easeOut" }}
              >
                {/* Active state: message and year above image */}
                <AnimatePresence>
                  {isActive && (
                    <>
                      <motion.div 
                        className="mb-2 bg-orange-500 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg whitespace-nowrap"
                        initial={{ opacity: 0, y: -15, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        {timelineData[index].message}
                      </motion.div>
                      <motion.div 
                        className="text-orange-600 font-bold text-lg mb-2 whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        {timelineData[index].year}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* Inactive state: only year visible */}
                {!isActive && (
                  <motion.div 
                    className="text-orange-600 font-semibold text-base mb-6 whitespace-nowrap"
                    animate={{ 
                      opacity: hoveredIndex === index ? 0.9 : 1,
                      scale: hoveredIndex === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {timelineData[index].year}
                  </motion.div>
                )}

                {/* Circle container */}
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700
                    ${isActive ? 'bg-orange-500' : 'bg-gray-300'}`}
                  animate={{ 
                    backgroundColor: isActive ? '#f97316' : (hoveredIndex === index ? '#fed7aa' : '#d1d5db'),
                    scale: isActive ? 1.2 : (hoveredIndex === index ? 1.1 : 1),
                    boxShadow: isActive ? '0 12px 30px rgba(249, 115, 22, 0.4)' : 
                              (hoveredIndex === index ? '0 6px 18px rgba(249, 115, 22, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.1)')
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <motion.div
                    className={`w-3 h-3 rounded-full transition-all duration-700 ${
                      isActive ? 'bg-white' : 'bg-orange-500'
                    }`}
                    animate={{
                      backgroundColor: isActive ? '#ffffff' : '#f97316',
                      scale: isActive ? 1.2 : (hoveredIndex === index ? 1.1 : 1)
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <motion.div 
          className="flex justify-center mt-10 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {timelineData.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${
                index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onMouseEnter={() => {
                setActiveIndex(index);
                setHoveredIndex(index);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsHovered(false);
              }}
              whileHover={{ scale: 1.3 }}
              animate={{ 
                scale: index === activeIndex ? 1.1 : 1,
                backgroundColor: index === activeIndex ? '#f97316' : '#d1d5db'
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}