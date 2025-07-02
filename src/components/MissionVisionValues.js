import React from 'react';
import { motion } from 'framer-motion';
import MissionIcon from '../assets/mission-icon.png';
import VisionIcon from '../assets/vision-icon.png';
import ValuesIcon from '../assets/values-icon.png';
import SteelFactoryImage from '../assets/steel-factory.png';
import HardhatImage from '../assets/hardhat.png';
import WorkerImage from '../assets/worker.png';

function MissionVisionValues() {
  const sections = [
    {
      icon: VisionIcon,
      title: 'Our Vision',
      description: "With a farsighted vision of strengthening India's infrastructure and redefining the future of steel, Shyam Metalics and Energy Limited strives to set new benchmarks in excellence by leading with innovation, championing sustainability, and driving inclusive growth, empowering India to emerge as a global industrial force while shaping a resilient, responsible, and progressive world.",
      // image: SteelFactoryImage,
      direction: 'left'
    },
    {
      icon: MissionIcon,
      title: 'Our Mission',
      description: "Shyam Metalics and Energy Limited aims to lead the transformation of the steel industry through responsible manufacturing, digital innovation, and nation-building excellence, leveraging cost-efficiency and the optimal utilization of natural and human resources to drive high productivity, strengthen India’s industrial backbone, and create enduring value for all stakeholders.",
      // image: HardhatImage,
      direction: 'up'
    },
    {
  icon: ValuesIcon,
  title: 'Our Values',
  description: 'Rooted in our values, we continue to grow with integrity and purpose.<br/>Integrity – Transparency <br/>Collaboration – Synergy <br/>Ownership – Accountability<br/>Commitment – Excellence',
  // image: WorkerImage,
  direction: 'right'
}

  ];

  const getAnimationVariants = (direction) => {
    const variants = {
      left: {
        hidden: { opacity: 0, x: -40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5
          }
        }
      },
      right: {
        hidden: { opacity: 0, x: 40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5
          }
        }
      },
      up: {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5
          }
        }
      }
    };
    return variants[direction];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
        duration: 0.8
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      mass: 0.5
    }
  };

  const imageHover = {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  };

  return (
    <div className="relative py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative h-full"
              variants={getAnimationVariants(section.direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={cardHover}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1.5 bg-orange-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + (index * 0.15),
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="p-8 pt-6 pb-6 flex-grow flex flex-col">
                <motion.div
                  className="flex justify-center mb-6 mt-2"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.4 + (index * 0.15)
                  }}
                >
                  <img
                    src={section.icon}
                    alt={section.title}
                    className="h-14 w-14 object-contain"
                  />
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-center mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.5 + (index * 0.15)
                  }}
                >
                  {section.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-base text-center leading-relaxed px-2 flex-grow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.6 + (index * 0.15)
                  }}
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
              </div>

              {/* Optional image at the bottom if you want to re-enable */}
              {/* <motion.div
                className="relative h-72 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + (index * 0.15)
                }}
              >
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8 + (index * 0.15),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={imageHover}
                />
              </motion.div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MissionVisionValues;
