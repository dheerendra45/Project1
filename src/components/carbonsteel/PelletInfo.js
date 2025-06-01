import React from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

const PelletInfo = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Pellet</h2>
              <div className="w-3 h-3 bg-orange-500 ml-2"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The company specializes in the production of iron pellets, which are small, solid balls of iron ore that are 
                used as a key raw material in the steel industry. These iron pellets possess specific properties that make 
                them highly suitable for various applications.
              </p>

              <p>
                One important characteristic of the iron pellets is their cold crushing strength (CCS) of 210+ units. CCS 
                refers to the ability of the pellets to withstand compression forces without breaking or disintegrating. The 
                high CCS value indicates that these pellets are strong and durable, making them ideal for use in steel 
                production processes.
              </p>

              <p>
                Additionally, the iron pellets have a porosity of 24+ units. Porosity refers to the presence of tiny pores or 
                open spaces within the material. The high porosity value means that the pellets have a significant 
                number of these pores, which can be beneficial for certain applications. For example, in the direct 
                reduced iron (DRI) manufacturing process, the porosity of the iron pellets helps facilitate the reduction of 
                oxygen in the kiln. This process is essential for producing high-quality DRI fem (ferrous metallics) with a 
                grade of 80+.
              </p>

              <p>
                Moreover, the iron pellets have a mean particle size (MPS) of approximately 9.5-10 units. The particle 
                size plays a crucial role in various industrial processes. In this case, the specific particle size of the iron 
                pellets is designed to optimize their performance during the reduction process. The size range chosen 
                helps ensure efficient reduction of oxygen in the kiln, contributing to consistent grade results in the final 
                DRI fem product.
              </p>

              <p>
                These high-quality iron pellets manufactured by the company offer several advantages to the steel 
                industry and various sectors that rely on iron-based materials. They are considered as one of the best 
                steel products available in Kolkata, nearby, and all across India. The consistent grade and optimized 
                characteristics of these iron pellets make them a reliable choice for construction materials, including the 
                production of high-quality steel, infrastructure development, and other applications in the Kolkata area 
                and its surroundings.
              </p>
            </div>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors">
              GET SPECIFICATION
            </button>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-orange-500 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Top-quality Ballistic</h3>
              <h3 className="text-2xl font-bold mb-4">Separator Machine!</h3>
              <p className="text-orange-100 mb-8">Lorem ipsum dolor sit amet</p>
              
              <button className="bg-white text-gray-800 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 mb-8">
                <Download className="w-4 h-4" />
                <span>Download Boucher</span>
              </button>

              <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PelletInfo;