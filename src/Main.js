import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Maincontainer from "./components/Maincontainer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Maincontainer />
      </div>
    </div>
  );
};

export default Main;
