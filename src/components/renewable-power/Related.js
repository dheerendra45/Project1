import React from "react";

const RelatedProducts = () => {
  const products = [
    "Pellets",
    "Ferro Alloy",
    "Sponge Iron",
    "Wire Rod",
    "Stainless Steel",
    "Aluminium Foil",
    "Billets",
    "Color Coated Sheet",
    "Structural Steel",
    "TMT Bar",
    "Aluminium Roofing",
    "Stainless Steel Rebar",
    "TMT Structural"
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-md rounded-lg px-4 py-2 w-full max-w-xs hover:bg-gray-50 transition"
          >
            {product}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
