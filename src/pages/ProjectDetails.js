import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div>
        <Card>
          <Card.Header>{project.title}</Card.Header>
          <Card.Body>
            <Card.Title>{project.country}</Card.Title>
            <Card.Subtitle>{project.city}</Card.Subtitle>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            Posted by {project.owner}{" "}
            {project.createdAt && moment(project.createdAt.toDate()).calendar()}
          </Card.Footer>
        </Card>
      </div>
    );
  } else {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.internships;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "internships" }])
)(ProjectDetails);
