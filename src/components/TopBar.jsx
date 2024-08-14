import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SwitchTheme from "./SwitchTheme";
import ConfirmationModal from "./ConfirmationModal"; 
import { useNavigate } from "react-router-dom";

const TopBar = ({ workspaceName = "Tim's Workspace" }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    navigate('/login');
  };

  const handleModalToggle = () => {
    setShowLogoutModal(!showLogoutModal);
  };

  return (
    <div className="h-16 w-screen fixed px-10 top-0 flex justify-between items-center border-b-2 border-[#343A40] dark:border-[#E0E0E0] z-100">
      <span className="font-semibold text-white dark:text-[#5B5F66]">Onebox</span>

      <div className="pr-10 flex items-center">
        <SwitchTheme /> &nbsp;
        <span
          className="ml-5 cursor-pointer flex items-center text-white dark:text-[#5B5F66]"
          onClick={handleModalToggle}
        >
          {workspaceName}
          <MdOutlineKeyboardArrowDown className="text-3xl" />
        </span>
      </div>

      {showLogoutModal && (
        <ConfirmationModal
          title="Are you sure?"
          message="Are you sure you want to log out?"
          onCancel={handleModalToggle}
          onConfirm={handleLogout}
          confirmText="Logout"
          cancelText="Cancel"
        />
      )}
    </div>
  );
};

export default TopBar;
