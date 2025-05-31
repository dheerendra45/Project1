import { useState } from "react";
import a1 from "../../assets/p1/logo.png";
import a2 from "../../assets/p1/sustainability.png";
import { ChevronDown, Search, Menu, X } from "lucide-react";

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    "ABOUT US",
    "BUSINESS",
    "INVESTORS",
    "COMMUNITY",
    "SUSTAINBLITY",
    "CAREERS",
    "CONTACT US",
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${a2})`,
        backgroundPosition: "center calc(50% - 50px)",
      }}
    >
      {/* Navbar horizontal for lg and up */}
      <div className="hidden lg:flex px-8 py-4 items-center justify-center gap-6">
        <div className="backdrop-blur-md bg-white/30 rounded-full px-6 flex flex-wrap items-center justify-center gap-6 text-white h-14 sm:h-16 max-w-full">
          <ol className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base">
            <li>
              <img src={a1} alt="Logo" className="h-8 w-auto" />
            </li>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-1 select-none h-full whitespace-nowrap"
              >
                {item}
                {!["INVESTORS", "CONTACT US"].includes(item) && (
                  <ChevronDown className="w-4 h-4" />
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

      {/* Hamburger menu for below lg */}
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

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md text-black z-50 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
          <img src={a1} alt="Logo" className="h-8 w-auto" />
          <button aria-label="Close menu" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4 text-lg font-semibold select-none">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>{item}</span>
              {!["INVESTORS", "CONTACT US"].includes(item) && (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          ))}

          {/* Search bar in sidebar */}
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

      {/* Content Section */}
      {/* Content Section */}
      <div className="px-9 mt-30 max-w-2xl w-full ml-auto lg:ml-12 lg:w-1/2 text-left">
        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-snug">
          Sustainability as an
          <br />
          integral component
        </h1>
        <hr
          className="my-6 h-1 border-0 rounded"
          style={{
            background: "linear-gradient(to right, orange, white)",
          }}
        />
        <a href="#" className="text-base sm:text-lg text-white">
          Home &gt; Sustainability
        </a>
      </div>
    </div>
  );
}
