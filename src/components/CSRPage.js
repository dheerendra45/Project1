import React from "react";
import herobg from "../assets/school.mp4";

const CSRPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full border-b-2">
        {/* Left side with video and overlay text */}
        <div className="w-full md:w-1/2 bg-gray-800 relative h-96 md:h-auto">
          <video
            src={herobg}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h2 className="text-white text-2xl md:text-5xl font-semibold leading-tight">
              Building <br className="block md:hidden" />
              Communities,
              <br />
              Empowering Lives
            </h2>
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2 bg-white p-10 pr-12">
          <h2 className="text-black-800 text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Corporate Social Responsibility
          </h2>
          <h4 className="text-orange-500 text-xl sm:text-2xl lg:text-2xl font-semibold leading-snug mb-6 ml-1">
            Building Communities, Empowering Lives
          </h4>

          <p className="text-gray-700 text-base sm:text-lg mb-6">
            At Shyam Metalics, our responsibility is not limited to what we
            construct, it also includes how we transform the communities we live
            with. Through the Shyam Metalics Foundation, we’ve positively
            impacted over{" "}
            <span className="font-semibold text-black">25,000 lives</span>{" "}
            across <span className="font-semibold text-black">43 villages</span>
            , earning us recognition with the{" "}
            <span className="font-semibold text-black">
              2025 EdelGive–Hurun CSR Contribution Award
            </span>
            .
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Our initiatives touch on healthcare, school building, access to
            clean water, education assistance to more than{" "}
            <span className="font-semibold text-black">1,600 children</span>,
            women's livelihood training, livestock health, and youth empowerment
            through our football academy. Every project is crafted for long-term
            impact and local applicability. While we build our industrial
            presence, we continue to create value that extends beyond our
            business.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded border-2 border-white">
            Learn More About Our Impact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSRPage;
