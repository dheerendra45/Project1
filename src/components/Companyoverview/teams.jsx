import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from "../../assets/Companyoverview/team1.jpg";
import a2 from "../../assets/Companyoverview/team2.jpg";
import a3 from "../../assets/Companyoverview/team3.jpg";
import { FaFacebookF, FaTwitter, FaSkype, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Teams() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const animateItem = (delay = 0) =>
    isInView
      ? {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 6,
          },
        }
      : {};

  const teamData = [
    {
      img: a1,
      name: "WILLIAM CHARLES",
      role: "CEO company",
    },
    {
      img: a2,
      name: "ANTHONY JEFFREY",
      role: "Engineer",
    },
    {
      img: a3,
      name: "STEPHEN SCOTT",
      role: "Engineer",
    },
  ];

  return (
    <div ref={ref} className="px-6 py-16 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold">Our Teams</h1>
      <div className="w-20 h-1 bg-orange-500 mx-auto mt-2 mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur. Pellentesque pellentesque commodo semper
        at consequat enim et auctor donec. Pretium ullamcorper ullamcorper duis urna sed
        vitae aliquet massa at. Eros.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={animateItem(index * 0.2)}
            className="bg-white rounded shadow overflow-hidden"
          >
            <div className="relative">
              <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
              <div className="absolute top-1/8 left-6 right-6 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-3 z-10">
                <h1 className="text-lg font-bold">{member.name}</h1>
                <h2 className="text-sm">{member.role}</h2>
              </div>
            </div>
            <div className="bg-white text-gray-700 px-4 py-6 h-48 flex flex-col justify-between mt-4">
              <p className="text-sm mb-4">
                The Industry Team at Compass is an elite team of industry influencers & residential consultants assembled.
              </p>
              <div className="flex justify-center gap-3 text-lg text-gray-500">
                <FaFacebookF />
                <FaTwitter />
                <FaSkype />
                <FaInstagram />
                <FaEnvelope />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}