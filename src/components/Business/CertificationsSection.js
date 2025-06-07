import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import verifiedimg from '../../assets/Business/verified.png';
import cetificate1 from '../../assets/Business/c1.png';
import certificate2 from '../../assets/Business/c2.png';

const CertificationsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // toggle on each intersection
      },
      {
        threshold: 0.1,
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
      className={`bg-white py-16 max-w-7xl mx-auto px-4 transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="text-orange-500">Experience</span> and Expertise Verified
        </h2>
      </div>

      {/* Certification Logos */}
      <div
        className={`flex justify-center mb-16 transition-all duration-700 delay-150
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl">
          <img
            src={verifiedimg}
            alt="Certification Logos"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Left Side - Certificates */}
        <div className="flex justify-center space-x-6">
          <div className="bg-white border-8 border-amber-200 rounded-lg p-6 max-w-sm transition-transform duration-500 hover:scale-105 shadow-lg">
            <div className="bg-gray-200 h-80 rounded mb-4 overflow-hidden">
              <img
                src={cetificate1}
                alt="Certificate 1"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="bg-white border-8 border-amber-200 rounded-lg p-6 max-w-sm transition-transform duration-500 hover:scale-105 shadow-lg">
            <div className="h-80 rounded mb-4 overflow-hidden">
              <img
                src={certificate2}
                alt="ISO Certificate"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-8">
          {/* Setting Benchmarks */}
          <div className="flex items-start space-x-4">
            <div className="bg-green-600 rounded-full p-2 mt-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Setting Benchmarks</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem Ipsum Dolor Sit Amet Consectetur. Ipsum Ultrices Interdum Facilisis Nibh Vel Pretium Sit Feugiat Non. Nisl Diam Urna Vehicula Lacus.
              </p>
            </div>
          </div>

          {/* Better Future Verified */}
          <div className="flex items-start space-x-4">
            <div className="bg-green-600 rounded-full p-2 mt-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Better Future Verified</h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem Ipsum Dolor Sit Amet Consectetur. Eros Quam Commodo Semper Adipiscing Mi Eu. Nunc Sit Egestas Magna Morbi. Tortor Nunc Non.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default CertificationsSection;
