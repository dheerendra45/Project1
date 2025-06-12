import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Jobopportunity/work1.png";
import a2 from "../../assets/Jobopportunity/work2.jpg";
import a3 from "../../assets/Jobopportunity/work3.jpg";
import a4 from "../../assets/Jobopportunity/work4.jpg";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className="relative w-full bg-gray-100 text-white py-20 px-6 md:px-20"
      style={{
        backgroundImage: `url(${a1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Box 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg"
          >
            <img src={a2} alt="Why work" className="w-full h-52 object-cover" />
            <div className="p-6 space-y-2">
              <h1 className="text-xl font-bold">Why work at Shyam</h1>
              <p>
                From underground miners to data scientists, we want your hard work,
                dedication and outside-the-box thinking.
              </p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg"
          >
            <img src={a3} alt="Career areas" className="w-full h-52 object-cover" />
            <div className="p-6 space-y-2">
              <h1 className="text-xl font-bold">Career areas with Shyam</h1>
              <p>At Rio Tinto, the opportunities are endless.</p>
            </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg"
          >
            <img src={a4} alt="Leadership" className="w-full h-52 object-cover" />
            <div className="p-6 space-y-2">
              <h1 className="text-xl font-bold">Leadership programs</h1>
              <p>Become a future leader at Rio Tinto.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
