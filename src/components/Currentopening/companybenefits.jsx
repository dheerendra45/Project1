import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import a1 from "../../assets/Currentopening/dollar.png";
import a2 from "../../assets/Currentopening/calendar.png";
import a3 from "../../assets/Currentopening/graduatehat.png";
import a4 from "../../assets/Currentopening/calendar2.png";

export default function Companybenifits() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="px-4 sm:px-6 py-6 lg:py-8 bg-white text-black max-w-6xl mx-auto"
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Tracking Button */}
      <motion.button
        className="bg-orange-500 text-white px-4 py-2 rounded mb-4"
        whileHover={{ scale: 1.05 }}
      >
        Real Time Tracking
      </motion.button>

      {/* Tracking Form */}
      <motion.form
        className="bg-gray-100 p-4 sm:p-6 rounded-lg mb-6 lg:mb-8 space-y-6"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* First Row */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Jonathon Doe"
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Your Email</label>
            <input
              type="email"
              placeholder="info@someone.com"
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label>Tracking Number</label>
            <input
              type="number"
              placeholder="Eg: 123-33445566"
              className="p-2 border rounded"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-5 gap-4 sm:gap-6 items-end">
          <div className="md:col-span-4 flex flex-col">
            <label>Job Type</label>
            <select className="p-2 border rounded">
              <option value="">Select Job Type</option>
              <option value="developer">Software Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="manager">Project Manager</option>
              <option value="analyst">Business Analyst</option>
            </select>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Track Form
          </button>
        </div>
      </motion.form>

      {/* Company Benefits Section */}
      <motion.h1
        className="text-2xl font-bold mb-4 sm:mb-6"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Company Benefits
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 gap-4 sm:gap-6 text-gray-700"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[a1, a2, a3, a4].map((img, i) => {
          const content = [
            {
              title: "Competitive compensation",
              desc: "Our high-performance culture rewards innovation, collaboration and achievement.",
            },
            {
              title: "Employee stock purchase program",
              desc: "Purchase Cisco stock at a discount to invest in your financial future and the company's (up to 10% of your salary).",
            },
            {
              title: "Tuition reimbursement",
              desc: "Receive reimbursement for tuition, lab fees and books for coursework at an accredited institution.",
            },
            {
              title: "Annual bonuses",
              desc: "We reward people for their performance, not their seniority.",
            },
          ];

          return (
            <motion.div
              key={i}
              className="flex items-start space-x-4"
              variants={fadeInUp}
            >
              <div className="bg-orange-500 p-4 rounded-full">
                <img src={img} alt={`icon-${i}`} className="w-8 h-8" />
              </div>
              <div>
                <h2 className="font-semibold">{content[i].title}</h2>
                <p className="text-sm sm:text-base">{content[i].desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}