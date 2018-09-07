import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Status from '../Status/Status.js';
import Understanding from '../Understanding/Understanding.js';
import Support from '../Support/Support.js';
import Comments from '../Comments/Comments.js';
import Success from '../Success/Success.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Status}/>
          <Route path="/understanding" component={Understanding}/>
          <Route path="/support" component={Support}/>
          <Route path="/comments" component={Comments}/>
          <Route path="/success" component={Success}/>
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
