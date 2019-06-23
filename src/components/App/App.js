import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <p>Empty Page</p>
        </div>
        <Route path="/" exact component={Home}/>
        <Route path="/details" component={Details}/>
        <Route path="/edit" component={Edit}/>
      </Router>
    );
  }
}

export default App;
