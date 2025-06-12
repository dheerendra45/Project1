import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import a1 from "../../assets/Companyoverview/aboutus1.jpg";
import a2 from "../../assets/Companyoverview/aboutus2.png";
import a3 from "../../assets/Companyoverview/aboutus3.png";
import a4 from "../../assets/Companyoverview/aboutus4.png";
import a5 from "../../assets/Companyoverview/aboutus5.png";
import a6 from "../../assets/Companyoverview/aboutus6.png";

const tabOptions = ["Mission & Vision", "History", "Our Growth", "Why Choose Us"];

export default function Aboutus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedTab, setSelectedTab] = useState("Why Choose Us");

  return (
    <div className="px-4 py-10 space-y-10" ref={ref}>
      {/* Heading Section */}
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
        whileInView={{ repeat: Infinity, repeatType: "loop", repeatDelay: 4 }}
      >
        <h1 className="text-4xl font-bold">Find Out More About Us</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Vitae feugiat pellentesque purus vitae leo.
        </p>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-6 border-b pb-2">
        {tabOptions.map((tab) => (
          <div
            key={tab}
            className="relative cursor-pointer"
            onClick={() => setSelectedTab(tab)}
          >
            <p className={`text-lg font-medium ${selectedTab === tab ? "text-black" : "text-gray-500"}`}>
              {tab}
            </p>
            {selectedTab === tab && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 rounded-t"></div>
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
          animate={isInView ? { opacity: 1, x: 0, transition: { duration: 0.6 } } : {}}
          whileInView={{ repeat: Infinity, repeatType: "loop", repeatDelay: 6 }}
        >
          <img src={a1} alt="About" className="rounded shadow" />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } } : {}}
          whileInView={{ repeat: Infinity, repeatType: "loop", repeatDelay: 6 }}
        >
          <h1 className="text-3xl font-semibold">{selectedTab}</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Sit facilisis nascetur iaculis volutpat. Lectus cursus bibendum elementum nunc. Suspendisse nisl semper ultricies pretium tempus varius convallis dapibus. Vel gravida.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[a2, a3, a4, a5].map((img, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 * idx } } : {}}
                whileInView={{ repeat: Infinity, repeatType: "loop", repeatDelay: 5 }}
              >
                <img src={img} alt="" className="w-16 h-16 rounded shadow" />
                <div>
                  <h1 className="font-bold text-lg">Lorem ipsum</h1>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Statistics Section with Background */}
      <div
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${a6})` }}
      >
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center px-4">
          {[
            "50 YEARS EXPERIENCE",
            "1580+ HAPPY CUSTOMER",
            "254 DISTRIBUTOR",
            "46 FACTORY INDUSTRIAL",
          ].map((text, index) => (
            <motion.div
              key={index}
              className="bg-gray-500 text-white p-6 rounded shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index } } : {}}
              whileInView={{ repeat: Infinity, repeatType: "loop", repeatDelay: 5 }}
            >
              <h1 className="text-xl font-semibold">{text}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
