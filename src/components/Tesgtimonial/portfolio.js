import React, { useState, useRef } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const PortfolioComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  const portfolioItems = [
    {
      id: 1,
      title: "New plant",
      category: "Metallurgy",
      description: "Our state-of-the-art metallurgy plant represents the pinnacle of modern manufacturing technology...",
      features: ["Advanced smelting technology", "Quality control systems", "Environmental compliance", "24/7 production capacity"]
    },
    {
      id: 2,
      title: "Installation",
      category: "Electricity",
      description: "Professional electrical installation services for industrial and commercial applications...",
      features: ["Industrial wiring systems", "Power distribution panels", "Safety compliance", "Maintenance support"]
    },
    {
      id: 3,
      title: "Technology",
      category: "Construction",
      description: "Cutting-edge construction technology solutions that revolutionize building processes...",
      features: ["Smart building systems", "Automated construction tools", "Energy-efficient solutions", "Digital project management"]
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white min-h-[753px] pt-16 px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="mb-8 lg:mb-0">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
              OUR PORTFOLIO
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold text-orange-500 leading-tight mb-8">
              Take a look
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...
            </p>
            <button className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 group">
              View More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="w-full h-px bg-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Portfolio Items */}
        <div className="space-y-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="border-b border-gray-200 pb-8"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.2 }}
            >
              {/* Item Header */}
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => toggleSection(item.id)}
              >
                <div className="flex items-baseline space-x-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-gray-500 text-base font-medium">
                    / {item.category}
                  </span>
                </div>

                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                  <Plus
                    className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${
                      activeSection === item.id ? 'rotate-45' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeSection === item.id ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}
              >
                <motion.div
                  className="grid md:grid-cols-2 gap-8 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={activeSection === item.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
