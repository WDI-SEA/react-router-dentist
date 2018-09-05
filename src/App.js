import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Procedures from './Procedures.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amazing Dr. Orin Scrivello's Dental Services</h1>
        </header>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/procedures">Procedures</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/procedures" component={Procedures} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
