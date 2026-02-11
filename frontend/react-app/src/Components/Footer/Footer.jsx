import React from "react";
import logo from "../../logo12.png";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">  
            <div className="footer-content">
                <img className="footer-logo" src={logo} alt="LearnFy Logo" />
                <ul className="footer-links">
                    <li><a href="/">LearnFy</a></li>
                    <li><a href="/roadmap" >Roadmap Generator</a></li>
                    <li><a href="/mycommunity">My Community</a></li>
                    <li><a href="/joincommunity">Join Communities</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} LearnFy website. All rights reserved.</p>
            </div>
        </footer>
    );
};
