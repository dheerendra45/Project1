import React from 'react';
import { Play } from 'lucide-react';

const Process = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Process</h2>
        </div>

        {/* Video Section */}
        <div className="h-[500px]">
  <div className="bg-gray-300 rounded-lg h-full w-full flex items-center justify-center">

  <div className="p-6 bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all cursor-pointer">
    <Play className="w-12 h-12 text-white fill-current" />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Process;