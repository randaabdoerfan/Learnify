import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import logo from "../../images.jpg"


export const Main = () => {
    return (
        <div className="main-container">
            <div className="main-content">
                <h1>Learn, Grow, Achieve</h1>
                <h3>Your roadmap to success starts with LearnFY ! 🚀</h3>
                <p>
                    LearnFY is an educational web platform designed to help users create personalized study roadmaps 
                    and receive tailored recommendations based on their interests. 
                    Our platform offers:
                </p>
                <ul className="features-list">
                    <li>🗺️ AI-powered Roadmap Generator</li>
                    <li>👥 Interactive Community Support andcollaboration.</li>
                    <li>📚 Personalized Learning Paths  </li>
                    
                </ul>
                <p className="cta-message">Join us and take your learning to the next level!</p>
                
                <div className="buttons-container">
                    <Link className="button register" to="/register">Register</Link>
                    <Link className="button login" to="/login">Login</Link>
                </div>
            </div>

            <div className="main-image">
                <img src={logo} alt="Learning Illustration" />
            </div>
        </div>
    );
};
