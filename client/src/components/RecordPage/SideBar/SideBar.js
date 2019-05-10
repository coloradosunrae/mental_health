import React, {Component} from "react";
import "./SideBar.css"
import people from "../people.json"
import ClientHeader from "../ClientHeader"
import ClientInfo from "../ClientInfo"

function SideBarTest(props) {
    {console.log(props)}
        return (
            <div>
                <div className="wrapperSideBar">
               
                    <nav id="sidebar">
                        <div className="sidebar-header">
                        <div className="sidenav">
                            <h1>{props.firstName} {props.lastName}</h1>
                            <p>{props.phoneNumber}</p>
                            </div>
                        </div>

                        <ul className="list-unstyled components">
                            <li className="active">
                                <a
                                    href="#homeSubmenu"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="dropdown-toggle">Home</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="/">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="/">Home 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a
                                    href="#pageSubmenu"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="dropdown-toggle">Pages</a>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="/">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="/">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="/">Page 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">Portfolio</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
        )
    

}

export default SideBarTest;