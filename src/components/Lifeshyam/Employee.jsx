import { motion } from "framer-motion";
import a1 from "../../assets/Lifeshyam/employee1.png";
import a2 from "../../assets/Lifeshyam/employee2.png";
import a3 from "../../assets/Lifeshyam/employee3.png";
import a4 from "../../assets/Lifeshyam/employee4.png";
import a5 from "../../assets/Lifeshyam/employee5.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ImageBox = ({ src, label }) => (
  <motion.div
    className="relative overflow-hidden w-full h-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={fadeUp}
  >
    <img
      src={src}
      alt={label}
      className="w-full h-full object-cover shadow-lg"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2">
      <h2 className="text-sm sm:text-base font-semibold">{label}</h2>
    </div>
  </motion.div>
);

export default function Employee() {
  return (
    <div className="bg-gray-100 py-16 px-6 space-y-10">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUp}
      >
        Employee's Corner
      </motion.h1>
      <motion.p
        className="text-center text-gray-700 max-w-xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUp}
      >
        A culture of innovation, collaboration, and success.
      </motion.p>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div className="h-[300px] md:h-[380px]">
            <ImageBox src={a1} label="SKILL DEVELOPMENT" />
          </div>
          <div className="h-[380px]">
            <ImageBox src={a4} label="PICNIC EVENT" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[420px]">
            <ImageBox src={a2} label="YOGA DAY" />
            <ImageBox src={a3} label="SPORTS" />
          </div>
          <div className="h-[340px]">
            <ImageBox src={a5} label="PICNIC EVENT" />
          </div>
        </div>
      </div>
    </div>
  );
}
