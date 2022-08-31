import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        < header >
            {/* Add lottie animation logo at later stage */}
            <NavLink className="nav-link" to="/">
                <h1 class="logo">PixelByPixel</h1>
            </NavLink>
            <nav>
                <ul class="main-nav">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <div className="dropdown">
                        <button className="dropbtn">OUR SERVICES
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <NavLink className="nav-link" to="/monthtomonth">
                                Month to Month
                            </NavLink>
                            <NavLink className="nav-link" to="/webdesign">
                                Website Design
                            </NavLink>
                            <NavLink className="nav-link" to="/graphicdesign">
                                Graphic Design
                            </NavLink>
                        </div>
                    </div>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar;