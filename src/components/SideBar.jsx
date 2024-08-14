import React, { useState, useEffect } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { RiUserSearchFill, RiMailFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdBarChart } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import Logo from "../assets/Logo.svg";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const SideBar = ({ onMenuItemClick, shortHandName = 'AS' }) => {
  const [selectedItem, setSelectedItem] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const [mailCount, setMailCount] = useState(0);

  const menuItems = [
    { path: "/", icon: TbHomeFilled, label: "Home" },
    { path: "/search", icon: RiUserSearchFill, label: "Search" },
    { path: "/mail", icon: RiMailFill, label: "Mail" },
    { path: "/send", icon: IoIosSend, label: "Send" },
    { path: "/menus", icon: TfiMenuAlt, label: "Menus" },
    { path: "/inbox", icon: FaInbox, label: "Inbox" },
    { path: "/stats", icon: MdBarChart, label: "Stats" },
  ];

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  useEffect(() => {
    const fetchMailCount = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const count = res.data.data.length;
        setMailCount(count);
      } catch (error) {
        console.error("Error fetching mail count:", error);
      }
    };

    fetchMailCount();
  }, []);

  return (
    <>
      {/* Hamburger Menu for mobile view */}
      <div className="md:hidden fixed top-0 left-0 z-20 flex items-center p-4">
        <button
          className="dark:text-gray-600 text-gray-300"
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
        className={`fixed top-0 left-0 z-10 h-screen flex flex-col justify-between bg-[#101113] dark:bg-white overflow-y-auto no-scrollbar py-6 border-r-2 border-[#343A40] dark:border-[#E0E0E0] md:w-16 md:flex ${
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
                className={`cursor-pointer p-2 rounded-lg flex justify-center items-center relative transition-all duration-200 ${
                  selectedItem === item.path
                    ? "bg-gray-700 dark:bg-gray-300 dark:text-black text-white"
                    : "text-gray-400 dark:hover:bg-gray-300 hover:bg-gray-600 dark:text-gray-700"
                }`}
                onClick={() => handleMenuItemClick(item.path)}
                title={item.label}
              >
                {item.icon === FaInbox && mailCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-red-600 text-white text-xs font-semibold rounded-full">
                    {mailCount > 12 ? "12+" : mailCount}
                  </span>
                )}
                <item.icon size={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="self-center m-2 h-8 w-8 flex justify-center items-center p-2 rounded-full bg-green-700 text-white text-xs font-semibold dark:bg-green-400">
          {shortHandName}
        </div>
      </div>
    </>
  );
};

export default SideBar;
