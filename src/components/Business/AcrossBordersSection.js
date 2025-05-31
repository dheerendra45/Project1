import React from 'react';
import { Phone, Mail } from 'lucide-react';
import bgimg from '../../assets/Business/bg2.jpg';

const AcrossBordersSection = () => {
  return (
    <div className="relative min-h-96 flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundColor: '#ff6b35', // Fallback orange color
        }}
      >
        {/* Orange Overlay */}
     
      </div>

      {/* Content */}
      <div className="relative z-10 w-[500px] ml-16 mx-auto pl-2 py-16">
        <div className="bg-white rounded-lg p-8 md:p-12 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shyam <span className="text-orange-500">Across Borders</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Connect with Shyam Metals and let us know your requirement. Be assured of quality solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>GIVE US A CALL</span>
            </button>
            
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-4 px-8 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>MAIL US</span>
            </button>
          </div>
        </div>
      </div>

      {/* Steel Worker Silhouette Effect */}
      <div className="absolute right-0 bottom-0 opacity-50">
        <div className="w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AcrossBordersSection;
