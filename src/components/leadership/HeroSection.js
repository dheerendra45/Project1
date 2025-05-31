import React from 'react';
import img1 from '../../assets/leadership/img1.jpg'; // 300x330
import img2 from '../../assets/leadership/img2.png'; // 204x196
import img3 from '../../assets/leadership/img3.jpg'; // 272x216
import logo from '../../assets/leadership/logo.png'; // For SHYAM METALIKS
import bg from '../../assets/leadership/bg.jpg';

const HeroSection = () => {
  return (
    <div
      className="h-[514px] relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 h-full">
          
          {/* LEFT SIDE - Content */}
          <div className="flex flex-col gap-6 max-w-[500px]">
            <div className="font-lemonmilk font-bold text-[48px] leading-[59.04px] text-orange-400">
  THE DUMMY TEXT WILL
              <div className="font-lemonmilk font-bold text-[48px] leading-[59.04px] text-orange-300">
  COME HERE
</div>
            </div>
            <div className="font-roboto font-normal text-[24px] leading-[24px] text-gray-200">
  The Dummy Sub Text Will Come Here And the more and much more inside the sub section content will come here will come here so just haha, and hahajaha just the space feeling and here we go about to complete the dummy text.
</div>

            <button className="w-fit bg-orange-500 text-white rounded px-8 py-3 font-semibold hover:bg-orange-600 transition duration-300 shadow-md">
              Learn More
            </button>
          </div>
          
          {/* RIGHT SIDE - Images Layout */}
          <div className="relative w-full h-full flex justify-end items-center">
            <div className="relative w-[500px] h-[400px]">
              
              {/* Main large image - workers (img1) */}
              <img
                src={img1}
                alt="Industrial workers"
                className="absolute object-cover rounded shadow-lg z-10"
                style={{ 
                  width: '280px', 
                  height: '300px', 
                  top: '20px', 
                  left: '20px' 
                }}
              />
              
              {/* Small icon/image 2 - below text container, centered */}
              <img
                src={img2}
                alt="Small industrial icon"
                className="absolute object-cover rounded shadow-lg z-20"
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  top: '130px', 
                  right: '80px' 
                }}
              />
              
              {/* Bottom right image (img3) */}
              <img
                src={img3}
                alt="Industrial facility"
                className="absolute object-cover rounded shadow-lg z-10"
                style={{ 
                  width: '250px', 
                  height: '180px', 
                  bottom: '0', 
                  right: '20px' 
                }}
              />
              
              {/* Logo box - bottom left */}
              <div 
                className="absolute bg-orange-600 text-white font-semibold rounded shadow-lg z-20 flex items-center justify-center p-2"
                style={{ 
                  width: '200px', 
                  height: '80px', 
                  bottom: '0px', 
                  left: '20px' 
                }}
              >
                <img
                  src={logo}
                  className="max-w-full max-h-full object-contain"
                  alt="Shyam Metaliks Logo"
                />
              </div>
              
              {/* Top right info box - moved to fill the gap */}
              <div 
                className="absolute bg-black bg-opacity-80 text-white p-3 rounded shadow-lg z-30"
                style={{ 
                  width: '180px', 
                  height: '100px', 
                  top: '20px', 
                  right: '20px', 
                  
                }}
              >
                <div className="text-xs text-center font-medium pt-4">
                  SOME CONTENT WILL<br/>
                  COME HERE<br/>
                  AND FILL THE SPACE
                </div>
                
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;