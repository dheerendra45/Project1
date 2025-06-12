import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Jobopportunity/grad.jpg";
import a2 from "../../assets/Jobopportunity/consultant.jpg";

export default function Consultant() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { amount: 0.4, once: false });
  const isInView2 = useInView(ref2, { amount: 0.4, once: false });

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full py-20 px-6 md:px-20 bg-gray-100 space-y-24">
      {/* Section 1 - Graduates */}
      <div ref={ref1}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-3xl font-bold">Graduates and Students</h1>
            <p>
              We are looking for curious and creative people who want to bring
              different perspectives into our company.
            </p>
            <button className="border border-black text-black bg-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
              Graduates and Interns
            </button>
          </div>
          <img
            src={a1}
            alt="Graduates"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
        </motion.div>
      </div>

      {/* Section 2 - Consultants */}
      <div ref={ref2}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <div className="md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-3xl font-bold">Consultants</h1>
            <p>
              We source talent from consulting firms for our in-house
              consultancy team, PACE.
            </p>
            <button className="border border-black text-black bg-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
              In-house Consulting
            </button>
          </div>
          <img
            src={a2}
            alt="Consultants"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
