import Box from './Box';

import '../css/Box.css';

const Experience = () => {
  const boxes = [
    { imageSrc: 'imagen1.jpg', description: 'Descripción del Recuadro 1.' },
    { imageSrc: 'imagen2.jpg', description: 'Descripción del Recuadro 2.' },
    { imageSrc: 'imagen3.jpg', description: 'Descripción del Recuadro 3.' },
    { imageSrc: 'imagen4.jpg', description: 'Descripción del Recuadro 4.' },
    // Agrega más recuadros según sea necesario
  ];

  return (
    <section class="Experience">
      <div className="container mt-4">
        <h2 className="text-center">Experience</h2>
        <div className="box-container">
          {boxes.map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;