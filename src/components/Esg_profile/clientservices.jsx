import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/p1/client.png";

export default function ClientServices() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isTextInView = useInView(textRef, { triggerOnce: false });
  const isImageInView = useInView(imageRef, { triggerOnce: false });

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-20 xl:px-32 py-12 gap-12 font-inter font-semibold text-black">
      {/* Left Half - Text Content with Animation */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 space-y-6"
      >
        {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Green Makes Sense Beyond Conscience
        </h1> */}
        <p className="text-lg text-gray-800">
          Reflecting Our Social and Environmental Responsibility
        </p>

        <h3 className="text-xl  mt-4">
          Empowering Communities Through Sustainable Practices
        </h3>
        <ul className="list-disc ml-5 space-y-4 text-base">
          <li>
            <h4 className="font-semibold text-lg">Nutrition Gardens</h4>
            <p>
              Combat malnutrition by providing families with access to fresh,
              organic produce.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-lg">
              Mobile Health Vans & Safe Drinking Water
            </h4>
            <p>
              Delivering healthcare services and clean drinking water to remote
              areas.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-lg">
              Skill Development & Eco-Awareness Programs
            </h4>
            <p>
              Educate communities on sustainable living and green practices.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-lg">Plantation Drives</h4>
            <p>
              Engage local villagers in tree-planting initiatives to enhance
              green cover.
            </p>
          </li>
        </ul>

        <h3 className="text-xl  mt-6">Building Self-Sufficient Communities</h3>
        <ul className="list-disc ml-5 space-y-4 text-base">
          <li>
            <h4 className="font-semibold text-lg">
              Rainwater Harvesting Projects
            </h4>
            <p>Promote water conservation in rural areas.</p>
          </li>
          <li>
            <h4 className="font-semibold text-lg">
              Sustainable Agriculture Training
            </h4>
            <p>
              Supporting farmers with eco-friendly and climate-resilient farming
              techniques.
            </p>
          </li>
          <li>
            <h4 className="font-semibold text-lg">
              Infrastructure Development
            </h4>
            <p>
              Building long-term community assets like roads, schools, and
              sanitation facilities.
            </p>
          </li>
        </ul>

        <p className="text-base mt-4">
          Through these efforts, we empower communities to thrive sustainably
          while protecting the environment.
        </p>

        <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300">
          Discover our ESG Solutions
        </button>
      </motion.div>

      {/* Right Half - Image with Animation */}
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 100 }}
        animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={a1}
          alt="Client Services"
          className="max-w-full h-auto rounded-lg shadow-xl"
        />
      </motion.div>
    </div>
  );
}
