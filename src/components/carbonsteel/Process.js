import React, { useEffect } from 'react';
import { Play } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const scalePulse = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Process = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-center mb-12"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-900">Process</h2>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="h-[300px] sm:h-[400px] md:h-[500px] w-full"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <div className="bg-gray-300 rounded-lg h-full w-full flex items-center justify-center relative overflow-hidden">
            <motion.div
              className="p-6 bg-black bg-opacity-60 rounded-full cursor-pointer hover:bg-opacity-80 transition-all"
              variants={scalePulse}
              animate="animate"
            >
              <Play className="w-12 h-12 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
