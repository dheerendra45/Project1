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
            <p className="text-sm font-semibold text-gray-600">COMMODO</p>
            <p className="text-sm font-semibold text-gray-600 mb-2">
              VESTIBULUM
            </p>
            <h2 className="text-xl font-bold mb-4">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-gray-700 text-base">
              Malesuada gravida mi vulputate dolor dui mkilototor turpis hac
              turpis pharetra. Pellentesque curabitur elementum elementum
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex-1 bg-gray-100 p-6 rounded shadow">
            <img
              src={a2}
              alt="Project 2"
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-sm font-semibold text-gray-600">MAURIS</p>
            <h2 className="text-xl font-bold mb-4 mt-2">
              Elementum ullamcorper
            </h2>
            <p className="text-gray-700 text-base">
              Aliquet urna quam sit et sapien at faucibus lacinia. Aliquam
              sodales consectetur arnare quis frgftgjfjvd netus gyq netus diam
              tellus imperdiet.
            </p>
          </div>

          {/* Project 3 */}
          <div className="flex-1 bg-gray-100 p-6 rounded shadow">
            <img
              src={a3}
              alt="Project 3"
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-sm font-semibold text-gray-600">SCELERIS</p>
            <p className="text-sm font-semibold text-gray-600 mb-2">QUE</p>
            <h2 className="text-xl font-bold mb-4">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-gray-700 text-base">
              Placerat amet id est cursus nunc vcfdgnklnndfbdf sagittis at
              volutpat enim nisl ultrices. At nibh eget commando pretium.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section: Sustainable Development Goals */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Text Content */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1 className="text-3xl font-bold">Sustainable Development Goals</h1>
          <p className="text-lg max-w-lg">
            We contribute to the UN Sustainable Development Goals (SDGs) through
            client work and in our operations. The SDGs serve as our framework
            to quantify the impact of our projects and to make a tangible link
            between the activities of our employees and the resulting benefits
            to society and the environment.
          </p>
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
