import React, { useEffect, useRef, useState } from 'react';
import WorldMapImage from '../assets/world-map.png';

function LocationsMap() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  const stats = [
    { 
      label: 'Clients Served', 
      value: '25,000+ (Domestic & Global)', 
      numericValue: 25000,
      suffix: '+ (Domestic & Global)'
    },
    { 
      label: 'Annual growth', 
      value: '32% (Revenue: 12,500 Cr)', 
      numericValue: 32,
      suffix: '% (Revenue: 12,500 Cr)'
    },
    { 
      label: 'Active projects', 
      value: '1200+ (Incl. Govt. Infrastructure)', 
      numericValue: 1200,
      suffix: '+ (Incl. Govt. Infrastructure)'
    },
    { 
      label: 'Customer Satisfaction', 
      value: '92% (Third-Party Survey)', 
      numericValue: 92,
      suffix: '% (Third-Party Survey)'
    }
  ];

  // Animated counter hook
  const useCountUp = (end, duration = 2000, delay = 0) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (!hasStarted) {
        const timer = setTimeout(() => {
          setHasStarted(true);
          
          const startTime = Date.now();
          const startValue = 0;
          
          const updateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(updateCount);
        }, delay);

        return () => clearTimeout(timer);
      }
    }, [end, duration, delay, hasStarted]);

    return count;
  };

  // Individual counter components
  const StatCounter = ({ stat, index }) => {
    const count = useCountUp(stat.numericValue, 2500, index * 200);
    
    return (
      <div className="flex flex-col items-center text-center px-2 sm:px-4">
        <p className="text-gray-700 text-xs sm:text-sm font-semibold mb-1">
          {stat.label}
        </p>
        <p className="text-orange-600 text-sm sm:text-base font-extrabold">
          {count.toLocaleString()}{stat.suffix}
        </p>
      </div>
    );
  };

  // Plant locations with coordinates and details
  const plantLocations = [
    {
      id: 1,
      name: 'SMEL Sambalpur Plant',
      address: 'Vill- Pandloi, P.O - Lapanga, beside Rengali, Sambalpur 768212, Odisha',
      lat: 21.4669,
      lng: 83.9812,
      type: 'SMEL'
    },
    {
      id: 2,
      name: 'SSPL Jamuria Plant',
      address: 'Village: Dasna, P.S: Jamuria, P.O: Bahadurpur, District: Paschim Bardhaman, West Bengal - 713362',
      lat: 23.7022,
      lng: 87.0841,
      type: 'SSPL'
    },
    {
      id: 3,
      name: 'SSPL Pakuria Plant',
      address: 'NH-6, Domjur, Pakuria, Lakshmanpur, Howrah, West Bengal – 711114',
      lat: 22.6203,
      lng: 88.1821,
      type: 'SSPL'
    },
    {
      id: 4,
      name: 'SSPL Mangalpur Plant',
      address: 'G-6, Mangalpur Industrial Estate, P.O.-Baktarnagar, P.S.- Raniganj, Dist. -Paschim Bardhaman, Pin-713347',
      lat: 23.6276,
      lng: 87.1245,
      type: 'SSPL'
    },
    {
      id: 5,
      name: 'RIL Kharagpur Plant',
      address: 'Saha Chowk, Rakha Jungle, Kharagpur, Paschim Midnapur, West Bengal – 721301',
      lat: 22.3464,
      lng: 87.2320,
      type: 'RIL'
    },
    {
      id: 6,
      name: 'SSPL Indore Plant',
      address: 'Plot No. 164C, Industrial Area, Pithampur Industrial Area, Madhya Pradesh – 454774',
      lat: 22.5937,
      lng: 75.7004,
      type: 'SSPL'
    },
    {
      id: 7,
      name: 'Shree Venkateswara Electrocast Pvt. Ltd.',
      address: 'Tundi Road, Bhorandiha, Giridih - 815301 (JH)',
      lat: 24.1854,
      lng: 86.2998,
      type: 'Subsidiary'
    }
  ];

  // Load Leaflet CSS and JS
  useEffect(() => {
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(cssLink);
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = () => setIsLoaded(true);
        document.head.appendChild(script);
      } else {
        setIsLoaded(true);
      }
    };

    loadLeaflet();
  }, []);

  // Initialize map when Leaflet is loaded
  useEffect(() => {
    if (isLoaded && mapRef.current && !map && window.L) {
      // Initialize the map
      const leafletMap = window.L.map(mapRef.current, {
        center: [23.5937, 78.9629], // Center of India
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: true
      });

      // Add tile layer (OpenStreetMap - Free!)
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(leafletMap);

      setMap(leafletMap);

      // Create custom icon
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background-color: #f97316;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          ">
            <div style="
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 50%;
            "></div>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // Add markers for each plant
      plantLocations.forEach((plant) => {
        const marker = window.L.marker([plant.lat, plant.lng], {
          icon: customIcon,
          title: plant.name
        }).addTo(leafletMap);

        // Create popup content
        const popupContent = `
          <div style="font-family: Inter, sans-serif; max-width: 280px;">
            <h3 style="color: #f97316; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">
              ${plant.name}
            </h3>
            <div style="margin-bottom: 8px;">
              <span style="
                background-color: #fed7aa;
                color: #c2410c;
                font-size: 11px;
                padding: 2px 8px;
                border-radius: 12px;
                font-weight: 600;
              ">
                ${plant.type}
              </span>
            </div>
            <p style="color: #374151; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
              ${plant.address}
            </p>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 8px;">
              <a href="https://www.google.com/maps/search/?api=1&query=${plant.lat},${plant.lng}" 
                 target="_blank" 
                 style="color: #f97316; font-size: 12px; font-weight: 600; text-decoration: none;">
                Get Directions →
              </a>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup'
        });

        // Add hover effect
        marker.on('mouseover', function() {
          this.openPopup();
        });
      });
    }
  }, [isLoaded, map]);

  return (
    <div className="py-16 px-4 bg-white font-inter">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title & Description with Button Row */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">Locations</h2>
            <p className="text-gray-700 max-w-xl text-sm sm:text-base">
              Metric Verified Data (2023-24)
            </p>
          </div>
          <button className="flex items-center bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition-colors self-start sm:self-auto">
            View Global Presence
            <span className="ml-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-xl font-extrabold">
              →
            </span>
          </button>
        </div>

        {/* Animated Stats Row */}
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-y-4 px-4 sm:px-10 py-6 w-full max-w-[1160px] border border-gray-200">
            {stats.map((stat, index) => (
              <StatCounter key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Maps Section */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10">
          {/* World Map */}
          <div className="lg:w-3/5 shadow-md rounded-xl overflow-hidden border border-gray-300">
            <img src={WorldMapImage} alt="World Map" className="w-full object-cover" />
          </div>

          {/* Dynamic India Map with Leaflet */}
          <div className="lg:w-2/5 relative shadow-md rounded-xl overflow-hidden border border-gray-300 z-10">
            {!isLoaded ? (
              <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading Interactive Map...</p>
                  <p className="text-gray-500 text-sm mt-1">Free OpenStreetMap</p>
                </div>
              </div>
            ) : (
              <div
                ref={mapRef}
                className="w-full h-96"
                style={{ minHeight: '400px' }}
              />
            )}
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]">
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Plant Locations</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2 border border-white"></div>
                  <span className="text-gray-700">Manufacturing Plants</span>
                </div>
                <p className="text-gray-600 text-xs mt-1">Hover/Click for details</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plant List for Mobile */}
        <div className="mt-8 lg:hidden">
          <h3 className="text-xl font-bold text-black mb-4">Our Plant Locations</h3>
          <div className="grid gap-4">
            {plantLocations.map((plant) => (
              <div key={plant.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-orange-600">{plant.name}</h4>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {plant.type}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{plant.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${plant.lat},${plant.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-semibold mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for better popup styling */}
        <style jsx>{`
          .custom-popup .leaflet-popup-content-wrapper {
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
          .custom-popup .leaflet-popup-tip {
            background-color: white;
          }
          .custom-marker {
            background: transparent !important;
            border: none !important;
          }
        `}</style>
      </div>
    </div>
  );
}

export default LocationsMap;