import a1 from "../../assets/contact/linkedin.png";
import a2 from "../../assets/contact/youtube.png";

export default function Connect() {
  return (
    <div className=" bg-white pt-6 px-6 pb-6">
      {/* Headings above both columns */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mt-0 mb-1">Contact Shyam</h1>
        <h3 className="text-orange-500 text-lg font-semibold mt-0 mb-0">
          LET US KNOW HOW WE CAN HELP YOU
        </h3>
      </div>

      {/* Main content container with left and right halves */}
      <div className="flex flex-col md:flex-row md:gap-8 md:items-start max-w-6xl mx-auto mt-4">
        {/* Left column: 2/3 width */}
        <div className="md:w-2/3 w-full text-left">
          <div className="space-y-4">
            <div className="mb-0">
              <h2 className="text-2xl font-semibold mt-0 mb-1">Lorem ipsum</h2>
              <p className="text-gray-700 leading-relaxed mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
                aut blanditiis placeat at est alias, porro possimus praesentium
                error fugit molestiae aliquam incidunt. Suscipit quidem tempora
                incidunt! Ab, at voluptates. Repellat, nobis quisquam quo
                molestiae deleniti, cumque qui omnis quasi animi, temporibus
                ipsum illum natus consequuntur delectus doloribus. Omnis quam
                eligendi excepturi numquam alias dolorem, deserunt quisquam
                aliquam.
              </p>
            </div>

            <div className="mb-0">
              <h2 className="text-2xl font-semibold mt-0 mb-1">Lorem</h2>
              <p className="text-gray-700 leading-relaxed mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium possimus quam, ipsa quod culpa nisi iste ducimus ea
                nemo suscipit vitae at earum veniam. Fuga eveniet laboriosam
                alias nobis eos? Inventore quibusdam, dolorum enim ut eius
                laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: 1/3 width */}
        <div className="md:w-1/3 w-full flex items-center justify-center mt-4 md:mt-0">
          <div className="bg-gray-100 rounded-md p-8 w-full max-w-md shadow-md mb-0">
            <h2 className="text-2xl font-semibold text-center mt-0 mb-4">
              CONNECT WITH US
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 cursor-pointer hover:text-orange-500 transition-colors">
                <img src={a1} alt="LinkedIn" className="w-10 h-10" />
                <h3 className="text-lg font-medium mb-0">LinkedIn</h3>
              </div>
              <div className="flex items-center gap-4 cursor-pointer hover:text-orange-500 transition-colors">
                <img src={a2} alt="Youtube" className="w-10 h-10" />
                <h3 className="text-lg font-medium mb-0">Youtube</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
