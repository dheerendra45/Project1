// src/components/ContactBar.jsx
import React, { useEffect, useState } from "react";
import { Phone, MessageSquare, HelpCircle } from "lucide-react"; // Icons

// WhatsApp SVG icon component
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.003 2.8c-7.295 0-13.2 5.905-13.2 13.2 0 2.3.6 4.55 1.75 6.55L2.8 29.2l6.803-1.75a13.118 13.118 0 006.4 1.65c7.3 0 13.2-5.905 13.2-13.2.002-7.295-5.905-13.2-13.2-13.2zm0 24.1a11.426 11.426 0 01-5.925-1.65l-.425-.25-4.05 1.05 1.075-3.95-.275-.4a11.31 11.31 0 01-1.775-6.025c0-6.25 5.075-11.325 11.325-11.325s11.325 5.075 11.325 11.325c0 6.25-5.075 11.325-11.325 11.325zm6.075-8.2c-.325-.15-1.9-.925-2.2-1.025-.3-.1-.525-.15-.75.15s-.85 1.025-1.05 1.225-.375.225-.7.075a9.42 9.42 0 01-2.775-1.7 10.24 10.24 0 01-1.9-2.35c-.2-.35 0-.525.15-.675.15-.15.325-.375.5-.55.175-.175.225-.3.325-.5.1-.2.05-.375 0-.525-.05-.15-.7-1.725-.95-2.35s-.5-.55-.7-.55h-.6c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5c0 1.475 1.075 2.9 1.225 3.1.15.2 2.1 3.25 5.1 4.55.725.325 1.3.525 1.75.65.725.225 1.375.2 1.875.125.575-.1 1.75-.725 2-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.6-.35z" />
  </svg>
);

const ContactBar = () => {
  const [showBar, setShowBar] = useState(false);

  // Show bar only after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers for each button
  const handleWhatsAppClick = () => {
    const whatsappNumber = "919876543210";
    const message = "Hi, I would like to know more about your services!";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleCallClick = () => {
    const phoneNumber = "919876543210";
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  const handleChatClick = () => {
    console.log("Chat clicked");
  };

  const handleEnquireClick = () => {
    console.log("Enquire clicked");
  };

  // Buttons configuration
  const buttonConfig = [
    {
      id: "call",
      icon: <Phone size={20} />,
      onClick: handleCallClick,
      text: "Call",
    },
    {
      id: "whatsapp",
      icon: <WhatsAppIcon />,
      onClick: handleWhatsAppClick,
      text: "WhatsApp",
    },
    {
      id: "chat",
      icon: <MessageSquare size={20} />,
      onClick: handleChatClick,
      text: "Chat",
    },
    {
      id: "enquire",
      icon: <HelpCircle size={20} />,
      onClick: handleEnquireClick,
      text: "Enquire",
    },
  ];

  // Don't show bar at the top of the page
  if (!showBar) return null;

  return (
    <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50">
      <div className="bg-white rounded-lg border-t border-gray-200 shadow-md w-full max-w-[400px] px-2 py-2 flex justify-between gap-2">
        {buttonConfig.map((button) => (
          <button
            key={button.id}
            onClick={button.onClick}
            className="flex flex-col items-center text-black hover:text-gray-800 transition-colors gap-1 flex-1"
          >
            {button.icon}
            <span className="text-[11px]">{button.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactBar;
