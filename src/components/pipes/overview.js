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
                Pipes & Hollow Sections: Built for Strength, Durability & Precision
              </h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <motion.p
              className="text-gray-700 leading-relaxed space-y-6"
              variants={fadeInUp}
            >
              We provide a diverse selection of ERW Pipes and Structural Hollow Sections, engineered for reliability, robustness, and versatility in various industrial and infrastructure applications.
              <br /><br />
              Our products are recognized for their superior tensile strength, making them perfect for heavy-duty and structural applications.
              <br /><br />
              Available in galvanized and coated options, they offer outstanding corrosion resistance, ensuring extended performance even in demanding conditions.
              <br /><br />
              Furthermore, we offer customization options in dimensions and thicknesses to cater to specific project needs, providing adaptability without compromising quality.
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
                <span>Download Boucher</span>
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
