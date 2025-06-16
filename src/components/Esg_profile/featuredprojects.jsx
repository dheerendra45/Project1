import a1 from "../../assets/p1/city.png";
import a2 from "../../assets/p1/metro.png";
import a3 from "../../assets/p1/seamap.png";
import a4 from "../../assets/p1/goals.png"; // Assuming this is correct

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* First Section: Featured Projects */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-lg mb-10 max-w-3xl">
          We help our clients make a difference in our communities by providing
          strategic advice, technical expertise and a passion for impactful
          results, in line with the SDGs.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Project 1 */}
          <div className="flex-1 bg-gray-100 p-6 rounded shadow">
            <img
              src={a1}
              alt="Project 1"
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-sm font-semibold text-gray-600">
              Rainwater Harvesting
            </p>

            <h2 className="text-xl font-bold mb-4">
              Recharge groundwater through rain capture.
            </h2>
            <p className="text-gray-700 text-base">
              Rainwater collected from rooftops and catchments is channeled into
              recharge pits and storage tanks at our plants and nearby
              communities to conserve groundwater.
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex-1 bg-gray-100 p-6 rounded shadow">
            <img
              src={a2}
              alt="Project 2"
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-sm font-semibold text-gray-600">Waste Reuse</p>
            <h2 className="text-xl font-bold mb-4 mt-2">
              Transforming byproducts into building material
            </h2>
            <p className="text-gray-700 text-base">
              We reuse slag and fly ash to manufacture eco-friendly bricks and
              supply them to nearby construction projects, reducing landfill and
              raw material consumption.
            </p>
          </div>

          {/* Project 3 */}
          <div className="flex-1 bg-gray-100 p-6 rounded shadow">
            <img
              src={a3}
              alt="Project 3"
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-sm font-semibold text-gray-600">
              SEnergy Efficiency
            </p>

            <h2 className="text-xl font-bold mb-4">
              Cutting energy use via Waste Heat Recovery.
            </h2>
            <p className="text-gray-700 text-base">
              Heat from industrial processes is captured and reused through
              Waste Heat Recovery (WHR) systems to generate power internally,
              reducing energy costs and emissions.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section: Sustainable Development Goals */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Text Content */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1>Environmental Stewardship</h1>
          <ul>
            <li>
              <strong>Green Manufacturing</strong> – We prioritize clean and
              efficient production across our integrated steel plants and ferro
              alloy units. Our facilities are designed with advanced pollution
              control systems, energy recovery technologies, and waste recycling
              units to ensure low-impact operations. Ongoing investments in
              automation and emission control ensure strong compliance.
            </li>

            <li>
              <strong>Carbon Reduction</strong> – As part of our long-term
              climate strategy, Shyam Metalics is actively working toward a
              net-zero emissions roadmap. A key part of this journey is
              increasing the use of renewable energy, particularly through solar
              power installations and Waste Heat Recovery Boilers (WHRB) that
              harness energy from industrial processes.
            </li>

            <li>
              <strong>Resource Efficiency</strong> – We follow a circular
              approach to manufacturing by maximizing the use of every resource.
              Our operations have adopted closed-loop water recycling systems,
              ensuring minimal freshwater withdrawal. Solid waste is reused to
              the greatest extent, particularly blast furnace slag, repurposed
              into cement-grade material or road aggregates.
            </li>
          </ul>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={a4}
            alt="Sustainable Development Goals"
            className="max-w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>

      {/* Download Center Section */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Download Center</h1>
        {[
          "WSP 2023 Global ESG Report",
          "WSP 2023 Global ESG Report - Highlights",
          "WSP 2023 Global ESG Report - Datapack",
          "Managing our ESG impacts",
          "2022 Global TCFD Report",
          "GHG Verification Statement",
          "Climate Transition Plan",
          "Global ESG Statement",
          "Biodiversity Statement",
          "Health, Safety, Environmental and Quality Policy Statement",
          "CDP 2023 Climate Change Questionaire Response",
        ].map((text, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center gap-2 mb-2 text-black-600 hover:underline"
          >
            {/* PDF Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-600 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM13 3v5h5M8 9h8v2H8v-2zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
            </svg>
            {text}
          </a>
        ))}
        <a
          href="#"
          className="inline-flex items-center text-black-600 hover:underline mt-4"
        >
          Previous years
          <span className="ml-1 font-bold text-lg">{">"}</span>
        </a>
      </div>
    </div>
  );
}
