import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from "react-router-bootstrap";
import Logo from '../logo.svg'
import Button from 'react-bootstrap/Button'
import firebase from "firebase";
import "firebase/auth"

function Navbar1() {
    return (
<div>
    <Navbar variant="dark" bg="dark">

        <LinkContainer to="/">
            <Navbar.Brand>
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/>
            </Navbar.Brand>
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
            <LinkContainer to="/details">
                <Button variant="outline-primary" class-name="mr-sm-2">
                    <div id="userDetails"></div>
                </Button>
            </LinkContainer>

            <LinkContainer to="/">
                <Button id="signOutBtn" variant="outline-danger">Sign Out</Button>
            </LinkContainer>
        </section>
    </Navbar>
</div>

    )
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
                    userDetails.innerHTML = userDetails.innerHTML = `Hello ${
                        user.displayName
                    }!`;
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
export default Navbar1;