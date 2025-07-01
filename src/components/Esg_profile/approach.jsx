import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import a3 from "../../assets/p1/girltree.png";

// Reusable scroll reveal component
const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : -50,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      scale: direction === "zoom" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay * 0.15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Approach() {
  return (
    <div className="text-black font-inter px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10 space-y-14">
      {/* Heading Section */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto space-y-6">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Approach to Our Sustainability Efforts
          </motion.h1>

          {[
            "At Shyam Metalics, sustainability is not just a goal—it's the foundation of our business strategy. We believe in creating value not only for our shareholders but also for the environment and the communities we serve.",
            "Sustainability drives everything we do, from the way we produce steel and metals to how we engage with our communities. We aim to minimize our environmental footprint, optimize resource usage, and ensure long-term sustainability.",
            "We follow a holistic approach that integrates environmental sustainability, social responsibility, and economic growth, enabling us to remain competitive while adhering to the highest ethical standards.",
          ].map((text, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <motion.p
                className="text-base sm:text-lg text-black text-justify"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {text}
              </motion.p>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* ESG Section with Sticky Image */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sticky Image */}
        <div className="w-full lg:w-1/2 lg:sticky top-24 h-fit">
          <ScrollReveal delay={1}>
            <motion.img
              src={a3}
              alt="ESG"
              className="w-full h-auto rounded-md shadow-lg"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            />
          </ScrollReveal>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {[
            {
              title: "1. Energy Management: Powering a Green Future",
              description:
                "We are committed to reducing our energy consumption and transitioning to renewable energy sources wherever possible.",
              subsections: [
                {
                  title: "Renewable Energy Initiatives",
                  items: [
                    "Installed 63.876 MW of solar capacity and 5.1 MW of wind energy.",
                    "Energy consumption from renewables: 864,495 GJ (FY 24-25).",
                  ],
                },
                {
                  title: "Energy Efficiency Projects",
                  items: [
                    "Upgraded production processes with energy-efficient systems.",
                    "Implemented energy-efficient lighting, HVAC systems, and green building designs.",
                  ],
                },
              ],
            },
            {
              title:
                "2. Greenhouse Gas (GHG) Emissions: Reducing Our Carbon Footprint",
              description:
                "We are GreenPro certified, aligning our operations with global sustainability standards.",
              subsections: [
                {
                  title: "Emission Reduction Initiatives",
                  items: [
                    "Solar & wind energy integration to reduce Scope 1 & 2 emissions.",
                    "Advanced emission control technologies for PM10 & PM2.5 reduction.",
                  ],
                },
                {
                  title: "Sustainable Manufacturing",
                  items: [
                    "Energy-efficient production processes minimize emissions.",
                  ],
                },
              ],
            },
            {
              title: "3. Waste Management: Creating a Circular Economy",
              description:
                "We follow a zero-waste approach, maximizing reuse and recycling.",
              subsections: [
                {
                  title: "Recycling & Repurposing",
                  items: [
                    "10.83 MT of waste recycled annually.",
                    "By-products repurposed into eco-friendly concrete blocks.",
                  ],
                },
                {
                  title: "Efficient Waste Disposal",
                  items: [
                    "25.53 MT of hazardous waste safely disposed annually.",
                  ],
                },
              ],
            },
            {
              title: "4. Water Management: Conserving Every Drop",
              description: "We follow a Zero Liquid Discharge (ZLD) policy.",
              subsections: [
                {
                  title: "Key Initiatives",
                  items: [
                    "3,775 KL capacity wastewater treatment plants.",
                    "100% wastewater recycled for industrial reuse.",
                  ],
                },
              ],
            },
          ].map((section, sectionIndex) => (
            <ScrollReveal key={sectionIndex} delay={sectionIndex + 2}>
              <motion.div className="p-4 rounded-lg bg-gray-50 shadow-sm">
                <motion.h3
                  className="text-xl font-medium text-black mb-2"
                  whileHover={{ scale: 1.01 }}
                >
                  {section.title}
                </motion.h3>
                <p className="mb-3 text-justify">{section.description}</p>

                {section.subsections.map((sub, subIndex) => (
                  <div key={subIndex} className="mb-2">
                    <h4 className="font-medium mt-2 text-justify">
                      {sub.title}
                    </h4>
                    <ul className="ml-5 mt-1 list-disc space-y-1 text-justify">
                      {sub.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-justify">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={6}>
            <motion.button
              className="mt-4 px-6 py-2 border-2 border-orange-500 text-black hover:bg-orange-100 transition rounded-lg"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(249, 115, 22, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Our Global ESG Report
            </motion.button>
          </ScrollReveal>
        </div>
      </div>

      {/* Quote Section */}
      <motion.hr
        className="border-gray-400 my-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      />

      <ScrollReveal delay={2}>
        <div className="w-full max-w-6xl mx-auto text-left space-y-6 text-black">
          <motion.h2
            className="text-2xl sm:text-3xl leading-snug text-justify"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            "At Shyam Metalics, we invest in employee training, skill
            development, and green awareness programs to foster a culture of
            sustainability. Through workshops, certifications, and adoption of
            new technologies, we empower our workforce to lead eco-friendly
            operations. Our corporate environmental policies align with global
            standards while promoting resource efficiency, waste reduction, and
            community engagement for a sustainable future."
          </motion.h2>
          <div>
            <p className="font-medium text-lg">Andre-Martin Bouchard</p>
            <p className="text-black">Global Executive Director, Shyam</p>
          </div>
        </div>
      </ScrollReveal>

      <motion.hr
        className="border-gray-400 my-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
