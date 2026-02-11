import React from "react";
import logo1 from "../../logo12.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className="navbar"> 
            <div>
                <img className="navbar-logo" src={logo1} alt="LearnFy Logo" />
            </div>
            <ul className="navbar-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/roadmap">Roadmap Generator</Link></li>
                <li><Link className="nav-link" to="/mycommunity">My Community</Link></li>
                <li><Link className="nav-link" to="/joincommunity">Join Communities</Link></li>
                <li><Link className="nav-link" to="/profile">myProfile</Link></li>

            </ul>
        </nav>
    );
};
