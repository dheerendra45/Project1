import { useState } from "react";
import steel from "../assets/b11.png";
import aluminium from "../assets/b12.png";
import power from "../assets/b13.png";
import { FiArrowRight, FiPlus } from "react-icons/fi";

const IndustrialCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      title: " Iron and Steel",
      description:
        "We possess a well-diversified product portfolio comprising Ferro Alloys, Sponge Iron, Billet, TMT, Structural, Pipes, and Pellets.",
      image: steel,
    },
    {
      id: 2,
      title: "Aluminium",
      description:
        "Aluminium foil for packaging has economic, environmental and social benefits. We are setting up a foil rolling mill in West Bengal with 0.04MTPA capacity.",
      image: aluminium,
    },
    {
      id: 3,
      title: "Energy",
      description:
        "Our plants generate over 200MW of captive power using waste heat and eco-friendly sources like char gas and pollution dust from sponge iron units.",
      image: power,
    },
  ];

  return (
    <div className="bg-[#EDF1F4] py-8 sm:py-12 px-4 sm:px-5 md:px-6 lg:px-8 font-sans">
      {/* Title */}
      <h2 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left sm:ml-7 mb-6 sm:mb-8">
        Business Areas
      </h2>

      <div className="max-w-7xl mx-auto">
        {/* Cards Container - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`
                bg-gray-300 relative overflow-hidden cursor-pointer
                shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                h-[280px] sm:h-[320px] md:h-[300px] lg:h-[260px]
                ${hoveredCard === card.id ? "transform md:-translate-y-1" : ""}
              `}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Mobile Layout (stacked) */}
              <div className="flex flex-col h-full md:hidden">
                {/* Image Section - Changed to object-contain */}
                <div className="h-[40%] relative flex items-center justify-center bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                </div>

                {/* Text Section */}
                <div className="h-[60%] p-4 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 uppercase">
                      {card.title}
                    </h3>
                    <button className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 ml-2">
                      <FiPlus className="text-sm" />
                    </button>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Tablet & Desktop Layout (side by side) - unchanged */}
              <div className="hidden md:flex h-full">
                {/* Left Side - Text & Button */}
                <div className="w-1/2 h-full flex flex-col justify-between p-4 lg:p-6">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 uppercase">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-4 lg:line-clamp-5">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-start items-end mt-4">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                      <FiPlus className="text-sm sm:text-xl" />
                    </button>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2 h-full relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`absolute inset-0 object-contain transition-all duration-300
                      ${card.id === 1 ? "w-full h-full" : ""}
                      ${card.id === 2 ? "w-[200%] h-full" : ""}
                      ${card.id === 3 ? "w-full h-full" : ""}
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-gray-300/0 via-gray-300/20 to-gray-300/50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center mt-8 sm:mt-12 mb-4">
          <button className="py-2 sm:py-3 px-6 sm:px-10 bg-orange-600 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base">
            Explore All
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCards;
