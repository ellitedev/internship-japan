import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <Card className="project-summary mt-2 mb-2">
      <Card.Header as="h5">
        {project.title}{" "}
        <Link to={"/project/" + project.id} className="float-right">
          Check it
        </Link>
      </Card.Header>
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
  );
};
export default ProjectSummary;
