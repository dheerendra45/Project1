import { useState } from "react";
import steel from "../assets/b1.jpg";
import aluminium from "../assets/b2.jpg";
import power from "../assets/b3.jpg";
import { FiArrowRight } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

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
    <div className="bg-gray-400 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 font-inter">
      {/* Section Title - font-semibold (600) */}
      <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-semibold ml-4 sm:ml-8 md:ml-12 mb-6 sm:mb-8">
        Business Areas
      </h2>

      <div className="max-w-7xl mx-auto">
        {/* Card container */}
        <div className="flex flex-col sm:flex-row items-center overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-3 px-2 sm:px-4 md:px-8 gap-4 sm:gap-6 md:gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`
                w-full min-w-[280px] sm:w-[calc(50%-12px)] md:w-96 h-64 bg-gray-300 relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
                shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                ${
                  hoveredCard === card.id
                    ? "sm:transform sm:-translate-y-1"
                    : ""
                }
                flex flex-col sm:flex-row
              `}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Text Content - All text with font-semibold (600) */}
              <div className="w-full sm:w-1/2 h-1/2 sm:h-full p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase">
                    {card.title}
                  </h3>
                  <p
                    className="text-gray-700 text-xs sm:text-sm leading-relaxed overflow-hidden font-semibold"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Plus button */}
                <div className="flex justify-between items-center mt-2 sm:mt-0">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                    <FiPlus className="text-lg sm:text-xl font-semibold" />
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
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-l from-gray-300/0 via-gray-300/20 to-gray-300/50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button - font-semibold (600) */}
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 mb-2 sm:mb-0">
          <button className="py-2 sm:py-3 px-6 sm:px-10 bg-gray-800 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 flex items-center text-sm sm:text-base">
            Explore All
            <FiArrowRight className="ml-2 font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCards;
