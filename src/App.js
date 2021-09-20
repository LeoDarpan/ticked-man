import './App.css';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        </Switch>
        
      </Router>

    </div>
    
  );
}

export default App;
