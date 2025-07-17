import React, { useState, useEffect } from "react";
import { LineChart, CalendarDays, TrendingUp, RefreshCw } from "lucide-react";

const SharePriceSection = () => {
  // Stock price state - similar to navbar implementation
  const [stockData, setStockData] = useState({
    bse: {
      symbol: "SHYAMMETL.BO",
      shortName: "SHYAM METALICS AND ENGY LTD",
      currentPrice: 0,
      high: 0,
      low: 0,
      prevClose: 0,
      change: 0,
      changePercent: 0,
    },
    nse: {
      symbol: "SHYAMMETL.NS",
      shortName: "SHYAM METALICS AND ENGY LTD",
      currentPrice: 0,
      high: 0,
      low: 0,
      prevClose: 0,
      change: 0,
      changePercent: 0,
    },
  });

  const [selectedExchange, setSelectedExchange] = useState("nse"); // Default to NSE
  const [stockLoading, setStockLoading] = useState(true);
  const [stockError, setStockError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Function to fetch stock data - same as navbar
  const fetchStockData = async () => {
    try {
      setStockLoading(true);
      setStockError(null);

      // Fetch both BSE and NSE data
      const [bseResponse, nseResponse] = await Promise.all([
        fetch(
          "https://project1-backend-1hja.onrender.com/api/stock/price/SHYAMMETL.BO"
        ),
        fetch(
          "https://project1-backend-1hja.onrender.com/api/stock/price/SHYAMMETL.NS"
        ),
      ]);

      if (!bseResponse.ok || !nseResponse.ok) {
        throw new Error(
          `HTTP error! BSE status: ${bseResponse.status}, NSE status: ${nseResponse.status}`
        );
      }

      const bseData = await bseResponse.json();
      const nseData = await nseResponse.json();

      // Calculate change and percentage change
      const calculateChange = (current, prev) => {
        const change = current - prev;
        const changePercent = prev > 0 ? (change / prev) * 100 : 0;
        return { change, changePercent };
      };

      const bseChange = calculateChange(
        bseData.currentPrice || 0,
        bseData.prevClose || 0
      );
      const nseChange = calculateChange(
        nseData.currentPrice || 0,
        nseData.prevClose || 0
      );

      setStockData({
        bse: {
          symbol: bseData.symbol || "SHYAMMETL.BO",
          shortName: bseData.shortName || "SHYAM METALICS AND ENGY LTD",
          currentPrice: bseData.currentPrice || 0,
          high: bseData.high || 0,
          low: bseData.low || 0,
          prevClose: bseData.prevClose || 0,
          change: bseChange.change,
          changePercent: bseChange.changePercent,
        },
        nse: {
          symbol: nseData.symbol || "SHYAMMETL.NS",
          shortName: nseData.shortName || "SHYAM METALICS AND ENGY LTD",
          currentPrice: nseData.currentPrice || 0,
          high: nseData.high || 0,
          low: nseData.low || 0,
          prevClose: nseData.prevClose || 0,
          change: nseChange.change,
          changePercent: nseChange.changePercent,
        },
      });

      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setStockError(error.message);

      // Set fallback data if requests fail
      setStockData((prev) => ({
        bse: prev.bse || {
          symbol: "SHYAMMETL.BO",
          shortName: "SHYAM METALICS AND ENGY LTD",
          currentPrice: 869.2,
          high: 0,
          low: 0,
          prevClose: 0,
          change: 0,
          changePercent: 0,
        },
        nse: prev.nse || {
          symbol: "SHYAMMETL.NS",
          shortName: "SHYAM METALICS AND ENGY LTD",
          currentPrice: 869.2,
          high: 0,
          low: 0,
          prevClose: 0,
          change: 0,
          changePercent: 0,
        },
      }));
    } finally {
      setStockLoading(false);
    }
  };

  // Format timestamp
  const formatTimestamp = (date) => {
    if (!date) return "Loading...";
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
  };

  // Get current exchange data
  const getCurrentExchangeData = () => {
    return stockData[selectedExchange] || stockData.nse;
  };

  // Manual refresh function
  const handleRefresh = () => {
    fetchStockData();
  };

  // Toggle exchange
  const toggleExchange = () => {
    setSelectedExchange(selectedExchange === "nse" ? "bse" : "nse");
  };

  useEffect(() => {
    // Fetch stock data on component mount
    fetchStockData();

    // Set up interval to fetch stock data every 30 seconds
    const stockInterval = setInterval(fetchStockData, 30000);

    return () => {
      clearInterval(stockInterval);
    };
  }, []);

  const currentData = getCurrentExchangeData();
  const isPositive = currentData.change >= 0;

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
          <div className="flex items-center gap-2 mb-2">
            <div
              className="text-sm text-gray-700 cursor-pointer hover:text-orange-500 transition-colors duration-200"
              onClick={toggleExchange}
            >
              {selectedExchange.toUpperCase()}{" "}
              <span className="text-orange-500">▾</span>
            </div>
            <button
              onClick={handleRefresh}
              disabled={stockLoading}
              className={`p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 ${
                stockLoading ? "animate-spin" : ""
              }`}
              title="Refresh stock price"
            >
              <RefreshCw className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="h-[1px] w-[60px] bg-black mb-1" />

          <div className="text-xs text-gray-500 mb-1">
            {formatTimestamp(lastUpdated)}
          </div>

          {stockLoading ? (
            <div className="text-[66px] leading-[82px] font-light text-gray-400 text-right align-middle font-gilroy animate-pulse">
              Loading...
            </div>
          ) : stockError ? (
            <div className="text-[66px] leading-[82px] font-light text-red-400 text-right align-middle font-gilroy">
              Error
            </div>
          ) : (
            <div className="text-[66px] leading-[82px] font-light text-black text-right align-middle font-gilroy">
              ₹
              <span className="text-[66px]">
                {currentData.currentPrice.toFixed(2)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 mt-6 text-orange-500 text-sm font-medium">
        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors duration-200">
          <LineChart className="w-4 h-4" />
          <span>Share monitor</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors duration-200">
          <CalendarDays className="w-4 h-4" />
          <span>Financial calendar</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors duration-200">
          <TrendingUp className="w-4 h-4" />
          <span>Results</span>
        </div>
      </div>
    </div>
  );
};

export default SharePriceSection;
