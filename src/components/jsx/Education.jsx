import images from '../images';
import Box from './Box';

const Education = () => {
  const boxes = [
    {
      imageSrc: images.img_colegio,
      title: 'Colegio Técnico Profesional de Fortuna de Bagaces',
      description: 'Técnico medio, Informática en Soporte',
      year: '2017'
    },
    {
      imageSrc: images.img_ucr,
      title: 'Universidad de Costa Rica',
      description: 'Bachiller, Informática Empresarial',
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