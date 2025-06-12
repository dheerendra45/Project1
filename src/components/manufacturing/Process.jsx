import { motion } from "framer-motion";
import a1 from "../../assets/manufacturing/process.jpg";

export default function Process() {
  return (
    <div className="w-full py-16 bg-white text-black">
      {/* Heading - Slide in from Left */}
      <div className="px-6 md:px-20">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-black font-space-grotesk"
        >
          Manufacturing Process
        </motion.h1>

        {/* Orange Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-1 origin-left bg-orange-500 my-4"
        />
      </div>

      {/* Full-width Image as a video link */}
      <motion.a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="block mt-8 overflow-hidden rounded-none shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <motion.img
          src={a1}
          alt="Manufacturing process"
          initial={{ scale: 0.95, rotate: -1, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-screen max-w-none object-cover"
        />
      </motion.a>
    </div>
  );
}
