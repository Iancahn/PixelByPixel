import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        < header >
            {/* Add lottie animation logo at later stage */}
            <h1 class="logo"><a href="#">Flexbox</a></h1>
            <nav>
                <ul class="main-nav">
                    <li><a href="#">Home</a></li>
                    <div className="dropdown">
                        <button className="dropbtn">OUR SERVICES
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Month to Month</a>
                            <a href="#">Website Design</a>
                            <a href="#">Graphic Design</a>
                        </div>
                    </div>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header >
    )
}

export default Navbar;