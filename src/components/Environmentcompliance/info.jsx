import { motion } from "framer-motion";
import a1 from "../../assets/Environmentcompliance/info1.png";

export default function Info() {
  return (
    <div className="w-full bg-white py-12 px-4">
      {/* Animated heading */}
      <motion.h1
        className="text-center text-orange-500 text-2xl md:text-4xl font-bold mb-12 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Lorem ipsum dolor sit amet consectetur. <br />
        Non a massa dolor ullamcorper lectus erat.
      </motion.h1>

      {/* Centered Content Area */}
      <div className="max-w-6xl mx-auto lg:min-h-screen flex flex-col lg:flex-row gap-8 lg:items-center">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 flex items-stretch"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-4 flex items-center">
            <p className="text-black text-lg leading-relaxed">
              For more than two decades, Linde's pragmatic ESG approach has
              resulted in efficiency gains throughout our operations, as well
              as the businesses of customers all over the world. In fact,
              Linde helps our clients avoid more than double the emissions
              that we generate across our entire global footprint. We are
              enhancing the communities where Linde operates and the
              neighborhoods where our more than 65,000 employees live. Moving
              forward, we will continue to leverage sustainability to advance
              our mission of making our world more productive so that Linde
              can consistently deliver the results and exceptional
              performance that shareholders have come to expect from us.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex items-stretch"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={a1}
              alt="Environment Info"
              className="w-full h-full object-contain max-h-[600px] rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
