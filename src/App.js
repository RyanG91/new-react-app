import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import './stylesheets/NavBar.css';
import Homepage from './components/homepage/Homepage'
import NavBar from './components/navbar/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Homepage />          
      </div>
    );
  }
}

export default App;
