import { motion, useInView } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import a1 from "../../assets/leadership/l1.jpg"; // replace with Mahabir's updated image if needed

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
    "Over 50 years of experience in steel & ferro alloys industries",
    "Instrumental in the growth journey of the company",
    "Conferred title of Chairman Emeritus on 9th May 2025",
  ];

  const directorships = [
    { company: "Shyam Metalics and Energy Ltd.", position: "Director" },
    { company: "Narantak Dealcomm Ltd.", position: "Managing Director" },
    { company: "Suhag Overseas Trading Pvt. Ltd.", position: "Director" },
    { company: "Britasia Hydro Power Pvt. Ltd.", position: "Director" },
    { company: "Kalinga Energy & Power Limited", position: "Director" },
    { company: "Shyam Century Multi Projects Pvt. Ltd.", position: "Director" },
    { company: "Whispering Developers Pvt. Ltd.", position: "Director" },
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
            alt="Mahabir Prasad Agarwal"
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
            <h2 className="text-2xl sm:text-3xl font-bold">Mahabir Prasad Agarwal</h2>
            <p className="text-orange-600 font-semibold mt-1">Chairman Emeritus</p>
            <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
               Mahabir Prasad Agarwal is an accomplished business leader and a first generation entrepreneur having more than 50 Years of experience in steel & ferro alloys industries. He has the foresight to lead the company on a transformational journey and contributing significantly in growth path of the company. Mahabir Prasad Agarwal  stepped down from the position of Chairman during Board Meeting held on 9th May 2025 and was simultaneously conferred the title of Chairman Emeritus.

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

          {/* Directorships */}
          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">List of Directorship</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              {directorships.map((d, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b py-2">
                  <span>{i + 1}. {d.company}</span>
                  <span className="text-orange-600 font-medium">{d.position}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
