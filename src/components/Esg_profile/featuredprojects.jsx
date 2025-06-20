import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import a1 from "../../assets/p1/city.png";
import a2 from "../../assets/p1/metro.png";
import a3 from "../../assets/p1/seamap.png";
import a4 from "../../assets/p1/goals.png";

const AnimatedSection = ({ children, delay = 0 }) => {
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
          transition: { 
            duration: 0.5 
          }
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
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
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
          transition: { 
            duration: 0.5 
          }
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
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
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
          transition: { 
            duration: 0.3 
          }
        }
      }}
    >
      {children}
    </motion.li>
  );
};

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* First Section: Featured Projects */}
      <AnimatedSection>
        <div>
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            className="text-lg mb-10 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We help our clients make a difference in our communities by providing
            strategic advice, technical expertise and a passion for impactful
            results, in line with the SDGs.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Project 1 */}
            <AnimatedCard delay={0}>
              <div className="flex-1 bg-gray-100 p-6 rounded shadow">
                <motion.img
                  src={a1}
                  alt="Project 1"
                  className="w-full h-auto mb-4 rounded"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-sm font-semibold text-gray-600">
                  Rainwater Harvesting
                </p>
                <h2 className="text-xl font-bold mb-4">
                  Recharge groundwater through rain capture.
                </h2>
                <p className="text-gray-700 text-base">
                  Rainwater collected from rooftops and catchments is channeled into
                  recharge pits and storage tanks at our plants and nearby
                  communities to conserve groundwater.
                </p>
              </div>
            </AnimatedCard>

            {/* Project 2 */}
            <AnimatedCard delay={1}>
              <div className="flex-1 bg-gray-100 p-6 rounded shadow">
                <motion.img
                  src={a2}
                  alt="Project 2"
                  className="w-full h-auto mb-4 rounded"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-sm font-semibold text-gray-600">Waste Reuse</p>
                <h2 className="text-xl font-bold mb-4 mt-2">
                  Transforming byproducts into building material
                </h2>
                <p className="text-gray-700 text-base">
                  We reuse slag and fly ash to manufacture eco-friendly bricks and
                  supply them to nearby construction projects, reducing landfill and
                  raw material consumption.
                </p>
              </div>
            </AnimatedCard>

            {/* Project 3 */}
            <AnimatedCard delay={2}>
              <div className="flex-1 bg-gray-100 p-6 rounded shadow">
                <motion.img
                  src={a3}
                  alt="Project 3"
                  className="w-full h-auto mb-4 rounded"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-sm font-semibold text-gray-600">
                  Energy Efficiency
                </p>
                <h2 className="text-xl font-bold mb-4">
                  Cutting energy use via Waste Heat Recovery.
                </h2>
                <p className="text-gray-700 text-base">
                  Heat from industrial processes is captured and reused through
                  Waste Heat Recovery (WHR) systems to generate power internally,
                  reducing energy costs and emissions.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Second Section: Sustainable Development Goals */}
      <AnimatedSection delay={1}>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left - Text Content */}
          <div className="md:w-1/2 text-left space-y-6">
            <motion.h1 
              className="text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Environmental Stewardship
            </motion.h1>
            <ul className="space-y-6">
              <AnimatedListItem index={0}>
                <strong>Green Manufacturing</strong> – We prioritize clean and
                efficient production across our integrated steel plants and ferro
                alloy units. Our facilities are designed with advanced pollution
                control systems, energy recovery technologies, and waste recycling
                units to ensure low-impact operations. Ongoing investments in
                automation and emission control ensure strong compliance.
              </AnimatedListItem>

              <AnimatedListItem index={1}>
                <strong>Carbon Reduction</strong> – As part of our long-term
                climate strategy, Shyam Metalics is actively working toward a
                net-zero emissions roadmap. A key part of this journey is
                increasing the use of renewable energy, particularly through solar
                power installations and Waste Heat Recovery Boilers (WHRB) that
                harness energy from industrial processes.
              </AnimatedListItem>

              <AnimatedListItem index={2}>
                <strong>Resource Efficiency</strong> – We follow a circular
                approach to manufacturing by maximizing the use of every resource.
                Our operations have adopted closed-loop water recycling systems,
                ensuring minimal freshwater withdrawal. Solid waste is reused to
                the greatest extent, particularly blast furnace slag, repurposed
                into cement-grade material or road aggregates.
              </AnimatedListItem>
            </ul>
          </div>

          {/* Right - Image */}
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

      {/* Download Center Section */}
      <AnimatedSection delay={2}>
        <div>
          <motion.h1 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Download Center
          </motion.h1>
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
            "CDP 2023 Climate Change Questionaire Response",
          ].map((text, i) => (
            <motion.a
              key={i}
              href="#"
              className="flex items-center gap-2 mb-2 text-black-600 hover:underline"
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
              {/* PDF Icon */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600 flex-shrink-0"
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
          <motion.a
            href="#"
            className="inline-flex items-center text-black-600 hover:underline mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 1.2
            }}
            whileHover={{ 
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            Previous years
            <motion.span 
              className="ml-1 font-bold text-lg"
              animate={{ 
                x: [0, 5, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5
              }}
            >
              {">"}
            </motion.span>
          </motion.a>
        </div>
      </AnimatedSection>
    </div>
  );
}