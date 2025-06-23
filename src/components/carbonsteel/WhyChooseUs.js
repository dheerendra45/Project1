import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img27 from "../../assets/products/img27.jpg";

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const reasons = [
    {
      title: "Strength",
      tag: "Exceptional Quality & Consistency",
      description: `High Iron Content (65-72%): Increases yield and minimizes slag in blast furnaces and DRI facilities. <br>Uniform Dimensions (8-16mm): Promotes smooth operation in furnaces with optimal gas flow. <br>Low Contaminants (&lt;2% Al₂O₃/SiO₂): Reduces energy consumption and enhances the purity of steel.`
    },
    {
      title: "Technique",
      tag: "Outstanding Strength & Durability",
      description: `Cold Crushing Strength (250-350 kg/pellet): Can endure handling and charging without breaking. <br>Minimized Dust Production: Limits material loss and improves safety in the workplace.`
    },
    {
      title: "Supply Chain",
      tag: "Improved Metallurgical Efficiency",
      description: `With manufacturing facilities strategically located near raw material sources, we ensure faster production and timely delivery.`
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    }),
  };

  return (
    <div ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            custom={0}
          >
            <div className="bg-gray-300 h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={img27}
                alt="Steel Construction"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            custom={0.5}
          >
            <div className="flex items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial="hidden"
                  animate={controls}
                  variants={fadeUp}
                  custom={index + 1}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{reason.title}</h3>
                    <p className="text-sm text-orange-500 italic mb-1">{reason.tag}</p>
                    <p
                      className="text-gray-600 leading-relaxed text-sm"
                      dangerouslySetInnerHTML={{ __html: reason.description }}
                    ></p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
