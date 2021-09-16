import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="app__navbar">
                <div className="nav__items">
                    <a href="">Ticket Man</a>
                </div>
                <div className="nav__items">
                    <a href="">Projects</a>
                </div>
                <div className="nav__items">
                    <a href="">Tasks</a>
                </div>
                <div className="nav__items button">
                    <a href="">Create</a>
                </div>    
                <div className="nav__lastItem">
                    <Link to="/">Sign In</Link>
                </div>
        </div>
    )
}

export default Navbar
