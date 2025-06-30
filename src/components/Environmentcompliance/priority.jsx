import { motion } from "framer-motion";
import a1 from "../../assets/Environmentcompliance/priority1.png";
import a2 from "../../assets/Environmentcompliance/priority2.png";
import a3 from "../../assets/Environmentcompliance/priority3.png";
import a4 from "../../assets/Environmentcompliance/priority4.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const PriorityCard = ({ img, title, desc }) => (
  <motion.div
    className="rounded-xl overflow-hidden shadow-md bg-white"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    <img src={img} alt={title} className="w-full h-[250px] object-cover" />
    <div className="flex flex-col gap-3 text-center items-center p-6 bg-gray-200 min-h-[220px]">
      <h1 className="text-lg sm:text-xl font-semibold text-orange-600">{title}</h1>
      <p className="text-sm sm:text-base text-orange-600 max-w-md">{desc}</p>
    </div>
  </motion.div>
);

export default function Priority() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 text-orange-600 font-inter space-y-16">
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Our Priorities
      </motion.h1>

      {/* Priority Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PriorityCard
          img={a1}
          title="🌍 Decarbonization & Clean Energy"
          desc="Accelerating our transition to low-carbon steelmaking through renewable energy adoption and energy-efficient technologies. On track to achieve a 50% renewable energy mix and net-zero Scope 1 & 2 emissions by 2050."
        />
        <PriorityCard
          img={a2}
          title="🔁 Circular Economy & Waste Minimization"
          desc="Eliminating waste through 100% slag, fly ash, and by-product reuse in infrastructure and cement. Moving toward zero-waste-to-landfill status across all operational units."
        />
        <PriorityCard
          img={a3}
          title="💧 Water Stewardship & Recycling"
          desc="Ensuring water-positive operations with over 95%+ recycling efficiency and zero liquid discharge (ZLD) at key plants. Rainwater harvesting and groundwater recharge structures built at all major sites."
        />
        <PriorityCard
          img={a4}
          title="🌱 Biodiversity & Land Reclamation"
          desc="Restoring ecological balance in and around our mines and industrial sites through afforestation and habitat regeneration. Over 500 hectares have already been restored under our green belt program."
        />
      </div>

      {/* Additional Priorities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="bg-gray-100 rounded-xl p-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base sm:text-lg font-semibold text-orange-600 mb-3">
            🌫️ Air Quality & Emission Control
          </h2>
          <p className="text-sm sm:text-base text-orange-600">
            Installing advanced ESPs, bag filters, and real-time monitoring systems to minimize air pollutants. Continuous stack monitoring ensures regulatory and internal emission limits are strictly followed.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl p-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-base sm:text-lg font-semibold text-orange-600 mb-3">
            🛠️ Green Infrastructure & Technology
          </h2>
          <p className="text-sm sm:text-base text-orange-600">
            Investing in environment-friendly plant infrastructure, AI-based energy optimization, and WHRB (Waste Heat Recovery Boilers). New expansion projects are designed with a sustainability-by-default approach.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 rounded-xl p-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-base sm:text-lg font-semibold text-orange-600 mb-3">
            📊 Monitoring & Transparency
          </h2>
          <p className="text-sm sm:text-base text-orange-600">
            Strengthening real-time environmental data tracking through CEMS and IoT-based dashboards. Public reporting via BRSR, GRI, and CDP ensures transparent disclosure of environmental performance.
          </p>
        </motion.div>
      </div>

      {/* Download Section */}
      <motion.div
        className="text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Featured Downloads</h1>
        <a
          href="/path-to-download/SustainableDevelopmentReport2023.pdf"
          download
          className="inline-block mt-2 text-base sm:text-lg text-orange-600 hover:underline hover:text-orange-700 transition"
        >
          📄 <span className="font-medium">Download the 2023 Sustainable Development Report</span>
        </a>
      </motion.div>
    </div>
  );
}
