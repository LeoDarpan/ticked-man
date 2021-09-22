import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Signup.css'

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('PM');
    const [department, setDepartment] = useState('Webdev');

    const departments = [
        {
            label: "Webdev",
            value: "Webdev"
        },
        {
            label: "SearchUnify",
            value: "SearchUnify"
        },
        {
            label: "Salesforce",
            value: "Salesforce"
        },
        {
            label: "Lithium",
            value: "Lithium"
        },
        {
            label: "Marketo",
            value: "Marketo"
        }
    ];

    const roles = [
        {
            label: "Project Manager",
            value: "PM"
        },
        {
            label: "Team Lead",
            value: "TL"
        },
        {
            label: "Developer",
            value: "Dev"
        }
    ]
    const signUp = (event) => {
        event.preventDefault();
        
        const newUser = {
            username: username,
            email: email,
            password: password,
            role: role,
            department: department
        }

        setUsername('');
        setEmail('');
        setPassword('');
        setRole('Developer');
        setDepartment('Webdev')
        setConfirmPassword('');

        axios.post('http://localhost:8000/user', newUser)
            .then(response => {
                console.log(response.data);
                alert("Sign up successful!")
            })
            .catch(err => {
                //console.log(err.response.data);
                alert(err.response.data);
            })
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
                    <select value = { role } onChange = { event => setRole(event.target.value) }>
                        {
                            roles.map( option => (
                                <option value = { option.value}> {option.label}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-element test">
                    <label htmlFor="name">Department</label>
                    <select value = { department } onChange = { event => setDepartment(event.target.value)}>
                        {
                            departments.map(option => (
                                <option value = {option.value}>{option.label}</option>
                            ))
                        }
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
                    <input type="password" value = { confirmPassword } onChange = { event => setConfirmPassword(event.target.value) } />
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
