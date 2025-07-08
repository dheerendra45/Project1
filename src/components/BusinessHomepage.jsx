import { useState, useEffect, useRef } from "react";
import steel from "../assets/b11.png";
import aluminium from "../assets/b12.png";
import power from "../assets/b13.png";
import { FiArrowRight, FiPlus, FiX } from "react-icons/fi";

const IndustrialCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

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
        "At the heart of Shyam Metalics is a strong steel business, founded on integrated production and scale. We are one of the best integrated steel plants in India, with a strong focus on long steel products and ferro alloys.",
      image: steel,
    },
    {
      id: 2,
      title: "Aluminium",
      description:
        "With our specialist aluminium foil business, we are developing sophisticated capabilities for high-precision applications. Our dedicated manufacturing facilities serve critical sectors including packaging, pharmaceuticals, and energy.",
      image: aluminium,
    },
    {
      id: 3,
      title: "Energy & Others",
      description:
        "Our portfolio also comprises materials that support key industries. These include clean energy and electronics applications, eco-friendly cement, and durable infrastructure materials that enable sustainable development.",
      image: power,
    },
  ];

  const handlePlusClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="bg-[#EDF1F4] py-12 px-4 sm:px-6 lg:px-8 xl:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-gray-800 mb-4">
            Our Portfolio
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          ref={containerRef}
        >
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={`
                bg-white rounded-lg shadow-md overflow-hidden
                transition-all duration-500 ease-in-out
                ${expandedCard === card.id ? "md:row-span-2" : ""}
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
              {/* Mobile Layout */}
              <div className="flex flex-col h-full md:hidden">
                <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800 uppercase mb-3">
                      {card.title}
                    </h3>
                    <button
                      className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all"
                      onClick={() => handlePlusClick(card.id)}
                    >
                      {expandedCard === card.id ? <FiX /> : <FiPlus />}
                    </button>
                  </div>
                  <p
                    className={`text-gray-700 ${
                      expandedCard === card.id ? "" : "line-clamp-4"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex h-full">
                <div className="w-1/2 p-6 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 uppercase mb-4">
                    {card.title}
                  </h3>
                  <p
                    className={`text-gray-700 flex-grow ${
                      expandedCard === card.id ? "" : "line-clamp-5"
                    }`}
                  >
                    {card.description}
                  </p>
                  <button
                    className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all mt-4 self-start"
                    onClick={() => handlePlusClick(card.id)}
                  >
                    {expandedCard === card.id ? (
                      <FiX size={20} />
                    ) : (
                      <FiPlus size={20} />
                    )}
                  </button>
                </div>
                <div className="w-1/2 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium flex items-center transition-all transform hover:scale-105">
            Explore All
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCards;
