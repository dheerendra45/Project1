import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import a1 from '../../assets/Seltiger/joinourcommunity1.jpg';
import a2 from '../../assets/Seltiger/joinourcommunity2.png';

export default function Joinourcommunity() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, amount: 0.2 });
  const navigate = useNavigate();

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
      className="relative bg-cover bg-center py-16 px-4 sm:px-6 md:px-12 lg:px-20 text-white font-inter"
      style={{ backgroundImage: `url(${a1})` }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 z-0" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:w-1/2 text-left"
        >
          <h3 className="text-orange-500 font-semibold text-base sm:text-lg mb-2">
            Community Impact
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-snug">
            Every Rod, Every Roof, Every Rebar: <br className="hidden sm:block" />
            A Step Toward a Stronger, More Inclusive India.
          </h1>
          <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
            At SEL Tiger, we believe that true strength comes not only in the materials we manufacture
            but from the lives we touch. Our commitment to nation-building begins at the grassroots —
            uplifting communities, empowering youth, and driving sustainable progress across every region we serve.
          </p>
          <button
            onClick={() => navigate('/csr')}
            className="border border-black text-black px-5 py-2 rounded hover:bg-black hover:text-white transition duration-300 text-sm sm:text-base"
          >
            Join Us
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="md:w-1/2"
        >
          <img
            src={a2}
            alt="Join Our Community"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
