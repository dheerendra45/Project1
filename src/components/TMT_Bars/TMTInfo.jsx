import React from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import a1 from '../../assets/TMT_Bars/tmtinfo.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const TMTInfo = () => {
  const controls = useAnimation();
  const imgControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
      imgControls.start('visible');
    } else {
      controls.start('hidden');
      imgControls.start('hidden');
    }
  }, [inView, controls, imgControls]);

  return (
    <div ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
          >
            {/* Animated Image */}
            <motion.img
              src={a1}
              alt="Structural Steel"
              className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
              initial="hidden"
              animate={imgControls}
              variants={imageVariants}
            />

            {/* Heading & Paragraph */}
            <div className="flex items-center mb-4 mt-6">
              <h2 className="text-4xl font-bold text-gray-900">
                TMT Bars
              </h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <motion.p
              className="text-gray-700 leading-relaxed space-y-6"
              variants={fadeInUp}
            >
              TMT bars form the backbone of modern construction, offering a perfect balance of strength and flexibility.. Manufactured using advanced Thermo-Mechanical Treatment technology, our bars feature a tough outer surface and a soft core—ideal for seismic resistance and long-term durability. The construction of residential buildings, industrial facilities, transmission towers, dams, roads, and more necessitates the use of wire rods, structural products (such as Beams, Channels, and Angles), along with TMT bars.<br></br>
              We supply with top-quality TMT bars that combine exceptional durability with excellent malleability. Our wide distribution network spans Odisha, West Bengal, Tripura, Jharkhand, Sikkim, Bihar, Manipur, Arunachal Pradesh, Assam, Uttar Pradesh, Uttarakhand, Meghalaya, Haryana, and Punjab, we are recognized as the top TMT bar in India and the best TMT bar for house construction.<br></br>
              As a trusted TMT bar manufacturer, we focus on delivering the best quality sariya to meet your building needs. We also offer competitive pricing comparable to Tata TMT bar price for similar grades. Whether you refer to it as TMT saria or TMT bar, Shyam Metalics ensures quality and consistency in every batch.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors"
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

export default TMTInfo;
