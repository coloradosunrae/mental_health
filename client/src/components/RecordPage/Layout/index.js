import React from "react";
import SideBar from "../SideBar"
import TimeLine from "../TimeLine"
import "./Layout.css"
import Modal from "../Modal/app.js"


function Layout() {
  return (

    <div>

    <SideBar />

    <div className="MainContent card">
    <TimeLine
    />
    </div>

    </div>
  );
}

export default Layout;