import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';
import Header from './Component/Header/Header';
import route from './route';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { route }
      </div>
    );
  }
}

export default App;
