import { motion } from "framer-motion";
import a1 from "../../assets/Lifeshyam/joinus1.png";
import a2 from "../../assets/Lifeshyam/joinus2.jpg";
import a3 from "../../assets/Lifeshyam/joinus3.png";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Joinus() {
  return (
    <div className="space-y-20">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 bg-white">
        <div className="flex-1 space-y-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            custom={0}
          >
            Life @ Shyam Metals
          </motion.h1>
          <motion.p
            className="font-semibold text-gray-700 text-sm md:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            custom={1}
          >
            Lorem ipsum dolor sit amet consectetur. Viverra ornare eget arcu arcu at dolor nec in
            urna. Amet mauris imperdiet arcu nulla. Aenean tellus pretium in fermentum et eu odio.
          </motion.p>
          <motion.p
            className="text-gray-600 text-sm md:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            custom={2}
          >
            Lorem ipsum dolor sit amet consectetur. Et sit malesuada ut elementum maecenas quis
            gravida. Pretium urna adipiscing tellus auctor lobortis scelerisque pretium ipsum.
            Sodales dolor sed ac elit.
          </motion.p>
          <motion.p
            className="text-gray-600 text-sm md:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            custom={3}
          >
            Lorem ipsum dolor sit amet consectetur. Tortor amet morbi egestas ac at. At platea est
            dui mattis. In elementum ut ut vulputate etiam consectetur libero. In tincidunt a ante
            elit libero. Nunc mattis.
          </motion.p>
        </div>

        <motion.div
          className="flex-1 w-full max-w-md md:max-w-none"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <img src={a1} alt="joinus1" className="rounded-lg shadow-lg w-full object-cover" />
        </motion.div>
      </div>

      {/* Section 2 */}
      <motion.div
        className="relative px-4 sm:px-6 py-16 overflow-hidden flex items-center justify-center h-auto lg:min-h-[600px]"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6) 10%, rgba(0,0,0,0.1) 90%), url(${a2})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      >
        <motion.div
          className="max-w-3xl text-center z-10 p-4 sm:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
        >
          <motion.h1
            className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-4"
            variants={fadeUp}
            custom={0}
          >
            Join Our Team, Where Innovation is Our Priority
          </motion.h1>
          <motion.p
            className="text-white text-sm sm:text-base md:text-lg mb-6"
            variants={fadeUp}
            custom={1}
          >
            Join a dedicated, innovative team committed to excellence at every step.
          </motion.p>
          <motion.button
            className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition mx-auto"
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
            custom={2}
          >
            Join Us
            <span className="bg-white text-orange-500 rounded-full p-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>
        </motion.div>

        {/* Top-right decorative image */}
        <img
          src={a3}
          alt="corner decoration"
          className="absolute top-4 right-4 max-h-[70%] scale-50 origin-top-right opacity-90 pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
