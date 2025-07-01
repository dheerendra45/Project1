import React from 'react';
import { motion } from 'framer-motion';
import envimg from '../assets/env1.jpg';

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
            <div className="h-full w-full min-h-[300px] lg:min-h-[400px] overflow-hidden ">
              <img 
                src={envimg} 
                alt="Environment" 
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
              Environment
            </h1>
            
            <p className="text-black text-base leading-relaxed mb-6 sm:mb-8 text-center lg:text-left" style={{ fontFamily: 'Jost, sans-serif', fontSize: '22px' }}>
              Safety is one of the highest priorities within Steeler. It is imperative that 
              everyone follows the policies and guidelines to ensure their own safety and the 
              safety of others around them. We are providing different. Lorem Ipsum is simply 
              dummy text of the printing and typesetting industry.
            </p>

            {/* Bullet Points */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {[
                'Industrial waste treatment up to international standards',
                'Exhaust fumes on time and carbon content as regulated',
                'Do not allow radioactive leakage to the environment'
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <p className="text-black text-base" style={{ fontFamily: 'Jost, sans-serif' }}>{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnvironmentSection1;