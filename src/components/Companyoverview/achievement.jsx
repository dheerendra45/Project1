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
      className="relative bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: `url(${a1})` }}
    >
      {/* Block 1: Heading */}
      <motion.div
        className="absolute top-10 left-10 text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={animateItem(0)}
      >
        <h1 className="text-white text-sm uppercase">Company Statistics</h1>
        <h2 className="text-2xl font-bold text-white">Achievement in Lorem ipsum</h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-32">
        {/* Spacer to push Block 2 and 3 to the right */}
        <div className="hidden md:block"></div>

        {/* Block 2: Project Count */}
        <motion.div
          className="bg-transparent text-center p-4 border border-white text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.2)}
        >
          <h1 className="text-orange-500 text-3xl font-bold">956+</h1>
          <p className="text-white">Project Complete</p>
        </motion.div>

        {/* Block 3: Image 1 */}
        <motion.div
          className="bg-transparent p-4 border border-white text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.3)}
        >
          <img src={a2} alt="Achievement" className="w-full h-auto rounded shadow" />
        </motion.div>

        {/* Spacer to move Block 4 to next row */}
        <div className="hidden md:block"></div>

        {/* Block 4: Image 2 */}
        <motion.div
          className="bg-transparent p-4 border border-white text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.4)}
        >
          <img src={a3} alt="Achievement" className="w-full h-auto rounded shadow" />
        </motion.div>

        {/* Block 5: Success Rate */}
        <motion.div
          className="bg-transparent text-center p-4 border border-white text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.5)}
        >
          <h1 className="text-orange-500 text-3xl font-bold">68%</h1>
          <p className="text-white">Success Rate</p>
        </motion.div>

        {/* Block 6: Experience */}
        <motion.div
          className="bg-transparent text-center p-4 border border-white text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={animateItem(0.6)}
        >
          <h1 className="text-orange-500 text-3xl font-bold">98+</h1>
          <p className="text-white">Years Of Experience</p>
        </motion.div>
      </div>
    </div>
  );
}