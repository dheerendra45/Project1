import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Seltiger/app1.png";
import a2 from "../../assets/Seltiger/app2.png";
import a3 from "../../assets/Seltiger/app3.png";
import a4 from "../../assets/Seltiger/calculator.png";

export default function Applications() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <div
      ref={sectionRef}
      className="bg-white text-black py-16 px-6 md:px-20"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-3xl font-bold mb-10 text-left"
      >
        Applications:
      </motion.h1>

      {/* Application Cards in same row on large screens */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
  {[
    {
      title: "For Homebuilders:",
      img: a1,
      points: [
        "Earthquake-resistant columns and beams",
        "Crack-free slabs in humid climates",
      ],
    },
    {
      title: "For Infrastructure:",
      img: a2,
      points: [
        "Bridges with 100-year lifespans",
        "Metro rails in coastal cities",
      ],
    },
    {
      title: "For Industry:",
      img: a3,
      points: [
        "High-vibration machinery bases",
        "Power plant foundations",
      ],
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      custom={i}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white rounded-xl p-6 flex flex-row items-center gap-4 h-full"
    >
      <img
        src={item.img}
        alt=""
        className="w-28 h-28 object-contain flex-shrink-0"
      />
      <div className="text-left">
        <h2 className="text-orange-500 font-semibold text-lg mb-2">
          {item.title}
        </h2>
        {item.points.map((point, j) => (
          <p key={j} className="text-sm mb-1">
            • {point}
          </p>
        ))}
      </div>
    </motion.div>
  ))}
</div>


      {/* TMT Bar Calculator Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="bg-[#FF6A0012] rounded-xl p-6 flex flex-col gap-6"
      >
        {/* First Row - Image and Title */}
        <div className="flex items-center gap-4">
          <img
            src={a4}
            alt="Calculator"
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-xl font-bold">TMT Bar Calculator</h1>
        </div>

        {/* Second Row - Text + Button side by side */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-1">
              How much steel does your 2BHK need?
            </h3>
            <p className="text-sm">
              Example: Plot Area – 1000 sq. ft → Recommended: 1.5 tons of Tiger Fe-500.
            </p>
          </div>

          <button className="border border-orange-500 text-orange-500 bg-white px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition duration-300 whitespace-nowrap">
            Calculate Your Requirement
          </button>
        </div>
      </motion.div>
    </div>
  );
}
