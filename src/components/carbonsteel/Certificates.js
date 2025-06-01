import React, { useState } from 'react';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const certificates = [
    { id: 1, title: "Certificate 1" },
    { id: 2, title: "Certificate 2" },
    { id: 3, title: "Certificate 3" }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-2 border-blue-500 rounded-lg p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Certificates</h2>
          
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {certificates.map((cert, index) => (
              <div key={cert.id} className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                <div className="text-gray-600 text-lg">{cert.title}</div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-sm transition-colors ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;