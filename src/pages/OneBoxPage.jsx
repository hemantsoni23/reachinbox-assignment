import React, { useState } from "react";
import CommonView from "../components/CommonView";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const componentMapping = {
  "/": CommonView,
  "/search": CommonView,
  "/mail": CommonView,
  "/send": CommonView,
  "/stack": CommonView,
  // "/inbox": MainPage,
  "/stacks": CommonView,
};

const OneBox = () => {
  const [selectedComponent, setSelectedComponent] = useState("/");

  const handleMenuItemClick = (path) => {
    setSelectedComponent(path);
  };

  const SelectedComponent = componentMapping[selectedComponent];

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default OneBox;

