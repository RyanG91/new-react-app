import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../stylesheets/NavBar.css';
import '../../stylesheets/App.css';
import NavBar from '../navbar/NavBar'


class History extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <p>The history page, please select one of the topics below</p>                
            </div>
        )
    }
}

export default History
