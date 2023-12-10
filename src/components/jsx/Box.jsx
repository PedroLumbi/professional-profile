import Card from 'react-bootstrap/Card';

const Box = ({ imageSrc, description }) => {
  return (
    <Card style={{ width: '100%', marginTop: '0px' }}>
      <Card.Body className="d-flex">
        <div style={{ flex: '0 0 50%', paddingRight: '15px' }}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <div style={{ flex: '0 0 50%' }}>
          <Card.Text>{description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Box;