import React from 'react';
import './Signup.css'

function Signup() {
    const signUp = (event) => {
        event.preventDefault();
        alert("Thanks for signing up!");
    }
    return (
        <div>
            <div className="app__login">
            <h1>Welcome to Ticket Manager Tool</h1>
            <form onSubmit= { signUp }>
                <div className="form-element">
                    <label htmlFor="name">Username</label>
                    <input type="text" for="name"/>
                </div>

                <div className="form-element test">
                    <label htmlFor="name">Role</label>
                    <select>
                        <option value="PM">Project Manager</option>
                        <option value="TL">Team Lead</option>
                        <option value="Developer" selected>Developer</option>
                    </select>
                </div>

                <div className="form-element test">
                    <label htmlFor="name">Department</label>
                    <select>
                        <option value="Webdev">Webdev</option>
                        <option value="Searchunify">Search Unify</option>
                        <option value="Salesforce">Salesforce</option>
                        <option value="lithium">Lithium</option>
                        <option value="Market">Marketo</option>
                    </select>
                </div>

                <div className="form-element">
                    <label htmlFor="email">Email</label>
                    <input type="text" for="email"/>
                </div>

                <div className="form-element">
                    <label htmlFor="password">Password</label>
                    <input type="password" for="password"/>
                </div>

                <div className="form-element">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" for="password"/>
                </div>

                <div className="form-element">
                    <input type="submit" value="Sign Up" className="signin__button"/>
                </div>
            </form>
        </div>   
        </div>
    )
}

export default Signup
