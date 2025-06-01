import a2 from "../../assets/p1/forestroad.jpg";
import a1 from "../../assets/p1/seawindturbine.png";

export default function Report() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${a2})` }}
    >
      <div className="flex flex-col md:flex-row w-full px-8 md:px-20 items-center justify-between">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img src={a1} alt="Report" className="max-w-full h-auto" />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Climate Action Report
          </h1>
          <p className="text-lg">
            Lorem Ipsum dolor sit amet consectetur, Metus nunc posuere libero
            integer morbi mattis feugiat fringilla. Aliquet dui diam cursus
            mauris.
          </p>
          <button className="border border-orange-500 text-white px-6 py-2 rounded hover:bg-orange-500 transition">
            Read The Full Report here →
          </button>
        </div>
      </div>
    </div>
  );
}
