import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import envimg from "../assets/env1.jpg";
import envbg from "../assets/env_bg.jpeg";
import { ChevronRight } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EnvironmentSection1 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "bottom 30%",
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      // tl.from(bgRef.current, {
      //   opacity: 0,
      //   scale: 1.1,
      //   duration: 2,
      //   ease: 'power2.out',
      // }, 0);
      tl.from(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          scale: 0.9,
          ease: "power3.out",
        },
        0
      );

      tl.from(
        headingRef.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0
      );

      tl.from(
        paraRef.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.2
      );

      tl.from(
        buttonRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);
  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[500px] bg-gray-300 overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div
        // ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${envbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-gray-100 bg-opacity-10"></div>
      </div>

      {/* Centered Container */}
      <div className="relative z-10 min-h-[500px] flex flex-col  md:flex-row w-full h-full mx-auto ">
        {/* <div className="flex flex-col lg:flex-row-reverse items-stretch justify-between gap-8 w-full max-w-7xl"> */}

        {/* Left Content */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 min-h-[500px] bg-white bg-opacity-80 p-8 md:p-10 flex flex-col justify-center font-['Inter',sans-serif]"
        >
          <h2
            ref={headingRef}
            className="text-2xl sm:text-4xl font-semibold text-black-800 mb-6"
          >
            Our Green Promise
          </h2>

          <p
            ref={paraRef}
            className="text-black text-base md:text-lg leading-relaxed mb-6"
          >
            At Shyam Metalics, sustainability is how we work, grow, and lead.
            Our plants feature closed-loop water systems, minimized emissions
            through non-recovery coke ovens, and power generation using 376 MW
            energy-efficient captive power plants. We meet 81% of our energy
            needs in-house—reducing transmission losses, optimizing fuel usage,
            and integrating solar power to lower our carbon footprint.
            <br />
            <br />
            Our cement division recycles steel by-products into building
            materials, underscoring our commitment to a circular economy. As we
            expand into aluminium and emerging material spaces, each step is
            guided by our goal to reduce environmental impact and enhance
            resource productivity. We’re building a model of responsible
            growth—strengthening India’s future while preserving its ecological
            balance.
          </p>

          {/* Read More Button */}
          <div
            ref={buttonRef}
            className="mt-6 flex justify-center lg:justify-start"
          >
            <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors">
              Read More <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Right - Full Height Image */}
        <div
          ref={imageRef}
          className="relative w-full md:w-1/2 min-h-[500px] md:h-auto flex items-center justify-center"
        >
          <div className="h-full w-full  overflow-hidden">
            <img
              src={envimg}
              alt="Sustainable Environment"
              className="w-full h-full object-cover  shadow-md"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default EnvironmentSection1;
