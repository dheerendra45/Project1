import React, { useEffect } from 'react';
import { FaBolt, FaCubes, FaLayerGroup } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const features = [
    {
      icon: <FaBolt className="text-orange-500 w-8 h-8" />,
      title: "High Iron Content (65–72%)",
      description:
        " Ensures maximum output and reduces slag generation",
    },
    {
      icon: <FaCubes className="text-orange-500 w-8 h-8" />,
      title: "Uniform Size (8–16mm)",
      description:
        " Offers optimized gas flow and uniform smelting",
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Low Impurity (<2%)",
      description:
        "Alumina, silica, and phosphorus kept to a minimum",
    },
    {
      icon: <FaBolt className="text-orange-500 w-8 h-8" />,
      title: "Cold Crushing Strength (250–350 kg/pellet)",
      description:
        "Withstands handling and furnace loads",
    },
    {
      icon: <FaCubes className="text-orange-500 w-8 h-8" />,
      title: "High Porosity (>25%)",
      description:
        "Supports efficient fuel usage and faster reduction",
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Thermal Stability",
      description:
        "Resistant to sudden temperature shifts in furnaces",
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Eco-Friendly Pellet Plant",
      description:
        "Green manufacturing practices with emission control",
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Custom Chemistry",
      description:
        "Basic and acidic pellet options tailored to client needs",
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Minimal Dust Generation",
      description:
        "Safe, clean handling and logistics",
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Verified Quality",
      description:
        "Meets ISO 9001, BIS, ASTM, and other international standards",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-center mb-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Features</h2>
          <div className="w-3 h-3 bg-orange-500 ml-2"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#FCFCFC] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
