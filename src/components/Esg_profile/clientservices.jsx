import a1 from "../../assets/p1/client.png";

export default function ClientServices() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-10 gap-8">
      {/* Left Half - Text Content */}
      <div className="w-full md:w-1/2 text-left space-y-6 text-black">
        <h1 className="text-3xl font-bold">
          Green Makes Sense Beyond Conscience - Reflecting Our Social and
          Environmental Responsibility
        </h1>

        <h3>Empowering Communities Through Sustainable Practices</h3>
        <ul>
          <li>
            <strong>Nutrition Gardens</strong> – Combat malnutrition by
            providing families with access to fresh, organic produce.
          </li>
          <li>
            <strong>Mobile Health Vans & Safe Drinking Water</strong> –
            Delivering healthcare services and clean drinking water to remote
            areas.
          </li>
          <li>
            <strong>Skill Development & Eco-Awareness Programs</strong> –
            Educate communities on sustainable living and green practices.
          </li>
          <li>
            <strong>Plantation Drives</strong> – Engage local villagers in
            tree-planting initiatives to enhance green cover.
          </li>
        </ul>

        <h3>Building Self-Sufficient Communities</h3>
        <ul>
          <li>
            <strong>Rainwater Harvesting Projects</strong> – Promote water
            conservation in rural areas.
          </li>
          <li>
            <strong>Sustainable Agriculture Training</strong> – Supporting
            farmers with eco-friendly and climate-resilient farming techniques.
          </li>
          <li>
            <strong>Infrastructure Development</strong> – Building long-term
            community assets like roads, schools, and sanitation facilities.
          </li>
        </ul>

        <p>
          Through these efforts, we empower communities to thrive sustainably
          while protecting the environment.
        </p>
        <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition">
          Discover our ESG Solutions
        </button>
      </div>

      {/* Right Half - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={a1} alt="Client Services" className="max-w-full h-auto" />
      </div>
    </div>
  );
}
