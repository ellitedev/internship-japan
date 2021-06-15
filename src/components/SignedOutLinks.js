import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SignedOutLinks = () => {
  return (
    <div>
      <LinkContainer to="/sign-in">
        <Button variant="outline-success" className="mr-2">
          Log In
        </Button>
      </LinkContainer>
      <LinkContainer to="/sign-up">
        <Button variant="outline-primary" className="mr-2">
          Sign Up
        </Button>
      </LinkContainer>
    </div>
  );
};

export default SignedOutLinks;
