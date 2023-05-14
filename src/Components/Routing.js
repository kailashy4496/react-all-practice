import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Routing() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path='/about'>
                    <About></About>
                </Route>

                <Route path='/contact'>
                    <Contact></Contact>
                </Route>

                <Route path='/'>
                    <Home></Home>
                </Route>
            </Switch>
        </Router>

    )
}

function Home(){
    return <h1>Hello Home</h1>
}

function About(){
    return <h1>About</h1>
}

function Contact(){
    return <h1>Please Contact this Number</h1>
}