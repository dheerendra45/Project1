const SpecialitiesSection = () => {
  return (
    <div className="relative bg-gray-800 text-white py-16">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        {/* Replace this div with your specialities background image */}
        <div className="w-full h-full bg-gray-700"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">OUR SPECIALITIES</h2>
        <p className="text-lg max-w-2xl">
          Sed ut perspiciatis unde omnis iste natus error sit 
          voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quae ab illo 
          inventore veritatis et quasi.
        </p>
      </div>
    </div>
  );
};
export default SpecialitiesSection