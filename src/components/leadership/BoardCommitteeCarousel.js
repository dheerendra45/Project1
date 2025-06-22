import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import a1 from "../../assets/leadership/a.png";

const sidebarOptions = [
  "BOARD OF DIRECTORS",
  "BOARD COMMITTEES",
  "CORPORATE",
  "EXECUTIVE DIRECTORS",
  "NON-EXECUTIVE DIRECTORS",
];

const directors = [
  { name: "Faucibus commodo", role: "CHAIRMAN & CHIEF EXECUTIVE OFFICER" },
  { name: "Pellentesque", role: "PRESIDENT & CHIEF OPERATING OFFICER" },
  { name: "Quisque congue", role: "PRESIDENT MINING & METALS" },
  { name: "Pellentesque", role: "PRESIDENT ENERGY" },
  { name: "Pellentesque", role: "PRESIDENT, NUCLEAR, SECURITY & ENVIRONMENTAL" },
  { name: "Scelerisque", role: "PRESIDENT, INFRASTRUCTURE" },
  { name: "Sit id in vestibulum", role: "PRESIDENT, MANUFACTURING & TECHNOLOGY" },
];

const corporate = [
  { name: "Consectetur", role: "CHIEF SUPPLY CHAIN OFFICER" },
  { name: "Non ullamcorper", role: "Chief Diversity & Inclusion Officer" },
  { name: "Tempor viverra", role: "President, Bechtel Enterprises" },
  { name: "Commodo hendrerit", role: "Manager, Corporate Affairs" },
  { name: "Vestibulum", role: "Manager, Corporate Business Development" },
  { name: "Vel pellentesque", role: "Chief Financial Officer" },
  { name: "Ullamcorper", role: "Manager, EPC Functions" },
  { name: "Suspendisse", role: "Managing Director, Australia" },
  { name: "Vestibulum", role: "Commercial Manager" },
  { name: "Pellentesque", role: "General Counsel" },
  { name: "Tempus habitasse", role: "President for Regions and Corporate Relations" },
  { name: "Ac nunc dictumst", role: "Chief Human Resources Officer" },
];

export default function X() {
  const [selected, setSelected] = useState("BOARD OF DIRECTORS");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const renderCard = (person, index, isLarge = false) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center gap-4 bg-white rounded-xl p-4 shadow-md ${
        isLarge ? "col-span-1" : ""
      }`}
    >
      <img
        src={a1}
        alt={person.name}
        className={`${
          isLarge ? "w-24 h-24" : "w-20 h-20"
        }  object-cover`}
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{person.name}</h2>
        <h4 className="text-orange-500 text-sm font-medium mt-1">{person.role}</h4>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 flex flex-col md:flex-row gap-10">
      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <div className="flex md:flex-col gap-4">
          {sidebarOptions.map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`px-6 py-2 rounded-full border transition-all font-medium text-sm ${
                selected === item
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 space-y-10" ref={sectionRef}>
        {selected === "BOARD OF DIRECTORS" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Board of DIRECTORS</h1>

            {/* Top 2 roles in same row */}
            <div className="grid md:grid-cols-2 gap-6">
              {renderCard(directors[0], 0, true)}
              {renderCard(directors[1], 1, true)}
            </div>

            {/* Remaining roles */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {directors.slice(2).map((person, index) =>
                renderCard(person, index + 2)
              )}
            </div>
          </>
        )}

        {selected === "CORPORATE" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Corporate</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporate.map((person, index) => renderCard(person, index))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
