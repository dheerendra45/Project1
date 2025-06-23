import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Companyoverview/achievement1.jpg";
import a2 from "../../assets/Companyoverview/achievement2.jpg";
import a3 from "../../assets/Companyoverview/achievement3.jpg";

export default function Achievement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const animateItem = (delay = 0) =>
    isInView
      ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 6,
          },
        }
      : {};

  return (
    <div
      ref={ref}
      className="relative bg-cover bg-center py-16 px-12"
      style={{ backgroundImage: `url(${a1})` }}
    >
      {/* Silver overlay */}
      <div className="absolute inset-0 bg-gray-300 opacity-50 z-0"></div>

      {/* Block 1: Heading */}
      <motion.div
        className="absolute top-10 left-10 text-left z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={animateItem(0)}
      >
        <h1 className="text-black text-base uppercase">Company Statistics</h1>
        <h2 className="text-4xl font-bold text-black">
          Achievement in Lorem ipsum
        </h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-32 relative z-10">
        <div className="hidden md:block"></div>

        <motion.div
          className="bg-transparent text-center p-4 border border-black text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.2)}
        >
          <h1 className="text-black text-4xl font-bold">956+</h1>
          <p className="text-black text-2xl">Project Complete</p>
        </motion.div>

        <motion.div
          className="bg-transparent p-4 border border-black text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.3)}
        >
          <img
            src={a2}
            alt="Achievement"
            className="w-full h-auto rounded shadow"
          />
        </motion.div>

        <div className="hidden md:block"></div>

        <motion.div
          className="bg-transparent p-4 border border-black text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.4)}
        >
          <img
            src={a3}
            alt="Achievement"
            className="w-full h-auto rounded shadow"
          />
        </motion.div>

        <motion.div
          className="bg-transparent text-center p-4 border border-black text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.5)}
        >
          <h1 className="text-black text-4xl font-bold">68%</h1>
          <p className="text-black text-2xl">Success Rate</p>
        </motion.div>

        <motion.div
          className="bg-transparent text-center p-4 border border-black text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.6)}
        >
          <h1 className="text-black text-4xl font-bold">98+</h1>
          <p className="text-black text-2xl">Years Of Experience</p>
        </motion.div>
      </div>
    </div>
  );
}
