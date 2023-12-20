import images from '../images';
import Box from './Box';

const Education = () => {
  const boxes = [
    {
      imageSrc: images.img_colegio,
      title: 'Technical Professional High School of Fortuna de Bagaces',
      description: 'Medium Technician, IT Support',
      year: '2017'
    },
    {
      imageSrc: images.img_ucr,
      title: 'University of Costa Rica',
      description: 'Bachelor´s degree in Business Informatics',
      year: '2023'
    },
  ];

  return (
    <div className="container-box">
      {boxes.map((box, index) => (
        <Box key={index} {...box} />
      ))}
    </div>
  );
};

export default Education;