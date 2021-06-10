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
                    <section id="whenSignedOut">
                        <Button variant="outline-primary" id="signInBtn">Sign In</Button>
                    </section>
                <section id="whenSignedIn" hidden="true">
                    <LinkContainer to="/details"><Button variant="outline-primary" class-name="mr-sm-2">Details</Button></LinkContainer>
                    <Button id="signOutBtn" variant="outline-danger">Sign Out</Button>
                    </section>
            </Navbar>
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/details">
                    <Details/>
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
function Details() {
    return <div>
        <div id="userDetails"></div>
    </div>;
}




let isFirebaseAppDefined = false;
setInterval(() => {
    if (! isFirebaseAppDefined) {
        if (firebase.app()) {
            const auth = firebase.auth();
            const whenSignedIn = document.getElementById('whenSignedIn');
            const whenSignedOut = document.getElementById('whenSignedOut');

            const signInBtn = document.getElementById('signInBtn');
            const signOutBtn = document.getElementById('signOutBtn');

            const userDetails = document.getElementById('userDetails');

            const provider = new firebase.auth.GoogleAuthProvider();

            signInBtn.onclick = () => auth.signInWithPopup(provider);
            signOutBtn.onclick = () => auth.signOut();

            auth.onAuthStateChanged(user => {
                if (user) { // signed in
                    whenSignedIn.hidden = false;
                    whenSignedOut.hidden = true;
                    userDetails.innerHTML = userDetails.innerHTML =`<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
                } else {
                    whenSignedIn.hidden = true;
                    whenSignedOut.hidden = false;
                }
            });
            isFirebaseAppDefined = true;
        }
    }
}, 100);

console.log(firebase)
