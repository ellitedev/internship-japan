import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Pages
import Navbar1 from './pages/Navbar1'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './components/NotFound'

export default function App() {
    return (
        <Router>
            <div>
                <Navbar1/>
            </div>
            <div style={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '1em',
                    textAlign:'center'
                }
            }>
                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/details"></Route>
                    <Route exact path="/users"></Route>
                    <Route exact path="/sign-up"></Route>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
}
