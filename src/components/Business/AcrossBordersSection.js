import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import bgimg from '../../assets/Business/bg2.jpg';

const AcrossBordersSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-[24rem] flex items-center justify-center px-4 sm:px-8 transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundColor: '#ff6b35', // fallback color
          filter: 'brightness(0.6)', // darken background for contrast
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center sm:text-left">
            Shyam <span className="text-orange-500">Across Borders</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed text-center sm:text-left">
            Connect with Shyam Metals and let us know your requirement. Be assured of quality solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 shadow-md
              transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              <span>GIVE US A CALL</span>
            </button>

            <button
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 shadow-md
              transform hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              <span>MAIL US</span>
            </button>
          </div>
        </div>
      </div>

      {/* Steel Worker Silhouette Effect */}
      <div className="absolute right-0 bottom-0 opacity-40">
        <div className="w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AcrossBordersSection;
