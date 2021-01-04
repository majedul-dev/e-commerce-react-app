import React from "react";
import MiddleBar from "./MiddleBar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div>
      <Topbar />
      <MiddleBar />
      <Navbar />
    </div>
  );
};

export default Header;
