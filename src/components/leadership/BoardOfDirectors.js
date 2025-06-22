import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import a1 from "../../assets/leadership/a.png"; // replace with your image path

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
    <div ref={ref} className="px-6 md:px-12 py-16 max-w-7xl mx-auto text-gray-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">
          Meet Our <span className="relative inline-block">
            Team
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-orange-500 rounded-full"
            ></motion.div>
          </span>
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing vipu elit. Ut<br />
          spelataras tellus luctus neullamcorper mattis, lerom pibus leo dotu.
        </p>
      </motion.div>

      {/* Image and Text Section */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img src={a1} alt="Director" className="rounded-2xl shadow-lg w-full" />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6"
        >
          <div>
            <h1 className="text-3xl font-bold">Darwin Luiz</h1>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipis cingsi lan vipural elit.
              In ut elit taras tellus luctus neul lam corper imat tis pulvinar pibus leo
              dota un le tas luco lamco vinup riato, lemor supim lor dosit amet taren.
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

          {/* Gray Divider */}
          <hr className="border-t border-gray-300" />

          {/* Experience Section */}
          <div>
            <h1 className="text-2xl font-bold mb-4">Darwin Luiz Experience</h1>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipis cingsi lan vipural elit. In ut
              elit taras tellus luctus neul lam corper imat tis pulvinar pibus leo.
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
                  <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center mt-1">
                    ✓
                  </div>
                  <span className="text-gray-800">{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
