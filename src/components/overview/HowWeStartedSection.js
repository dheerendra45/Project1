import React from 'react';
import a1 from "./images/3.png";
import a2 from "./images/4.png";
import a3 from "./images/5.png";
import a4 from "./images/6.png";
import a5 from "./images/7.png";

const HowWeStartedSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">HOW WE STARTED</h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center">
        <div className="h-64 rounded overflow-hidden">
          <img src={a1} alt="a1" className="w-full h-full object-cover rounded" />
        </div>
        <div className="flex flex-col justify-center text-gray-600 space-y-4">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit and an 
            voluptatem accusantium doloremque laudantium, then 
            totam rem aperiam, eaque ipsa quae ab illo its meets the.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit and an 
            voluptatem accusantium doloremque laudantium, then 
            totam rem aperiam, eaque ipsa quae ab illo its meets the.
          </p>
        </div>
        <div className="h-64 rounded overflow-hidden">
          <img src={a2} alt="a2" className="w-full h-full object-cover rounded" />
        </div>
      </div>

      {/* Row 2 with smaller a3 and a4 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center">
        <div className="h-48 rounded overflow-hidden">
          <img src={a3} alt="a3" className="w-full h-full object-cover rounded" />
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <div className="text-white text-2xl">👥</div>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Sed ut perspiciatis unde omnis iste natus error 
            sit so just the and 
            voluptatem accusantium doloremque 
            laudantium, that's it we needed 
            totam rem aperiam, eaque ipsa quae ab illo
          </p>
        </div>
        <div className="h-48 rounded overflow-hidden">
          <img src={a4} alt="a4" className="w-full h-full object-cover rounded" />
        </div>
      </div>

      {/* Row 3 with clearly visible a5 */}
      <div className="mt-16 flex ">
        <div className="w-full overflow-hidden  ">
          <img src={a5} alt="Tab List" className="w-full h-full object-contain rounded" />
        </div>
      </div>
    </div>
  );
};

export default HowWeStartedSection;
