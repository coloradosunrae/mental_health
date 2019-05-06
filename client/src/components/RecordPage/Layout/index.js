import React from "react";
import SideBar from "../SideBar"
import TimeLine from "../TimeLine"
import "./Layout.css"

function Layout() {
  return (

    <div>

    <SideBar />

<div className="">
    <div className="MainContent card">
    <TimeLine />
    </div>
    </div>
    </div>
  );
}

export default Layout;