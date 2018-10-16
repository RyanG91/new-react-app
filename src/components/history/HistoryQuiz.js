import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../stylesheets/App.css';
import '../../stylesheets/HistoryQuiz.css';
import RomanEasy from './roman/RomanEasy'
import RomanMedium from './roman/RomanMedium'
import RomanHard from './roman/RomanHard'
import Wwieasy from './wwi/Wwieasy'


class History extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Welcome to the history page, please select one of the topics below</p>                
                </div>
                <Router>                
                <div className="topics">
                        <br />
                            <div className="romane"><Link to="/history/romans_easy">Romans Easy</Link></div>
                            <div className="romanm"><Link to="/history/romans_medium">Romans Medium</Link></div>
                            <div className="romanh"><Link to="/history/romans_hard">Romans Hard</Link></div>
                            <div className="romans"><Link to="/history/romans_super">Romans Super</Link></div>
                            <br />
                            <div className="wwie"><Link to="/history/wwi_easy">World War One Easy</Link></div>
                            <Route path="/history/romans_easy" render={(routerProps) => {
                                return (
                                <RomanEasy />
                                )
                            }} />
                            <Route path="/history/romans_medium" render={(routerProps) => {
                                return (
                                <RomanMedium />
                                )
                            }} />
                            <Route path="/history/romans_hard" render={(routerProps) => {
                                return (
                                <RomanHard />
                                )
                            }} />
                            <Route path="/history/wwi_easy" render={(routerProps) => {
                                return (
                                <Wwieasy />
                                )
                            }} />
                        <br />
                </div>
                </Router>
                
            </div>
        )
    }
}

export default History
