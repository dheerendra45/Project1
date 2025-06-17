import React from 'react';
import { motion } from 'framer-motion';
import WorldMapImage from '../assets/world-map.png';
import IndiaMapImage from '../assets/india-map.jpg';
import icon from '../assets/industry.png';

function LocationsMap() {
  const stats = [
    { label: 'Clients', value: '12K' },
    { label: 'Annual growth', value: '55%' },
    { label: 'No of projects', value: '5K' },
    { label: 'Positive ratings', value: '80%' }
  ];

  const iconPositions = [
    { top: '35%', left: '45%' },
    { top: '42%', left: '48%' },
    { top: '40%', left: '38%' },
    { top: '58%', left: '42%' },
    { top: '65%', left: '35%' },
    { top: '80%', left: '40%' }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        mass: 0.5
      }
    }
  };

  return (
    <div className="py-6 md:py-12 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title & Description with Button Row */}
        <motion.div
          className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="mb-4 sm:mb-0">
            <motion.h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Locations
            </motion.h2>
            <motion.p className="text-gray-700 max-w-xl text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </motion.p>
          </div>
          <motion.button
            className="flex items-center bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition-colors self-start sm:self-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View All
            <span className="ml-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-xl font-extrabold">
              →
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="flex justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="bg-gray-50 shadow-md rounded-xl grid grid-cols-2 sm:flex sm:justify-between items-center px-4 sm:px-10 py-5 w-full max-w-[1160px]">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center px-3 sm:px-6 py-3 ${index < stats.length - 1 ? 'sm:border-r border-gray-400' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-gray-700 text-xs sm:text-base font-semibold mb-1">{stat.label}</p>
                <p className="text-orange-600 text-xl sm:text-3xl font-extrabold">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Maps Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
          {/* World Map */}
          <motion.div
            className="lg:w-3/5 shadow-md rounded-xl overflow-hidden border border-gray-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src={WorldMapImage} alt="World Map" className="w-full object-cover" />
          </motion.div>

          {/* India Map with Icons */}
          <motion.div
            className="lg:w-2/5 relative shadow-md rounded-xl overflow-hidden border border-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src={IndiaMapImage} alt="India Map" className="w-full object-cover" />
            {iconPositions.map((pos, idx) => (
              <motion.img
                key={idx}
                src={icon}
                alt="Industry Icon"
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: '22px',
                  height: '22px',
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 120 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LocationsMap;
