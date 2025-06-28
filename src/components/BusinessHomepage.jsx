import { useState } from "react";
import steel from "../assets/b1.jpg";
import aluminium from "../assets/b2.jpg";
import power from "../assets/b3.jpg";
import { FiArrowRight, FiPlus } from "react-icons/fi";

const IndustrialCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      title: "Steel",
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
    <div className="bg-gray-400 py-8 md:py-16 px-4 md:px-8 font-inter">
      <h2 className="text-gray-800 text-2xl md:text-4xl font-semibold ml-1 mb-6 md:mb-8">
        Business Areas
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Vertical stack, Desktop: Horizontal layout */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-center mt-6 md:mt-10 pb-3 px-2 md:px-4 lg:px-8 gap-6 lg:gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`
                w-full max-w-sm lg:w-96 h-56 md:h-64 bg-gray-300 relative rounded-2xl overflow-hidden cursor-pointer
                shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                ${
                  hoveredCard === card.id
                    ? "transform -translate-y-1 scale-105 lg:scale-100"
                    : ""
                }
                flex flex-col sm:flex-row
              `}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Text Content */}
              <div className="w-full sm:w-1/2 h-1/2 sm:h-full p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 uppercase">
                    {card.title}
                  </h3>
                  <p
                    className="text-gray-700 text-xs md:text-sm leading-relaxed overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: window.innerWidth < 640 ? 3 : 5,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom section with + button */}
                <div className="flex justify-between items-center mt-2 md:mt-0">
                  <button className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                    <FiPlus className="text-lg md:text-xl" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="w-full sm:w-1/2 h-1/2 sm:h-full relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l sm:bg-gradient-to-l bg-gradient-to-t from-gray-300/0 via-gray-300/20 to-gray-300/50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center mt-8 md:mt-16 mb-0 md:mb-[-10px]">
          <button className="py-2 md:py-3 px-6 md:px-10 bg-gray-800 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 flex items-center text-sm md:text-base">
            Explore All
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCards;
