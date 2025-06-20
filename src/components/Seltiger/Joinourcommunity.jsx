import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import a1 from '../../assets/Seltiger/joinourcommunity1.jpg';
import a2 from '../../assets/Seltiger/joinourcommunity2.png';

export default function Joinourcommunity() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center py-20 px-6 md:px-20 text-white"
      style={{
        backgroundImage: `url(${a1})`,
      }}
    >
      {/* White fade overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Half */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:w-1/2 text-left"
        >
          <h3 className="text-orange-500 font-semibold text-lg mb-2">COMMUNITY</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Join Our <br /> Community
          </h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Ipsum ultrices interdum facilisis nibh vel
            pretium sit feugiat non. Nisi diam urna vehicula lacus.
          </p>
          <button className="border border-black text-black px-5 py-2 rounded hover:bg-black hover:text-white transition duration-300">
            Join Us
          </button>
        </motion.div>

        {/* Right Half */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:w-1/2"
        >
          <img src={a2} alt="Join Community" className="w-full h-auto object-contain" />
        </motion.div>
      </div>
    </div>
  );
}
