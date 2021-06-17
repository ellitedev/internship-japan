import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { LinkContainer } from "react-router-bootstrap";
import config from "../config/fbConfig";

// check out the video i used for this https://youtu.be/j9IT0E835B8

const SignedInLinks = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    config.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div>
      {currentUser && (
        <LinkContainer to="/details">
          <Button variant="outline-info" className="mr-2">
            {currentUser.displayName}
          </Button>
        </LinkContainer>
      )}
      <Button onClick={props.signOut} variant="outline-danger" className="mr-2">
        Log Out
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
