import React from "react";
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo2.png';
import logo3 from '../assets/logos/logo3.png';
import logo4 from '../assets/logos/logo4.png';
import logo5 from '../assets/logos/logo5.png';
import logo6 from '../assets/logos/logo6.png';
import logo7 from '../assets/logos/logo7.png';
import logo8 from '../assets/logos/logo8.png';

const CertificationsSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Our Certifications & Recognitions
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Recognized for excellence in quality, workplace culture, and environmental responsibility.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              <img src={logo} alt={`Certification ${index + 1}`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
