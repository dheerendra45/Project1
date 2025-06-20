import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a2 from "../../assets/p1/forestroad.jpg";
import a1 from "../../assets/p1/seawindturbine.png";

export default function Report() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const isLeftInView = useInView(leftRef, { triggerOnce: false });
  const isRightInView = useInView(rightRef, { triggerOnce: false });

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${a2})` }}
    >
      <div className="flex flex-col md:flex-row w-full px-8 md:px-20 items-center justify-between">
        {/* Left - Image */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center"
        >
          <img src={a1} alt="Report" className="max-w-full h-auto rounded-lg shadow-xl" />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-white flex flex-col justify-center items-center space-y-4 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Climate Action Report
          </h1>
          <p className="text-lg">
            Driving Sustainable Growth with Responsibility. At Shyam Metalics, we
            are deeply committed to sustainable development by integrating
            responsible practices across all facets of our operations. Our ESG
            framework is centered on environmental preservation, social
            development, and strong corporate governance — forming the bedrock
            of our long-term vision.
          </p>
          <button className="border border-orange-500 text-white px-6 py-2 rounded hover:bg-orange-500 transition">
            Read The Full Report here →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
