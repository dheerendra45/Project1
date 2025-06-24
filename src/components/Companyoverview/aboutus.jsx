import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import a1 from "../../assets/Companyoverview/aboutus1.jpg";
import a2 from "../../assets/Companyoverview/aboutus2.png";
import a3 from "../../assets/Companyoverview/aboutus3.png";
import a4 from "../../assets/Companyoverview/aboutus4.png";
import a5 from "../../assets/Companyoverview/aboutus5.png";

const tabOptions = [
  "Our Vision",
  "Our Mission",
  "Our Values",
  "Operational Essence",
  "Our Specialities"
];

const tabContents = {
  "Our Vision": {
    title: "Our Vision",
    description:
      "We are engineering the future of steel through smarter processes, stronger partnerships, and seizing every opportunity to raise the bar for quality and sustainability worldwide.",
    features: [],
  },
  "Our Mission": {
    title: "Our Mission",
    description:
      "Inspired by Shri M. P. Agarwal’s vision, we turn values into action, building a stronger India with world-class steel solutions.",
    features: [],
  },
  "Our Values": {
    title: "Our Values",
    description: "",
    features: [
      { title: "Integrity", description: "Transparency builds trust" },
      { title: "Collaboration", description: "Dedication powers excellence" },
      { title: "Commitment", description: "From 200 to 5,000+ team members" },
      { title: "Ownership", description: "Accountability drives results" },
    ],
  },
  "Operational Essence": {
    title: "Operational Excellence",
    description: "Innovation | Sustainability | Precision",
    features: [
      {
        title: "Vertical Integration",
        description:
          "Mine to Market Control: Sponge Iron → Billets → TMT Bars <br>377 MW Captive Power (incl. Solar) <br>92% Waste Recycled (Slag, Heat, Water)",
      },
      {
        title: "Manufacturing for the Future",
        description:
          "AI-based Predictive Maintenance (99% Uptime)<br>Green Steel Research: Hydrogen Reduction Trials<br>Specialized Alloys for Construction, Defense, Automotive",
      },
      {
        title: "Intentional Responsibility",
        description:
          "Carbon Offset: 4MW Solar, 2.5M Trees Planted <br>70% Local Workforce | 5 ITI Collaborations <br>Real-Time ESG Dashboards | ISO Certified",
      },
    ],
  },
  "Our Specialities": {
    title: "Our Specialities",
    description: "Integrated. Innovative. Sustainable.",
    features: [
      { title: "Comprehensive Control", description: "End-to-end steel manufacturing" },
      { title: "Eco-Friendly Manufacturing", description: "92% recycled, zero-landfill" },
      { title: "Pan-India Infrastructure", description: "JIT delivery, rail-connected plants" },
      { title: "Smart Factory Innovation", description: "AI, custom alloys, high uptime" },
    ],
  },
};

export default function Aboutus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedTab, setSelectedTab] = useState("Our Vision");

  return (
    <div className="px-8 py-10 space-y-10" ref={ref}>
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
      >
        <h1 className="text-4xl font-bold">Find Out More About Us</h1>
        <p className="text-gray-600">
          Discover what makes our company unique and how we've become leaders in our industry.
        </p>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2" />
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 border-b pb-2">
        {tabOptions.map((tab) => (
          <div key={tab} className="relative cursor-pointer pb-3" onClick={() => setSelectedTab(tab)}>
            <p className={`text-lg font-medium ${selectedTab === tab ? "text-black" : "text-gray-500"}`}>
              {tab}
            </p>
            {selectedTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        <motion.div
          className="lg:w-[30%] w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0, transition: { duration: 0.6 } } : {}}
        >
          <img src={a1} alt="About" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        </motion.div>

        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } } : {}}
        >
          <h1 className="text-3xl font-semibold">{tabContents[selectedTab].title}</h1>

          {tabContents[selectedTab].description ? (
            <p className="text-gray-700 text-lg">{tabContents[selectedTab].description}</p>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {tabContents[selectedTab].features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 * idx } }
                    : {}
                }
              >
                <img
                  src={[a2, a3, a4, a5][idx % 4]}
                  alt=""
                  className="w-16 h-16 rounded-lg shadow"
                />
                <div>
                  <h1 className="font-bold text-lg">{feature.title}</h1>
                  <p
                    className="text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-cover bg-center py-16 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gray-300"></div>
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center px-4">
          {[
            { number: "50+", text: "YEARS EXPERIENCE" },
            { number: "1580+", text: "HAPPY CUSTOMERS" },
            { number: "254", text: "GLOBAL PARTNERS" },
            { number: "46", text: "INDUSTRIAL FACILITIES" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: 0.2 * index },
                    }
                  : {}
              }
            >
              <h1 className="text-4xl font-bold text-orange-500 mb-2">{item.number}</h1>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
