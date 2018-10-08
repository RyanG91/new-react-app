import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import Homepage from './components/homepage/Homepage'
import HistoryQuiz from './components/history/HistoryQuiz'
import GeographyQuiz from './components/geography/GeographyQuiz'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div className="navbar">
                <nav >
                    <Link to="/">Home</Link>
                    <Link to="/history">History</Link>
                    <Link to="/geography">Geography</Link>
                </nav>
                
                <Route exact path="/" render={(routerProps) => {
                  return (
                    <Homepage />
                  )
                }} />

                <Route path="/history" render={(routerProps) => {
                    return (
                      <HistoryQuiz />
                    )
                }} />
                <Route path="/geography" render={(routerProps) => {
                  return (
                    <GeographyQuiz />
                  )
                }} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
