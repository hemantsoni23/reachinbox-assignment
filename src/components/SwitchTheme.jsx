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
      className={`flex relative items-center cursor-pointer w-16 h-8 p-1 rounded-full ${
        isDarkMode ? "bg-gray-300" : "bg-gray-600"
      }`}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <div
        className={`w-6 h-6 rounded-full transition-transform duration-300 ${
          isDarkMode ? "transform translate-x-8 bg-white" : "bg-gray-300"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-around px-1">
        <FiMoon
          className={`text-[#E8C364] ${isDarkMode ? "opacity-100" : "opacity-0"}`}
        />
        <FiSun
          className={`text-[#E8C364] ${isDarkMode ? "opacity-0" : "opacity-100"}`}
        />
      </div>
    </div>
  );
};

export default SwitchTheme;
