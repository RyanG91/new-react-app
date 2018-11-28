import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../stylesheets/App.css';
import '../../stylesheets/HistoryQuiz.css';
import RomanEasy from './roman/RomanEasy'
import RomanMedium from './roman/RomanMedium'
import RomanHard from './roman/RomanHard'
import RomanSuper from './roman/RomanSuper'
import Wwieasy from './wwi/Wwieasy'
import Wwimedium from './wwi/Wwimedium'
import Wwihard from './wwi/Wwihard'
import Wwisuper from './wwi/Wwisuper'



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
                            <div className="wwim"><Link to="/history/wwi_medium">World War One Medium</Link></div>
                            <div className="wwih"><Link to="/history/wwi_hard">World War One Hard</Link></div>
                            <div className="wwis"><Link to="/history/wwi_super">World War One Super</Link></div>
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
                            <Route path="/history/romans_super" render={(routerProps) => {
                                return (
                                <RomanSuper />
                                )
                            }} />
                            <Route path="/history/wwi_easy" render={(routerProps) => {
                                return (
                                <Wwieasy />
                                )
                            }} />
                            <Route path="/history/wwi_medium" render={(routerProps) => {
                                return (
                                <Wwimedium />
                                )
                            }} />
                            <Route path="/history/wwi_hard" render={(routerProps) => {
                                return (
                                <Wwihard />
                                )
                            }} />
                            <Route path="/history/wwi_super" render={(routerProps) => {
                                return (
                                <Wwisuper />
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
