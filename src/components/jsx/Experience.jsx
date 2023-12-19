import images from '../images';
import Box from './Box';

const Experience = () => {
  const boxes = [
    {
      imageSrc: images.img_ucr,
      title: 'Universidad de Costa Rica',
      description:
      'Internal system for the management of community work hours and information,' +
      'I collaborated with improvements to the design and style of the website, some user role functionalities and '+
      'some changes to the internal structure of the system to facilitate its manipulation',
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