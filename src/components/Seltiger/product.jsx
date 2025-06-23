import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a11 from "../../assets/Seltiger/product11.jpg";
import a1 from "../../assets/Seltiger/product1.png";
import a2 from "../../assets/Seltiger/product2.jpg";
import a3 from "../../assets/Seltiger/product3.jpg";
import a4 from "../../assets/Seltiger/product4.jpg";
import a5 from "../../assets/Seltiger/product5.jpg";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const products = [
    {
      img: a11,
      title: "TMT BARS",
      tagline: "Flexible in Form, Unbreakable in Strength",
      desc: "S-E-L Tiger TMT Bars are strong, reliable, and used in everything from homes to highways. They are built to last.",
    },
    {
      img: a2,
      title: "SEL Tiger Structural Steel",
      tagline: "Strength Behind Every Structure",
      desc: "Perfect for mega projects — stadiums, bridges, and skyscrapers. High durability and strength.",
    },
    {
      img: a3,
      title: "SEL Tiger Wire Rod",
      tagline: "Strength Woven into Every Strand",
      desc: "Engineered for tensile strength and ductility. Trusted in power grids, agriculture, and construction.",
    },
    {
      img: a4,
      title: "SEL Tiger Roofing Sheets",
      tagline: "Lightweight Armor for Your Shelter",
      desc: "Withstand storms and weather. Preferred for industrial and residential roofing in extreme conditions.",
    },
    {
      img: a5,
      title: "SEL Tiger Foil",
      tagline: "Built to Guard. Designed to Last",
      desc: "Used in insulation and food safety. Zero-contamination, high-performance foil for various applications.",
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white py-20 px-4 sm:px-8">
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
            className="bg-gray-100 rounded-xl overflow-hidden flex flex-col h-full w-full max-w-md"
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
              <div className="flex items-center gap-2 text-orange-500 font-semibold cursor-pointer hover:underline mt-auto">
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

        {/* Last 2 cards: centered with reduced gap */}
        <div className="lg:col-span-3 flex flex-col md:flex-row justify-center space-x-16 w-full">
          {products.slice(3).map((product, i) => (
            <motion.div
              key={i + 3}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-gray-100 rounded-xl overflow-hidden flex flex-col h-full w-full max-w-md"
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
                <div className="flex items-center gap-2 text-orange-500 font-semibold cursor-pointer hover:underline mt-auto">
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
    </div>
  );
}
