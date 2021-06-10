import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

//Pages
import Navbar1 from './pages/Navbar1'
import Home from './pages/Home'
import About from './pages/About'


export default function App() {
    return (<Router>
        <div>
            <Navbar1/>
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/details">
                
                </Route>
                <Route path="/users">
                
                </Route>
            </Switch>
        </div>
    </Router>);
}