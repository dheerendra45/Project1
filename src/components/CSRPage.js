import React, { useState } from "react";
import {
  Play,
  GraduationCap,
  Heart,
  Droplets,
  Lightbulb,
  Leaf,
  Users,
} from "lucide-react";
import csr1 from "../assets/csr1.png";
import csr2 from "../assets/csr2.png";
import csr3 from "../assets/csr3.png";
import csr4 from "../assets/csr4.png";

const CSRPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const csrAreas = [
    { icon: GraduationCap, label: "Education", color: "text-orange-500" },
    { icon: Heart, label: "Healthcare", color: "text-orange-500" },
    { icon: Droplets, label: "Sanitation & Hygiene", color: "text-orange-500" },
    {
      icon: Lightbulb,
      label: "Livelihood Empowerment",
      color: "text-orange-500",
    },
    {
      icon: Leaf,
      label: "Environmental Sustainability",
      color: "text-orange-500",
    },
    { icon: Users, label: "Community Development", color: "text-orange-500" },
  ];

  const videoImages = [
    {
      id: 1,
      src: csr1,
      alt: "Community children",
      className: "w-[439px] h-[306px]",
    },
    {
      id: 2,
      src: csr2,
      alt: "Woman in traditional dress",
      className: "w-[302px] h-[306px]",
    },
    {
      id: 3,
      src: csr3,
      alt: "Traditional building",
      className: "w-[302px] h-[306px]",
    },
    {
      id: 4,
      src: csr4,
      alt: "Children together",
      className: "w-[439px] h-[306px]",
    },
  ];

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
    // Here you would typically open a video modal or navigate to video
    console.log(`Playing video ${videoId}`);
  };

  return (
    <div className="bg-white pt-[2vh] pb-[2vh]">
      {/* Main Container */}
      {/* Main Container */}
      <div className="w-full px-0">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side - Images Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 max-w-2xl">
              {videoImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-[2.9px] shadow-lg cursor-pointer group"
                  onClick={() => handlePlayVideo(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                      height: "266px",
                    }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg">
                      <Play className="w-6 h-6 text-gray-800 fill-current" />
                    </div>
                  </div>
                  {/* Static Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-80 rounded-full p-2 shadow-lg">
                      <Play className="w-5 h-5 text-gray-700 fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-2xl h-[550px] flex flex-col">
            {/* Main Heading */}
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Corporate Social Responsibility
            </h1>

            {/* Subheading */}
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Building Communities, Empowering Lives
            </h2>

            {/* Tagline */}
            <p className="text-base text-gray-700 mb-5 font-medium">
              Empowering Bharat with purpose beyond profits and progress beyond
              steel.
            </p>

            {/* Main Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed text-sm">
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

            {/* CSR Areas Icons */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {csrAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-orange-100 rounded-full p-2 mb-2">
                    <area.icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <span className="text-xs font-medium text-gray-700 leading-tight">
                    {area.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Description */}
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              Our CSR efforts are rooted in empathy and driven by impact to
              shape not just steel, but a future that's stronger, greener, and
              more inclusive for all.
            </p>

            {/* CTA Button */}
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
