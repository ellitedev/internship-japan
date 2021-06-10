import React from "react";
import Button from 'react-bootstrap/Button'
import firebase from "firebase";
import "firebase/auth"
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import { LinkContainer } from "react-router-bootstrap";
import Logo from './logo.svg'


export default function App() {
    return (<Router>
        <div>
            <Navbar variant="light" bg="light" >

                    <LinkContainer to="/">
                        <Navbar.Brand>
                        <img src={Logo} width = "30" height = "30" className="d-inline-block align-top" alt="logo"/>
                        </Navbar.Brand >
                    </LinkContainer>
                <Nav className="mr-auto">


                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                        
                    <LinkContainer to="/users">
                        <Nav.Link>Users</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
                <LinkContainer to="/log-in" >
                    <Button variant="outline-success" className="mr-sm-2">Log In</Button>
                </LinkContainer>
                <LinkContainer to="/sign-up" >
                    <Button variant="outline-success">Sign Up</Button>
                </LinkContainer>
            </Navbar>
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/log-in">
                    <LogIn/>
                </Route>
                <Route path="/users">
                    <Users/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    </Router>);
}

function Home() {
    return <div>
        <h2>Home</h2>

        <header className="App-header">
            <p>
                Edit
                <code>"app.js"</code>
                and save to refresh (and cum).
            </p>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary">Learn React</Button>
                {' '} </a>
        </header>
    </div>;

}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
function LogIn() {
    return <h2>LOG IN PAGE</h2>;
}

