import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import a11 from "../../assets/Seltiger/product11.jpg";
import a1 from "../../assets/Seltiger/product1.png";
import a2 from "../../assets/Seltiger/product2.jpg";
import a3 from "../../assets/Seltiger/product3.jpg";
import a4 from "../../assets/Seltiger/product4.jpg";
import a5 from "../../assets/Seltiger/product5.jpg";
import { ArrowRight, X } from "lucide-react";

export default function Products() {
  const sectionRef = useRef(null);
  const detailRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.2 });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      img: a11,
      title: "TMT BARS",
      tagline: "Flexible in Form, Unbreakable in Strength",
      desc: "Whether it's a massive skyscraper, a sturdy bridge, or the base of a house, S-E-L Tiger provides steel that is strong under strain, adaptable in its uses, and lasting over time. TMT: Crafted with precision and supported by state-of-the-art technology, S-E-L Tiger TMT Bars are relied upon throughout India for constructing everything from residences to roadways, tall buildings to substantial infrastructure. Designed for superiority, S-E-L Tiger serves as the steel foundation for India's advancement.",
      details: {
        subtitle: "Flexible in Form, Unbreakable in Strength",
        description:
          "Whether it's a massive skyscraper, a sturdy bridge, or the base of a house, S-E-L Tiger provides steel that is strong under strain, adaptable in its uses, and lasting over time. TMT: Crafted with precision and supported by state-of-the-art technology, S-E-L Tiger TMT Bars are relied upon throughout India for constructing everything from residences to roadways, tall buildings to substantial infrastructure. Designed for superiority, S-E-L Tiger serves as the steel foundation for India's advancement.",
        features: [
          {
            name: "Earthquake Safety",
            conventional: "Brittle, snaps under stress",
            tiger: "Bends up to 18% without breaking",
          },
          {
            name: "Corrosion",
            conventional: "Prone to rust in 5–7 years",
            tiger: "Fe-550D grade resists over 50 years",
          },
          {
            name: "Thermal Safety",
            conventional: "Weakens at 300°C",
            tiger: "Withstands up to 600°C",
          },
        ],
        applications: [
          "✅ Versatile Applications: Used in residential, commercial, industrial, and infrastructure projects.",
          "🏗 Wide Use Cases: Single-family homes, multi-story apartments, office buildings, manufacturing units, bridges, highways, metro systems.",
          "💪 High Strength & Durability: Made from Fe-550D grade, suited for tough environments.",
          "🔗 Superior Bonding: Special rib pattern ensures strong grip with concrete.",
          "🌊 Corrosion Resistance: Ideal for coastal and humid areas.",
          "🔥 Fire & Earthquake Resistant: Withstands heat and seismic events.",
          "🛠 Preferred by Professionals: Trusted by engineers and builders across India.",
        ],
        certifications: {
          compliance: [
            "ISO 9001:2015 – Quality Management System",
            "ISO 14001:2015 – Environmental Management System",
            "ISO 45001:2018 – Occupational Health & Safety Management",
          ],
          indianStandards: [
            "IS 1786:2008 – High Strength Deformed Steel Bars for Concrete Reinforcement",
            "IS 2062:2011 – Standards for Structural Steel",
            "IS 2830:2012 – Standards for Carbon Steel Billets",
          ],
          sustainability: [
            "GreenPro Certification (CII) – Environmentally sustainable product",
            "NABL Accredited Labs (ISO/IEC 17025:2017) – Reliable material testing",
          ],
        },
        approvals: {
          publicWorks: [
            "PWD Madhya Pradesh",
            "PWD West Bengal",
            "PWD Assam (Roads and Buildings)",
            "PWD Manipur",
            "PWD Odisha",
            "PWD Uttar Pradesh",
            "General PWD",
          ],
          housing: [
            "Housing Board Rajasthan",
            "AP Housing",
            "PHED",
            "RWSS",
            "OWSSB",
          ],
          infraAuthorities: [
            "NHAI (National Highways Authority of India)",
            "RDSO (Research Designs & Standards Org.)",
            "Bridge & Roof Ltd.",
            "AAI (Airports Authority of India)",
          ],
          waterBoards: ["Jal Nigam Uttarakhand", "Jal Nigam Madhya Pradesh"],
          localBodies: [
            "BMC (Brihanmumbai Municipal Corporation)",
            "Zilla Parishad Angul",
            "BRDCUL",
            "PTCU",
          ],
          privateFirms: ["Toyo Engineering India Limited"],
        },
        calculator: {
          heading: "TMT Bar Calculator",
          note: "How much steel does your 2BHK need?",
          example:
            "Example: Plot Area: 1000 sq. ft → Recommended: 1.5 tons of Tiger Fe-500",
          buttonLabel: "Calculate Your Requirement",
        },
      },
    },
    {
      img: a2,
      title: "SEL Tiger Structural Steel",
      tagline: "The Backbone of India's Skyline",
      desc: "From stadiums to skyscrapers, Tiger Structural Steel is the unseen force behind India's most ambitious projects.",
      details: {
        subtitle: "The Backbone of India's Skyline",
        description:
          "From stadiums to skyscrapers, Tiger Structural Steel is the unseen force behind India's most ambitious projects.",
        grades: [
          {
            grade: "TIG-SS-500",
            sku: "TIG-SS-500-6M",
            yieldStrength: "500 MPa",
            applications: [
              "High-rise building frames",
              "Stadium roofs",
              "Railway platforms",
            ],
            idealFor: "Projects needing balance of strength & cost efficiency",
          },
          {
            grade: "TIG-SS-550",
            sku: "TIG-SS-550-8M",
            yieldStrength: "550 MPa",
            applications: [
              "Pre-engineered buildings (PEB)",
              "Airport hangars",
              "Warehouse structures",
            ],
            idealFor: "Rapid construction with pre-fabricated components",
          },
          {
            grade: "TIG-SS-600",
            sku: "TIG-SS-600-12M",
            yieldStrength: "600 MPa",
            applications: [
              "Bridges & flyovers",
              "Industrial gantries",
              "Offshore oil rigs",
            ],
            idealFor: "Extreme load-bearing & seismic zones",
          },
          {
            grade: "TIG-SS-450L",
            sku: "TIG-SS-450L-6M",
            yieldStrength: "450 MPa",
            applications: [
              "Low-rise residential",
              "Shopping complexes",
              "Solar farm mounts",
            ],
            idealFor: "Budget-friendly projects without compromising safety",
          },
        ],
      },
    },
    {
      img: a3,
      title: "SEL Tiger Wire Rod",
      tagline: "Strength Woven into Every Strand",
      desc: "When a single wire determines the safety of a suspension bridge or the durability of a pre-stressed concrete slab, only Tiger Wire Rod delivers zero-defect reliability. Engineered for high tensile strength, exceptional ductility, and flawless surface finish, our wire rods are trusted across sectors from power grids to precision agriculture where quality cannot be compromised.",
      details: {
        subtitle: "Strength Woven into Every Strand",
        description:
          "When a single wire determines the safety of a suspension bridge or the durability of a pre-stressed concrete slab, only Tiger Wire Rod delivers zero-defect reliability. Engineered for high tensile strength, exceptional ductility, and flawless surface finish, our wire rods are trusted across sectors from power grids to precision agriculture where quality cannot be compromised.",
        applications: [
          {
            sector: "🏗 Construction",
            areas: [
              {
                name: "Pre-stressed Concrete",
                description:
                  "High-tensile wires for structural reinforcement in bridges, buildings, etc.",
              },
              {
                name: "Mesh Reinforcement",
                description:
                  "Used in welded wire mesh for concrete slabs and walls.",
              },
              {
                name: "Binding and Tying",
                description:
                  "Used as binding wire in construction joints and rebar placements.",
              },
            ],
          },
          {
            sector: "🔌 Utilities",
            areas: [
              {
                name: "Electrical Wiring",
                description:
                  "Suitable for conductors after drawing into fine wire.",
              },
              {
                name: "Fencing",
                description: "Ideal for chain-link fencing and barbed wires.",
              },
              {
                name: "Fasteners & Wire Nails",
                description:
                  "Used in manufacturing bolts, nuts, nails, and general hardware.",
              },
            ],
          },
          {
            sector: "🚜 Agriculture",
            areas: [
              {
                name: "Vineyard Trellises",
                description: "Supports grapevines in vineyards.",
              },
              {
                name: "Greenhouse Structures",
                description: "Structural support wires for polyhouse frames.",
              },
              {
                name: "Crop Support Systems",
                description:
                  "Used in vertical/horizontal crop support for better yield and stability.",
              },
            ],
          },
        ],
        skus: [
          {
            diameter: "5.5 mm",
            grade: "SAE 1006 / 1008",
            coilWeight: "1.8 – 2.2 MT",
            application: "Wire drawing, fasteners",
          },
          {
            diameter: "6 mm",
            grade: "SAE 1008 / 1010",
            coilWeight: "1.8 – 2.2 MT",
            application: "Construction, agriculture",
          },
          {
            diameter: "6.5 mm",
            grade: "SAE 1008 / 1010",
            coilWeight: "1.8 – 2.2 MT",
            application: "Pre-stressed concrete",
          },
          {
            diameter: "7 mm",
            grade: "SAE 1010 / 1012",
            coilWeight: "1.8 – 2.2 MT",
            application: "Wire mesh, fences",
          },
          {
            diameter: "8 mm",
            grade: "SAE 1012 / 1015",
            coilWeight: "1.8 – 2.2 MT",
            application: "Structural use, rebars",
          },
          {
            diameter: "10 mm",
            grade: "SAE 1015 / 1020",
            coilWeight: "1.8 – 2.2 MT",
            application: "Heavy-duty applications",
          },
          {
            diameter: "12 mm",
            grade: "SAE 1020 / 1025",
            coilWeight: "1.8 – 2.2 MT",
            application: "Machinery & industrial",
          },
        ],
      },
    },
    {
      img: a4,
      title: "SEL Tiger Roofing Sheets",
      tagline: "Lightweight Armor for Your Shelter",
      desc: "When Cyclone Fani ravaged Odisha, rooftops were torn apart — except one. Tata Hospital remained unharmed, shielded by the enduring strength of Tiger Roofing Sheets. Engineered to resist wind, corrosion, and heat, SEL Tiger Roofing Sheets are trusted wherever weatherproofing meets performance",
      details: {
        subtitle: "Lightweight Armor for Your Shelter",
        description:
          "When Cyclone Fani ravaged Odisha, rooftops were torn apart — except one. Tata Hospital remained unharmed, shielded by the enduring strength of Tiger Roofing Sheets. Engineered to resist wind, corrosion, and heat, SEL Tiger Roofing Sheets are trusted wherever weatherproofing meets performance.",
        variants: [
          {
            variant: "ALU-70",
            bestFor: "Homes, Schools",
            benefit: "Hurricane-resistant, matte finish",
            sku: "TIG-RF-ALU70",
            thickness: "0.7 mm",
            width: "900 mm / 1050 mm",
          },
          {
            variant: "ALU-100",
            bestFor: "Factories, Warehouses",
            benefit: "Extra-wide panels, heat-reflective",
            sku: "TIG-RF-ALU100",
            thickness: "1.0 mm",
            width: "1000 mm / 1220 mm",
          },
          {
            variant: "SOLAR-READY",
            bestFor: "Solar Panel Mounting",
            benefit: "Pre-drilled for easy solar installation",
            sku: "TIG-RF-SOLAR",
            thickness: "0.9 mm",
            width: "1000 mm",
          },
        ],
      },
    },
    {
      img: a5,
      title: "SEL Tiger Foil",
      tagline: "Built to Guard. Designed to Last",
      desc: "From preserving hot meals to insulating megastructures, Tiger Foil is the silent guardian in every layer. Designed for zero contamination and maximum durability, it's trusted across industries where hygiene and protection are non-negotiable.",
      details: {
        subtitle: "Built to Guard. Designed to Last",
        description:
          "From preserving hot meals to insulating megastructures, Tiger Foil is the silent guardian in every layer. Designed for zero contamination and maximum durability, it's trusted across industries where hygiene and protection are non-negotiable.",
        specifications: [
          {
            sector: "🍱 Food Industry",
            application: "Hygienic Wrapping, Shelf-life Extension",
            benefit: "Non-toxic, food-safe coating",
            sku: "TIG-FL-FOOD",
            thickness: "9–12 microns",
            width: "300 mm / 450 mm",
          },
          {
            sector: "🏗 Construction",
            application: "Vapor Barrier, Thermal Insulation",
            benefit: "High reflectivity, tear-resistant",
            sku: "TIG-FL-CONST",
            thickness: "15–25 microns",
            width: "1000 mm / 1220 mm",
          },
          {
            sector: "📦 Logistics",
            application: "Moisture-Proof Export Packaging",
            benefit: "Anti-oxidation, corrosion-resistant",
            sku: "TIG-FL-LOG",
            thickness: "12–18 microns",
            width: "600 mm / 1000 mm",
          },
        ],
      },
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderApplications = (applications) => {
    if (!applications) return null;

    // Check if it's an array of strings (simple list)
    if (applications.every((item) => typeof item === "string")) {
      return (
        <ul className="space-y-2">
          {applications.map((app, i) => (
            <li key={i} className="text-gray-700">
              {app}
            </li>
          ))}
        </ul>
      );
    }

    // Handle array of objects with sector and areas (for wire rod card)
    return (
      <div className="mt-4">
        <div
          ref={sectionRef}
          className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <motion.p
            className="text-orange-500 text-lg font-semibold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            OUR PRODUCTS
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-black text-center mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore Our Products
          </motion.h1>

          {/* Grid for all cards with exact dimensions from image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
            {products.map((product, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-[400px] h-[538px] bg-white rounded-tl-[16px] rounded-br-[16px] overflow-hidden flex flex-col cursor-pointer border border-gray-200"
                onClick={() => handleProductClick(product)}
                whileHover={{ y: -5 }}
              >
                {/* Image with exact dimensions */}
                <div className="w-[400px] h-[344px] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="p-6 flex flex-col h-[194px]">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-black mb-3">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {product.desc}
                    </p>
                  </div>

                  {/* Read More button with exact dimensions */}
                  <button
                    className="w-[130px] h-[50px] flex items-center justify-center gap-3 bg-orange-500 text-white font-semibold rounded-[4px] px-4 py-3 mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                  >
                    <span>READ MORE</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white font-inter">
      {/* Products Grid Section */}
      <div
        ref={sectionRef}
        className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.p
          className="text-orange-500 text-lg font-semibold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          OUR PRODUCTS
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-black text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore Our Products
        </motion.h1>

        {/* First row with 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 justify-items-center">
          {products.slice(0, 3).map((product, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-[400px] h-[538px] bg-white rounded-tl-[16px] rounded-br-[16px] overflow-hidden flex flex-col cursor-pointer border border-gray-200"
              onClick={() => setSelectedProduct(product)}
              whileHover={{ y: -5 }}
            >
              <div className="w-full h-[344px] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-black mb-3">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {product.desc}
                  </p>
                </div>
                <button
                  className="w-full h-[50px] flex items-center justify-start bg-transparent text-black font-semibold px-4 py-3 mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                >
                  <span>READ MORE</span>
                  <ArrowRight size={20} className="text-orange-500 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row with 2 centered cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center max-w-[850px] mx-auto">
          {products.slice(3).map((product, i) => (
            <motion.div
              key={i + 3}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-[400px] h-[538px] bg-white rounded-tl-[16px] rounded-br-[16px] overflow-hidden flex flex-col cursor-pointer border border-gray-200"
              onClick={() => setSelectedProduct(product)}
              whileHover={{ y: -5 }}
            >
              <div className="w-full h-[344px] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-black mb-3">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {product.desc}
                  </p>
                </div>
                <button
                  className="w-full h-[50px] flex items-center justify-start bg-transparent text-black font-semibold px-4 py-3 mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                >
                  <span>READ MORE</span>
                  <ArrowRight size={20} className="text-orange-500 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Product Detail Section */}
      {selectedProduct && (
        <div
          ref={detailRef}
          className="bg-white border-t border-gray-200 font-inter"
        >
          {/* Close button */}
          <div className="flex justify-end p-4 sticky top-0 z-10 bg-white">
            <button
              onClick={closeDetails}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <X size={20} />
              <span className="text-sm md:text-base">Close</span>
            </button>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Half - Image with Centered Text */}
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-[400px] lg:h-auto">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                >
                  {selectedProduct.title}
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg mt-2"
                >
                  {selectedProduct.details.subtitle}
                </motion.p>
              </div>
            </div>

            {/* Right Half - Text and Table */}
            <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 text-left">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl font-bold text-black"
              >
                {selectedProduct.title}
              </motion.h1>

              <motion.h3
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-orange-500 text-xl font-semibold mt-2"
              >
                {selectedProduct.details.subtitle}
              </motion.h3>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-700 mt-4"
              >
                {selectedProduct.details.description}
              </motion.p>

              {/* Only show comparison table if features exist */}
              {selectedProduct.details.features && (
                <>
                  <hr className="my-6 border-gray-300" />
                  <div className="overflow-x-auto">
                    <motion.table
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="min-w-full text-left border-collapse"
                    >
                      <thead>
                        <tr className="bg-gray-100 text-gray-800">
                          <th className="px-4 py-3 border-b border-gray-300">
                            FEATURE
                          </th>
                          <th className="px-4 py-3 border-b border-gray-300">
                            CONVENTIONAL
                          </th>
                          <th className="px-4 py-3 border-b border-gray-300">
                            TIGER {selectedProduct.title.split(" ").pop()}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-gray-700">
                        {selectedProduct.details.features.map((feature, i) => (
                          <tr key={i} className="border-b border-gray-200">
                            <td className="px-4 py-3">{feature.name}</td>
                            <td className="px-4 py-3">
                              {feature.conventional}
                            </td>
                            <td className="px-4 py-3 font-semibold text-orange-600">
                              {feature.tiger}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </motion.table>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="p-4 sm:p-6 md:p-8 bg-gray-50">
            {/* Applications */}
            {selectedProduct.details.applications && (
              <motion.div
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-black mb-3 sm:mb-4">
                  Applications
                </h3>
                {renderApplications(selectedProduct.details.applications)}
              </motion.div>
            )}

            {/* Variants/Grades/SKUs */}
            {(selectedProduct.details.variants ||
              selectedProduct.details.grades ||
              selectedProduct.details.skus) && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">
                  {selectedProduct.details.variants
                    ? "Variants"
                    : selectedProduct.details.grades
                    ? "Grades"
                    : "Available SKUs"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {(
                    selectedProduct.details.variants ||
                    selectedProduct.details.grades ||
                    selectedProduct.details.skus
                  ).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      {item.variant && (
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-orange-600 text-lg">
                            {item.variant}
                          </h4>
                          {item.sku && (
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                              {item.sku}
                            </span>
                          )}
                        </div>
                      )}
                      {item.grade && (
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-orange-600 text-lg">
                            {item.grade}
                          </h4>
                          {item.sku && (
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                              {item.sku}
                            </span>
                          )}
                        </div>
                      )}
                      {item.diameter && (
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-orange-600 text-lg">
                            {item.diameter}
                          </h4>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            {item.grade}
                          </span>
                        </div>
                      )}

                      {item.bestFor && (
                        <div className="mt-3 flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>{item.bestFor}</span>
                        </div>
                      )}

                      {item.yieldStrength && (
                        <div className="mt-2 flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                          <span>Yield: {item.yieldStrength}</span>
                        </div>
                      )}

                      {item.thickness && (
                        <div className="mt-2 flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                          <span>Thickness: {item.thickness}</span>
                        </div>
                      )}

                      {item.width && (
                        <div className="mt-2 flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                            />
                          </svg>
                          <span>Width: {item.width}</span>
                        </div>
                      )}

                      {item.coilWeight && (
                        <div className="mt-2 flex items-center text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            />
                          </svg>
                          <span>Coil: {item.coilWeight}</span>
                        </div>
                      )}

                      {item.application && (
                        <div className="mt-2 flex items-start text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                          <span>Use: {item.application}</span>
                        </div>
                      )}

                      {item.applications && (
                        <div className="mt-3">
                          <p className="font-semibold text-sm mb-1">
                            Applications:
                          </p>
                          <ul className="list-disc list-inside text-xs space-y-1">
                            {item.applications.map((app, j) => (
                              <li key={j} className="text-gray-600">
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Specifications */}
            {selectedProduct.details.specifications && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">
                  Specifications
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Sector</th>
                        <th className="px-4 py-2 border">Application</th>
                        <th className="px-4 py-2 border">Benefit</th>
                        <th className="px-4 py-2 border">SKU</th>
                        <th className="px-4 py-2 border">Thickness</th>
                        <th className="px-4 py-2 border">Width</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProduct.details.specifications.map((spec, i) => (
                        <tr key={i} className="border-b">
                          <td className="px-4 py-2 border">{spec.sector}</td>
                          <td className="px-4 py-2 border">
                            {spec.application}
                          </td>
                          <td className="px-4 py-2 border">{spec.benefit}</td>
                          <td className="px-4 py-2 border">{spec.sku}</td>
                          <td className="px-4 py-2 border">{spec.thickness}</td>
                          <td className="px-4 py-2 border">{spec.width}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Certifications */}
            {selectedProduct.details.certifications && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">
                  Certifications & Compliance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-orange-600 mb-2">
                      Compliance
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.certifications.compliance.map(
                        (item, i) => (
                          <li key={i} className="text-gray-700">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-orange-600 mb-2">
                      Indian Standards
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.certifications.indianStandards.map(
                        (item, i) => (
                          <li key={i} className="text-gray-700">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-orange-600 mb-2">
                      Sustainability
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.certifications.sustainability.map(
                        (item, i) => (
                          <li key={i} className="text-gray-700">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Approvals */}
            {selectedProduct.details.approvals && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">Approvals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedProduct.details.approvals.publicWorks &&
                    selectedProduct.details.approvals.publicWorks.length >
                      0 && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600 mb-2">
                          Public Works Departments
                        </h4>
                        <ul className="space-y-2">
                          {selectedProduct.details.approvals.publicWorks.map(
                            (item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  {selectedProduct.details.approvals.housing &&
                    selectedProduct.details.approvals.housing.length > 0 && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600 mb-2">
                          Housing Boards
                        </h4>
                        <ul className="space-y-2">
                          {selectedProduct.details.approvals.housing.map(
                            (item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  {selectedProduct.details.approvals.infraAuthorities &&
                    selectedProduct.details.approvals.infraAuthorities.length >
                      0 && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600 mb-2">
                          Infrastructure Authorities
                        </h4>
                        <ul className="space-y-2">
                          {selectedProduct.details.approvals.infraAuthorities.map(
                            (item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  {selectedProduct.details.approvals.waterBoards &&
                    selectedProduct.details.approvals.waterBoards.length >
                      0 && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600 mb-2">
                          Water Boards
                        </h4>
                        <ul className="space-y-2">
                          {selectedProduct.details.approvals.waterBoards.map(
                            (item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  {selectedProduct.details.approvals.localBodies &&
                    selectedProduct.details.approvals.localBodies.length >
                      0 && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600 mb-2">
                          Local Bodies
                        </h4>
                        <ul className="space-y-2">
                          {selectedProduct.details.approvals.localBodies.map(
                            (item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  {selectedProduct.details.approvals.privateFirms &&
                    selectedProduct.details.approvals.privateFirms.length >
                      0 && (
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="font-bold text-orange-600 mb-2">
                          Private Firms
                        </h4>
                        <ul className="space-y-2">
                          {selectedProduct.details.approvals.privateFirms.map(
                            (item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </div>
              </motion.div>
            )}

            {/* Calculator */}
            {selectedProduct.details.calculator && (
              <motion.div
                className="bg-orange-50 p-6 rounded-lg border border-orange-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <h3 className="text-xl font-bold text-black mb-2">
                  {selectedProduct.details.calculator.heading}
                </h3>
                <p className="text-gray-700 mb-2">
                  {selectedProduct.details.calculator.note}
                </p>
                <p className="text-sm text-gray-600 mb-4 italic">
                  {selectedProduct.details.calculator.example}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                  {selectedProduct.details.calculator.buttonLabel}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
