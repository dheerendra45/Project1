import { motion } from 'framer-motion';
import a1 from '../../assets/Environmentcompliance/priority1.png';
import a2 from '../../assets/Environmentcompliance/priority2.png';
import a3 from '../../assets/Environmentcompliance/priority3.png';
import a4 from '../../assets/Environmentcompliance/priority4.png';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const PriorityCard = ({ img, title, desc }) => (
  <motion.div
    className="rounded-xl overflow-hidden shadow-md"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    {/* Top full-width image */}
    <img src={img} alt={title} className="w-full h-[250px] object-cover" />

    {/* Text container with equal height for consistency */}
    <div className="flex flex-col gap-3 text-center items-center p-6 bg-gray-300 min-h-[220px]">
      <h1 className="text-xl font-semibold text-orange-500">{title}</h1>
      <p className="text-sm text-orange-500 max-w-md">{desc}</p>
    </div>
  </motion.div>
);

export default function Priority() {
  return (
    <div className="w-full bg-white py-10 px-6 text-orange-600">
      {/* Heading */}
      <motion.h1
        className="text-3xl font-bold text-center mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Our Priorities
      </motion.h1>

      {/* Priority Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <PriorityCard
          img={a1}
          title="Climate Change"
          desc="Addressing the issues surrounding climate change is one of the highest priorities for Linde around the world."
        />
        <PriorityCard
          img={a2}
          title="People & Community"
          desc="We are committed to a diverse workforce and inclusive spaces. We take pride in the passion of our employee volunteers and strategic philanthropy that makes a sustainable impact in our communities."
        />
        <PriorityCard
          img={a3}
          title="Integrity & Compliance"
          desc="We live and work by our company's values."
        />
        <PriorityCard
          img={a4}
          title="Safety, Health and Environment"
          desc="At Linde we are driven to ensure no harm comes from our actions to people, the environment or the communities in which we operate."
        />
      </div>

      {/* Footer with Download Link */}
      <motion.div
        className="mt-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold mb-2">Featured Downloads</h1>
        <a
          href="/path-to-download/SustainableDevelopmentReport2023.pdf"
          download
          className="inline-block mt-2 text-md text-orange-500 hover:underline hover:text-orange-700 transition"
        >
          📄 <span className="font-medium">Download the 2023 Sustainable Development Report</span>
        </a>
      </motion.div>
    </div>
  );
}
