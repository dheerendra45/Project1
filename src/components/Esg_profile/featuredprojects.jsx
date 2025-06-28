import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import a1 from "../../assets/p1/city.png";
import a2 from "../../assets/p1/metro.png";
import a3 from "../../assets/p1/seamap.png";
import a4 from "../../assets/p1/goals.png";

// Reusable Scroll Animation Components
const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: delay * 0.2,
            ease: "easeOut"
          }
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: delay * 0.2,
            ease: [0.17, 0.67, 0.83, 0.67]
          }
        },
        hidden: {
          opacity: 0,
          scale: 0.9,
          transition: { duration: 0.5 }
        }
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedListItem = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut"
          }
        },
        hidden: {
          opacity: 0,
          x: -20,
          transition: { duration: 0.3 }
        }
      }}
    >
      {children}
    </motion.li>
  );
};

export default function Projects() {
  return (
    <div className="font-inter px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12 space-y-20 text-black">
      
      {/* Featured Projects */}
      <AnimatedSection>
        <div>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg mb-10 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We help our clients make a difference in our communities by providing
            strategic advice, technical expertise, and a passion for impactful
            results, in line with the SDGs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ img: a1, label: "Rainwater Harvesting", title: "Recharge groundwater through rain capture.", desc: "Rainwater collected from rooftops and catchments is channeled into recharge pits and storage tanks at our plants and nearby communities to conserve groundwater." },
              { img: a2, label: "Waste Reuse", title: "Transforming byproducts into building material", desc: "We reuse slag and fly ash to manufacture eco-friendly bricks and supply them to nearby construction projects, reducing landfill and raw material consumption." },
              { img: a3, label: "Energy Efficiency", title: "Cutting energy use via Waste Heat Recovery.", desc: "Heat from industrial processes is captured and reused through Waste Heat Recovery (WHR) systems to generate power internally, reducing energy costs and emissions." }]
              .map((card, i) => (
                <AnimatedCard key={i} delay={i}>
                  <div className="bg-gray-100 p-6 rounded shadow h-full flex flex-col">
                    <motion.img
                      src={card.img}
                      alt={`Project ${i + 1}`}
                      className="w-full h-auto mb-4 rounded"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-sm font-semibold text-gray-600">{card.label}</p>
                    <h2 className="text-lg font-bold mt-2 mb-3">{card.title}</h2>
                    <p className="text-gray-700 text-base">{card.desc}</p>
                  </div>
                </AnimatedCard>
              ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Environmental Stewardship */}
      <AnimatedSection delay={1}>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <motion.h1
              className="text-2xl sm:text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Environmental Stewardship
            </motion.h1>
            <ul className="space-y-6">
              {[
                <><strong>Green Manufacturing</strong> – We prioritize clean and efficient production across our integrated steel plants and ferro alloy units. Our facilities are designed with advanced pollution control systems, energy recovery technologies, and waste recycling units.</>,
                <><strong>Carbon Reduction</strong> – We're building a net-zero roadmap by increasing renewable energy through solar and WHR systems to cut carbon emissions.</>,
                <><strong>Resource Efficiency</strong> – Closed-loop water systems, solid waste repurposing like slag for cement, and minimal freshwater withdrawal are part of our circular practices.</>
              ].map((item, i) => (
                <AnimatedListItem key={i} index={i}>{item}</AnimatedListItem>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={a4}
              alt="Sustainable Development Goals"
              className="max-w-full h-auto rounded shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Download Center */}
      <AnimatedSection delay={2}>
        <div>
          <motion.h1
            className="text-xl sm:text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Download Center
          </motion.h1>

          <div className="flex flex-col">
            {[
              "WSP 2023 Global ESG Report",
              "WSP 2023 Global ESG Report - Highlights",
              "WSP 2023 Global ESG Report - Datapack",
              "Managing our ESG impacts",
              "2022 Global TCFD Report",
              "GHG Verification Statement",
              "Climate Transition Plan",
              "Global ESG Statement",
              "Biodiversity Statement",
              "Health, Safety, Environmental and Quality Policy Statement",
              "CDP 2023 Climate Change Questionaire Response"
            ].map((text, i) => (
              <motion.a
                key={i}
                href="#"
                className="flex items-center gap-2 mb-2 hover:underline"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1
                }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM13 3v5h5M8 9h8v2H8v-2zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                </motion.svg>
                {text}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#"
            className="inline-flex items-center text-black hover:underline mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ x: 5 }}
          >
            Previous years
            <motion.span
              className="ml-1 font-bold text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {">"}
            </motion.span>
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  );
}
