import { useState } from "react";
import a1 from "../../assets/contact/logo.png";
import a2 from "../../assets/contact/contact.png";
import img3 from "../../assets/contact/pillet.png";
import img4 from "../../assets/contact/billet.png";
import img5 from "../../assets/contact/wirerods.png";
import { ChevronDown, Search, Menu, X } from "lucide-react";

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [showBusinessMenu, setShowBusinessMenu] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
    setOpenSubmenuIndex(null);
    setShowBusinessMenu(false);
  };

  const navItems = [
    {
      label: "ABOUT US",
      submenu: [
        "Company Overview",
        "Leaderships",
        "Awards & Achievements",
        "Testimonials",
        "News & Events",
      ],
    },
    {
      label: "BUSINESS",
      submenu: [],
    },
    { label: "INVESTORS" },
    {
      label: "COMMUNITY",
      submenu: [
        "CSR",
        "Knowledge Hub",
        "Awards and Achievements",
        "Blogs",
        "FAQ",
      ],
    },
    {
      label: "SUSTAINBLITY",
      submenu: ["ESG @ shyam", "Compliance"],
    },
    {
      label: "CAREERS",
      submenu: ["Life@shyam", "Current Openings"],
    },
    { label: "CONTACT US" },
  ];

  const BusinessSection = () => (
    <div className="absolute left-0 mt-2 bg-black/90 backdrop-blur-md text-white rounded-md shadow-lg p-4 w-full sm:w-[700px] md:w-[800px] z-50 border border-orange-500">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-orange-500 gap-4">
        <div className="space-y-2 px-2">
          {["Steel", "Power", "Aluminium", "SEL Tiger", "View All"].map(
            (item, i) => (
              <div
                key={i}
                className="cursor-pointer hover:text-orange-500 select-text"
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className="space-y-2 px-2">
          {[
            "Carbon Steel",
            "Cold Rolled",
            "Stainless Steel",
            "Special Alloys",
          ].map((item, i) => (
            <div
              key={i}
              className="cursor-pointer hover:text-orange-500 select-text"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="space-y-4 px-2">
          {[img3, img4, img5].map((img, row) => (
            <div key={row} className="flex gap-2">
              {[0, 1, 2].map((col) => {
                const labels = [
                  ["Pillet", "Spronge Iron", "Pig Iron"],
                  ["Billet", "Structural Steel", "TMT Bar"],
                  ["Wire Rods", "Pipes", ""],
                ];
                return (
                  <div
                    key={col}
                    className="flex flex-col items-center text-center w-20"
                  >
                    <img
                      src={img}
                      alt="item"
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-xs mt-1 select-text">
                      {labels[row][col]}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${a2})`,
        backgroundPosition: "center calc(50% - 50px)",
      }}
    >
      {/* Navbar for large screens */}
      <div className="hidden lg:flex px-8 py-4 items-center justify-center gap-6">
        <div className="backdrop-blur-md bg-white/30 rounded-full px-6 flex flex-wrap items-center justify-center gap-6 text-white h-14 sm:h-16 max-w-full">
          <ol className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base relative z-50">
            <li>
              <img src={a1} alt="Logo" className="h-8 w-auto" />
            </li>
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <div
                  className="flex items-center gap-1 cursor-pointer whitespace-nowrap select-none"
                  onClick={() => {
                    if (item.label === "BUSINESS") {
                      setShowBusinessMenu(!showBusinessMenu);
                    }
                  }}
                  onMouseEnter={() => {
                    if (item.label === "BUSINESS") setShowBusinessMenu(true);
                  }}
                  onMouseLeave={() => {
                    if (item.label === "BUSINESS") setShowBusinessMenu(false);
                  }}
                >
                  {item.label}
                  {(item.submenu && item.submenu.length > 0) ||
                  item.label === "BUSINESS" ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : null}
                </div>

                {item.label === "BUSINESS" && showBusinessMenu && (
                  <BusinessSection />
                )}

                {item.label !== "BUSINESS" &&
                  item.submenu &&
                  item.submenu.length > 0 && (
                    <ul className="absolute left-0 mt-2 bg-black/80 backdrop-blur-md text-white rounded-md shadow-lg p-2 hidden group-hover:block min-w-max z-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 hover:text-orange-500 flex items-center gap-2 cursor-pointer group/sub"
                        >
                          <span className="opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200 text-orange-500">
                            →
                          </span>
                          <span className="transition-colors duration-200 group-hover/sub:text-orange-500">
                            {subItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ol>
        </div>

        {/* Search Bar */}
        <div className="backdrop-blur-md bg-white/30 rounded-full px-4 py-2 flex items-center gap-2 w-full max-w-xs sm:w-auto justify-center text-black h-14 sm:h-16">
          <Search className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search here"
            className="bg-transparent focus:outline-none placeholder:text-black text-black text-sm w-full"
          />
        </div>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4">
        <img src={a1} alt="Logo" className="h-8 w-auto" />
        <button
          aria-label="Toggle menu"
          onClick={() => setSidebarOpen(true)}
          className="text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md text-black z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
          <img src={a1} alt="Logo" className="h-8 w-auto" />
          <button aria-label="Close menu" onClick={closeSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4 text-lg font-semibold select-none">
          {navItems.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div
                onClick={() =>
                  setOpenSubmenuIndex(openSubmenuIndex === idx ? null : idx)
                }
                className="flex items-center justify-between cursor-pointer"
              >
                <span>{item.label}</span>
                {(item.submenu && item.submenu.length > 0) ||
                item.label === "BUSINESS" ? (
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSubmenuIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                ) : null}
              </div>

              {item.label === "BUSINESS" && openSubmenuIndex === idx && (
                <div className="mt-2">{BusinessSection()}</div>
              )}

              {item.submenu &&
                item.submenu.length > 0 &&
                openSubmenuIndex === idx && (
                  <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-700">
                    {item.submenu.map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        className="cursor-pointer hover:text-orange-500 transition-colors duration-200"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}

          <div className="mt-6 backdrop-blur-md bg-white/50 rounded-full px-4 py-2 flex items-center gap-2 text-black">
            <Search className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent focus:outline-none placeholder:text-black text-black text-base w-full"
            />
          </div>
        </nav>
      </aside>

      {/* Hero Text Content */}
      <div className="px-9 mt-30 max-w-2xl w-full ml-auto lg:ml-12 lg:w-1/2 text-left">
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-snug">
          Get In Touch
        </h1>
        <br />
        <h3>
          Fusce et diam nisl. Curabitur est orci, tempus nec iaculis non,
          hendrerit eget est. Fusce nisi lorem, scelerisque vitae tempus eget,
          consequat ultracies nulls
        </h3>
        <hr
          className="my-6 h-1 border-0 rounded"
          style={{ background: "linear-gradient(to right, orange, white)" }}
        />
        <a href="#" className="text-base sm:text-lg text-white">
          Home &gt; Contact Us
        </a>
      </div>
    </div>
  );
}
