import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import box1bg from '../../assets/Sustainability/Football4.jpg';
import box2bg from '../../assets/Sustainability/Football5.jpg';
import box3bg from '../../assets/Sustainability/Football6.jpg'; // Now treated as image
import box4bg from '../../assets/Sustainability/Tution6.jpg';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

const SustainabilityTransparency = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const cards = [
    {
      id: 1,
      bg: box1bg,
      title: 'Ethics & compliance',
      label: 'Sustainability',
      desc: 'Integrity in action',
    },
    {
      id: 2,
      bg: box2bg,
      title: 'Management & Board of Directors',
      label: 'Group',
      tall: true,
    },
    {
      id: 3,
      bg: box3bg, // previously video, now image
      title: 'Strategy & values',
      label: 'Group',
      desc: 'A Strategy that Connects - Values That Inspire',
    },
    {
      id: 4,
      bg: box4bg,
      title: 'Permits & certifications',
      label: 'Services',
      desc: 'Relevant standards and regulations',
      tall: true,
    },
  ];

  return (
    <div className="bg-gray-50 py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-6">
            Expanded CSR Initiatives
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
            At Shyam Metalics, we are committed to Corporate Social Responsibility programs that go beyond compliance—programs that create real, lasting change. Our CSR initiatives span across education, healthcare, livelihoods, and sustainable infrastructure, designed to empower communities at the grassroots.
            In the education sector, we are establishing Digital Education Hubs in underserved rural areas. These include setting up smart classrooms in government schools, offering coding and digital literacy classes, and providing free community internet zones in remote locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`relative overflow-hidden rounded-lg p-6 text-white ${
                card.tall ? 'row-span-2 h-[600px]' : 'h-96'
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${card.bg})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 z-0" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-300 mb-2">{card.label}</p>
                  <h3 className="text-xl font-medium mb-2">{card.title}</h3>
                  {card.desc && (
                    <p className="text-sm text-gray-300 mb-2">{card.desc}</p>
                  )}
                </div>
                <button className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-600 transition-colors self-start">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityTransparency;
