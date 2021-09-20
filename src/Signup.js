import React, { useState, useEffect} from 'react';
import './Signup.css'

function Signup() {
    const [username, setUsername] = useState('xyz');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');

    const signUp = (event) => {
        event.preventDefault();

        console.log(username);
        console.log(email);
        
        alert("Thanks for signing up!");

    }
    return (
        <div>
            <div className="app__login">
            <h1>Welcome to Ticket Manager Tool</h1>
            <form onSubmit= { signUp }>
                <div className="form-element">
                    <label htmlFor="name">Username</label>
                    <input type="text" value = { username } onChange = { (event) => setUsername(event.target.value) }/>
                </div>

                <div className="form-element test">
                    <label htmlFor="name">Role</label>
                    <select for='role' value = { role } onChange = { event => setRole(event.target.value) }>
                        <option value="PM">Project Manager</option>
                        <option value="TL">Team Lead</option>
                        <option value="Developer" selected>Developer</option>
                    </select>
                </div>

                <div className="form-element test">
                    <label htmlFor="name">Department</label>
                    <select value = { department } onChange = { event => setDepartment(event.target.value)}>
                        <option value="Webdev">Webdev</option>
                        <option value="Searchunify">Search Unify</option>
                        <option value="Salesforce">Salesforce</option>
                        <option value="lithium">Lithium</option>
                        <option value="Market">Marketo</option>
                    </select>
                </div>

                <div className="form-element">
                    <label htmlFor="email">Email</label>
                    <input type="text" value = { email } onChange = { event => setEmail(event.target.value)}/>
                </div>

                <div className="form-element">
                    <label htmlFor="password">Password</label>
                    <input type="password" value = { password } onChange = { event => setPassword(event.target.value) } />
                </div>

                <div className="form-element">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password"/>
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
