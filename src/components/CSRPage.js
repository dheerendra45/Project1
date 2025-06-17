import React from 'react';
import { motion } from 'framer-motion';
import csr from "../assets/csr.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CSRPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full border-b-2 overflow-hidden">
        
        {/* Left side with image and animation */}
        <motion.div
          className="w-full md:w-1/2 bg-gray-800 relative h-96 md:h-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { scale: 0.95, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 1, ease: 'easeOut' }
            }
          }}
        >
          <div className="absolute inset-0">
            <img 
              src={csr} 
              alt="Student in classroom" 
              className="w-full h-full object-cover opacity-80" 
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2 bg-white p-10 pr-12">
          <h3 className="text-2xl font-bold mb-4">Corporate Social Responsibility</h3>
          <h2 className="text-4xl font-bold mb-12">Building Communities, Empowering Lives</h2>

          {/* Counter Blocks */}
          <div className="flex flex-wrap justify-between mb-16">
            {[
              { value: '100+', label: 'Schools Supported' },
              { value: '20+', label: 'Teachers Trained' },
              { value: '10,000+', label: 'Lives Impacted' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mb-8 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-orange-500">{item.value}</h2>
                <p className="text-xl font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Learn More About Our Impact
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CSRPage;
