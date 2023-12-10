import '../css/Skills.css';

const Skills = () => {
  const languages = [
    { name: 'JavaScript', icon: '🚀', percentage: 80, color: 'bg-info' },
    { name: 'HTML/CSS', icon: '🌐', percentage: 90, color: 'bg-success' },
    // Agrega más lenguajes según sea necesario
  ];

  return (
    <section class="skills programming-languages container">
      <div className="container mt-4">
        <h2 className="text-center">Skills</h2>

        <div className="d-flex flex-wrap justify-content-around">
          {languages.map((language, index) => (
            <div key={index} className="language-card text-center p-4 border rounded m-2" style={{ width: '200px' }}>
              <div className="language-icon" style={{ fontSize: '40px' }}>{language.icon}</div>
              <div className="language-title" style={{ fontSize: '18px' }}>{language.name}</div>
              <div className={`progress bg-light mt-3 ${language.color}`} style={{ height: '20px', borderRadius: '5px', overflow: 'hidden' }}>
                <div className="progress-bar" role="progressbar" style={{ width: `${language.percentage}%` }} aria-valuenow={language.percentage} aria-valuemin="0" aria-valuemax="100">
                  {language.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;