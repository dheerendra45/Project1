export default function Officelocation() {
  return (
    <div className="bg-white py-10 px-4 sm:px-8">
      {/* First div's span with white bg */}
      <section className="mb-12 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-3 gap-8">
          {/* 3 Contact blocks */}
          <div className="text-center bg-white rounded p-4 w-full">
            <h1 className="text-xl font-bold text-black mb-2">NEWS MEDIA INQUIRIES</h1>
            <p className="text-black mb-1">Please email us at</p>
            <p className="text-orange-600 font-semibold">media@chemours.com</p>
          </div>
          <div className="text-center bg-white rounded p-4">
            <h1 className="text-xl font-bold text-black mb-2">INVESTOR INQUIRIES</h1>
            <p className="text-black mb-1">Please email us at</p>
            <p className="text-orange-600 font-semibold">investor@chemours.com</p>
          </div>
          <div className="text-center bg-white rounded p-4 w-full">
            <h1 className="text-xl font-bold text-black mb-2">TRADEMARK & COPYRIGHT INQUIRIES</h1>
            <p className="text-black mb-1">Please email us at</p>
            <p className="text-orange-600 font-semibold">trademarks@chemours.com</p>
          </div>
        </div>
      </section>

      {/* Second div's span with horizontal orange line, content, hollow circle with arrow below */}
      <section className="mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "LOREM IPSUM",
              description: "Lorem ipsum dolor sit amet consectetur."
            },
            {
              title: "YOUR CAREER WITH THE SHYAM METALICS",
              description: "Search job openings at Chemours."
            },
            {
              title: "LOREM IPSUM DOLOR",
              description: "Lorem ipsum dolor sit amet consectetur. Ut."
            }
          ].map(({ title, description }, i) => (
            <div key={i} className="flex flex-col items-start space-y-3">
              {/* Orange horizontal line */}
              <div className="w-full h-1 bg-orange-600 rounded"></div>

              {/* Content */}
              <div className="text-left">
                <h1 className="text-xl font-bold text-black mb-1">{title}</h1>
                <p className="text-gray-700">{description}</p>
              </div>

              {/* Hollow orange circle with arrow below */}
              <div className="w-8 h-8 rounded-full border-2 border-orange-600 flex items-center justify-center bg-white">
                <svg
                  className="w-4 h-4 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Locations with small orange horizontal line before each title */}
      <section>
        <h1 className="text-4xl font-bold text-black mb-8">Locations</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Wilmington Headquarters",
              address: "The Chemours Company\n1007 Market Street P.O. Box 2047\nWilmington, Delaware 19899 US"
            },
            {
              title: "Brazil",
              address: "Alameda Mamore n'687-10'\nandar CEP 06454040\nAlphaville, Barueri, Sao Paulo"
            },
            {
              title: "Canada",
              address: "151 Bloor Street West - 12th Floor\nToronto, ON M5S 1S4 Canada"
            },
            {
              title: "Geneva The Hive",
              address: "Route du Nant d'Avril 150\nCH-1217 Meyrin, Switzerland"
            },
            {
              title: "Korea",
              address: "12FL, Majestarcity Tower 1\nSeocho-daero 38-gil, Seocho-gu\nSeoul 06655 Korea"
            },
            {
              title: "Mexico City",
              address: "Lago Zurich 219, Ibt. 205\nColonia Ampliacion Granada\nCiudad de Mexico 11529"
            },
            {
              title: "Shanghai",
              address: "SCG Parkside Building\n868 Ying Hua Road\nPudong New District, Shanghai 201204"
            },
            {
              title: "Singapore",
              address: "1 Harbourfront Place #16-01\nHarbourfront Tower One\nSingapore 098633"
            },
            {
              title: "Selangor",
              address: "Suite 20-01 & 20-02B, Level 20\nThe Pinnacle Persiaran Lagoon\nBandar Sunway, Selangor, Malaysia"
            },
            {
              title: "Ho Chi Minh City",
              address: "Level 7, Friendship Tower, 31 Le Duan\nDistrict 1, Ho Chi Minh City 700000, Vietnam"
            },
            {
              title: "Changshu",
              address: "No. 18 Xingyu Road, Haiyu Town\nChangshu, Jiangsu 215522, China"
            },
            {
              title: "Taipei",
              address: "7th Floor, 167 Tun Hwa North Road\nTaipei 10549, Taiwan"
            },
            {
              title: "Tokyo",
              address: "Kamiyacho Prime Place 7F\n4-1-17 Toranomon, Minato-ku\nTokyo 105-0001, Japan"
            },
            {
              title: "Bangkok",
              address: "Unit 1502, 15th Floor, GPF Witthayu Tower A\n93/1 Wireless Road, Lumpini\nPathumwan, Bangkok 10330"
            },
            {
              title: "Mumbai",
              address: "Gala Impecca, 1st Floor\nAndheri East, Mumbai – 400069\nMaharashtra, India"
            }
          ].map((loc, i) => (
            <div key={i} className="bg-white p-4 rounded shadow text-sm">
              {/* Small orange horizontal line */}
              <div className="w-12 h-1 bg-orange-600 rounded mb-2"></div>

              <h2 className="font-semibold text-lg text-gray-800 mb-2">{loc.title}</h2>
              <p className="whitespace-pre-line text-gray-600">{loc.address}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
