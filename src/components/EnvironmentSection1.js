import React from 'react';
import { Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import envimg from '../assets/env.jpg';

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
    <div className="relative w-full min-h-screen bg-gray-700 overflow-hidden py-16 px-4 sm:px-8 lg:px-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-gray-600 opacity-50"
        style={{
          backgroundImage: `url(${envimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Centered Container */}
      <motion.div 
        className="relative z-10 flex items-center justify-center min-h-screen"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl">
          {/* Left - Circular Image with Orbiting Bulb */}
          <motion.div 
            className="relative flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div 
              className="relative border border-dotted border-white border-opacity-60"
              style={{
                width: 'min(90vw, 400px)',
                height: 'min(90vw, 400px)',
                borderRadius: '50%',
              }}
            >
              <div 
                className="absolute bg-gray-300 overflow-hidden"
                style={{
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  top: '5%',
                  left: '5%'
                }}
              >
                <img 
                  src={envimg} 
                  alt="Environment" 
                  className="w-full h-full object-cover"
                />
                </div>
            </div>

            {/* Orbiting Lightbulb Icon - orbits on the white dotted border circle */}
            <div 
              className="absolute inset-0" 
              style={{ 
                animation: 'orbit 8s linear infinite',
                width: 'min(90vw, 400px)',
                height: 'min(90vw, 400px)',
              }}
            >
              <motion.div 
                className="absolute bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  width: '60px',
                  height: '60px',
                  top: '-30px',
                  left: '50%',
                  marginLeft: '-30px',
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Lightbulb className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex-1 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">Environment</h1>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 text-center lg:text-left">
              Safety is one of the highest priorities within Steeler. It is imperative that 
              everyone follows the policies and guidelines to ensure their own safety and the 
              safety of others around them. We are providing different. Lorem Ipsum is simply 
              dummy text of the printing and typesetting industry.
            </p>

            {/* Bullet Points */}
            <motion.div
              className="space-y-5"
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
                  <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white text-base sm:text-lg">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <motion.div
              className="flex space-x-4 mt-8 sm:mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default EnvironmentSection1;