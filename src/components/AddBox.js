import React, { Component } from "react";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { InputGroup, FormControl, Button, Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

import { createProject } from "../store/actions/projectActions";

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
    this.props.createProject(this.state);
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/sign-in" />;
    return (
      <div>
        <Helmet>
          <title>Add Internship</title>
        </Helmet>
        <Card style={{ width: "70vw" }}>
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
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBox);
