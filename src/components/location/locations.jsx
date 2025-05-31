import { Phone, Mail, MapPin } from "lucide-react";
import a1 from "../../assets/location/industry.png";
import a2 from "../../assets/location/newyork.png";
import a3 from "../../assets/location/marsielle.png";
import a4 from "../../assets/location/industry2.png";
import a5 from "../../assets/location/industry3.png";
import a6 from "../../assets/location/melbourne.png";

export default function Locations() {
  const locations = [
    {
      country: "UNITED STATES",
      office: "New York Office",
      desc: "Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking.",
      phone: "+07 554 332 322",
      email: "Steelerroterdam@gmail.com",
      address: "Cleveland Street Corona, NY",
      mainImg: a1,
      sideImg: a2,
    },
    {
      country: "FRANCE",
      office: "Marseille Office",
      desc: "Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking.",
      phone: "+07 554 332 323",
      email: "Steelermarseille@gmail.com",
      address: "44 avenue de Provence",
      mainImg: a4,
      sideImg: a3,
      reverse: true,
    },
    {
      country: "AUSTRALIA",
      office: "Melbourne Office",
      desc: "Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking.",
      phone: "+07 554 332 324",
      email: "Steelermelbourne@gmail.com",
      address: "350 Bourke St, Melbourne",
      mainImg: a5,
      sideImg: a6,
    },
  ];

  return (
    <div className="px-6 py-12 md:px-16 lg:px-24">
      <div className="flex flex-col gap-16">
        {locations.map((loc, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              loc.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Content */}
            <div className="flex-1 max-w-full md:max-w-[40%] flex flex-col items-start">
              <img
                src={loc.mainImg}
                alt={`${loc.country} Office`}
                className="w-full h-[400px] object-cover rounded-md"
              />
              <h2 className="text-gray-500 mt-4">{loc.country}</h2>
              <h1 className="text-xl font-bold">{loc.office}</h1>
              <h2 className="text-gray-600 font-normal mt-1">{loc.desc}</h2>
              <div className="w-[50px] h-[4px] bg-orange-900 my-4"></div>
              <p className="flex items-center gap-2 text-gray-800">
                <Phone className="text-orange-900 w-5 h-5" />
                <b>{loc.phone}</b>
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                <Mail className="text-orange-900 w-5 h-5" />
                <b>{loc.email}</b>
              </p>
              <p className="flex items-center gap-2 text-gray-800">
                <MapPin className="text-orange-900 w-5 h-5" />
                <b>{loc.address}</b>
              </p>
            </div>

            {/* Side Image */}
            <div className="flex-1 max-w-full md:max-w-[60%] h-[500px] flex justify-center items-center">
              <img
                src={loc.sideImg}
                alt={`${loc.country} Side`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
