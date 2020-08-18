import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import NO from './components/NO/NO.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/NO" component={NO} />
        </div>
      </HashRouter>
    );
  }
}



const About = () => <div><h2>About</h2></div>

export default App;
