import { useState } from "react";
import steel from "../assets/b1.jpg";
import aluminium from "../assets/b2.jpg";
import power from "../assets/b3.jpg";

const IndustrialCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      title: "Steel",
      description:
        "We possess a well-diversified product portfolio comprising Ferro Alloys, Sponge Iron, Billet, TMT, Structural, Pipes, and Pellets.",
      image: steel,
      bgGradient: "from-gray-900/10 via-gray-900/30 to-gray-900/60",
    },
    {
      id: 2,
      title: "Aluminium",
      description:
        "Aluminium foil for packaging has economic, environmental and social benefits. We are setting up a foil rolling mill in West Bengal with 0.04MTPA capacity.",
      image: aluminium,
      bgGradient: "from-gray-900/10 via-gray-900/30 to-gray-900/60",
    },
    {
      id: 3,
      title: "Energy",
      description:
        "Our plants generate over 200MW of captive power using waste heat and eco-friendly sources like char gas and pollution dust from sponge iron units.",
      image: power,
      bgGradient: "from-gray-900/10 via-gray-900/30 to-gray-900/60",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-300 py-12 px-5 font-inter">
      <h2 className="text-gray-800 text-4xl font-semibold ml-7 mb-8">
        Business Areas
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`
                w-80 h-96 relative rounded-2xl overflow-hidden cursor-pointer
                shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out
                ${hoveredCard === card.id ? "transform -translate-y-2" : ""}
              `}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${card.bgGradient} z-0`}
              ></div>

              {/* Content */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 z-10 p-5
                  bg-white/95 backdrop-blur-sm rounded-t-2xl
                  transition-all duration-300 ease-in-out
                  ${hoveredCard === card.id ? "bg-white/98" : ""}
                `}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase">
                  {card.title}
                </h3>
                <p
                  className="text-gray-700 text-sm leading-relaxed overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: hoveredCard === card.id ? 6 : 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center mt-12">
          <button className="py-3 px-10 bg-gray-800 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300">
            Explore All
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCards;
