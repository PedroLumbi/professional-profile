import '../css/Projects.css';
import images from '../images';
import ProjectCatalog from '../images_ProjectCatalog';

const Projects = () => {
  const projects = [
    { title: 'Proyecto 1', id: 'Proyecto1', imageSrc1: ProjectCatalog.syslab1, imageSrc2: ProjectCatalog.syslab1, imageSrc3: ProjectCatalog.syslab1 },
    { title: 'Proyecto 2', id: 'Proyecto2', imageSrc1: images.img_php, imageSrc2: images.img_php, imageSrc3: images.img_php }
  ];

  return (
    <div className="container">
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* The Modal */}
            <div className="modal fade" id={project.id + 'modal'}>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">

                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">{project.title}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  {/* Modal body */}
                  <div id={project.id} className="carousel slide">
                    <div className="carousel-control carousel-indicators m-0">
                      <button type="button" data-bs-target={'#' + project.id} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target={'#' + project.id} data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target={'#' + project.id} data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={project.imageSrc1} className="project-image" alt={project.id}></img>
                      </div>
                      <div className="carousel-item">
                        <img src={project.imageSrc2} className="project-image" alt={project.id}></img>
                      </div>
                      <div className="carousel-item">
                        <img src={project.imageSrc3} className="project-image" alt={project.id}></img>
                      </div>
                    </div>
                    <button className="carousel-control carousel-control-prev" type="button" data-bs-target={'#' + project.id} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control carousel-control-next" type="button" data-bs-target={'#' + project.id} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                  {/* Modal footer */}
                  {/* <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                  </div> */}

                </div>
              </div>
            </div>
            <div>
              {/* Open the Modal */}
              <div className="project-gallery btn btn-dark">
                <div target="_blank" href={project.imageSrc1} data-bs-toggle="modal" data-bs-target={"#" + project.id + 'modal'}>
                  <img src={project.imageSrc1} alt={project.title} className="project-image"></img>
                </div>
              </div>
              <h4 className="text-center">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;