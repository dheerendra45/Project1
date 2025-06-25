import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import a11 from "../../assets/Seltiger/product11.jpg";
import a1 from "../../assets/Seltiger/product1.png";
import a2 from "../../assets/Seltiger/product2.jpg";
import a3 from "../../assets/Seltiger/product3.jpg";
import a4 from "../../assets/Seltiger/product4.jpg";
import a5 from "../../assets/Seltiger/product5.jpg";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const sectionRef = useRef(null);
  const detailRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.2 });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      img: a11,
      title: "TMT BARS",
      tagline: "Flexible in Form, Unbreakable in Strength",
      desc: "S-E-L Tiger TMT Bars are strong, reliable, and used in everything from homes to highways. They are built to last.",
      details: {
        subtitle: "Built for unbreakable strength",
        highlights: "STEEL THAT BENDS, BUT NEVER BREAKS",
        description: "When the Bhuj earthquake struck, thousands of buildings collapsed—except the few reinforced with the right TMT bars. Inspired by such resilience, Tiger TMT Bars are engineered lifelines that ensure safety, even during nature's worst.",
        features: [
          {
            name: "Earthquake Safety",
            conventional: "Brittle, snaps under stress",
            tiger: "Bends up to 18% without breaking"
          },
          {
            name: "Corrosion",
            conventional: "Prone to rust in 5–7 years",
            tiger: "Fe-550D grade resists over 50 years"
          },
          {
            name: "Thermal Safety",
            conventional: "Weakens at 300°C",
            tiger: "Withstands up to 600°C"
          }
        ]
      }
    },
    {
      img: a2,
      title: "SEL Tiger Structural Steel",
      tagline: "Strength Behind Every Structure",
      desc: "Perfect for mega projects — stadiums, bridges, and skyscrapers. High durability and strength.",
      details: {
        subtitle: "The backbone of modern infrastructure",
        highlights: "UNMATCHED STRUCTURAL INTEGRITY",
        description: "Our structural steel forms the skeleton of the most ambitious architectural projects, providing unmatched strength and durability that stands the test of time and nature.",
        features: [
          {
            name: "Load Capacity",
            conventional: "Standard load ratings",
            tiger: "Enhanced load-bearing capacity"
          },
          {
            name: "Durability",
            conventional: "20-30 year lifespan",
            tiger: "50+ year lifespan"
          },
          {
            name: "Versatility",
            conventional: "Limited applications",
            tiger: "Wide range of structural uses"
          }
        ]
      }
    },
    {
      img: a3,
      title: "SEL Tiger Wire Rod",
      tagline: "Strength Woven into Every Strand",
      desc: "Engineered for tensile strength and ductility. Trusted in power grids, agriculture, and construction.",
      details: {
        subtitle: "Precision-engineered for diverse applications",
        highlights: "THE STRENGTH IN EVERY STRAND",
        description: "Our wire rods are manufactured with precision to ensure consistent quality and performance across all applications, from construction to industrial uses.",
        features: [
          {
            name: "Tensile Strength",
            conventional: "Standard tensile ratings",
            tiger: "High tensile strength"
          },
          {
            name: "Surface Quality",
            conventional: "Variable surface finish",
            tiger: "Consistent high-quality finish"
          },
          {
            name: "Ductility",
            conventional: "Limited bending capacity",
            tiger: "Superior ductility"
          }
        ]
      }
    },
    {
      img: a4,
      title: "SEL Tiger Roofing Sheets",
      tagline: "Lightweight Armor for Your Shelter",
      desc: "Withstand storms and weather. Preferred for industrial and residential roofing in extreme conditions.",
      details: {
        subtitle: "Protection against the elements",
        highlights: "YOUR SHIELD AGAINST NATURE",
        description: "Our roofing sheets provide superior protection against extreme weather conditions while maintaining aesthetic appeal and structural integrity.",
        features: [
          {
            name: "Weather Resistance",
            conventional: "Moderate weather protection",
            tiger: "Extreme weather resistance"
          },
          {
            name: "Longevity",
            conventional: "10-15 years",
            tiger: "25+ years lifespan"
          },
          {
            name: "Thermal Insulation",
            conventional: "Basic insulation",
            tiger: "Enhanced thermal properties"
          }
        ]
      }
    },
    {
      img: a5,
      title: "SEL Tiger Foil",
      tagline: "Built to Guard. Designed to Last",
      desc: "Used in insulation and food safety. Zero-contamination, high-performance foil for various applications.",
      details: {
        subtitle: "Premium protection for sensitive applications",
        highlights: "PURITY AND PERFORMANCE COMBINED",
        description: "Our foil products meet the highest standards of purity and performance, making them ideal for critical applications where contamination is not an option.",
        features: [
          {
            name: "Purity",
            conventional: "Standard purity levels",
            tiger: "Zero contamination guarantee"
          },
          {
            name: "Barrier Properties",
            conventional: "Basic barrier protection",
            tiger: "Advanced barrier technology"
          },
          {
            name: "Applications",
            conventional: "Limited uses",
            tiger: "Wide range of specialized uses"
          }
        ]
      }
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bg-white">
      {/* Products Grid Section */}
      <div ref={sectionRef} className="py-20 px-4 sm:px-8">
        <motion.p
          className="text-orange-500 text-lg font-semibold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          OUR PRODUCTS
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-black text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore Our Products
        </motion.h1>

        {/* Grid for first 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.slice(0, 3).map((product, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-gray-100 rounded-xl overflow-hidden flex flex-col h-full w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product)}
              whileHover={{ y: -5 }}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold text-black mb-2">{product.title}</h2>
                  <p className="text-sm italic text-orange-600 mb-2">{product.tagline}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-orange-500 font-semibold">
                  <span>READ MORE</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last 2 cards: centered with reduced gap */}
        <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8 mt-8 w-full">
          {products.slice(3).map((product, i) => (
            <motion.div
              key={i + 3}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-gray-100 rounded-xl overflow-hidden flex flex-col h-full w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product)}
              whileHover={{ y: -5 }}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold text-black mb-2">{product.title}</h2>
                  <p className="text-sm italic text-orange-600 mb-2">{product.tagline}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-orange-500 font-semibold">
                  <span>READ MORE</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Section */}
      {selectedProduct && (
        <div ref={detailRef} className="flex flex-col md:flex-row items-stretch bg-white border-t border-gray-200">
          {/* Left Half - Image with Centered Text */}
          <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold"
              >
                {selectedProduct.title}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg mt-2"
              >
                {selectedProduct.details.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Right Half - Text and Table */}
          <div className="w-full md:w-1/2 p-8 text-left">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-bold text-black"
            >
              {selectedProduct.title}
            </motion.h1>

            <motion.h3
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-orange-500 text-xl font-semibold mt-2"
            >
              {selectedProduct.details.highlights}
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-700 mt-4"
            >
              {selectedProduct.details.description}
            </motion.p>

            {/* Gray Horizontal Line */}
            <hr className="my-6 border-gray-300" />

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <motion.table
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8, duration: 0.6 }}
                className="min-w-full text-left border-collapse"
              >
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="px-4 py-3 border-b border-gray-300">FEATURE</th>
                    <th className="px-4 py-3 border-b border-gray-300">CONVENTIONAL</th>
                    <th className="px-4 py-3 border-b border-gray-300">TIGER {selectedProduct.title.split(' ').pop()}</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {selectedProduct.details.features.map((feature, i) => (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="px-4 py-3">{feature.name}</td>
                      <td className="px-4 py-3">{feature.conventional}</td>
                      <td className="px-4 py-3 font-semibold text-orange-600">{feature.tiger}</td>
                    </tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}