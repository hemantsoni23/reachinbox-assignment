import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { RiUserSearchLine, RiMailFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import Logo from "../assets/Logo.svg";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const SideBar = ({ onMenuItemClick }) => {
  const [selectedItem, setSelectedItem] = useState("/");
  const [isOpen, setIsOpen] = useState(false); // Initially closed

  const menuItems = [
    { path: "/", icon: CiHome, label: "Home" },
    { path: "/search", icon: RiUserSearchLine, label: "Search" },
    { path: "/mail", icon: RiMailFill, label: "Mail" },
    { path: "/send", icon: IoIosSend, label: "Send" },
    { path: "/stack", icon: SiElasticstack, label: "Stack" },
    { path: "/inbox", icon: FaInbox, label: "Inbox" },
    { path: "/stats", icon: IoStatsChartSharp, label: "Stats" },
  ];

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <>
      {/* Hamburger Menu for mobile view */}
      <div className="md:hidden fixed top-0 left-0 z-20 flex items-center p-4">
        <button
          className="text-gray-600 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <HiMenu size={24} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-10 h-screen flex flex-col justify-between dark:bg-[#101113] bg-white overflow-y-auto no-scrollbar py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] md:w-16 md:flex ${
          isOpen ? "w-16" : "w-0"
        } md:w-16 transition-width duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <img src={Logo} className="w-12 h-auto" alt="Logo" />
          </div>
          <div className="flex flex-col items-center space-y-4 flex-1">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className={`cursor-pointer p-2 rounded-lg flex justify-center items-center transition-all duration-200 ${
                  selectedItem === item.path
                    ? "bg-gray-700 text-white"
                    : "text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => handleMenuItemClick(item.path)}
                title={item.label}
              >
                <item.icon size={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="self-center m-2 h-8 w-8 flex justify-center items-center p-2 rounded-full bg-green-700 text-white text-xs font-semibold">
          AS
        </div>
      </div>
    </>
  );
};

export default SideBar;
