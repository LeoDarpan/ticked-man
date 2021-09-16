import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css"

function Login() {
    return (
        <div className="app__login">
            <h1>Welcome to Ticket Manager Tool</h1>
            <form>
                <div className="form-element">
                    <label htmlFor="email">Email</label>
                    <input type="text" for="email"/>
                </div>

                <div className="form-element">
                    <label htmlFor="password">Password</label>
                    <input type="password" for="password"/>
                </div>
                <div className="form-element">
                    <input type="submit" value="Sign In" className="signin__button"
                    />
                </div>
                <h3>Do not have an account yet? Why not <Link to="/signup">Sign Up</Link> first?</h3>
            </form>
        </div>
    )
}

export default Login
