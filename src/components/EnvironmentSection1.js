import React ,{ useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import envimg from '../assets/env1.jpg';
import envbg from '../assets/env_bg.jpeg';
import { ChevronRight } from 'lucide-react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        start: 'top 40%',
        end: 'bottom 30%',
        markers:true,
        toggleActions: 'play none none reverse',
      },
    });

    // tl.from(bgRef.current, {
    //   opacity: 0,
    //   scale: 1.1,  
    //   duration: 2,
    //   ease: 'power2.out',
    // }, 0);
    tl.from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scale: 0.9, 
      ease: 'power3.out',
    }, 0);

    tl.from(headingRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    },0);

    tl.from(paraRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    },0.2 );  

    tl.from(buttonRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, 0.2);
  }, sectionRef);

  return () => ctx.revert(); // Cleanup
}, []);
  return (
    <div ref={sectionRef} className="relative w-full min-h-[500px] bg-gray-300 overflow-hidden py-8 px-4 sm:px-8 lg:px-16">
      {/* Background Image with Overlay */}
      <div 
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${envbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',  
          transform: 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gray-100 bg-opacity-10"></div>
      </div>

      {/* Centered Container */}
      <div 
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row-reverse items-stretch justify-between gap-8 w-full max-w-7xl">
          {/* Right - Full Height Image */}
          <div 
            ref={imageRef} 
            className="relative lg:w-[45%] flex-shrink-0"
          >
            <div className="h-full w-full min-h-[300px] lg:min-h-[400px] overflow-hidden">
              <img 
                src={envimg} 
                alt="Sustainable Environment" 
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Left Content */}
          <div
            ref={textRef}
            className="flex-1 lg:w-[55%] flex flex-col justify-center  bg-gray-100 bg-opacity-80 p-6 rounded-2xl shadow-md"
            style={{ fontFamily: 'Helvetica, sans-serif' }}
          >
            <h1 ref={headingRef} className="text-3xl sm:text-4xl font-medium text-black mb-4 sm:mb-6 text-center lg:text-left" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 500 }}>
            Environment
            </h1>
            
            <p ref={paraRef} className="text-black text-base leading-relaxed mb-6 sm:mb-8 text-center lg:text-left" style={{ fontFamily: 'Jost, sans-serif', fontSize: '22px' }}>
              At Shyam Metalics, our manufacturing facilities embody sustainability through an integrated energy ecosystem. We generate 81% of our power needs through captive plants that optimize fuel efficiency, reduce emissions, and eliminate transmission losses, ensuring uninterrupted, eco-conscious operations. Complementing this, our strategically positioned solar panels harness renewable energy, significantly reducing fossil fuel dependence and lowering our carbon footprint.
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
        </div>
      </div>
    </div>
  );
};

export default EnvironmentSection1;