import React from 'react';
import { FaBolt, FaCubes, FaLayerGroup } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBolt className="text-orange-500 w-8 h-8" />,
      title: "Energy Conserving",
      description: "Pellets are energy efficient due to great heat recuperation and lower drop in gas pressure."
    },
    {
      icon: <FaCubes className="text-orange-500 w-8 h-8" />,
      title: "Excellent Raw Material",
      description: "Better tumbler index of pellets allows it to be used as a substitute of lump ore in the production of sponge iron and in blast furnaces."
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Optimum Ore Use",
      description: "We use multiple ores simultaneously to produce pellets through the art of raw material blending."
    },
    {
      icon: <FaBolt className="text-orange-500 w-8 h-8" />,
      title: "Energy Conserving",
      description: "Pellets are energy efficient due to great heat recuperation and lower drop in gas pressure."
    },
    {
      icon: <FaCubes className="text-orange-500 w-8 h-8" />,
      title: "Excellent Raw Material",
      description: "Better tumbler index of pellets allows it to be used as a substitute of lump ore in the production of sponge iron and in blast furnaces."
    },
    {
      icon: <FaLayerGroup className="text-orange-500 w-8 h-8" />,
      title: "Optimum Ore Use",
      description: "We use multiple ores simultaneously to produce pellets through the art of raw material blending."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Features</h2>
          <div className="w-3 h-3 bg-orange-500 ml-2"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FCFCFC] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
