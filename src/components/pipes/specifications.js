import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Specification() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 px-6 bg-white text-black" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Specification</h1>

        <h3 className="text-2xl font-semibold mb-4">Chemical Composition</h3>
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Constituent</th>
                <th className="border border-gray-300 px-4 py-2">Grade 1</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">% Total Iron</td><td className="border px-4 py-2">87 ± 1</td></tr>
              <tr><td className="border px-4 py-2">% Metallic Iron</td><td className="border px-4 py-2">78, min</td></tr>
              <tr><td className="border px-4 py-2">% Metallization</td><td className="border px-4 py-2">88, min</td></tr>
              <tr><td className="border px-4 py-2">% C</td><td className="border px-4 py-2">0.08 – 0.10</td></tr>
              <tr><td className="border px-4 py-2">% S, max</td><td className="border px-4 py-2">0.03</td></tr>
              <tr><td className="border px-4 py-2">% P, max</td><td className="border px-4 py-2">0.07</td></tr>
              <tr><td className="border px-4 py-2">% Gangue, max</td><td className="border px-4 py-2">8</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Features</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base mb-10">
          <li>Very good reducibility because of high porosity (25–30%)</li>
          <li>Spherical shape and uniform size give very good bed permeability</li>
          <li>High strength (150–200 kg) or more for acid pellets</li>
          <li>Heat consumption is much less than that of sintering</li>
          <li>High iron content and uniform chemical composition, hence lower flux and fuel requirement in the furnace</li>
          <li>Low FeO</li>
          <li>Easy handling</li>
          <li>Its Carbon & FeO is very excellent. Steel mills who are using DRI for reducing the carbon will benefit from our pellet sponge's low FeO, which helps in better carbon control</li>
          <li>Wearing of inner lining will not take place, as in the pellet making we are not using lime</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4">Product Range & Specifications</h2>

        <h3 className="text-2xl font-semibold mb-4">A. ERW (Electric Resistance Welded) Pipes</h3>
        <p className="mb-4 text-sm sm:text-base">
          Our ERW Pipes are manufactured using state-of-the-art resistance welding techniques, guaranteeing accurate dimensions and robust weld integrity. These pipes are widely used in plumbing systems, fencing applications, and automotive components due to their resilience, durability, and cost-effectiveness.
        </p>

        <h4 className="text-xl font-semibold mb-2">Available Sizes:</h4>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Nominal Diameter</th>
                <th className="border px-4 py-2">Wall Thickness Range</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">15 mm</td><td className="border px-4 py-2">1.2 – 2.0 mm</td></tr>
              <tr><td className="border px-4 py-2">20 mm</td><td className="border px-4 py-2">1.2 – 2.5 mm</td></tr>
              <tr><td className="border px-4 py-2">25 mm</td><td className="border px-4 py-2">1.5 – 2.5 mm</td></tr>
              <tr><td className="border px-4 py-2">32 mm</td><td className="border px-4 py-2">1.5 – 3.0 mm</td></tr>
              <tr><td className="border px-4 py-2">40 mm</td><td className="border px-4 py-2">2.0 – 3.2 mm</td></tr>
              <tr><td className="border px-4 py-2">50 mm</td><td className="border px-4 py-2">2.0 – 4.0 mm</td></tr>
              <tr><td className="border px-4 py-2">80 mm</td><td className="border px-4 py-2">2.5 – 5.0 mm</td></tr>
              <tr><td className="border px-4 py-2">100 mm</td><td className="border px-4 py-2">3.0 – 6.0 mm</td></tr>
              <tr><td className="border px-4 py-2">150 mm</td><td className="border px-4 py-2">4.0 – 6.4 mm</td></tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-xl font-semibold mb-2">Grades Available:</h4>
        <ul className="list-disc list-inside mb-6 text-sm sm:text-base">
          <li>IS 1239</li>
          <li>IS 3589</li>
          <li>ASTM A53</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">B. Structural Hollow Sections</h3>
        <p className="mb-4 text-sm sm:text-base">
          We provide structural hollow sections in square, rectangular, and circular shapes, engineered for strength and stability in critical applications such as building construction, bridge structures, and solar panel mounting systems.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Types</td><td className="border px-4 py-2">SHS, RHS, CHS</td></tr>
              <tr><td className="border px-4 py-2">Applications</td><td className="border px-4 py-2">Frameworks, bridges, sheds, solar supports</td></tr>
              <tr><td className="border px-4 py-2">Standards Complied</td><td className="border px-4 py-2">IS 4923, EN 10219, ASTM A500</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base mb-10">
          <li>High Quality – Constructed from superior steel (IS 2062/1239)</li>
          <li>Accurate Manufacturing – ERW technology for resilient, seamless pipes</li>
          <li>Diverse Selection – Sizes from 15mm to 300mm (customizable)</li>
          <li>Exceptional Strength – Tensile strength between 410–550 MPa</li>
          <li>Resistant to Corrosion – Galvanized/coated finishes available</li>
          <li>Certified Quality – ISO, BIS, ASTM, and EN compliant</li>
          <li>Customized Solutions – Sizes, thicknesses, and finishes tailored</li>
          <li>Environmentally Friendly – Sustainable, self-powered manufacturing</li>
          <li>Quick Delivery – Strong logistics support across India</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
        <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base">
          <li>Over 50 Years of Experience in steel production</li>
          <li>End-to-End Solutions with integrated manufacturing</li>
          <li>Certified Quality – ISO 9001, BIS, and global certifications</li>
          <li>Broad Product Portfolio – TMT, wire rods, pig iron, etc.</li>
          <li>Tailor-made solutions for specialized applications</li>
          <li>Sustainable Practices – Renewable energy and recycling</li>
          <li>Pan-India Presence for timely delivery</li>
          <li>Trusted by 1,500+ Customers in major sectors</li>
        </ul>
      </motion.div>
    </div>
  );
}
