import React, {Component} from "react";
import "./SideBar.css"
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

                            Address: 142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                            </div>
                        </div>

                        <ul className="list-unstyled components">
                            <li className="active">
                                <a
                                    href="#homeSubmenu"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="dropdown-toggle">CONTACTS</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                <br></br>
                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>

                                    <br/>

                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>
                                    <br/>
                                    
                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>
                                    <br/>

                                </ul>
                            </li>
                            <li className="active">
                                <a
                                    href="#pageSubmenu"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="dropdown-toggle">CONTACTS</a>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                <br></br>
                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>

                                    <br/>

                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>
                                    <br/>
                                    
                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>
                                    <br/>

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