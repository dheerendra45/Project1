import React from 'react';
import img27 from "../../assets/products/img27.jpg"
const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Clean & Homogeneous Steel Quality",
      description: "Best in class raw materials used during the extensive process of production to manufacture the cleanest steel."
    },
    {
      title: "Excellent Weldability",
      description: "Smooth surface and minimal to no porosity in the steel products increases weldability outruling any breakages."
    },
    {
      title: "Consistent Supply",
      description: "State-of-the-art integrated steel plants to increase production capacity in line with the government's target to reach 300 MTPA by 2030."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
  <div className="bg-gray-300 h-96 rounded-lg overflow-hidden">
    {/* Replaced placeholder with actual image */}
    <img
      src={img27}
      alt="Steel Construction"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;