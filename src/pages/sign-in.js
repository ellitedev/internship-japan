import React, { Component } from "react";
import Helmet from "react-helmet";
import {
  InputGroup,
  FormControl,
  Button,
  Card,
  ButtonToolbar,
  Alert,
} from "react-bootstrap";
import { connect } from "react-redux";
import { signIn, signInGoogle } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  handleGoogle = (e) => {
    e.preventDefault();
    this.props.signInGoogle(this.state);
  };
  render() {
    const { authError } = this.props;
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/home/search" />;
    return (
      <div>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <Card>
          <Card.Header as="h3">Sign In</Card.Header>
          <Card.Body>
            <div>
              {authError ? <Alert variant="danger">{authError}</Alert> : null}
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  E-mail
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="email"
                id="email"
                onChange={this.handleChange}
                placeholder="example@example.com"
                aria-label="e-mail"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Password
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="superStrongPassword"
                aria-label="password"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <ButtonToolbar>
              <Button
                variant="primary"
                className="mr-2"
                id="emailSignUp"
                onClick={this.handleSubmit}
              >
                Log In
              </Button>
              <Button
                variant="outline-primary"
                className="mr-2"
                id="googleSignUp"
                onClick={this.handleGoogle}
              >
                Log In with Google
              </Button>
            </ButtonToolbar>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signInGoogle: (creds) => dispatch(signInGoogle(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
