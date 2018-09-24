import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../stylesheets/NavBar.css';
import '../../stylesheets/App.css';


const Home = () => (
    <div>
        <p>Welcome to my quiz site!</p>
        <p>Please select on the topics at the top.</p>
    </div>
)

const History = ({ example }) => (
    <div>
        <p>The history page, please select one of the topics below { example }</p>
    </div>
)

const Geography = ({ example }) => (
    <div>
        <p>The geography page, please select one of the topics below { example }</p>
    </div>
)

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/history">History</Link>
                        <Link to="/geography">Geography</Link>
                        
                    </nav>
                    <Route exact path="/" component={Home} />

                    <Route path="/history" render={(routerProps) => (
                        <History { ...routerProps } example="hello" />
                    )} />
                    <Route path="/geography" render={(routerProps) => (
                        <Geography { ...routerProps } example="hello" />
                    )} />
                </div>
            </Router>
        )
    }
}

export default NavBar