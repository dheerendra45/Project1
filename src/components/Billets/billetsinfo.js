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

const BilletsInfo = () => {
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
              <h2 className="text-4xl font-bold text-gray-900">Billets: The Backbone of Steel</h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <motion.div
              className="text-gray-700 leading-relaxed space-y-6"
              variants={fadeInUp}
            >
              <p>
              
                <br />
                Produced at the forefront of innovation, the steel billets from Shyam Metalics mark the initial phase of converting raw power into engineered superiority. These semi-finished steel products are meticulously manufactured in our advanced facilities, providing essential support for high-performance TMT bars, wire rods, and structural uses.
              </p>
              <p>
                A billet is usually formed with a rectangular or square cross-section that is suitable for subsequent processing. Steel billets are produced either directly through methods like continuous casting or extrusion, or indirectly by hot rolling an ingot or bloom.
              </p>
              <p>
                They serve as raw materials for manufacturing TMT Bars and structural products. In addition to using billets as input for our final products, we also market them as an intermediate goods, mainly in the states of Chhattisgarh, Uttar Pradesh, Punjab, Rajasthan, and Maharashtra. We also export billets to Nepal and Bangladesh.
              </p>
              <p>
                Our product line also includes stainless steel billet options to cater to specific industrial requirements, and we ensure competitive steel billet price structures across domestic and international markets.
              </p>
              <p>
                <strong>Sizes:</strong> 100 x 100, 125 x 125, 150 x 150, 160 x 160.
              </p>
            </motion.div>

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

export default BilletsInfo;
