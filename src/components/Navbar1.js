import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../logo.svg";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import BeatLoader from "react-spinners/BeatLoader";

const Navbar1 = (props) => {
  const { auth } = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>
              <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top mr-3"
                alt="logo"
              />
              Home
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/details">
            <Nav.Link>Details</Nav.Link>
          </LinkContainer>
        </Nav>
        {auth.isLoaded ? (
          <div>{links}</div>
        ) : (
          <BeatLoader color="white" margin="1vh" />
        )}
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar1);
