import React from "react";
import { Card } from "react-bootstrap";

const ProjectSummary = ({ project }) => {
  return (
    <Card className="project-summary">
      <Card.Header>{project.title}</Card.Header>
      <Card.Body>
        <Card.Title>{project.country}</Card.Title>
        <Card.Subtitle>{project.city}</Card.Subtitle>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProjectSummary;
