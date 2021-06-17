import React, { Component } from "react";
import { Card, Nav, Button, InputGroup, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

class SearchBox extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="first">
              <Nav.Item>
                <LinkContainer to="/home/search">
                  <Nav.Link eventKey="first">Search</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/home/add">
                  <Nav.Link eventKey="link" disabled={!auth.uid}>
                    Add Listing
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
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

export default connect(mapStateToProps)(SearchBox);
