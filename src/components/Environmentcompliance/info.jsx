import { motion } from "framer-motion";
import a1 from "../../assets/Environmentcompliance/info1.png";

// Animation variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const textVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

export default function Info() {
  return (
    <motion.div
      className="w-full bg-white py-12 px-8" // Added px-8 for overall component padding
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Separate Header Container */}
      <motion.div
        className="px-8 mb-12" // Added px-8 for 2rem padding on both sides
        variants={containerVariants}
      >
        <motion.h1
          className="text-center text-orange-500 text-2xl md:text-4xl font-bold max-w-6xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.8,
              },
            },
          }}
        >
          <motion.span className="inline-block" variants={itemVariants}>
            We prioritize the preservation
          </motion.span>{" "}
          <motion.span className="inline-block" variants={itemVariants}>
            of natural capital and the minimization
          </motion.span>{" "}
          <motion.br variants={itemVariants} />
          <motion.span className="inline-block" variants={itemVariants}>
            of our ecological footprint,
          </motion.span>{" "}
          <motion.span className="inline-block" variants={itemVariants}>
            both within our operations and in the communities around us.
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* Separate Content Container for Image and Text */}
      <motion.div
        className="px-4" // Added px-8 for 2rem padding on both sides
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto lg:min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Text Section with enhanced padding */}
          <motion.div
            className="lg:w-1/2 flex items-stretch" // Added px-4 for additional text padding
            variants={textVariants}
          >
            <motion.div
              className="p-8 flex items-center bg-white rounded-xl shadow-md w-full" // Increased padding to p-8
              whileHover={{
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-black text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                For more than two decades, Linde's pragmatic ESG approach has
                resulted in efficiency gains throughout our operations, as well
                as the businesses of customers all over the world. In fact,
                Linde helps our clients avoid more than double the emissions
                that we generate across our entire global footprint. We are
                enhancing the communities where Linde operates and the
                neighborhoods where our more than 65,000 employees live. Moving
                forward, we will continue to leverage sustainability to advance
                our mission of making our world more productive so that Linde
                can consistently deliver the results and exceptional performance
                that shareholders have come to expect from us.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Image Section with enhanced spacing */}
          <motion.div
            className="lg:w-1/2 flex items-stretch px-4" // Added px-4 for additional image padding
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              whileInView={{
                rotate: [0, 1, -1, 0], // subtle wobble effect
              }}
              transition={{
                rotate: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "linear",
                },
                duration: 0.8,
              }}
            >
              <motion.img
                src={a1}
                alt="Environment Info"
                className="w-full h-full object-contain max-h-[600px] rounded-lg shadow-xl"
                initial={{ borderRadius: "8px" }}
                whileInView={{
                  borderRadius: ["8px", "16px", "8px"],
                }}
                transition={{
                  borderRadius: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
