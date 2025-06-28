import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import a1 from "../../assets/leadership/a.png";

export default function BoardOfDirectors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selected, setSelected] = useState(null);

  const socialIcons = [
    { icon: <FaFacebookF />, id: "fb" },
    { icon: <FaTwitter />, id: "tw" },
    { icon: <FaLinkedinIn />, id: "ln" },
  ];

  const experiences = [
    "Over 15 years of experience in the technology industry",
    "Before founding the company, Founder A served as a Manager",
    "Holds patents for technological innovations that led the industry",
  ];

  return (
    <div
      ref={ref}
      className="font-inter px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-14 max-w-7xl mx-auto text-gray-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Meet Our{" "}
          <span className="relative inline-block">
            Team
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-orange-500 rounded-full"
            />
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br className="hidden sm:block" />
          Ut tellus luctus neullamcorper mattis, lorem pibus leo dotu.
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <img
            src={a1}
            alt="Director"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Darwin Luiz</h2>
            <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut elit tellus
              luctus neullamcorper mattis, pulvinar pibus leo. Donec vitae lorem sit amet
              magna bibendum lobortis at nec tortor.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialIcons.map(({ icon, id }) => (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`w-10 h-10 rounded-full text-white flex items-center justify-center transition-colors ${
                  selected === id ? "bg-orange-500" : "bg-black"
                }`}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-300" />

          {/* Experience */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Experience</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Darwin Luiz brings strategic insights from decades of leadership. His
              commitment to innovation drives success.
            </p>
            <ul className="space-y-3">
              {experiences.map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mt-1 text-sm">
                    ✓
                  </div>
                  <span className="text-gray-800 text-sm sm:text-base">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
