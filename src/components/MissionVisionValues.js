import React from 'react';
import { motion } from 'framer-motion';
import MissionIcon from '../assets/mission-icon.png'; // Placeholder path
import VisionIcon from '../assets/vision-icon.png'; // Placeholder path
import ValuesIcon from '../assets/values-icon.png'; // Placeholder path
import SteelFactoryImage from '../assets/steel-factory.png'; // Placeholder path
import HardhatImage from '../assets/hardhat.png'; // Placeholder path
import WorkerImage from '../assets/worker.png'; // Placeholder path

function MissionVisionValues() {
  const sections = [
    {
      icon: VisionIcon,
      title: 'Our Vision',
      description: 'We\'re engineering the future of steel through smarter processes, stronger partnerships, and seizing every opportunity to raise the bar for quality and sustainability worldwide.',
      image: SteelFactoryImage,
      direction: 'left'
    },
    {
      icon: MissionIcon,
      title: 'Our Mission',
      description: 'We bring Shri. M. P. Agarwal\'s values into action—efficiency, sustainability, and dynamic management to deliver world-class steel solutions for a stronger India.',
      image: HardhatImage,
      direction: 'up'
    },
    {
      icon: ValuesIcon,
      title: 'Our Values',
      description: 'Built on Integrity & Transparency, Collaboration & Synergy, Ownership & Accountability, and Commitment to Excellence—the foundation of our success.',
      image: WorkerImage,
      direction: 'right'
    }
  ];

  // Animation variants for different directions
  const getAnimationVariants = (direction) => {
    const variants = {
      left: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
      },
      right: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
      },
      up: {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
      }
    };
    return variants[direction];
  };

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Heading animation
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-16 px-4 bg-gray-100 overflow-hidden">
      {/* Heading Section */}
      <motion.div 
        className="text-center mb-12"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h1 
          className="text-orange-500 font-semibold uppercase mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          BRAND SLOGAN
        </motion.h1>
        <motion.h1 
          className="text-2xl text-black font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Lorem Ipsum is Simply dummy text of <br /> The Printing
        </motion.h1>
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative"
              variants={getAnimationVariants(section.direction)}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Orange horizontal line at the top of the section */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-orange-500 rounded-tr-lg rounded-tl-lg"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                style={{ transformOrigin: 'left' }}
              />

              {/* Text Content Section */}
              <div className="p-8 pt-6 pb-6 flex-grow flex flex-col">
                <motion.div 
                  className="flex justify-center mb-6 mt-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.2),
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="h-12 w-12 object-contain"
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-center mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) }}
                >
                  {section.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-base text-center leading-relaxed px-2 flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                >
                  {section.description}
                </motion.p>
              </div>

              {/* Image Section */}
              <motion.div 
                className="relative h-72 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 + (index * 0.2) }}
              >
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1.6 + (index * 0.2) }}
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MissionVisionValues;