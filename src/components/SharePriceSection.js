import React from "react";
import { LineChart, CalendarDays, TrendingUp } from "lucide-react";

const SharePriceSection = () => {
  return (
    <div className="mx-[10%] my-[2%] bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-gray-200 pb-6">
        {/* Left Side */}
        <div>
          <h2 className="text-[36px] font-semibold leading-[40px] tracking-[-0.5px] align-middle font-inter mb-2">
            Share price
          </h2>

          <p className="text-gray-600 max-w-md text-[16px] font-normal leading-[24px] tracking-[-0.5px] align-middle font-inter">
            Our share monitor allows investors and analysts to track our share
            price history in the stock exchanges where we are listed.
          </p>
        </div>

        {/* Right Side */}
        <div className="mt-4 lg:mt-0 flex flex-col items-end text-right">
          <div className="text-sm text-gray-700 mb-1">
            India <span className="text-orange-500">▾</span>
          </div>
          <div className="h-[1px] w-[60px] bg-black mb-1" />
          <div className="text-xs text-gray-500 mb-1">
            08.07.2025 (13:59 GMT)
          </div>
          <div className="text-[66px] leading-[82px] font-light text-black text-right align-middle font-gilroy">
            ₹<span className="text-[66px]">869.20</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 mt-6 text-orange-500 text-sm font-medium">
        <div className="flex items-center gap-2 cursor-pointer">
          <LineChart className="w-4 h-4" />
          <span>Share monitor</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <CalendarDays className="w-4 h-4" />
          <span>Financial calendar</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <TrendingUp className="w-4 h-4" />
          <span>Results</span>
        </div>
      </div>
    </div>
  );
};

export default SharePriceSection;
