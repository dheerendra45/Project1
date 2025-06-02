import a1 from "./images/1.png";
import a2 from "./images/2.png";

const AboutUsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT GRID */}
        <div className="relative grid grid-cols-2 grid-rows-2 gap-2 bg-white p-2 rounded shadow-lg">
          {/* Image a1 (Left side, spans two rows) */}
          <div className="row-span-2 relative">
            <img
              src={a1}
              alt="Main"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Orange Stat Box (Top-right) */}
          <div className="bg-orange-500 text-white p-6 rounded flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-1">50+</h3>
            <h4 className="text-lg font-semibold mb-2">Years of Trust</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur. Eu condimentum ut ipsum elementum lectus. In vulputate pulvinar.
            </p>
          </div>

          {/* Image a2 (Bottom-right) */}
          <div className="relative">
            <img
              src={a2}
              alt="Overlay"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-orange-500 font-semibold mb-2">About Us</p>
          <h2 className="text-3xl font-bold mb-8">HOW WE WORK</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-white text-xl">👥</div>
              </div>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-white text-xl">👥</div>
              </div>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              </p>
            </div>
          </div>

          <p className="text-gray-600 mt-8 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit and an voluptatem accusantium doloremque laudantium, then totam rem aperiam, eaque ipsa quae ab illo its meets the.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold w-full">
            View Our Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
