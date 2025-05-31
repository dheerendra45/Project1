const HowWeStartedSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">HOW WE STARTED</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Image Placeholder 1 */}
        <div className="h-64 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit and an 
            voluptatem accusantium doloremque laudantium, then 
            totam rem aperiam, eaque ipsa quae ab illo its meets the.
          </p>
          <p className="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit and an 
            voluptatem accusantium doloremque laudantium, then 
            totam rem aperiam, eaque ipsa quae ab illo its meets the.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Image Placeholder 2 */}
        <div className="h-64 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
        
        {/* Image Placeholder 3 */}
        <div className="h-64 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
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
    </div>
  );
};
export default HowWeStartedSection