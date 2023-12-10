import Project from './Projects';

const ProjectCatalog = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1.',
      imageSrc: 'proyecto1.jpg',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2.',
      imageSrc: 'proyecto2.jpg',
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Mis Proyectos</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCatalog;
