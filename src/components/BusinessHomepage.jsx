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
    <div className="bg-[#EDF1F4] py-12 px-5 font-inter">
      <h2 className="text-gray-800 text-4xl font-semibold ml-7 mb-8">
        Business Areas
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 overflow-x-auto pb-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`
                w-full md:w-96 h-64 bg-gray-300 relative overflow-hidden cursor-pointer flex-shrink-0
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
              {/* Left Side - Text & + Button */}
              <div className="w-1/2 h-full flex flex-col justify-between pl-8 pt-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 uppercase">
                    {card.title}
                  </h3>
                  <p
                    className="text-gray-700 text-sm leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: window.innerWidth < 640 ? 3 : 5,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="flex justify-start items-end mt-auto mb-2">
                  <button className="w-10 h-10 ml-0 bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors duration-300">
                    <FiPlus className="text-xl" />
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
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center mt-12 mb-4">
          <button className="py-3 px-10 bg-gray-800 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 flex items-center">
            Explore All
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCards;
