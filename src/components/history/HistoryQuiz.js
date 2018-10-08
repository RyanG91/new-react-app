import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../stylesheets/App.css';
import RomanQuiz from './roman/RomanQuiz'

class History extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>The history page, please select one of the topics below</p>                
                </div>
                <Router>                
                <div>
                        <br />
                            <Link to="/history/romans">Roman Empire</Link>
                            <Link to="/history/ww1">World War One</Link>                            
                            <Route path="/history/romans" render={(routerProps) => {
                                return (
                                <RomanQuiz />
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
