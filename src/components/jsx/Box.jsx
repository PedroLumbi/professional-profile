import Card from 'react-bootstrap/Card';

import '../css/Box.css';

const Box = ({ imageSrc, title, description, year }) => {
  return (
    <Card className='box'>
      <Card.Body className="box-body">
        <div className='gallery'>
          <Card.Img src={imageSrc} />
        </div>
        <div className='description'>
          <Card.Text className='box-title'>{title}</Card.Text>
          <Card.Text className='box-description'>{description}</Card.Text>
          <Card.Text className='box-year'>{year}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Box;