import React from "react";
import a1 from "../assets/environment.png";

export default function Environment() {
  return (
    <div className="relative w-full min-h-[400px] font-inter">
      {/* Background image */}
      <div
        className="w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${a1})` }}
      ></div>

      {/* Content container */}
      <div className="relative bg-orange-600 px-8 py-8 -mt-40 flex flex-col items-center max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">ENVIRONMENT</h1>
        <h2 className="text-xl text-white mb-8 leading-relaxed">
          Lorem Ipsum is Simply Dummy Text Of The Printing <br />
          And Typesetting Industry.
        </h2>
        <button
          className="inline-flex items-center bg-orange-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-700 transition"
          aria-label="Read more"
        >
          Read More
          <span className="ml-4 flex items-center justify-center w-8 h-8 bg-white rounded-full">
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
