import images from '../images';
import Box from './Box';

const Experience = () => {
  const boxes = [
    {
      imageSrc: images.img_ucr,
      title: 'Universidad de Costa Rica',
      description: 'Bachiller, Informática Empresarial',
      year: '2022'
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

export default Experience;