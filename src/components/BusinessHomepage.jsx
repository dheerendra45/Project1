import { useState, useEffect, useRef } from "react";
import steel from "../assets/b11.png";
import aluminium from "../assets/b12.png";
import power from "../assets/b13.png";
import { FiArrowRight, FiPlus, FiX } from "react-icons/fi";

const IndustrialCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Trigger animations when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const cardsData = [
    {
      id: 1,
      title: "Iron and Steel",
      description:
        "Shyam Metalics is one of the best integrated steel plants in India, with a strong focus on long steel products and ferro alloys. Our well-diversified product portfolio comprises ferro alloys, sponge iron, billet, TMT, structural, pipes, and pellets.",
      image: steel,
    },
    {
      id: 2,
      title: "Aluminium",
      description:
        "Shyam Metalics' Aluminium Foil Division is a leading force in India's advanced aluminium processing landscape. With dedicated manufacturing facilities in Pakuria (West Bengal) and Giridih (Jharkhand), we offer end-to-end aluminium foil solutions that serve critical sectors, including packaging, pharmaceuticals, energy, and industrial applications.",
      image: aluminium,
    },
    {
      id: 3,
      title: "Energy & Others",
      description:
        "Beyond steel and aluminum, we produce high-grade ferro alloys for stronger steel, ultra-pure silicon metal for the solar and technology industries, and durable ductile iron pipes for water infrastructure. Our eco-friendly cement, made from steel by products, supports construction, while captive renewable power our green manufacturing initiatives. As an integrated producer, we enable Aatmanirbhar Bharat across the energy, infrastructure and urban development sectors.",
      image: power,
    },
  ];

  const handlePlusClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="bg-[#EDF1F4] py-8 sm:py-12 px-4 sm:px-5 md:px-6 lg:px-8 font-sans">
      <h2 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left sm:ml-7 mb-6 sm:mb-8">
        Business Areas
      </h2>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={`
                bg-gray-300 relative overflow-hidden
                shadow-lg h-[280px] sm:h-[320px] md:h-[300px] lg:h-[260px]
                transition-all duration-500 ease-in-out transform
                ${expandedCard === card.id ? "md:h-[400px] lg:h-[380px]" : ""}
                ${
                  !isVisible
                    ? index === 0
                      ? "translate-x-[-100%] opacity-0"
                      : index === 1
                      ? "translate-y-[-100%] opacity-0"
                      : "translate-x-[100%] opacity-0"
                    : "translate-x-0 translate-y-0 opacity-100"
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              {/* Mobile Layout (stacked) */}
              <div className="flex flex-col h-full md:hidden">
                {/* Image Section */}
                <div className="h-[40%] relative flex items-center justify-center bg-white">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                </div>

                {/* Text Section */}
                <div className="h-[60%] p-4 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 uppercase">
                      {card.title}
                    </h3>
                    <button
                      className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-all duration-300 ml-2 transform hover:scale-110"
                      onClick={() => handlePlusClick(card.id)}
                    >
                      <div className="transition-transform duration-300 ease-in-out">
                        {expandedCard === card.id ? (
                          <FiX className="text-sm" />
                        ) : (
                          <FiPlus className="text-sm" />
                        )}
                      </div>
                    </button>
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className={`text-gray-700 text-sm leading-relaxed transition-all duration-500 ease-in-out ${
                        expandedCard === card.id
                          ? "flex-grow opacity-100"
                          : "line-clamp-5 opacity-90"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedCard === card.id
                        ? "max-h-20 opacity-100 mt-2"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <button
                      className="text-orange-500 font-medium self-start hover:text-orange-600 transition-colors duration-200"
                      onClick={() => setExpandedCard(null)}
                    >
                      Show Less
                    </button>
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop Layout (side by side) */}
              <div className="hidden md:flex h-full">
                {/* Left Side - Text & Button */}
                <div className="w-1/2 h-full flex flex-col justify-between p-4 lg:p-6">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 uppercase">
                      {card.title}
                    </h3>
                    <div className="overflow-hidden">
                      <p
                        className={`text-gray-700 text-xs sm:text-sm leading-relaxed transition-all duration-500 ease-in-out ${
                          expandedCard === card.id
                            ? "opacity-100"
                            : "line-clamp-4 lg:line-clamp-5 opacity-90"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedCard === card.id
                          ? "max-h-20 opacity-100 mt-2"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <button
                        className="text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200"
                        onClick={() => setExpandedCard(null)}
                      >
                        Show Less
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-start items-end mt-4">
                    <button
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110"
                      onClick={() => handlePlusClick(card.id)}
                    >
                      <div className="transition-transform duration-300 ease-in-out">
                        {expandedCard === card.id ? (
                          <FiX className="text-sm sm:text-xl" />
                        ) : (
                          <FiPlus className="text-sm sm:text-xl" />
                        )}
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2 h-full relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`absolute inset-0 object-contain transition-transform duration-300 ease-in-out ${
                      card.id === 2
                        ? "w-[85%] h-[85%] mt-[7.5%] ml-[7.5%]"
                        : "w-full h-full"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-gray-300/0 via-gray-300/20 to-gray-300/50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-12 mb-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded border-2 border-white transition-all duration-300 w-full sm:w-auto text-sm sm:text-base md:text-lg flex items-center justify-center transform hover:scale-105">
            Explore All
            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default IndustrialCards;
