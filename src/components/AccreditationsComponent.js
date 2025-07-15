import React from "react";
import a from "../assets/a.png";
const AccreditationsComponent = () => {
  return (
    <div className="w-full bg-white py-[5vh] px-[10vw]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Accreditations <span className="text-orange-500">&</span>{" "}
            Achievements
          </h2>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Text Section */}
          <div className="lg:w-1/3">
            <p className="text-orange-500 text-base leading-relaxed">
              Recognized by industry leaders, endorsed by global platforms — our
              journey is marked by trust, quality, and performance. At{" "}
              <strong>Shyam Metalics</strong>, excellence isn't just a pursuit —
              it's a consistent outcome. Our dedication to sustainable growth,
              employee well-being, innovation, and industry leadership has been
              recognized by premier national and international forums. Each
              award, certification, and endorsement stands as a testament to the
              trust we've built and the impact we've created.
            </p>
          </div>

          {/* Center + Right Awards Section */}
          <div className="flex flex-col items-center lg:flex-row gap-6 lg:gap-12">
            {/* Main Large Card */}
            <div className="bg-white rounded-lg shadow-lg border border-orange-200  text-center w-[220px]">
              <img
                src={a}
                alt="Clutch Award"
                className="w-full h-full  object-cover"
              />
            </div>

            {/* Smaller Awards Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  title: "Clutch 2018",
                  subtitle: "Top App Developer",
                  img: a,
                },
                {
                  title: "Clutch 2018",
                  subtitle: "Top Developers",
                  img: a,
                },
                {
                  title: "Clutch 2018",
                  subtitle: "B2B Companies",
                  img: a,
                },
              ].map((award, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md border border-gray-100 p-4 text-center w-[120px]"
                >
                  <img
                    src={award.img}
                    alt={award.title}
                    className="w-30 h-50  object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation and View All Button */}
        <div className="flex justify-center items-center mt-12 gap-4">
          {/* Navigation Arrows */}
          <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
            <span className="text-gray-600 text-lg">‹</span>
          </button>

          {/* Pagination Dots */}

          <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
            <span className="text-gray-600 text-lg">›</span>
          </button>

          {/* View All */}
          <button className="ml-6 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccreditationsComponent;
