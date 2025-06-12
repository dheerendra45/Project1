import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FlyToLocation({ position }) {
  const map = useMap();
  map.flyTo(position, 13);
  return null;
}

export default function Map() {
  const locations = [
    {
      name: "New York Office",
      address: "2307 Beverley Rd Brooklyn, New York 11226 United States.",
      email: "Newyorksteeler@gmail.com",
      phone: "617-330-6445",
      hours: "Mon-Sat: 7:00am - 6:00pm",
      position: [40.645, -73.944],
    },
    {
      name: "Los Angeles Office",
      address: "100 Main Street, Los Angeles, CA 90012",
      email: "laoffice@steeler.com",
      phone: "213-555-7890",
      hours: "Mon-Fri: 8:00am - 5:00pm",
      position: [34.0522, -118.2437],
    },
    {
      name: "Chicago Office",
      address: "123 Wacker Dr, Chicago, IL 60601",
      email: "chicago@steeler.com",
      phone: "312-555-1234",
      hours: "Mon-Sat: 7:00am - 6:00pm",
      position: [41.8781, -87.6298],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % locations.length);
  const prev = () => setIndex((prev) => (prev - 1 + locations.length) % locations.length);

  const location = locations[index];

  return (
    <div className="relative w-full h-[600px]">
      <MapContainer
        center={location.position}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>
        <FlyToLocation position={location.position} />
      </MapContainer>

      {/* Place the info box to bottom-left corner to avoid overlap with marker */}
      <div className="absolute bottom-6 left-6 z-10">
        <div className="relative bg-orange-500 text-white p-6 rounded shadow-lg w-[350px]">
          <h2 className="text-xl font-semibold">Our Locations</h2>
          <h1 className="text-2xl font-bold mt-1">{location.name}</h1>
          <p className="mt-2">{location.address}</p>
          <p className="mt-2">Email: {location.email}</p>
          <p className="mt-1">
            Phone: <span className="underline">{location.phone}</span>
          </p>
          <p className="mt-1">{location.hours}</p>

          <div className="absolute left-3 bottom-3">
            <button
              onClick={prev}
              className="bg-white text-black p-2 rounded-full shadow"
            >
              <FaArrowLeft />
            </button>
          </div>

          <div className="absolute right-3 bottom-3">
            <button
              onClick={next}
              className="bg-black text-white p-2 rounded-full shadow"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}