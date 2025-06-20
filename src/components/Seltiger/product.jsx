import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Seltiger/product1.png";
import a2 from "../../assets/Seltiger/product2.jpg";
import a3 from "../../assets/Seltiger/product3.jpg";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    amount: 0.2,
  });

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
      img: a1,
      title: "TMT BARS",
      desc: "When the Bhuj earthquake struck, thousands of buildings collapsed—except the few reinforced with the right TMT bars. Inspired by such ....",
    },
    {
      img: a2,
      title: "ALUMINIUM ROOFING",
      desc: "Monsoon winds clocking 120 km/h tore through Odisha—except one hospital stood untouched: Tata Hospital, secured by Tiger Aluminium ...",
    },
    {
      img: a3,
      title: "STAINLESS STEEL REBARS",
      desc: "15 years after saltwater exposure, engineers inspected the Bandra-Worli Sea Link. They expected corrosion. They found ....",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-white py-20 px-4 sm:px-8"
    >
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

      <div className="flex flex-col md:flex-row gap-8">
        {products.map((product, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-100 rounded-xl overflow-hidden flex flex-col w-full md:w-1/3"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left flex flex-col justify-between h-full">
              <h2 className="text-xl font-bold text-black mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700 mb-6">{product.desc}</p>
              <div className="flex items-center gap-2 text-orange-500 font-semibold cursor-pointer hover:underline">
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
  );
}
