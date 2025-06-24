import { useState } from "react";
import steel from "../assets/steel.jpg";
import aluminium from "../assets/aluminium.jpg";
import power from "../assets/power.jpeg";
const IndustrialCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      title: "Steel",
      description:
        "High-quality steel manufacturing and processing solutions for construction, automotive, and industrial applications with superior strength and durability.",
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&h=400&fit=crop",

      bgGradient: "from-gray-900/10 via-gray-900/30 to-gray-900/60",
    },
    {
      id: 2,
      title: "Aluminium",
      description:
        "Lightweight aluminium solutions for aerospace, transportation, and architectural projects with excellent thermal conductivity and environmental resistance.",
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&h=400&fit=crop",
      bgGradient: "from-gray-900/10 via-gray-900/30 to-gray-900/60",
    },
    {
      id: 3,
      title: "Energy",
      description:
        "Sustainable energy solutions and renewable power systems including solar, wind, and hybrid technologies for reliable and eco-friendly power generation.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=400&fit=crop",
      bgGradient: "from-gray-900/10 via-gray-900/30 to-gray-900/60",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-300 py-10 px-5 font-inter">
      <span className="text-white text-4xl ml-7">Business </span>
      {/* Container - Adjust max-width to control overall layout width */}
      <div className="max-w-6xl mx-auto pt-9">
        {/* Cards Wrapper - Adjust gap to control spacing between cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
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
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              {/* Gradient Overlay for better text readability */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.bgGradient}`}
              />

              {/* Content */}
              <div
                className={`
                  absolute bottom-0 left-0 right-0 z-10 p-5
                  bg-white/95 backdrop-blur-sm rounded-t-2xl
                  transition-all duration-300 ease-in-out
                  ${hoveredCard === card.id ? "bg-white/98" : ""}
                `}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
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
          <button
            className="
            w-58 py-4 px-8
            bg-gray-700 hover:bg-gray-900 
            text-white font-semibold text-base
            rounded-lg uppercase tracking-widest
            transition-all duration-300 ease-in-out
            hover:transform hover:-translate-y-1 hover:shadow-lg
          "
          >
            Explore All
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCards;
