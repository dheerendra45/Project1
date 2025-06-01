import { Globe, ChevronDown } from 'lucide-react';

export default function Start() {
  return (
    <div className="bg-black text-white px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full overflow-hidden">
      
      {/* Left Section */}
      <div className="text-sm sm:text-base mb-2 sm:mb-0 w-full sm:w-auto text-center sm:text-left">
        <h3 className="ml-2 sm:ml-0">€208.00 +2.72</h3>
      </div>

      {/* Center Section */}
      <div className="flex-1 text-center mb-2 sm:mb-0">
        <h3 className="font-bold text-sm sm:text-base">
          Lorem Ipsum Dollar Site ent
        </h3>
      </div>

      {/* Right Section with scroll and center on mobile */}
      <div className="w-full sm:w-auto overflow-x-auto">
        <div className="flex gap-4 items-center justify-center sm:justify-end text-sm sm:text-base whitespace-nowrap">
          <a href="#" className="flex items-center gap-1 hover:underline">
            Employee Login
            <span className="text-white">{'>'}</span>
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Globe className="w-4 h-4" />
            Global (English)
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
