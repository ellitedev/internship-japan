import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from "react-router-bootstrap";
import Logo from '../logo.svg'
import Button from 'react-bootstrap/Button'

function Navbar1() {
    return (
        <div>
            <Navbar variant="dark" bg="dark">

                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"/>
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
                <LinkContainer to="/sign-up">
                    <Button variant="outline-primary" id="signInBtn">Sign Up</Button>
                </LinkContainer>
            </Navbar>
        </div>

    )
}
export default Navbar1;
