import React from "react";
import sustainabilityHero from "../assets/tempSustainabilityPage/susbanner.jpg"; // download the actual hero image
import sustainability1 from "../assets/tempSustainabilityPage/susimg1.jpg";
import sustainability2 from "../assets/tempSustainabilityPage/susimg2.jpg";
import sustainability3 from "../assets/tempSustainabilityPage/susimg3.jpg";
import sec2iimg from "../assets/tempSustainabilityPage/sec2iimg.jpg";
import sec2iimg1 from "../assets/tempSustainabilityPage/sec2iimg1.jpg";
import tech2 from "../assets/tempSustainabilityPage/tech2.svg";
import img0 from "../assets/tempSustainabilityPage/image-0.jpg";
import img1 from "../assets/tempSustainabilityPage/image-1.jpg";
import img2 from "../assets/tempSustainabilityPage/image-2.jpg";
// import NavsectionSustainabilty from "./NavsectionSustainabilty";
import { motion } from "framer-motion";

export default function SustainAbilityPage() {
    const cards = [
    {
      icon: tech2,
      title: "Climate action",
      description:
        "We are transforming steel production with bold, tech-driven innovations to reduce our environmental footprint and lead low-carbon efforts.",
    },
    {
      icon: tech2,
      title: "Climate action governance",
      description:
        "Our robust governance framework ensures that every climate action is backed by accountability, transparency, and a focus on sustainability.",
    },
    {
      icon: tech2,
      title: "Climate scenario mapping",
      description:
        "By mapping climate risks and opportunities, we can anticipate challenges and forge a resilient, sustainable path forward.",
    },
    {
      icon: tech2,
      title: "Strategy ahead",
      description:
        "We are aiming for a 20% emissions reduction target by 2030 to 1.8tCO2/TCS 2021 as a baseline, taking meaningful steps towards a net-zero steel future.",
    },
  ];
    return (
        <div className="w-full">
            <div >

                {/* Hero Section */}
                <div
                    className="w-full h-screen bg-cover bg-center flex items-center justify-start px-8 md:px-20"
                    style={{ backgroundImage: `url(${sustainabilityHero})` }}
                >
                    <div className="text-white text-left w-1/2">
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1]">
                            Leading the future of Sustainable Steel Making
                        </h1>
                        <p className="mt-10 text-base md:text-lg leading-relaxed font-normal">
                            At AM/NS India, sustainability is not a choice. It is the only way forward.
                            We are committed to leading the change with India's cleanest steel mill,
                            cutting our carbon emissions to 14% lower than the national average.*
                            <br />
                            *As of 2024
                        </p>
                    </div>
                </div>

                {/* Image + Text Sections */}
                <div className="w-screen h-auto lg:h-[170vh] bg-white py-20 px-8 md:px-20 relative">

                    {/* Block 1 */}
                    <div className="w-full lg:absolute lg:top-10 lg:left-32 lg:w-[38%] text-left mb-16">
                        <div className="flex flex-col items-start">
                            <img src={sustainability1} alt="Footprint" className="scale-100 block self-start mb-4" />
                            <h2 className="text-red-600 text-xl font-semibold">More than 30% Carbon Footprint Reduction Achieved</h2>
                            <h1 className="text-black text-2xl md:text-4xl font-light mt-3">
                                Since 2015, we have reduced our carbon footprint by 34% – as of 2023
                            </h1>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className="w-full lg:absolute lg:top-72 lg:right-28 lg:w-[38%] text-left mb-16">
                        <div className="flex flex-col items-start">
                            <img src={sustainability2} alt="Decarbonisation" className="scale-100 block self-start mb-4" />
                            <h2 className="text-red-600 text-xl font-semibold">Focus on Decarbonisation & Circularity</h2>
                            <h1 className="text-black text-2xl md:text-4xl font-light mt-3">
                                Green hydrogen steelmaking and circularity <br /> to cut waste and emissions.
                            </h1>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="w-full lg:absolute lg:top-[650px] lg:left-32 lg:w-[38%] text-left mb-16">
                        <div className="flex flex-col items-start">
                            <img src={sustainability3} alt="People First" className="scale-100 block self-start mb-4" />
                            <h2 className="text-red-600 text-xl font-semibold">Commitment to a People-First Approach</h2>
                            <h1 className="text-black text-2xl md:text-4xl font-light mt-3">
                                People-first, customers, <br /> and communities are at the heart of our journey.
                            </h1>
                        </div>
                    </div>

                    {/* Block 4 */}
                    <div className="w-full lg:absolute lg:top-[900px] lg:right-28 lg:w-[38%] text-left">
                        <div className="flex flex-col items-start">
                            <h1 className="text-gray-300 text-2xl md:text-6xl font-extrabold mt-3">
                                Because <br /> building a <br /> future means protecting it.
                            </h1>
                        </div>
                    </div>

                </div>


                {/*navbar */}

                <div className="relative w-full min-h-screen bg-white flex ">
                    {/* <NavsectionSustainabilty/> */}
                    <div className="flex w-full bg-white text-black">
                        {/* Left Sidebar */}
                        <div className="w-[20%] sticky top-0 h-screen px-12 py-5 bg-white">
                            <ul className="space-y-8 text-xl font-bold">
                                <li className="text-black">Environment</li>
                                <li className="text-black">Social</li>
                                <li className="text-black">Governance & Disclosure</li>
                            </ul>
                        </div>

                        {/* Right Scrollable Content */}
                        <div className="w-[80%] ">
                            <div className="space-y-40 px-12">
                                {/* Section 1 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative">
                                        <img
                                            src={sustainabilityHero}
                                            alt="Background"
                                            className="w-full h-[80vh] object-cover"
                                        />

                                        <div
                                            className="absolute bottom-8 right-8 md:-bottom-5 md:right-12 bg-red-600 p-4 md:p-8 w-3/4 md:w-[390px] h-auto md:h-[210px] flex flex-col justify-center text-white"

                                            style={{
                                                transform: "translateY(30%)", // Optional: lifts it up from the image bottom edge
                                            }}
                                        >
                                            <h2 className="text-2xl md:text-3xl font-bold">Pioneering a greener steel revolution</h2>
                                            <p className="mt-2 text-sm md:text-base">
                                                Steel has shaped human progress and continues to power construction,
                                                infrastructure, and clean energy...
                                            </p>
                                        </div>
                                    </div>

                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative">
                                        <div>
                                            <h2 className="text-4xl font-bold text-gray-400">At AM/NS India, we are committed to changing that. As one of India’s least polluting steel  producers,
                                                <span className="text-5xl font-extrabold"> we continuously align our operations with a low-carbon future.</span></h2>
                                        </div>
                                        <div className="bg-white py-10 px-4">
                                            <button className="w-[40%] h-auto mt-6 p-3 text-white text-xl bg-black">
                                                Download our Climate Action Report 
                                            </button>

                                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                {cards.map((card, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-[#1e1e1e] text-white flex flex-col items-center p-6 space-y-4"
                                                    >
                                                        <img src={card.icon} alt={card.title} className="h-20 w-20" />
                                                        <h3 className="text-lg font-bold text-center">{card.title}</h3>
                                                        <p className="text-sm text-center text-gray-400">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="bg-white text-black  py-12 space-y-6">
                                                <p className="text-red-600 font-semibold text-sm md:text-base">
                                                    Product Sustainability: Leading with Efficiency and Innovation
                                                </p>

                                                <p className="text-2xl md:text-4xl font-light leading-relaxed">
                                                    At <span className="font-bold text-red-600">AM/NS</span> India, sustainability drives our product
                                                    innovation. We create advanced high–strength steel and solutions for the construction
                                                    and retail sectors, optimising resource use and minimising environmental impact across the
                                                    entire product lifecycle.
                                                </p>
                                            </div>

                                            <div className="bg-white text-black  py-12 space-y-10">
                                        {/* Section Heading */}
                                        <h2 className="text-xl md:text-2xl font-semibold text-black">
                                            Environmental Product Declarations (EPDs)
                                        </h2>

                                        {/* 3 Columns Layout */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            {/* Card 1 */}
                                            <div className="space-y-4 ">
                                            <img src={img0}alt="Leaf" className="w-full h-64 object-cover" />
                                            <p className="text-base leading-relaxed">
                                                We conduct Life Cycle Assessments (LCA) to measure environmental
                                                impact from production to disposal.
                                            </p>
                                            </div>

                                            {/* Card 2 */}
                                            <div className="space-y-4">
                                            <img src={img1} alt="Ship" className="w-full h-64 object-cover" />
                                            <p className="text-base leading-relaxed">
                                                Our Environmental Product Declarations (EPDs) provide data on
                                                six key products, ensuring independent verified transparency.
                                            </p>
                                            </div>

                                            {/* Card 3 */}
                                            <div className="space-y-4">
                                            <img src={img2} alt="ISO Certification" className="w-full h-64 object-cover" />
                                            <p className="text-base leading-relaxed">
                                                Each EPD adheres to ISO standards, reinforcing our dedication and
                                                commitment to sustainable practices.
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative">
                                        <img
                                            src={sec2iimg}
                                            alt="Background"
                                            className="w-full h-[80vh] object-cover"
                                        />

                                        <div
                                            className="absolute bottom-8 right-8 md:-bottom-5 md:right-12 bg-red-600 p-4 md:p-8 w-3/4 md:w-[390px] h-auto md:h-[320px] flex flex-col justify-center text-white"

                                            style={{
                                                transform: "translateY(30%)", // Optional: lifts it up from the image bottom edge
                                            }}
                                        >
                                            <h2 className="text-2xl md:text-3xl font-bold">Building stronger, inclusive communities</h2>
                                            <p className="mt-2 text-sm md:text-base">
                                                Business finds its true purpose when it transforms lives.
                                                 We aim to uplift communities through responsible operations. By fostering collaboration and empowering local stakeholders, we ensure a long-term positive impact on society.
                                            </p>
                                        </div>
                                    </div>

                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative">
                                        <div>
                                            <h2 className="text-4xl font-bold text-gray-400">
                                                <span className="text-6xl font-extrabold">Here’s how we bring about change through our corporate social responsibility (CSR) initiatives.</span></h2>
                                        </div>
                                    </div>

                                    <h1 className="text-red-600 mt-8 mb-8 font-bold text-2xl">CSR</h1>
                                    <div className="relative">
                                        <div>
                                            <h2 className="text-4xl font-bold text-gray-400">We are flagbearers of collaborative, inclusive, and sustainable development. Our efforts aim to responsibly realise
                                                 human potential while using resources optimally to drive progress.</h2>
                                        </div>
                                    </div>
                                </motion.div>
                                {/* Add more sections like the one above */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative">
                                        <img
                                            src={sec2iimg}
                                            alt="Background"
                                            className="w-full h-[80vh] object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 bg-red-600 p-6">
                                            <h2 className="text-3xl font-bold">Another sustainable initiative</h2>
                                            <p className="mt-2 text-base">
                                                Driving innovation towards a cleaner future.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Approach Section */}
                <div className="py-16 px-4 md:px-20 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {["Environmental Care", "Social Inclusion", "Ethical Governance", "Employee Safety", "Innovation", "Efficiency"].map(
                            (item, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
                                >
                                    <h3 className="text-xl font-semibold mb-3">{item}</h3>
                                    <p className="text-gray-600">Detailed description about {item.toLowerCase()} and how we implement it.</p>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Banner Section */}
                <div className="text-bold text-center text-5xl">
                    footer
                </div>
            </div>
        </div>
    );
}