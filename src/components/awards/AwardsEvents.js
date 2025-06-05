import React from 'react';
import { motion } from 'framer-motion';
import cardimg from '../../assets/awards/c1.jpg';

const AwardsEvents = () => {
  const events = [
    {
      id: 1,
      title: "The Event Headline",
      subtitle: "The sub text the sub story about the news headline"
    },
    {
      id: 2,
      title: "The Event Headline",
      subtitle: "The sub text the sub story about the news headline"
    },
    {
      id: 3,
      title: "The Event Headline",
      subtitle: "The sub text the sub story about the news headline"
    }
  ];

  // Animations for main heading and paragraph
  const mainHeadingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const mainParagraphVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { delay: 0.3, duration: 0.8, ease: 'easeOut' }
    }
  };

  // Card container animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  // Text drop-from-top animation inside cards
  const textVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with animation */}
        <div className="mb-12 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4"
            variants={mainHeadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}  // <-- triggers animation every time in view
          >
            THE EVENTS
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
            variants={mainParagraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}  // <-- triggers animation every time in view
          >
            Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, 
            a bold step forward. This is more than a wall of fame — It's a tribute to dedication, belief, and resilience.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="group cursor-pointer w-full max-w-[360px] h-[450px] mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}  // <-- triggers animation every time in view
              custom={i}
            >
              <div className="relative overflow-hidden rounded-xl w-full h-full shadow-lg">
                {/* Image */}
                <img
                  src={cardimg}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                {/* Text Content with drop animation */}
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-orange-400 text-sm">{event.subtitle}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsEvents;
