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

const PelletInfo = () => {
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
                Pellets: Precision in Every Sphere
              </h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <motion.p
              className="text-gray-700 leading-relaxed space-y-6"
              variants={fadeInUp}
            >
              <strong>What are Pellets?</strong> Pellets, also known as iron ore pellets,
              are small, spherical balls of iron ore fines that have been processed
              to improve efficiency and consistency in steelmaking.
              <br /><br />
              These high-grade pellets are formed by agglomerating iron ore concentrate
              and heating them in rotary kilns or straight grate furnaces. This process
              enhances their metallurgical properties, making them ideal for use in
              DRI (Direct Reduced Iron) kilns and blast furnaces.
              <br /><br />
              At Shyam Metalics, we manufacture steel pellets that deliver superior strength,
              reducibility, and thermal resistance. Whether utilized in-house or supplied
              to our partners, our pellets support our vision of environmentally responsible,
              high-performance steel production.
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

export default PelletInfo;
