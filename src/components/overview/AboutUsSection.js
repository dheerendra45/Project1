const AboutUsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          {/* Image Placeholder 1 */}
          <div className="h-64 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
          
          <div className="bg-orange-500 text-white p-8 rounded flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <h4 className="text-xl font-semibold mb-4">Years of Trust</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet 
              consectetur. Eu 
              condimentum ut ipsum 
              elementum lectus. In 
              vulputate pulvinar.
            </p>
          </div>
          
          {/* Image Placeholder 2 */}
          <div className="h-48 rounded col-span-2 border-2 border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>
        
        <div>
          <p className="text-orange-500 font-semibold mb-2">About Us</p>
          <h2 className="text-3xl font-bold mb-8">HOW WE WORK</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-white text-xl">👥</div>
              </div>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-white text-xl">👥</div>
              </div>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mt-8 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit and an 
            voluptatem accusantium doloremque laudantium, then 
            totam rem aperiam, eaque ipsa quae ab illo its meets the.
          </p>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold w-full">
            View Our Product
          </button>
        </div>
      </div>
    </div>
  );
};
export default AboutUsSection