
import React from 'react';
import Card from 'react-bootstrap/Card';

const Projects = ({ title, description, imageSrc }) => {
  return (
    <section class="projects">
      <h2 className="text-center">Projects</h2>

      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </section>

  );
};

export default Projects;