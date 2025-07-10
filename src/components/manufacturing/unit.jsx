import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import a1 from "../../assets/manufacturing/unit-1.png";
import a2 from "../../assets/manufacturing/unit-2.jpg";
import a3 from "../../assets/manufacturing/unit-3.jpg";
import a4 from "../../assets/manufacturing/unit-4.jpg";
import a5 from "../../assets/manufacturing/unit-5.jpg";
import a6 from "../../assets/manufacturing/unit-6.jpg";
import a7 from "../../assets/manufacturing/unit-7.jpg";
import a8 from "../../assets/manufacturing/unit-8.jpg";
import a9 from "../../assets/manufacturing/unit-9.png";

const images = [
  {
    src: a1,
    title: "SAMBALPUR PLANT",
    desc: "Ore to Metal Integrated Plant Capacity: 6.25 MTPA",
    address:
      "Vill- Pandloi, P.O - Lapanga, beside Rengali, Sambalpur 768212, Odisha",
    lat: 21.4669,
    lng: 83.9812,
    type: "SMEL",
  },
  {
    src: a2,
    title: "JAMURIA PLANT",
    desc: "Ore to Metal Integrated Plant Capacity: 6.83 MTPA",
    address:
      "Village: Dasna, P.S: Jamuria, P.O: Bahadurpur, District: Paschim Bardhaman, West Bengal - 713362",
    lat: 23.7022,
    lng: 87.0841,
    type: "SSPL",
  },
  {
    src: a3,
    title: "MANGALPUR PLANT",
    desc: "Plant Capacity: 0.10 MTPA",
    address:
      "G-6, Mangalpur Industrial Estate, P.O.-Baktarnagar, P.S.- Raniganj, Dist. -Paschim Bardhaman, Pin-713347",
    lat: 23.6276,
    lng: 87.1245,
    type: "SSPL",
  },
  {
    src: a4,
    title: "PAKURIA PLANT",
    desc: "Plant Capacity: 0.40 MTPA",
    address: "NH-6, Domjur, Pakuria, Lakshmanpur, Howrah, West Bengal – 711114",
    lat: 22.6203,
    lng: 88.1821,
    type: "SSPL",
  },
  {
    src: a5,
    title: "INDORE PLANT",
    desc: "Plant Capacity: 0.27 MTPA",
    address:
      "Plot No. 164C, Industrial Area, Pithampur Industrial Area, Madhya Pradesh – 454774",
    lat: 22.5937,
    lng: 75.7004,
    type: "SSPL",
  },
  {
    src: a6,
    title: "KHARAGPUR PLANT",
    desc: "Plant Capacity: 0.15 MTPA",
    address:
      "Saha Chowk, Rakha Jungle, Kharagpur, Paschim Midnapur, West Bengal – 721301",
    lat: 22.3464,
    lng: 87.232,
    type: "RIL",
  },
  {
    src: a7,
    title: "GIRIDIH PLANT",
    desc: "Plant Capacity: 3600 TPA",
    address: "Tundi Road, Bhorandiha, Giridih - 815301 (JH)",
    lat: 24.1854,
    lng: 86.2998,
    type: "Subsidiary",
  },
];

