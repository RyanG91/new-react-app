import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../stylesheets/App.css';
import RomanEasy from './roman/RomanEasy'

class History extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>Welcome to the history page, please select one of the topics below</p>                
                </div>
                <Router>                
                <div>
                        <br />
                            <Link to="/history/romans_easy">Romans Easy</Link>
                            <Link to="/history/romans_medium">Romans Medium</Link>
                            <Link to="/history/romans_hard">Romans Hard</Link>
                            <Link to="/history/romans_super">Romans Super</Link>                            
                            <Link to="/history/ww1">World War One</Link>                            
                            <Route path="/history/romans_easy" render={(routerProps) => {
                                return (
                                <RomanEasy />
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
