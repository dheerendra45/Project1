import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import a5 from "../assets/BusinessHomepage/14.png";
import a6 from "../assets/BusinessHomepage/15.png";
import { ArrowRight } from "lucide-react";

export default function BusinessHomepage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${a5})` }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content over blur */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 flex flex-col items-center justify-center text-center md:text-left overflow-hidden">
        {/* Animated Title */}
        <motion.h3
          className="absolute top-8 left-8 text-4xl font-bold z-20"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-white">Business </span>
        </motion.h3>

        {/* Animated Image */}
        <motion.div
          className="relative h-[380px] md:h-[420px] overflow-hidden mt-12"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={a6}
            alt="Business"
            className="w-[850px] object-cover object-top translate-y-[150px]"
          />
        </motion.div>

        {/* Animated Button */}
        <motion.button
          className="mt-6 flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition font-medium z-20"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Explore All <ArrowRight size={20} />
        </motion.button>
      </div>
    </div>
  );
}
