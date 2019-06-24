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
          <p>Main route</p>
        </div>
        <Route path="/" exact component={Home}/>
        <Route path="/details/:movieId" component={Details}/>
        <Route path="/edit/:movieId" component={Edit}/>
      </Router>
    );
  }
}

export default App;
