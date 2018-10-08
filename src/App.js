import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import './stylesheets/NavBar.css';
import Homepage from './components/homepage/Homepage'
import NavBar from './components/navbar/NavBar'
import History from './components/history/History'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <Homepage />          
      </div>
    );
  }
}

export default App;
