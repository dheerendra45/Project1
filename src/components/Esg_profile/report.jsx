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
      className="min-h-screen bg-cover bg-center flex items-center font-inter font-semibold text-white overflow-x-hidden"
      style={{ backgroundImage: `url(${a2})` }}
    >
      <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 items-center justify-between gap-10 max-w-[100vw]">
        {/* Left - Image */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={a1}
            alt="Climate Action"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Climate Action Report
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90">
            Driving Sustainable Growth with Responsibility. At Shyam Metalics, we
            are deeply committed to sustainable development by integrating
            responsible practices across all facets of our operations. Our ESG
            framework is centered on environmental preservation, social
            development, and strong corporate governance — forming the bedrock
            of our long-term vision.
          </p>
          <div>
            <button className="border-2 border-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300">
              Read The Full Report here →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
