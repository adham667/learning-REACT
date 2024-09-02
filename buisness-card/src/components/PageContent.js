import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
export default function PageContent(){
    return (
        <div className="content">
            <h1>Adham Saeed</h1>
            <h3>Front-end Developer</h3>
            <div className="contact">
                <button><MdEmail fill="black" size={18} className="icon"/>Email</button>
                <a href="https://www.linkedin.com/in/adham-saeed/">
                <button className="linked"><FaLinkedin size={18} className="icon"/>LinkedIn</button>
                </a>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div>
                <h2>Interests</h2>
                <p>I love video games and table tennis and chess, I also am a big fan of anime and fantasy seires in general</p>
            </div>
        </div>
    );
}