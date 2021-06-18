import React, { Component } from "react";
import { Card, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import "instantsearch.css/themes/satellite.css";
import moment from "moment";

const searchClient = algoliasearch(
  "WIYUL9L826",
  "6f2968c28fa695c8e09cf17a62b6207a"
);

const Hit = ({ hit }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header as="h4">{hit.title}</Card.Header>
      <Card.Body>
        <Card.Title>{hit.city}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{hit.country}</Card.Subtitle>
        <Card>
          <Card.Body>
            <Card.Text>{hit.description}</Card.Text>
          </Card.Body>
        </Card>
        <LinkContainer to={"/project/" + hit.objectID}>
          <Card.Link>Check it out!</Card.Link>
        </LinkContainer>
      </Card.Body>
      <Card.Footer className="text-muted">
        Posted by {hit.owner}{" "}
        {hit.createdAt && moment(hit.createdAt).calendar()}
      </Card.Footer>
    </Card>
  );
};

class SearchingBox extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        <InstantSearch searchClient={searchClient} indexName="Internships">
          <Card style={{ width: "70vw" }}>
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
              <SearchBox />
            </Card.Body>
          </Card>
          <Hits hitComponent={Hit} className="mt-4" />
        </InstantSearch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(SearchingBox);
