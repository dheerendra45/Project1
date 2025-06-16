import { motion } from "framer-motion";
import a1 from "../../assets/Environmentcompliance/Drawing .jpg";
import a2 from "../../assets/Environmentcompliance/Football 4.jpg";
import a3 from "../../assets/Environmentcompliance/Football 5.jpg";
import a4 from "../../assets/Environmentcompliance/Football 6.jpg";
import a5 from "../../assets/Environmentcompliance/Tution 6.jpg";
import a6 from "../../assets/Environmentcompliance/Plant 10.jpg";
import a7 from "../../assets/Environmentcompliance/Plant 11.jpg";

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
}) => (
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
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{heading}</h1>
      <p className="text-lg mb-4">{para}</p>
      <h1 className="text-xl font-semibold underline cursor-pointer hover:opacity-80">
        {linkText}
      </h1>
    </div>
  </motion.div>
);

export default function Mission() {
  return (
    <div className="w-full overflow-x-hidden">
      <Section
        img={a1}
        heading="🌿 From Waste to Wealth: How We Recycle 100% of Our Slag"
        para="Discover how Shyam Metalics turns steel by-products into road construction materials, reducing landfill dependency.
"
        bg="bg-orange-500"
        text="text-white"
        reverse={false}
        linkText="Learn More"
      />
      <Section
        img={a2}
        heading="🏥Healing Hands: Bringing Healthcare to Remote Villages"
        para="Explore how our mobile medical units provide free check-ups to underserved communities near our plants."
        bg="bg-white"
        text="text-orange-500"
        reverse={true}
        linkText="Learn More"
      />
      <Section
        img={a3}
        heading="⚡ The Green Steel Revolution: Our Hydrogen Pilot Project"
        para="Steel production is among the world’s largest sources of carbon emissions, but what if we could change that? Explore our journey toward hydrogen-powered steelmaking.
"
        bg="bg-orange-500"
        text="text-white"
        reverse={false}
        linkText="Learn More"
      />
      <Section
        img={a4}
        heading="Global Initiatives"
        para="Linde is pleased to join sustainability leaders around the globe in efforts to effect social and environmental resilience."
        bg="bg-white"
        text="text-orange-500"
        reverse={true}
        linkText="Learn More"
      />
      <Section
        img={a5}
        heading="Targets & Performance"
        para="Our sustainability targets are key to our success. They support our mission of making our world more productive and drive our sustainability agenda."
        bg="bg-gray-500"
        text="text-white"
        reverse={false}
        linkText="Learn More"
      />
      <Section
        img={a6}
        heading="Reporting Center"
        para="Visit our Reporting Center for more detailed information about our Sustainable Development initiatives."
        bg="bg-white"
        text="text-orange-500"
        reverse={true}
        linkText="Learn More"
      />
      <Section
        img={a7}
        heading="Making a Difference"
        para="Linde employees strive to live our vision of “best performing” in everything we do. Many respected third-party stakeholders have recognized Linde’s practices and governance, contributions to communities, innovative solutions and sustainability performance."
        bg="bg-gray-500"
        text="text-white"
        reverse={false}
        linkText="View some of the awards and recognition that we've earned"
      />
    </div>
  );
}
