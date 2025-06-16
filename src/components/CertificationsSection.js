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
    <div className="bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Our Certifications & Recognitions
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Recognized for excellence in quality, workplace culture, and environmental responsibility.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* Duplicate logos for seamless looping */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-32 w-56 bg-white rounded-lg shadow-sm border border-gray-200 p-6 mx-3 flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Certification ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
            View All
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move left by 50% of the total container width */
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          /* Make width dynamic based on viewport */
          width: 200%;
        }
      `}</style>
    </div>
  );
};

export default CertificationsSection;