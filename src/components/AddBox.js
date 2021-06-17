import React, { Component } from "react";
import Helmet from "react-helmet";
import { InputGroup, FormControl, Button, Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { signUp, signUpGoogle } from "../store/actions/authActions";

class AddBox extends Component {
  state = {
    city: "",
    country: "",
    description: "",
    title: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Add Internship</title>
        </Helmet>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="link">
              <Nav.Item>
                <LinkContainer to="/home/search">
                  <Nav.Link eventKey="first">Search</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/home/add">
                  <Nav.Link eventKey="link">Add Listing</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Title
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                id="title"
                onChange={this.handleChange}
                placeholder="Descriptive title..."
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  City
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                id="city"
                onChange={this.handleChange}
                placeholder="Tokyo"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default">
                  Country
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                id="country"
                onChange={this.handleChange}
                placeholder="Japan"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Description</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                id="description"
                onChange={this.handleChange}
                as="textarea"
              />
            </InputGroup>
            <Button
              variant="primary"
              className="mr-2"
              id="citySignUp"
              onClick={this.handleSubmit}
              block
            >
              Add Listing
            </Button>
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
    signUp: (newUser) => dispatch(signUp(newUser)),
    signUpGoogle: (newUser) => dispatch(signUpGoogle(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBox);
