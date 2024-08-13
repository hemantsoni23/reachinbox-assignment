import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SwitchTheme from "./SwitchTheme";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";

const TopBar = ({ workspaceName = "Tim's Workspace" }) => {
  const [showLogoutPopUp, setShowLogoutPopUp] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutPopUp(false);
    navigate('/login');
  };

  const handleLogoutModal = () => {
    setShowLogoutPopUp(!showLogoutPopUp);
  };

  return (
    <div className="h-16 w-screen bg-white dark:bg-[#1F1F1F] fixed px-10 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <span className="font-semibold">Onebox</span>

      <div className="pr-10 flex items-center">
        <SwitchTheme /> &nbsp;
        <span
          className="ml-5 cursor-pointer flex items-center"
          onClick={handleLogoutModal}
        >
          {workspaceName}
          <MdOutlineKeyboardArrowDown className="text-3xl" />
        </span>
      </div>

      {showLogoutPopUp && (
        <LogoutModal onCancel={handleLogoutModal} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default TopBar;
