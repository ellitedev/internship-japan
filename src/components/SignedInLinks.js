import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { LinkContainer } from "react-router-bootstrap";

// check out the video i used for this https://youtu.be/j9IT0E835B8

const SignedInLinks = (props) => {
  const { auth, profile } = props;

  function Fname() {
    return <div>{profile.firstName}</div>;
  }
  function Dname() {
    return <div>{auth.displayName}</div>;
  }

  const userName = profile.firstName ? (
    <div>
      <Fname />
    </div>
  ) : (
    <div>
      <Dname />
    </div>
  );

  return (
    <div>
      <LinkContainer to="/details">
        <Button variant="outline-info" className="mr-2">
          <div>{userName}</div>
        </Button>
      </LinkContainer>
      <Button onClick={props.signOut} variant="outline-danger" className="mr-2">
        Log Out
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
