import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import a1 from "../../assets/Companyoverview/aboutus1.jpg";
import a2 from "../../assets/Companyoverview/aboutus2.png";
import a3 from "../../assets/Companyoverview/aboutus3.png";
import a4 from "../../assets/Companyoverview/aboutus4.png";
import a5 from "../../assets/Companyoverview/aboutus5.png";
import a6 from "../../assets/Companyoverview/aboutus6.png";

const tabOptions = [
  "Mission & Vision",
  "History",
  "Our Growth",
  "Why Choose Us",
];

// Content for each tab
const tabContents = {
  "Mission & Vision": {
    title: "Our Mission & Vision",
    description:
      "We are committed to delivering excellence through innovative solutions that transform industries. Our vision is to be the global leader in sustainable technology by 2030.",
    features: [
      {
        title: "Innovation Driven",
        description: "Pioneering solutions for tomorrow's challenges",
      },
      {
        title: "Sustainability Focus",
        description: "Eco-friendly approaches in all our operations",
      },
      {
        title: "Customer Centric",
        description: "Tailored solutions for every client need",
      },
      {
        title: "Global Reach",
        description: "Serving clients across 50+ countries",
      },
    ],
  },
  History: {
    title: "Our Journey",
    description:
      "Founded in 1975 as a small local business, we've grown into an international corporation with facilities across three continents. Our history is marked by milestones of innovation and expansion.",
    features: [
      {
        title: "1975",
        description: "Founded in a small garage with 5 employees",
      },
      {
        title: "1992",
        description: "First international expansion",
      },
      {
        title: "2008",
        description: "Listed on the stock exchange",
      },
      {
        title: "2020",
        description: "Reached 10,000 employees worldwide",
      },
    ],
  },
  "Our Growth": {
    title: "Expanding Horizons",
    description:
      "Our growth trajectory shows consistent year-over-year improvement, with strategic acquisitions and organic expansion driving our success in emerging markets.",
    features: [
      {
        title: "Market Share",
        description: "Increased from 5% to 32% in 10 years",
      },
      {
        title: "Revenue Growth",
        description: "300% increase since 2015",
      },
      {
        title: "Employee Growth",
        description: "From 200 to 5,000+ team members",
      },
      {
        title: "Global Presence",
        description: "Now operating in 25 countries",
      },
    ],
  },
  "Why Choose Us": {
    title: "Our Competitive Edge",
    description:
      "We stand out in the industry through our unparalleled expertise, commitment to quality, and customer-first approach that ensures success for all our partners.",
    features: [
      {
        title: "Industry Experts",
        description: "100+ certified professionals",
      },
      {
        title: "Proven Results",
        description: "98% customer satisfaction rate",
      },
      {
        title: "Cutting-Edge Tech",
        description: "Investing 20% of revenue in R&D",
      },
      {
        title: "24/7 Support",
        description: "Always available for our clients",
      },
    ],
  },
};

export default function Aboutus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedTab, setSelectedTab] = useState("Why Choose Us");

  return (
    <div className="px-8 py-10 space-y-10" ref={ref}>
      {/* Heading Section */}
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}
        }
      >
        <h1 className="text-4xl font-bold">Find Out More About Us</h1>
        <p className="text-gray-600">
          Discover what makes our company unique and how we've become leaders in
          our industry.
        </p>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-6 border-b pb-2">
        {tabOptions.map((tab) => (
          <div
            key={tab}
            className="relative cursor-pointer pb-3"
            onClick={() => setSelectedTab(tab)}
          >
            <p
              className={`text-lg font-medium ${
                selectedTab === tab ? "text-black" : "text-gray-500"
              }`}
            >
              {tab}
            </p>
            {selectedTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>
            )}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side Image */}
        <motion.div
          className="lg:w-[30%] w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={
            isInView ? { opacity: 1, x: 0, transition: { duration: 0.6 } } : {}
          }
        >
          <img
            src={a1}
            alt="About"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
              : {}
          }
        >
          <h1 className="text-3xl font-semibold">
            {tabContents[selectedTab].title}
          </h1>
          <p className="text-gray-700 text-lg">
            {tabContents[selectedTab].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {tabContents[selectedTab].features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.1 * idx },
                      }
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
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Statistics Section with Background */}
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
              <h1 className="text-4xl font-bold text-orange-500 mb-2">
                {item.number}
              </h1>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
