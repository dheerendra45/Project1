import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Currentopening/job1.png";
import a2 from "../../assets/Currentopening/job2.png";
import a3 from "../../assets/Currentopening/job3.png";

const jobs = [
  {
    img: a1,
    title: "Account Manager",
    description:
      "Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan lobortis scelerisque magna curabitur duis",
    location: "London, UK",
  },
  {
    img: a2,
    title: "Project Manager",
    description:
      "Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan lobortis scelerisque magna curabitur duis",
    location: "London, UK",
  },
  {
    img: a3,
    title: "Civil Engineer",
    description:
      "Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan lobortis scelerisque magna curabitur duis",
    location: "London, UK",
  },
];

export default function Jobopportunity() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const sectionFade = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -8, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="p-6 bg-white text-black"
      variants={sectionFade}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1
        className="text-3xl font-bold text-center mb-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionFade}
      >
        Job Opportunities
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[...jobs, ...jobs].map((job, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-4 mb-4"
              {...floatAnimation}
            >
              <img src={job.img} alt={job.title} className="w-12 h-12" />
              <h2 className="text-xl font-semibold">{job.title}</h2>
            </motion.div>
            <p className="text-gray-700 text-sm mb-2">{job.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Location:</strong> {job.location}
            </p>
            <motion.button
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              {...floatAnimation}
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
