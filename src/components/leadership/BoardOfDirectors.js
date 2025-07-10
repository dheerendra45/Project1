import { motion, useInView } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useRef, useState } from "react";
import a1 from "../../assets/leadership/l1.jpg";

export default function BoardOfDirectors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selected, setSelected] = useState(null);

  const socialIcons = [
    { icon: <Facebook size={18} />, id: "fb" },
    { icon: <Twitter size={18} />, id: "tw" },
    { icon: <Linkedin size={18} />, id: "ln" },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
              Board of{" "}
              <span className="text-blue-800">Directors</span>
            </h1>
            <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="lg:w-2/5 bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center"
            >
              <div className="relative">
                <img
                  src={a1}
                  alt="Mahabir Prasad Agarwal"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="lg:w-3/5 p-8 lg:p-12"
            >
              {/* Name and Title */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Mahabir Prasad Agarwal
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-0.5 bg-blue-800"></div>
                  <p className="text-blue-800 font-semibold text-lg">Chairman Emeritus</p>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mahabir Prasad Agarwal is an accomplished business leader and a first generation entrepreneur having more than 50 Years of experience in steel & ferro alloys industries. He has the foresight to lead the company on a transformational journey and contributing significantly in growth path of the company. Mahabir Prasad Agarwal stepped down from the position of Chairman during Board Meeting held on 9th May 2025 and was simultaneously conferred the title of Chairman Emeritus.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mb-8">
                {socialIcons.map(({ icon, id }) => (
                  <motion.button
                    key={id}
                    onClick={() => setSelected(id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full text-white flex items-center justify-center transition-all duration-300 ${
                      selected === id 
                        ? "bg-blue-800 shadow-lg" 
                        : "bg-gray-400 hover:bg-blue-700"
                    }`}
                  >
                    {icon}
                  </motion.button>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                <div className="grid gap-3">
                  {experiences.map((exp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">{exp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Directorships Section */}
          <div className="bg-gray-50 px-8 lg:px-12 py-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Current Directorships
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {directorships.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{d.company}</h4>
                        <p className="text-blue-800 font-medium">{d.position}</p>
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-white">
            <div className="w-8 h-0.5 bg-white"></div>
            <span className="text-lg font-semibold">Leadership Excellence</span>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}