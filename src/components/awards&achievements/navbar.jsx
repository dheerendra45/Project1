import React, { useState } from "react";
import a3 from "./images/logo.png";
import { ChevronDown, Search, Menu } from "lucide-react";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navLinks = [
        "ABOUT US",
        "BUSINESSES",
        "INVESTORS",
        "COMMUNITY",
        "SUSTAINABILITY",
        "CAREERS",
        "CONTACT US",
    ];

    return (
        <div className="bg-orange-400 text-white">
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:hidden">
                <img src={a3} alt="logo" className="h-10 w-auto" />
                <button onClick={() => setIsSidebarOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Desktop Navbar with Equal Spacing */}
            <div className="hidden lg:grid grid-cols-10 gap-2 items-center px-4 py-3 md:px-12">
                {/* Logo */}
                <div className="flex justify-center">
                    <img src={a3} alt="logo" className="h-10 w-auto" />
                </div>

                {/* Nav Buttons */}
                {navLinks.map((link, idx) => (
                    <div key={idx} className="flex justify-center">
                        <button className="flex items-center gap-1 text-sm font-medium hover:underline">
                            {link}
                            <ChevronDown size={14} />
                        </button>
                    </div>
                ))}

                {/* Search */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-[160px]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-8 pr-4 py-1.5 rounded-full bg-white/20 text-white placeholder-white text-sm w-full focus:outline-none"
                        />
                        <Search
                            size={16}
                            className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-white"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-40">
                    <div className="absolute top-0 right-0 w-64 h-full bg-orange-700 shadow-lg p-6 flex flex-col gap-6 z-50">
                        <button
                            className="self-end text-xl"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            ✕
                        </button>
                        {navLinks.map((link, idx) => (
                            <button
                                key={idx}
                                className="flex items-center gap-1 hover:underline text-left"
                            >
                                {link}
                                <ChevronDown size={14} />
                            </button>
                        ))}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-8 pr-4 py-1.5 rounded-full bg-white/20 text-white placeholder-white text-sm focus:outline-none w-full"
                            />
                            <Search
                                size={16}
                                className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-white"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}