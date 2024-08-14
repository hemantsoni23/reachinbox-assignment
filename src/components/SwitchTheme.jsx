import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const SwitchTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`relative flex items-center w-16 h-8 p-1 rounded-full cursor-pointer ${
        isDarkMode ? "bg-gray-600" : "bg-gray-300"
      }`}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <FiMoon className={`text-[#E8C364] ${isDarkMode ? "" : "opacity-0"}`} />
        <FiSun className={`text-[#E8C364] ${isDarkMode ? "opacity-0" : ""}`} />
      </div>
      <div
        className={`w-6 h-6 rounded-full transition-transform duration-300 ${
          isDarkMode ? "transform translate-x-full bg-white" : "bg-gray-100"
        }`}
      />
    </div>
  );
};

export default SwitchTheme;
