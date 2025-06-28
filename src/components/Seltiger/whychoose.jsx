import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import a1 from '../../assets/Seltiger/whychoose.png';
import a2 from '../../assets/Seltiger/symbol1.png';
import a3 from '../../assets/Seltiger/symbol2.png';
import a4 from '../../assets/Seltiger/symbol3.png';
import a5 from '../../assets/Seltiger/symbol4.png';
import a6 from '../../assets/Seltiger/symbol5.png';

export default function Whychoose() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    amount: 0.2,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const features = [
    {
      icon: a2,
      title: 'Industry Leadership',
      desc: 'One of India’s fastest-growing names in construction-grade steel and aluminium solutions',
    },
    {
      icon: a3,
      title: 'Value for Money',
      desc: ' Best-in-class quality at highly competitive prices',
    },
    {
      icon: a4,
      title: 'Reliable Supply Chain',
      desc: 'Seamless logistics ensure on-time delivery across the country',
    },
    {
      icon: a5,
      title: 'Engineering Expertise:',
      desc: 'Customised solutions for homes, infrastructure, and industry',
    },
    {
      icon: a6,
      title: 'SEL-Certified Durability',
      desc: ' Every product meets our highest benchmarks of Safety, Efficiency,and Longevity',
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative py-20 px-6 md:px-20 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${a1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-16"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        Why Choose SEL Tiger?
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex items-start gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-black flex items-center justify-center">
              <img src={feature.icon} alt="" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h2 className="text-orange-400 font-semibold text-lg">{feature.title}</h2>
              <p className="text-sm text-white">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
