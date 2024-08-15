import React, { useState } from "react";
import CommonView from "../components/CommonView";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Inbox from "../components/Inbox";

const componentMapping = {
  "/": CommonView,
  "/search": CommonView,
  "/mail": CommonView,
  "/send": CommonView,
  "/menus": CommonView,
  "/inbox": Inbox,
  "/stats": CommonView,
};

const OneBox = () => {
  const [selectedComponent, setSelectedComponent] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  const SelectedComponent = componentMapping[selectedComponent];

  return (
    <div className="h-full lg:h-screen w-screen bg-black dark:bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default OneBox;
