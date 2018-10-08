import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import Homepage from './components/homepage/Homepage'
import HistoryQuiz from './components/history/HistoryQuiz'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
      <p>Welcome to my quiz site!</p>
      <p>Please select on the topics at the top.</p>
  </div>
)

const Geography = ({ example }) => (
  <div>
      <p>The geography page, please select one of the topics below { example }</p>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div className="navbar">
                <nav >
                    <Link to="/">Home</Link>
                    <Link to="/history">History</Link>
                    <Link to="/geography">Geography</Link>
                    
                </nav>
                <Route exact path="/" component={Home} />

                <Route path="/history" render={(routerProps) => {
                    return (
                      <HistoryQuiz />
                    )
                }} />
                <Route path="/geography" render={(routerProps) => (
                    <Geography { ...routerProps } example="hello" />
                )} />
            </div>
          </Router>
        </header>
        <Homepage />          
      </div>
    );
  }
}

export default App;
