import React, { useState } from "react";
import csr1 from "../assets/csr1.png";
import csr2 from "../assets/csr2.png";
import csr3 from "../assets/csr3.png";
import csr4 from "../assets/csr4.png";
import logo1 from "../assets/csr/1.png";
import logo2 from "../assets/csr/2.png";
import logo3 from "../assets/csr/3.png";
import logo4 from "../assets/csr/4.png";
import logo5 from "../assets/csr/5.png";
import logo6 from "../assets/csr/6.png";

const CSRPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Using your imported logos for CSR areas
  const csrAreas = [
    { icon: logo1, label: "Education" },
    { icon: logo2, label: "Healthcare" },
    { icon: logo3, label: "Sanitation & Hygiene" },
    { icon: logo4, label: "Livelihood Empowerment" },
    { icon: logo5, label: "Environmental Sustainability" },
    { icon: logo6, label: "Community Development" }, // Reusing logo1 if you don't have a 6th logo
  ];

  const videoImages = [
    {
      id: 1,
      src: csr1,
      alt: "Community children",
    },
    {
      id: 2,
      src: csr2,
      alt: "Woman in traditional dress",
    },
    {
      id: 3,
      src: csr3,
      alt: "Traditional building",
    },
    {
      id: 4,
      src: csr4,
      alt: "Children together",
    },
  ];

  const partnerLogos = [
    { src: logo1, alt: "Partner Logo 1" },
    { src: logo2, alt: "Partner Logo 2" },
    { src: logo3, alt: "Partner Logo 3" },
    { src: logo4, alt: "Partner Logo 4" },
    { src: logo5, alt: "Partner Logo 5" },
  ];

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
    console.log(`Playing video ${videoId}`);
  };

  return (
    <div className="bg-white my-[2%]">
      <div className="max-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
          {/* Left Side - Images Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {videoImages.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded shadow-lg cursor-pointer group"
                  onClick={() => handlePlayVideo(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[266px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg">
                      <span className="text-gray-800">▶</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner Logos Section */}
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <h1 className="text-2xl text-header-style  sm:text-3xl font-bold text-gray-900 mb-3">
              Corporate Social Responsibility
            </h1>

            <h2 className="text-lg sm:text-xl text-header-style  font-semibold text-orange-500 mb-4">
              Building Communities, Empowering Lives
            </h2>

            <p className="text-base text-paragraph-style text-gray-700 mb-5 font-medium">
              Empowering Bharat with purpose beyond profits and progress beyond
              steel.
            </p>

            <div className="mb-6">
              <p className="text-gray-700  text-paragraph-style leading-relaxed text-base ">
                Shyam Metalics has always stood tall for more than just steel,
                because we believe that true strength lies not only in the steel
                we forge, but in the lives we uplift. We go beyond
                infrastructure to empathize with people, drive impact, and build
                a more equitable, educated, and empowered Bharat. Our commitment
                to Corporate Social Responsibility is not just an initiative,
                it's a way of life, aimed at creating opportunity, dignity, and
                sustainable growth for the communities we serve.
              </p>
            </div>

            {/* CSR Areas with your logos */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
              {csrAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className=" rounded-full p-2 mb-2">
                    <img
                      src={area.icon}
                      alt={area.label}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 leading-tight">
                    {area.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-700  text-paragraph-style text-base mb-6 leading-relaxed">
              Our CSR efforts are rooted in empathy and driven by impact to
              shape not just steel, but a future that's stronger, greener, and
              more inclusive for all.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md text-sm mt-2 w-fit">
              Learn More About Our Impact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRPage;
