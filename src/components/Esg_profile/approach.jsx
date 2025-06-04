import a3 from "../../assets/p1/girltree.png"; // Ensure the image path is correct

export default function Approach() {
  return (
    <div className="text-black px-6 py-8 space-y-12">
      {/* First Section */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Sustainability and ESG, the Core of our Strategy
        </h1>
        <p className="text-lg text-black">
          Whether we are delivering high-speed rail systems, designing urban
          infrastructure or supporting adaptation to climate change risks, we
          are committed to finding sustainable solutions to the challenges the
          future will bring.
        </p>
      </div>

      {/* Second Section with Image Left and Content Right */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img src={a3} alt="ESG" className="w-full h-auto rounded-md" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-4 text-black">
          <h2 className="text-2xl font-semibold text-black">Approach</h2>

          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur. Facilisis nunc a.
            <br />
            <ul className="text-right text-black underline">2022-24 Global</ul>
          </p>

          <p className="text-black">
            <span className="underline">Strategic Action Plan</span> A
            adipiscing nulla faucibus pellentesque Lorem ipsum dolor sit amet
            consectetur. Est sapien convallis.
          </p>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur. Cursus sed non tincidunt ac
            dictumst leo lectus sociis. Ullamcorper libero quam tortor fames
            metus velit. Odio pharetra commodo nullam lactus eu. Nisl a nunc.
          </p>

          <p className="text-black">
            <ul className="text-right text-black underline">
              Global Environmental, Social &
            </ul>
            <span className="underline">Governance (ESG) Statement</span>
            defines our objectives and approach to embedding sustainability in
            our services and advice to clients, in our operations, and the
            communities in which we work.
          </p>

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
          As one of the world's largest environmental consulting firms, we will
          continue to play a pivotal role in achieving a sustainable, equitable
          and prosperous future for our employees, clients and communities, to
          keep improving our organization, as well as the world we live in.
        </h2>
        <p className="font-bold text-xl text-black">Andre-Martin Bouchard</p>
        <p className="text-black">Global Executive Director, Shyam</p>
      </div>

      {/* Grey Line After */}
      <hr className="border-gray-400" />
    </div>
  );
}
