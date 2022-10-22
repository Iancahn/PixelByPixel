import React from 'react';
import { NavLink } from "react-router-dom";
// import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        < header >
            {/* Add lottie animation logo at later stage */}
            <NavLink className="nav-link" to="/">
                <img className="main-logo" alt="The main PixelByPixel logo" />
            </NavLink>
            <nav>
                <ul class="main-nav">
                    <li><NavLink className="nav-link" to="/">
                        Home
                    </NavLink></li>
                    <li className='dropdown'>Our Services <FontAwesomeIcon icon={faCaretDown} />
                        <div className='dropdown-content'>
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
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contactus">
                            <button className="contact-us-btn">Contact Us</button>
                        </NavLink>
                    </li>
                </ul>
            </nav >
        </header >
    )
}

export default Navbar;