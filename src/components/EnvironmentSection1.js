import React from 'react';
import { motion } from 'framer-motion';
import envimg from '../assets/env1.jpg';
import { ChevronRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

const EnvironmentSection1 = () => {
  return (
    <div className="relative w-full min-h-[500px] bg-gray-300 overflow-hidden py-8 px-4 sm:px-8 lg:px-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-gray-300 opacity-50"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Centered Container */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="flex flex-col lg:flex-row-reverse items-stretch justify-between gap-8 w-full max-w-7xl">
          {/* Right - Full Height Image */}
          <motion.div 
            className="relative lg:w-[45%] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="h-full w-full min-h-[300px] lg:min-h-[400px] overflow-hidden">
              <img 
                src={envimg} 
                alt="Sustainable Environment" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            className="flex-1 lg:w-[55%] flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-3xl sm:text-4xl font-medium text-black mb-4 sm:mb-6 text-center lg:text-left" style={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 500 }}>
              Sustainable Environment
            </h1>
            
            <p className="text-black text-base leading-relaxed mb-6 sm:mb-8 text-center lg:text-left" style={{ fontFamily: 'Jost, sans-serif', fontSize: '22px' }}>
              At Shyam Metalics, our manufacturing facilities embody sustainability through an integrated energy ecosystem. We generate 81% of our power needs through captive plants that optimize fuel efficiency, reduce emissions, and eliminate transmission losses, ensuring uninterrupted, eco-conscious operations. Complementing this, our strategically positioned solar panels harness renewable energy, significantly reducing fossil fuel dependence and lowering our carbon footprint.
            </p>

          

            {/* Read More Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex justify-center lg:justify-start"
            >
              <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Read More <ChevronRight className="ml-1 w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnvironmentSection1;