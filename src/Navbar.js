import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from 'axios';


function Navbar() {
    const test = () => {
        axios.get('http://localhost:8000/user/users')
            .then( response => {
                let users = response;
                users.map( user => {
                    console.log(user.username);
                });
            })
            .catch(error => console.log(error.message));
    }
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
                <div className="nav__lastItem">
                    <button onClick = { test }> Available users!</button>
                </div>
        </div>
    )
}

export default Navbar
