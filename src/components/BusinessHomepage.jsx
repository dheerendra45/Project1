import { useState } from "react";

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
                /* Card Size Control - Adjust w-[] and h-[] to change card dimensions */
                w-80 h-96 
                /* Card Styling */
                relative rounded-2xl overflow-hidden cursor-pointer
                shadow-lg hover:shadow-2xl
                transition-all duration-300 ease-in-out
                ${
                  hoveredCard === card.id
                    ? "transform -translate-y-2"
                    : "transform translate-y-0"
                }
              `}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image - Covers entire card */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />

              {/* Gradient Overlay for better text readability */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.bgGradient}`}
              />

              {/* Content Overlay - Positioned at bottom of card */}
              <div
                className={`
                absolute bottom-0 left-0 right-0 z-10
                /* Content Padding Control - Adjust p-[] to change content spacing */
                p-6
                /* Background Styling */
                bg-white/95 backdrop-blur-sm rounded-t-2xl
                transition-all duration-300 ease-in-out
                ${
                  hoveredCard === card.id
                    ? "bg-white/98 transform -translate-y-1"
                    : "transform translate-y-0"
                }
              `}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Button - Adjust w-[], py-[], px-[] to control button size */}
        <div className="flex justify-center">
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

/*
SIZE CUSTOMIZATION GUIDE:

1. CARD DIMENSIONS:
   - w-80 h-96 (current: 320px x 384px)
   - Change to w-72 h-80 for smaller cards
   - Change to w-96 h-[28rem] for larger cards

2. CONTENT PADDING:
   - p-6 (current: 24px padding)
   - Change to p-4 for less padding
   - Change to p-8 for more padding

3. TITLE SIZE:
   - text-xl (current: 20px)
   - Change to text-lg for smaller
   - Change to text-2xl for larger

4. DESCRIPTION SIZE:
   - text-sm (current: 14px)
   - Change to text-xs for smaller
   - Change to text-base for larger

5. BUTTON SIZE:
   - w-48 py-4 px-8 (current: 192px width, 16px vertical, 32px horizontal padding)
   - Adjust as needed

6. CARD SPACING:
   - gap-8 (current: 32px between cards)
   - Change to gap-4 for closer spacing
   - Change to gap-12 for wider spacing

7. RESPONSIVE BREAKPOINTS:
   - Cards automatically stack on mobile
   - Adjust with md:, lg:, xl: prefixes if needed

ALTERNATIVE LAYOUTS:
- For full overlay text, move content div to cover entire card
- For different positioning, adjust bottom-0 to top-0 or remove for center
- For different background opacity, adjust bg-white/95 percentage
*/
