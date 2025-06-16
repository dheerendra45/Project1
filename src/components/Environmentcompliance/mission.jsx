import { motion } from "framer-motion";
import { useState } from "react";
import a1 from "../../assets/Environmentcompliance/mission1.png";
import a2 from "../../assets/Environmentcompliance/mission2.png";
import a3 from "../../assets/Environmentcompliance/mission3.png";
import a4 from "../../assets/Environmentcompliance/mission4.png";
import a5 from "../../assets/Environmentcompliance/mission5.png";
import a6 from "../../assets/Environmentcompliance/mission6.png";
import a7 from "../../assets/Environmentcompliance/mission7.png";

const getVariants = (reverse) => ({
  hidden: { opacity: 0, x: reverse ? 100 : -100 },
  visible: { opacity: 1, x: 0 },
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

  // Function to render text with proper line breaks and bullet points
  const renderFormattedText = (text) => {
    return text
      .split("\n")
      .map((line, index) => {
        // Check if line starts with bullet point indicators
        if (
          line.trim().startsWith("•") ||
          line.trim().startsWith("-") ||
          line.trim().startsWith("*")
        ) {
          return (
            <li key={index} className="mb-2 ml-4">
              {line.replace(/^[•\-\*]\s*/, "")}
            </li>
          );
        }
        // Check if line contains a colon (likely a heading)
        else if (line.includes(":") && line.length < 100) {
          return (
            <div key={index} className="font-semibold mb-2 mt-4">
              {line}
            </div>
          );
        }
        // Regular paragraph
        else if (line.trim()) {
          return (
            <p key={index} className="mb-2">
              {line}
            </p>
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
      } items-stretch w-full ${bg} ${text}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={getVariants(reverse)}
    >
      {/* Full half image */}
      <div className="lg:w-1/2 w-full h-full">
        <img src={img} alt={heading} className="w-full h-full object-cover" />
      </div>

      {/* Text section */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{heading}</h1>

        <div className="text-lg mb-4 leading-relaxed">
          {renderFormattedText(displayText)}
        </div>

        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-lg font-semibold underline cursor-pointer hover:opacity-80 mb-4 text-left"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </button>
        )}

        {linkText && !shouldTruncate && (
          <h1 className="text-xl font-semibold underline cursor-pointer hover:opacity-80">
            {linkText}
          </h1>
        )}
      </div>
    </motion.div>
  );
};

export default function Mission() {
  return (
    <div className="w-full overflow-x-hidden">
      <Section
        img={a1}
        heading="🌿 From Waste to Wealth: How We Recycle 100% of Our Slag"
        para="Discover how Shyam Metalics turns steel by-products into road construction materials, reducing landfill dependency."
        bg="bg-orange-500"
        text="text-white"
        reverse={false}
      />
      <Section
        img={a2}
        heading="🏥Healing Hands: Bringing Healthcare to Remote Villages"
        para="Explore how our mobile medical units provide free check-ups to underserved communities near our plants."
        bg="bg-white"
        text="text-orange-500"
        reverse={true}
      />
      <Section
        img={a3}
        heading="⚡ The Green Steel Revolution: Our Hydrogen Pilot Project"
        para="Steel production is among the world's largest sources of carbon emissions, but what if we could change that? Explore our journey toward hydrogen-powered steelmaking."
        bg="bg-orange-500"
        text="text-white"
        reverse={false}
      />
      <Section
        img={a4}
        heading="Global Sustainability Initiativess"
        para="Shyam Metalics is committed to integrating global sustainability frameworks into every aspect of its operations, ensuring that local progress aligns with and contributes meaningfully to global climate, environmental, and social goals.

In pursuit of responsible steelmaking, Shyam Metalics adheres to the World Steel Association's Sustainability Charter, having adopted 11 principles that promote safety, circularity, emissions reduction, and transparency in operations. Additionally, the company is actively working toward Responsible Steel™ certification, with the Sambalpur plant targeting Stage 1 certification in the upcoming phase."
        bg="bg-white"
        text="text-orange-500"
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
        bg="bg-gray-500"
        text="text-white"
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
        bg="bg-white"
        text="text-orange-500"
        reverse={true}
      />
      <Section
        img={a7}
        heading="Making a Difference"
        para="Linde employees strive to live our vision of 'best performing' in everything we do. Many respected third-party stakeholders have recognized Linde's practices and governance, contributions to communities, innovative solutions and sustainability performance."
        bg="bg-gray-500"
        text="text-white"
        reverse={false}
        linkText="View some of the awards and recognition that we've earned"
      />
    </div>
  );
}
