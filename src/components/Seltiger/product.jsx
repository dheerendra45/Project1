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
      desc: "Whether it's a skyscraper, bridge, or home, S-E-L Tiger TMT Bars are strong under strain, adaptable in use, and engineered to last.",
      details: {
        subtitle: "Crafted with Precision, Supported by State-of-the-Art Technology",
        highlights: "STEEL THAT BENDS, BUT NEVER BREAKS",
        description:
          "S-E-L Tiger TMT Bars are relied upon throughout India for constructing everything from residences to roadways, tall buildings to major infrastructure. Made from Fe-550D grade, these bars offer unmatched strength, earthquake resistance, corrosion resistance for over 50 years, and endurance under high temperatures up to 600°C.",
        features: [
          {
            name: "Earthquake Safety",
            conventional: "Brittle, snaps under stress",
            tiger: "Bends up to 18% without breaking"
          },
          {
            name: "Corrosion",
            conventional: "Prone to rust in 5–7 years",
            tiger: "Fe-550D grade resists over 50 years"
          },
          {
            name: "Thermal Safety",
            conventional: "Weakens at 300°C",
            tiger: "Withstands up to 600°C"
          }
        ],
        applications: [
          "✅ Versatile Applications: Used in residential, commercial, industrial, and infrastructure projects.",
          "🏗 Wide Use Cases: Single-family homes, multi-story apartments, office buildings, manufacturing units, bridges, highways, metro systems.",
          "💪 High Strength & Durability: Made from Fe-550D grade, suited for tough environments.",
          "🔗 Superior Bonding: Special rib pattern ensures strong grip with concrete.",
          "🌊 Corrosion Resistance: Ideal for coastal and humid areas.",
          "🔥 Fire & Earthquake Resistant: Withstands heat and seismic events.",
          "🛠 Preferred by Professionals: Trusted by engineers and builders across India."
        ],
        certifications: {
          compliance: [
            "ISO 9001:2015 – Quality Management System",
            "ISO 14001:2015 – Environmental Management System",
            "ISO 45001:2018 – Occupational Health & Safety Management"
          ],
          indianStandards: [
            "IS 1786:2008 – High Strength Deformed Steel Bars for Concrete Reinforcement",
            "IS 2062:2011 – Standards for Structural Steel",
            "IS 2830:2012 – Standards for Carbon Steel Billets"
          ],
          sustainability: [
            "GreenPro Certification (CII) – Environmentally sustainable product",
            "NABL Accredited Labs (ISO/IEC 17025:2017) – Reliable material testing"
          ]
        },
        approvals: {
          publicWorks: [
            "PWD Madhya Pradesh",
            "PWD West Bengal",
            "PWD Assam (Roads and Buildings)",
            "PWD Manipur",
            "PWD Odisha",
            "PWD Uttar Pradesh",
            "General PWD"
          ],
          housing: [
            "Housing Board Rajasthan",
            "AP Housing",
            "PHED",
            "RWSS",
            "OWSSB"
          ],
          infraAuthorities: [
            "NHAI (National Highways Authority of India)",
            "RDSO (Research Designs & Standards Org.)",
            "Bridge & Roof Ltd.",
            "AAI (Airports Authority of India)"
          ],
          waterBoards: [
            "Jal Nigam Uttarakhand",
            "Jal Nigam Madhya Pradesh"
          ],
          localBodies: [
            "BMC (Brihanmumbai Municipal Corporation)",
            "Zilla Parishad Angul",
            "BRDCUL",
            "PTCU"
          ],
          privateFirms: [
            "Toyo Engineering India Limited"
          ]
        },
        calculator: {
          heading: "TMT Bar Calculator",
          note: "How much steel does your 2BHK need?",
          example: "Example: Plot Area: 1000 sq. ft → Recommended: 1.5 tons of Tiger Fe-500",
          buttonLabel: "Calculate Your Requirement"
        }
      }
    },
    {
      img: a2,
      title: "SEL Tiger Structural Steel",
      tagline: "The Backbone of India's Skyline",
      desc: "From stadiums to skyscrapers, Tiger Structural Steel is the unseen force behind India's most ambitious projects.",
      details: {
        subtitle: "From stadiums to skyscrapers",
        highlights: "HIGH STRENGTH STRUCTURAL GRADES",
        description:
          "Available in grades from TIG-SS-450L to TIG-SS-600, SEL Tiger Structural Steel covers a wide variety of structural needs — from low-rise buildings to offshore oil rigs. These grades are engineered for different environments, including seismic zones, industrial applications, and cost-efficient constructions.",
        features: [
          {
            name: "Yield Strength (TIG-SS-500)",
            conventional: "< 500 MPa",
            tiger: "500 MPa — for high-rise frames"
          },
          {
            name: "Yield Strength (TIG-SS-600)",
            conventional: "< 600 MPa",
            tiger: "600 MPa — for bridges and gantries"
          },
          {
            name: "Yield Strength (TIG-SS-450L)",
            conventional: "< 450 MPa",
            tiger: "450 MPa — for budget-friendly projects"
          }
        ],
        grades: [
          {
            grade: "TIG-SS-500",
            sku: "TIG-SS-500-6M",
            yieldStrength: "500 MPa",
            applications: [
              "High-rise building frames",
              "Stadium roofs",
              "Railway platforms"
            ],
            idealFor: "Projects needing balance of strength & cost efficiency"
          },
          {
            grade: "TIG-SS-550",
            sku: "TIG-SS-550-8M",
            yieldStrength: "550 MPa",
            applications: [
              "Pre-engineered buildings (PEB)",
              "Airport hangars",
              "Warehouse structures"
            ],
            idealFor: "Rapid construction with pre-fabricated components"
          },
          {
            grade: "TIG-SS-600",
            sku: "TIG-SS-600-12M",
            yieldStrength: "600 MPa",
            applications: [
              "Bridges & flyovers",
              "Industrial gantries",
              "Offshore oil rigs"
            ],
            idealFor: "Extreme load-bearing & seismic zones"
          },
          {
            grade: "TIG-SS-450L",
            sku: "TIG-SS-450L-6M",
            yieldStrength: "450 MPa",
            applications: [
              "Low-rise residential",
              "Shopping complexes",
              "Solar farm mounts"
            ],
            idealFor: "Budget-friendly projects without compromising safety"
          }
        ]
      }
    },
    {
      img: a3,
      title: "SEL Tiger Wire Rod",
      tagline: "Strength Woven into Every Strand",
      desc: "Trusted across sectors from power grids to agriculture. Zero-defect reliability and high tensile strength.",
      details: {
        subtitle: "Used from pre-stressed concrete to electrical wiring",
        highlights: "SEAMLESS IN EVERY STRAND",
        description:
          "When a single wire determines the safety of a suspension bridge or the durability of a pre-stressed concrete slab, only Tiger Wire Rod delivers zero-defect reliability. Engineered for high tensile strength, exceptional ductility, and flawless surface finish, our wire rods are trusted across sectors from power grids to precision agriculture where quality cannot be compromised.",
        features: [
          {
            name: "Tensile Strength",
            conventional: "Standard ratings",
            tiger: "High tensile strength across all diameters"
          },
          {
            name: "Surface Quality",
            conventional: "Inconsistent",
            tiger: "Flawless finish, zero-defect standards"
          },
          {
            name: "Applications",
            conventional: "Basic use in binding",
            tiger: "Construction, agriculture, utilities"
          }
        ],
        applications: [
          {
            sector: "🏗 Construction",
            areas: [
              {
                name: "Pre-stressed Concrete",
                description: "High-tensile wires for structural reinforcement in bridges, buildings, etc."
              },
              {
                name: "Mesh Reinforcement",
                description: "Used in welded wire mesh for concrete slabs and walls."
              },
              {
                name: "Binding and Tying",
                description: "Used as binding wire in construction joints and rebar placements."
              }
            ]
          },
          {
            sector: "🔌 Utilities",
            areas: [
              {
                name: "Electrical Wiring",
                description: "Suitable for conductors after drawing into fine wire."
              },
              {
                name: "Fencing",
                description: "Ideal for chain-link fencing and barbed wires."
              },
              {
                name: "Fasteners & Wire Nails",
                description: "Used in manufacturing bolts, nuts, nails, and general hardware."
              }
            ]
          },
          {
            sector: "🚜 Agriculture",
            areas: [
              {
                name: "Vineyard Trellises",
                description: "Supports grapevines in vineyards."
              },
              {
                name: "Greenhouse Structures",
                description: "Structural support wires for polyhouse frames."
              },
              {
                name: "Crop Support Systems",
                description: "Used in vertical/horizontal crop support for better yield and stability."
              }
            ]
          }
        ],
        skus: [
          {
            diameter: "5.5 mm",
            grade: "SAE 1006 / 1008",
            coilWeight: "1.8 – 2.2 MT",
            application: "Wire drawing, fasteners"
          },
          {
            diameter: "6 mm",
            grade: "SAE 1008 / 1010",
            coilWeight: "1.8 – 2.2 MT",
            application: "Construction, agriculture"
          },
          {
            diameter: "6.5 mm",
            grade: "SAE 1008 / 1010",
            coilWeight: "1.8 – 2.2 MT",
            application: "Pre-stressed concrete"
          },
          {
            diameter: "7 mm",
            grade: "SAE 1010 / 1012",
            coilWeight: "1.8 – 2.2 MT",
            application: "Wire mesh, fences"
          },
          {
            diameter: "8 mm",
            grade: "SAE 1012 / 1015",
            coilWeight: "1.8 – 2.2 MT",
            application: "Structural use, rebars"
          },
          {
            diameter: "10 mm",
            grade: "SAE 1015 / 1020",
            coilWeight: "1.8 – 2.2 MT",
            application: "Heavy-duty applications"
          },
          {
            diameter: "12 mm",
            grade: "SAE 1020 / 1025",
            coilWeight: "1.8 – 2.2 MT",
            application: "Machinery & industrial"
          }
        ]
      }
    },
    {
      img: a4,
      title: "SEL Tiger Roofing Sheets",
      tagline: "Lightweight Armor for Your Shelter",
      desc: "Engineered to resist wind, corrosion, and heat. Trusted in harsh environments.",
      details: {
        subtitle: "Protecting homes to hospitals",
        highlights: "WIND, RAIN & HEAT RESISTANT",
        description:
          "When Cyclone Fani ravaged Odisha, rooftops were torn apart — except one. Tata Hospital remained unharmed, shielded by the enduring strength of Tiger Roofing Sheets. Engineered to resist wind, corrosion, and heat, SEL Tiger Roofing Sheets are trusted wherever weatherproofing meets performance.",
        features: [
          {
            name: "Variants",
            conventional: "Basic metal sheets",
            tiger: "ALU-70, ALU-100, SOLAR-READY"
          },
          {
            name: "Durability",
            conventional: "Moderate resistance",
            tiger: "Tested during Cyclone Fani — survived harshest storms"
          },
          {
            name: "Use Cases",
            conventional: "Limited to sheds",
            tiger: "Homes, hospitals, solar installations"
          }
        ],
        variants: [
          {
            variant: "ALU-70",
            bestFor: "Homes, Schools",
            benefit: "Hurricane-resistant, matte finish",
            sku: "TIG-RF-ALU70",
            thickness: "0.7 mm",
            width: "900 mm / 1050 mm"
          },
          {
            variant: "ALU-100",
            bestFor: "Factories, Warehouses",
            benefit: "Extra-wide panels, heat-reflective",
            sku: "TIG-RF-ALU100",
            thickness: "1.0 mm",
            width: "1000 mm / 1220 mm"
          },
          {
            variant: "SOLAR-READY",
            bestFor: "Solar Panel Mounting",
            benefit: "Pre-drilled for easy solar installation",
            sku: "TIG-RF-SOLAR",
            thickness: "0.9 mm",
            width: "1000 mm"
          }
        ]
      }
    },
    {
      img: a5,
      title: "SEL Tiger Foil",
      tagline: "Built to Guard. Designed to Last",
      desc: "From preserving hot meals to insulating megastructures, Tiger Foil is the silent guardian in every layer. Designed for zero contamination and maximum durability, it's trusted across industries where hygiene and protection are non-negotiable.",
      details: {
        subtitle: "Purity and protection for industry leaders",
        highlights: "GUARDING FROM KITCHEN TO CONSTRUCTION",
        description:
          "Available in food-grade, construction barrier, and logistics packaging variants. Certified non-toxic and corrosion resistant. From preserving hot meals to insulating megastructures, Tiger Foil is the silent guardian in every layer. Designed for zero contamination and maximum durability, it's trusted across industries where hygiene and protection are non-negotiable.",
        features: [
          {
            name: "Thickness Range",
            conventional: "Standard foil grades",
            tiger: "9–25 microns across sectors"
          },
          {
            name: "Applications",
            conventional: "Limited food usage",
            tiger: "Food, vapor barrier, packaging"
          },
          {
            name: "Certifications",
            conventional: "Uncertified",
            tiger: "GreenPro, NABL, ISO-compliant"
          }
        ],
        specifications: [
          {
            sector: "🍱 Food Industry",
            application: "Hygienic Wrapping, Shelf-life Extension",
            benefit: "Non-toxic, food-safe coating",
            sku: "TIG-FL-FOOD",
            thickness: "9–12 microns",
            width: "300 mm / 450 mm"
          },
          {
            sector: "🏗 Construction",
            application: "Vapor Barrier, Thermal Insulation",
            benefit: "High reflectivity, tear-resistant",
            sku: "TIG-FL-CONST",
            thickness: "15–25 microns",
            width: "1000 mm / 1220 mm"
          },
          {
            sector: "📦 Logistics",
            application: "Moisture-Proof Export Packaging",
            benefit: "Anti-oxidation, corrosion-resistant",
            sku: "TIG-FL-LOG",
            thickness: "12–18 microns",
            width: "600 mm / 1000 mm"
          }
        ]
      }
    }
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

  return (
    <div className="bg-white">
      {/* Products Grid Section */}
      <div ref={sectionRef} className="py-20 px-4 sm:px-8">
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

        {/* Grid for first 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.slice(0, 3).map((product, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-gray-100 rounded-xl overflow-hidden flex flex-col h-full w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product)}
              whileHover={{ y: -5 }}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold text-black mb-2">{product.title}</h2>
                  <p className="text-sm italic text-orange-600 mb-2">{product.tagline}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-orange-500 font-semibold">
                  <span>READ MORE</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Last 2 cards: centered with reduced gap */}
        <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8 mt-8 w-full">
          {products.slice(3).map((product, i) => (
            <motion.div
              key={i + 3}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-gray-100 rounded-xl overflow-hidden flex flex-col h-full w-full max-w-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product)}
              whileHover={{ y: -5 }}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold text-black mb-2">{product.title}</h2>
                  <p className="text-sm italic text-orange-600 mb-2">{product.tagline}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-orange-500 font-semibold">
                  <span>READ MORE</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Section */}
      {selectedProduct && (
        <div ref={detailRef} className="bg-white border-t border-gray-200">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={closeDetails}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <X size={20} />
              <span>Close</span>
            </button>
          </div>
          
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Half - Image with Centered Text */}
            <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
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
                  className="text-3xl sm:text-4xl font-bold"
                >
                  {selectedProduct.title}
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg mt-2"
                >
                  {selectedProduct.details.subtitle}
                </motion.p>
              </div>
            </div>

            {/* Right Half - Text and Table */}
            <div className="w-full md:w-1/2 p-8 text-left">
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
                {selectedProduct.details.highlights}
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

              {/* Gray Horizontal Line */}
              <hr className="my-6 border-gray-300" />

              {/* Comparison Table */}
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
                      <th className="px-4 py-3 border-b border-gray-300">FEATURE</th>
                      <th className="px-4 py-3 border-b border-gray-300">CONVENTIONAL</th>
                      <th className="px-4 py-3 border-b border-gray-300">TIGER {selectedProduct.title.split(' ').pop()}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    {selectedProduct.details.features.map((feature, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="px-4 py-3">{feature.name}</td>
                        <td className="px-4 py-3">{feature.conventional}</td>
                        <td className="px-4 py-3 font-semibold text-orange-600">{feature.tiger}</td>
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
              </div>
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="p-8 bg-gray-50">
            {/* Applications */}
            {selectedProduct.details.applications && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">Applications</h3>
                {Array.isArray(selectedProduct.details.applications) ? (
                  <ul className="space-y-2">
                    {selectedProduct.details.applications.map((app, i) => (
                      <li key={i} className="text-gray-700">{app}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-6">
                    {selectedProduct.details.applications.map((sector, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-lg">{sector.sector}</h4>
                        <div className="mt-2 space-y-4">
                          {sector.areas.map((area, j) => (
                            <div key={j} className="pl-4">
                              <p className="font-medium">{area.name}</p>
                              <p className="text-gray-600">{area.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Variants/Grades/SKUs */}
            {(selectedProduct.details.variants || selectedProduct.details.grades || selectedProduct.details.skus) && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">
                  {selectedProduct.details.variants ? 'Variants' : 
                   selectedProduct.details.grades ? 'Grades' : 'Available SKUs'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(selectedProduct.details.variants || selectedProduct.details.grades || selectedProduct.details.skus).map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      {item.variant && <h4 className="font-bold text-orange-600">{item.variant}</h4>}
                      {item.grade && <h4 className="font-bold text-orange-600">{item.grade}</h4>}
                      {item.diameter && <h4 className="font-bold text-orange-600">{item.diameter}</h4>}
                      
                      {item.bestFor && <p className="mt-1"><span className="font-semibold">Best for:</span> {item.bestFor}</p>}
                      {item.yieldStrength && <p className="mt-1"><span className="font-semibold">Yield Strength:</span> {item.yieldStrength}</p>}
                      {item.grade && <p className="mt-1"><span className="font-semibold">Grade:</span> {item.grade}</p>}
                      
                      {item.benefit && <p className="mt-1"><span className="font-semibold">Benefit:</span> {item.benefit}</p>}
                      {item.coilWeight && <p className="mt-1"><span className="font-semibold">Coil Weight:</span> {item.coilWeight}</p>}
                      {item.thickness && <p className="mt-1"><span className="font-semibold">Thickness:</span> {item.thickness}</p>}
                      {item.width && <p className="mt-1"><span className="font-semibold">Width:</span> {item.width}</p>}
                      {item.sku && <p className="mt-1"><span className="font-semibold">SKU:</span> {item.sku}</p>}
                      {item.application && <p className="mt-1"><span className="font-semibold">Application:</span> {item.application}</p>}
                      
                      {item.applications && (
                        <div className="mt-2">
                          <p className="font-semibold">Applications:</p>
                          <ul className="list-disc list-inside">
                            {item.applications.map((app, j) => (
                              <li key={j} className="text-sm">{app}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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
                <h3 className="text-xl font-bold text-black mb-4">Specifications</h3>
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
                          <td className="px-4 py-2 border">{spec.application}</td>
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
                <h3 className="text-xl font-bold text-black mb-4">Certifications & Compliance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-orange-600 mb-2">Compliance</h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.certifications.compliance.map((item, i) => (
                        <li key={i} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-orange-600 mb-2">Indian Standards</h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.certifications.indianStandards.map((item, i) => (
                        <li key={i} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-orange-600 mb-2">Sustainability</h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.certifications.sustainability.map((item, i) => (
                        <li key={i} className="text-gray-700">{item}</li>
                      ))}
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
                  {selectedProduct.details.approvals.publicWorks && selectedProduct.details.approvals.publicWorks.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-orange-600 mb-2">Public Works Departments</h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.approvals.publicWorks.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProduct.details.approvals.housing && selectedProduct.details.approvals.housing.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-orange-600 mb-2">Housing Boards</h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.approvals.housing.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProduct.details.approvals.infraAuthorities && selectedProduct.details.approvals.infraAuthorities.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-orange-600 mb-2">Infrastructure Authorities</h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.approvals.infraAuthorities.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProduct.details.approvals.waterBoards && selectedProduct.details.approvals.waterBoards.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-orange-600 mb-2">Water Boards</h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.approvals.waterBoards.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProduct.details.approvals.localBodies && selectedProduct.details.approvals.localBodies.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-orange-600 mb-2">Local Bodies</h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.approvals.localBodies.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProduct.details.approvals.privateFirms && selectedProduct.details.approvals.privateFirms.length > 0 && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-orange-600 mb-2">Private Firms</h4>
                      <ul className="space-y-2">
                        {selectedProduct.details.approvals.privateFirms.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
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
                <h3 className="text-xl font-bold text-black mb-2">{selectedProduct.details.calculator.heading}</h3>
                <p className="text-gray-700 mb-2">{selectedProduct.details.calculator.note}</p>
                <p className="text-sm text-gray-600 mb-4 italic">{selectedProduct.details.calculator.example}</p>
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