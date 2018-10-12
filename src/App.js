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
            <div>
                <nav className="navbar">
                    <div className="home"><Link to="/">Home</Link></div>
                    <div className="history"><Link to="/history">History</Link></div>
                    <div className="geography"><Link to="/geography">Geography</Link></div>
                </nav>
                <div className="content">
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
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