export default function Unit() {
  const [selected, setSelected] = useState(null);
  const [map, setMap] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const detailsRef = useRef(null);
  const mapRef = useRef(null);
  const sectionRef = useRef(null);

  // Track when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const DetailMap = ({ selected, isLoaded }) => {
    const detailMapRef = useRef(null);
    const [detailMap, setDetailMap] = useState(null);

    useEffect(() => {
      if (
        isLoaded &&
        detailMapRef.current &&
        selected &&
        window.L &&
        !detailMap
      ) {
        // Clear any existing map instance
        if (detailMapRef.current._leaflet_id) {
          detailMapRef.current._leaflet_id = null;
        }

        // Create a new map instance for the detail view
        const newDetailMap = window.L.map(detailMapRef.current, {
          center: [selected.lat, selected.lng],
          zoom: 13,
          scrollWheelZoom: true,
          zoomControl: true,
        });

        window.L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution: "© OpenStreetMap contributors",
          }
        ).addTo(newDetailMap);

        // Add marker for selected plant
        const detailIcon = window.L.divIcon({
          html: `
          <div style="
            width: 30px;
            height: 30px;
            background-color: #f97316;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 10px;
              height: 10px;
              background-color: white;
              border-radius: 50%;
            "></div>
          </div>
        `,
          className: "custom-detail-marker",
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        window.L.marker([selected.lat, selected.lng], {
          icon: detailIcon,
        })
          .addTo(newDetailMap)
          .bindPopup(selected.title)
          .openPopup();

        setDetailMap(newDetailMap);
      }
    }, [isLoaded, selected, detailMap]);

    // Cleanup detail map when component unmounts or selected changes
    useEffect(() => {
      return () => {
        if (detailMap) {
          detailMap.remove();
          setDetailMap(null);
        }
      };
    }, [selected]);

    return (
      <motion.div
        className="w-full rounded-lg overflow-hidden shadow-lg"
        style={{ height: "32rem" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div ref={detailMapRef} className="w-full h-full" />
      </motion.div>
    );
  };

  // Load Leaflet CSS and JS
  useEffect(() => {
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
        document.head.appendChild(cssLink);
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
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
      // Clear any existing map instance
      if (mapRef.current._leaflet_id) {
        mapRef.current._leaflet_id = null;
      }

      // Define India bounds to restrict map view
      const indiaBounds = window.L.latLngBounds(
        [6.4626999, 68.1097], // Southwest corner (southern tip near Kanyakumari)
        [35.513327, 97.4152] // Northeast corner (Arunachal Pradesh)
      );

      // Initialize the map
      const leafletMap = window.L.map(mapRef.current, {
        center: [23.5937, 78.9629], // Center of India
        zoom: 5,
        minZoom: 5, // Increased to keep focus on India
        maxZoom: 12,
        zoomControl: true,
        scrollWheelZoom: true,
        maxBounds: indiaBounds, // Restrict panning to India bounds
        maxBoundsViscosity: 1.0, // Prevent dragging outside bounds
      });

      // Add tile layer
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(leafletMap);

      // Calculate bounds to fit all plant locations within India
      const plantBounds = window.L.latLngBounds(
        images.map((plant) => [plant.lat, plant.lng])
      );

      // Fit map to show all plant locations with padding
      leafletMap.fitBounds(plantBounds, { padding: [50, 50] });

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
            cursor: pointer;
          ">
            <div style="
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 50%;
            "></div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      // Add markers for each plant
      images.forEach((plant) => {
        const marker = window.L.marker([plant.lat, plant.lng], {
          icon: customIcon,
          title: plant.title,
        }).addTo(leafletMap);

        // Create popup content with "View Details" button
        const popupContent = `
          <div style="font-family: Inter, sans-serif; max-width: 280px;">
            <h3 style="color: #f97316; font-weight: bold; font-size: 16px; margin: 0 0 8px 0;">
              ${plant.title}
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
              ${plant.desc}
            </p>
            <p style="color: #6b7280; font-size: 12px; line-height: 1.3; margin: 0 0 12px 0;">
              ${plant.address}
            </p>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 8px; display: flex; gap: 8px; justify-content: space-between;">
              <button 
                onclick="window.viewPlantDetails('${plant.title}')"
                style="
                  background-color: #f97316;
                  color: white;
                  font-size: 12px;
                  font-weight: 600;
                  padding: 6px 12px;
                  border: none;
                  border-radius: 6px;
                  cursor: pointer;
                  text-decoration: none;
                "
              >
                View Details
              </button>
              <a href="https://www.google.com/maps/search/?api=1&query=${plant.lat},${plant.lng}" 
                 target="_blank" 
                 style="color: #f97316; font-size: 12px; font-weight: 600; text-decoration: none; display: flex; align-items: center;">
                Directions →
              </a>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: "custom-popup",
        });

        // Add hover effect
        marker.on("mouseover", function () {
          this.openPopup();
        });
      });

      // Add global function to handle "View Details" button clicks
      window.viewPlantDetails = (plantTitle) => {
        const plant = images.find((p) => p.title === plantTitle);
        if (plant) {
          handleSelect(plant);
        }
      };
    }
  }, [isLoaded, map]);

  // Cleanup map instance on unmount
  useEffect(() => {
    return () => {
      if (map) {
        map.remove();
        setMap(null);
      }
    };
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <div ref={sectionRef} className="bg-white px-6 py-16">
      {/* Heading and underline inside max-w wrapper for alignment */}
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-5xl font-bold text-black font-space-grotesk"
        >
          Our Units
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="h-1 origin-left bg-orange-500 my-4"
        />
      </div>

      {/* Interactive Map Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h3
          className="text-xl font-bold text-gray-800 mb-6 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4 },
                }
              : {}
          }
        >
          <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
          Our Manufacturing Locations
        </motion.h3>

        <motion.div
          className="relative shadow-lg rounded-xl overflow-hidden border border-gray-300 z-10 h-[500px] w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5 },
                }
              : {}
          }
        >
          {!isLoaded ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                />
                <p className="text-gray-600">Loading Interactive Map...</p>
              </div>
            </div>
          ) : (
            <div ref={mapRef} className="w-full h-full" />
          )}

          {/* Map Legend */}
          <motion.div
            className="absolute bottom-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]"
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    transition: { delay: 1.0 },
                  }
                : {}
            }
          >
            <h4 className="font-semibold text-sm text-gray-800 mb-2">
              Plant Locations
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2 border border-white"></div>
                <span className="text-gray-700">Manufacturing Plants</span>
              </div>
              <p className="text-gray-600 text-xs mt-1">
                Click marker → View Details
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Card Grid */}
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(147, 146, 145, 0.5)",
            }}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleSelect(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h2 className="text-white text-xl font-bold">{item.title}</h2>
              <p className="text-white text-sm mt-2">{item.desc}</p>
              <div className="mt-2">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.type}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* Selected Unit Detail Section */}
      {selected && (
        <div
          ref={detailsRef}
          className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-8 items-start scroll-mt-20"
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="rounded-lg w-full object-cover"
              style={{ height: "32rem" }}
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {selected.title}
            </h2>
            <div className="mb-2">
              <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full font-semibold">
                {selected.type}
              </span>
            </div>
            <p className="text-gray-600 text-lg font-medium">{selected.desc}</p>
            <p className="text-gray-500 text-sm">{selected.address}</p>
            <div className="pt-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Directions
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          <DetailMap selected={selected} isLoaded={isLoaded} />
        </div>
      )}

      {/* Custom CSS for better popup styling */}
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .custom-popup .leaflet-popup-tip {
          background-color: white;
        }
        .custom-marker,
        .custom-detail-marker {
          background: transparent !important;
          border: none !important;
        }
        .custom-popup button:hover {
          background-color: #ea580c !important;
        }
      `}</style>
    </div>
  );
}
