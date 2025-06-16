import a3 from "../../assets/p1/Plant 11.jpg"; // Ensure the image path is correct
import a4 from "../../assets/p1/Sewing 7.jpg";
import a5 from "../../assets/p1/Tution 5.jpg";
export default function Approach() {
  return (
    <div className="text-black px-6 py-8 space-y-12">
      {/* First Section */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Sustainability at Shyam Metalics: Building a Greener Future
        </h1>
        <p className="text-lg text-black">
          At Shyam Metalics, sustainability is not just a goal—it’s the
          foundation of our business strategy. We believe in creating value not
          only for our shareholders but also for the environment and the
          communities we serve. Through innovative practices and a commitment to
          responsible resource management, we are helping build a greener,
          cleaner, and more sustainable future for India and the world.
        </p>
        <p>
          Sustainability drives everything we do, from the way we produce steel
          and metals to how we engage with our communities. We aim to minimize
          our environmental footprint, optimize resource usage, and ensure
          long-term sustainability for all stakeholders, employees, customers,
          and society at large.
        </p>
        <p>
          At Shyam Metalics, we follow a holistic approach that integrates
          environmental sustainability, social responsibility, and economic
          growth, enabling us to remain competitive while adhering to the
          highest ethical and environmental standards.
        </p>
      </div>

      {/* Second Section with Image Left and Content Right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img src={a3} alt="ESG" className="w-full h-auto rounded-md" />
          <img src={a4} alt="ESG" className="w-full  pt-12 h-auto rounded-md" />
          <img src={a5} alt="ESG" className="w-full  pt-12 h-auto rounded-md" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-4 text-black">
          <h2 className="text-2xl font-semibold text-black">
            Approach to Our Sustainability Efforts
          </h2>

          <div className="text-black space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-black">
                1. Energy Management: Powering a Green Future
              </h3>
              <p>
                We are committed to reducing our energy consumption and
                transitioning to renewable energy sources wherever possible.
              </p>

              <div className="mt-2">
                <h4 className="font-semibold underline">
                  Renewable Energy Initiatives
                </h4>
                <ul className="ml-4 mt-1">
                  <li>
                    <strong>Solar & Wind Power:</strong>
                    <ul className="ml-4 mt-1">
                      <li>
                        Installed 63.876 MW of solar capacity and 5.1 MW of wind
                        energy.
                      </li>
                      <li>
                        Energy consumption from renewables: 864,495 GJ (FY
                        24-25).
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="mt-2">
                <h4 className="font-semibold underline">
                  Energy Efficiency Projects
                </h4>
                <ul className="ml-4 mt-1">
                  <li>
                    Upgraded production processes with energy-efficient systems.
                  </li>
                  <li>
                    Implemented energy-efficient lighting, HVAC systems, and
                    green building designs.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                2. Greenhouse Gas (GHG) Emissions: Reducing Our Carbon Footprint
              </h3>
              <p>
                We are GreenPro certified, aligning our operations with global
                sustainability standards.
              </p>

              <div className="mt-2">
                <h4 className="font-semibold underline">
                  Emission Reduction Initiatives
                </h4>
                <ul className="ml-4 mt-1">
                  <li>
                    Solar & wind energy integration to reduce Scope 1 & 2
                    emissions.
                  </li>
                  <li>
                    Advanced emission control technologies for PM10 & PM2.5
                    reduction.
                  </li>
                </ul>
              </div>

              <div className="mt-2">
                <h4 className="font-semibold underline">
                  Sustainable Manufacturing
                </h4>
                <ul className="ml-4 mt-1">
                  <li>
                    Energy-efficient production processes minimize emissions.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                3. Waste Management: Creating a Circular Economy
              </h3>
              <p>
                We follow a zero-waste approach, maximizing reuse and recycling.
              </p>

              <div className="mt-2">
                <h4 className="font-semibold underline">
                  Recycling & Repurposing
                </h4>
                <ul className="ml-4 mt-1">
                  <li>10.83 MT of waste recycled annually.</li>
                  <li>
                    By-products repurposed into eco-friendly concrete blocks.
                  </li>
                </ul>
              </div>

              <div className="mt-2">
                <h4 className="font-semibold underline">
                  Efficient Waste Disposal
                </h4>
                <ul className="ml-4 mt-1">
                  <li>25.53 MT of hazardous waste safely disposed annually</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                4. Water Management: Conserving Every Drop
              </h3>
              <p>We follow a Zero Liquid Discharge (ZLD) policy.</p>

              <div className="mt-2">
                <h4 className="font-semibold underline">Key Initiatives</h4>
                <ul className="ml-4 mt-1">
                  <li>3,775 KL capacity wastewater treatment plants.</li>
                  <li>100% wastewater recycled for industrial reuse.</li>
                </ul>
              </div>
            </div>
          </div>

          <button className="mt-4 px-6 py-2 border-2 border-orange-500 text-black-500  hover:bg-orange-100 transition">
            Our Global ESG Report
          </button>
        </div>
      </div>

      {/* Grey Line Before */}
      <hr className="border-gray-400" />

      {/* Third Section (Quote Section) */}
      <div className="w-full px-8 text-left space-y-4 text-black">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">
          At Shyam Metalics, we invest in employee training, skill development,
          and green awareness programs to foster a culture of sustainability.
          Through workshops, certifications, the adoption of new technologies we
          empower our workforce to lead eco-friendly operations. Our corporate
          environmental policies align with global standards while promoting
          resource efficiency, waste reduction, and community engagement for a
          sustainable future.
        </h2>
        <p className="font-bold text-xl text-black">Andre-Martin Bouchard</p>
        <p className="text-black">Global Executive Director, Shyam</p>
      </div>

      {/* Grey Line After */}
      <hr className="border-gray-400" />
    </div>
  );
}
