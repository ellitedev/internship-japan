import React, { Component } from "react";
import Helmet from "react-helmet";
import {
  InputGroup,
  FormControl,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp, signUpGoogle } from "../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    youtubeLink: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  handleGoogle = (e) => {
    e.preventDefault();
    this.props.signUpGoogle(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/home/search" />;
    return (
      <div>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header as="h3">Sign Up</Card.Header>
                <Card.Body>
                  <div>
                    {authError ? (
                      <Alert variant="danger">{authError}</Alert>
                    ) : null}
                  </div>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="First Name"
                      htmlFor="firstName"
                      type="text"
                      id="firstName"
                      onChange={this.handleChange}
                    />
                    <FormControl
                      placeholder="Last Name"
                      htmlFor="lastName"
                      type="text"
                      id="lastName"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
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
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        YouTube Video ID
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="link"
                      id="youtubeLink"
                      onChange={this.handleChange}
                      placeholder="_Y4m2hOP_K8"
                    />
                  </InputGroup>
                  <Button
                    variant="primary"
                    className="mr-2"
                    id="emailSignUp"
                    onClick={this.handleSubmit}
                    block
                  >
                    Sign Up
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header as="h3">Sign Up with Google</Card.Header>
                <Card.Body>
                  <div>
                    {authError ? (
                      <Alert variant="danger">{authError}</Alert>
                    ) : null}
                  </div>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="First Name"
                      htmlFor="firstName"
                      type="text"
                      id="firstName"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Last Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Last Name"
                      htmlFor="lastName"
                      type="text"
                      id="lastName"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        YouTube Video ID
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="link"
                      id="youtubeLink"
                      onChange={this.handleChange}
                      placeholder="_Y4m2hOP_K8"
                    />
                  </InputGroup>
                  <Button
                    variant="primary"
                    className="mr-2"
                    id="googleSignUp"
                    onClick={this.handleGoogle}
                    block
                  >
                    Sign Up with Google
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
    signUp: (newUser) => dispatch(signUp(newUser)),
    signUpGoogle: (newUser) => dispatch(signUpGoogle(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
