import React, {Component} from "react";
import "./SideBar.css"
import people from "../people.json"
import ClientHeader from "../ClientHeader"

class SideBar extends Component {

    state = {
        people
    }

    render() {
        return (
            <div>
                <div className="wrapperSideBar">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                        <div className="sidenav">
                                {this
                                    .state
                                    .people
                                    .map(person => (<ClientHeader
                                        id={person.id}
                                        key={person.id}
                                        firstname={person.firstname}
                                        lastname={person.lastname}
                                        phonenumber={person.phonenumber}
                                        message={person.message}
                                        birthdate={person.birthdate}
                                        age={person.age}/>))}
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

}

export default SideBar;