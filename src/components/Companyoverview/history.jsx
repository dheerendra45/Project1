import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import a1 from "../../assets/Companyoverview/history1.jpg";

const years = ["1989", "2000", "2008", "2018", "2024"];

export default function History() {
  const [selectedYear, setSelectedYear] = useState("1989");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const repeatingAnim = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0, transition: { duration: 0.6, repeat: Infinity, repeatType: "loop", repeatDelay: 4 } } : {},
  };

  return (
    <div className="px-6 py-12 space-y-8" ref={ref}>
      <motion.h3 className="text-gray-500 text-lg" {...repeatingAnim}>
        Our History
      </motion.h3>
      <motion.h1 className="text-3xl font-bold text-black" {...repeatingAnim}>
        Lorem ipsum dolor sit amet consectetur.
      </motion.h1>

      {/* Timeline Navigation */}
      <div className="flex justify-center space-x-6">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`text-lg font-semibold border-b-2 pb-1 ${
              selectedYear === year ? "text-orange-500 border-orange-500" : "text-gray-500 border-transparent"
            } transition duration-300`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Timeline Content */}
      <motion.div
        className="flex flex-col md:flex-row gap-8 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
      >
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">Humble beginnings</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam in felis posuere pretium. Et donec tempor pharetra turpis risus tincidunt in. Mi volutpat eu porttitor.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Facilisis volutpat porttitor ut sed risus blandit egestas. Turpis nunc sit nunc pretium. Faucibus malesuada praesent non magna.
          </p>

          {[
            "Quality Control System",
            "Building Quality Industrial",
            "Awards Winning Company",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <h1 className="font-semibold text-black">{item}</h1>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img src={a1} alt="Timeline Visual" className="rounded shadow-lg" />
        </div>
      </motion.div>
    </div>
  );
}
