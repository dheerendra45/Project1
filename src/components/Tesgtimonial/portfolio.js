import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const PortfolioComponent = () => {
  const [activeSection, setActiveSection] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "New plant",
      category: "Metallurgy",
      description: "Our state-of-the-art metallurgy plant represents the pinnacle of modern manufacturing technology. With advanced smelting capabilities and precision engineering, we deliver high-quality metal products that meet the most demanding industry standards.",
      features: ["Advanced smelting technology", "Quality control systems", "Environmental compliance", "24/7 production capacity"]
    },
    {
      id: 2,
      title: "Installation",
      category: "Electricity",
      description: "Professional electrical installation services for industrial and commercial applications. Our certified electricians ensure safe, efficient, and code-compliant installations that power your operations reliably.",
      features: ["Industrial wiring systems", "Power distribution panels", "Safety compliance", "Maintenance support"]
    },
    {
      id: 3,
      title: "Technology",
      category: "Construction",
      description: "Cutting-edge construction technology solutions that revolutionize building processes. From automated systems to smart building integration, we bring innovation to every construction project.",
      features: ["Smart building systems", "Automated construction tools", "Energy-efficient solutions", "Digital project management"]
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="bg-white min-h-[753px] pt-16  px-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
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
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
            </p>
            <button className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 group">
              View More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Portfolio Items */}
        <div className="space-y-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-8">
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
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === item.id ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}>
                <div className="grid md:grid-cols-2 gap-8 pt-4">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;