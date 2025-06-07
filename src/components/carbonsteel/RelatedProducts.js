import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import billet from "../../assets/products/billets.jpg";

const RelatedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleProducts = 3;

  const products = [
    { id: 1, name: "Billets", image: billet, isImported: true },
    { id: 2, name: "Stirrups Iron", image: "stirrups-image", isImported: false },
    { id: 3, name: "Fly Ash Bricks", image: "flyash-image", isImported: false },
    { id: 4, name: "Steel Bars", image: "steel-bars-image", isImported: false },
    { id: 5, name: "Wire Rods", image: "wire-rods-image", isImported: false }
  ];

  const maxSlide = Math.max(0, products.length - visibleProducts);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <div className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Related Product</h2>
          <div className="w-3 h-3 bg-orange-500 ml-2"></div>
        </div>

        <div className="relative">
          {/* Product Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleProducts)}%)` }}
            >
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                  custom={i}
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate={controls}
                >
                  <div className="relative bg-gray-300 h-64 rounded-lg overflow-hidden group cursor-pointer">
                    {product.isImported ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                        <div className="text-white text-sm text-center px-4">
                          {product.name}
                          <br />
                          <small className="text-gray-200">(Placeholder)</small>
                        </div>
                      </div>
                    )}

                    {/* Fallback div */}
                    <div
                      className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center absolute top-0 left-0"
                      style={{ display: 'none' }}
                    >
                      <div className="text-white text-sm text-center px-4">
                        {product.name}
                        <br />
                        <small className="text-gray-200">(Image failed to load)</small>
                      </div>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
