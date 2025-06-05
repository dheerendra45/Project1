import React from 'react';
import { motion } from 'framer-motion';
import newsbg from '../../assets/awards/newsbg.jpg';

const AwardsNews = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut' 
      }
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, delay: 0.3 }
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.7, delay: 0.5 }
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-orange-500 mb-4"
            variants={headlineVariants}
          >
            THE MOST RECENT NEWS
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed"
            variants={paragraphVariants}
          >
            "Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward. 
            This is more than a wall of fame — It's a tribute to dedication, belief, and resilience."
          </motion.p>
        </motion.div>

        {/* Featured News Card */}
        <motion.div
          className="mx-auto relative w-full max-w-6xl h-[320px] sm:h-[400px] md:h-[460px] rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Background Image */}
          <img 
            src={newsbg} 
            alt="Recent news"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(270.04deg, rgba(0, 0, 0, 0) 0.03%, #000000 99.97%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 flex items-center h-full">
            <motion.div
              className="max-w-2xl text-white"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
                THE MOST RECENT NEWS HEADLINE
              </h3>
              <p className="text-lg leading-relaxed">
                "Trophies fade, but the stories behind them stay. 
                Every recognition marks a breakthrough, a bold step forward. 
                This is more than a wall of fame — It's a tribute to dedication, belief."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsNews;
