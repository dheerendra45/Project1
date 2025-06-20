import { motion } from "framer-motion";
import { useState } from "react";
import a1 from "../../assets/Environmentcompliance/mission1.png";
import a2 from "../../assets/Environmentcompliance/mission2.png";
import a3 from "../../assets/Environmentcompliance/mission3.png";
import a4 from "../../assets/Environmentcompliance/mission4.png";
import a5 from "../../assets/Environmentcompliance/mission5.png";
import a6 from "../../assets/Environmentcompliance/mission6.png";
import a7 from "../../assets/Environmentcompliance/mission7.png";

// Animation configurations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const imageVariants = (reverse) => ({
  hidden: {
    x: reverse ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});

const textVariants = (reverse) => ({
  hidden: {
    x: reverse ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
});

const Section = ({
  img,
  heading,
  para,
  bg,
  text,
  reverse = false,
  linkText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;

  const shouldTruncate = para.length > maxLength;
  const displayText =
    isExpanded || !shouldTruncate ? para : para.substring(0, maxLength) + "...";

  const renderFormattedText = (text) => {
    return text
      .split("\n")
      .map((line, index) => {
        if (
          line.trim().startsWith("•") ||
          line.trim().startsWith("-") ||
          line.trim().startsWith("*")
        ) {
          return (
            <motion.li
              key={index}
              className="mb-2 ml-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {line.replace(/^[•\-\*]\s*/, "")}
            </motion.li>
          );
        } else if (line.includes(":") && line.length < 100) {
          return (
            <motion.div
              key={index}
              className="font-semibold mb-2 mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              {line}
            </motion.div>
          );
        } else if (line.trim()) {
          return (
            <motion.p
              key={index}
              className="mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 + index * 0.03 }}
            >
              {line}
            </motion.p>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-stretch w-full ${bg} ${text} min-h-[70vh]`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Image section with enhanced animation */}
      <motion.div
        className="lg:w-1/2 w-full h-[400px] lg:h-auto overflow-hidden"
        variants={imageVariants(reverse)}
      >
        <motion.img
          src={img}
          alt={heading}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Text section with staggered animations */}
      <motion.div
        className="lg:w-1/2 w-full flex flex-col justify-center px-6 py-10 lg:px-12"
        variants={textVariants(reverse)}
      >
        <motion.h1
          className="text-2xl md:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
        >
          {heading}
        </motion.h1>

        <div className="text-lg mb-4 leading-relaxed">
          {renderFormattedText(displayText)}
        </div>

        {shouldTruncate && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-lg font-semibold underline cursor-pointer hover:opacity-80 mb-4 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </motion.button>
        )}

        {linkText && !shouldTruncate && (
          <motion.h1
            className="text-xl font-semibold underline cursor-pointer hover:opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {linkText}
          </motion.h1>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Mission() {
  return (
    <div className="px-16 overflow-x-hidden space-y-8">
      <Section
        img={a1}
        heading="🌿 From Waste to Wealth: How We Recycle 100% of Our Slag"
        para="Discover how Shyam Metalics turns steel by-products into road construction materials, reducing landfill dependency."
        bg="bg-gray-300"
        text="text-black"
        reverse={false}
      />
      <Section
        img={a2}
        heading="🏥Healing Hands: Bringing Healthcare to Remote Villages"
        para="Explore how our mobile medical units provide free check-ups to underserved communities near our plants."
        bg="bg-gray-300"
        text="text-black"
        reverse={true}
      />
      <Section
        img={a3}
        heading="⚡ The Green Steel Revolution: Our Hydrogen Pilot Project"
        para="Steel production is among the world's largest sources of carbon emissions, but what if we could change that? Explore our journey toward hydrogen-powered steelmaking."
        bg="bg-gray-300"
        text="text-black"
        reverse={false}
      />
      <Section
        img={a4}
        heading="Global Sustainability Initiativess"
        para="Shyam Metalics is committed to integrating global sustainability frameworks into every aspect of its operations, ensuring that local progress aligns with and contributes meaningfully to global climate, environmental, and social goals.

In pursuit of responsible steelmaking, Shyam Metalics adheres to the World Steel Association's Sustainability Charter, having adopted 11 principles that promote safety, circularity, emissions reduction, and transparency in operations. Additionally, the company is actively working toward Responsible Steel™ certification, with the Sambalpur plant targeting Stage 1 certification in the upcoming phase."
        bg="bg-gray-300"
        text="text-black"
        reverse={true}
      />
      <Section
        img={a5}
        heading="Regulatory Compliance Framework"
        para="Ministry of Environment, Forest and Climate Change (MoEF&CC):
All operating units hold valid Environmental Clearances (EC) and Consent to Operate (CTO) from the State Pollution Control Boards.

Air & Water Act Compliance:
Continuous Emission Monitoring Systems (CEMS) and Online Effluent Monitoring Systems are installed and linked directly to CPCB/SPCB servers for real-time environmental performance tracking.

Hazardous Waste Management Rules, 2016:
100% hazardous waste is managed as per prescribed norms, with licensed recyclers and secure landfills for residue disposal.

Battery & E-Waste Rules Compliance:
Proper segregation, storage, and handover of waste to authorized agencies under extended producer responsibility."
        bg="bg-gray-300"
        text="text-black"
        reverse={false}
      />
      <Section
        img={a6}
        heading="Beyond Compliance – Proactive Initiatives"
        para="Third-Party Environmental Audits:
Annual independent audits by Deloitte & SGS ensure transparency and identify areas for ecological improvement.

ESG-Integrated Monitoring:
Internal Environmental, Health & Safety (EHS) dashboards track performance metrics across air, water, waste, and biodiversity indicators.

Voluntary Disclosures:
Environmental reporting follows GRI, CDP, and BRSR standards to ensure comprehensive stakeholder transparency."
        bg="bg-gray-300"
        text="text-black"
        reverse={true}
      />
      <Section
        img={a7}
        heading="Making a Difference"
        para="Linde employees strive to live our vision of 'best performing' in everything we do. Many respected third-party stakeholders have recognized Linde's practices and governance, contributions to communities, innovative solutions and sustainability performance."
        bg="bg-gray-300"
        text="text-black"
        reverse={false}
        linkText="View some of the awards and recognition that we've earned"
      />
    </div>
  );
}
