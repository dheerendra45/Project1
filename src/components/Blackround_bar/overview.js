import React from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const HollowInfo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
          >
            <div className="flex items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Black Round Bars – Strength, Precision & Durability
              </h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <motion.p
              className="text-gray-700 leading-relaxed space-y-6"
              variants={fadeInUp}
            >
              Shyam Metalics manufactures high-quality black round bars, also known as mild steel round bars, designed to meet the rigorous demands of various industrial applications. These bars are renowned for their:
              <br /><br />
              <strong>• High tensile strength</strong><br />
              <strong>• Smooth surface finish</strong><br />
              <strong>• Excellent machinability</strong>
              <br /><br />
              Manufactured under stringent quality control protocols, our round bars ensure dimensional accuracy, uniform performance, and reliability in downstream processes. They are ideal for use in:
              <br /><br />
              <strong>• Fabrication and construction</strong><br />
              <strong>• Automotive components</strong><br />
              <strong>• General engineering and machining projects</strong>
              <br /><br />
              With the flexibility of customizable sizes and grades, Shyam Metalics black round bars are a trusted choice for professionals across automotive, engineering, and infrastructure sectors.
              <br /><br />
              While primarily focusing on mild steel, carbon steel, and alloy steel, we also cater to the growing demand for stainless steel round bars through custom orders and bulk supply, serving a wide range of specialized engineering applications.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              GET SPECIFICATION
            </motion.button>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
          >
            <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Top-quality Ballistic</h3>
              <h3 className="text-2xl font-bold mb-4">Separator Machine!</h3>
              <p className="text-orange-100 mb-8">Lorem ipsum dolor sit amet</p>

              <button className="bg-white text-gray-800 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 mb-8">
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </button>

              <div className="space-y-4 text-white text-sm">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@alwazo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+91-8588070101</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p>RZ 79-80,</p>
                    <p>Dabri Extensions (Main), Dabri,</p>
                    <p>New Delhi -110045</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HollowInfo;
