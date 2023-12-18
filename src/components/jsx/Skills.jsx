import images from '../images';

import '../css/Skills.css';

const Skills = () => {
  const languages = [
    { name: 'HTML', icon: images.img_html, percentage: 80, color: 'bg-info' },
    { name: 'CSS', icon: images.img_css, percentage: 80, color: 'bg-info' },
    { name: 'JavaScript', icon: images.img_javaScript, percentage: 70, color: 'bg-info' },
    { name: 'Java', icon: images.img_java, percentage: 70, color: 'bg-info' },
    { name: 'PHP', icon: images.img_php, percentage: 70, color: 'bg-info' },
    { name: 'C#', icon: images.img_c, percentage: 60, color: 'bg-info' },
    { name: 'Ruby', icon: images.img_ruby, percentage: 60, color: 'bg-info' },
  ];

  return (
    <div className='container-Skills'>
      {languages.map((language, index) => (
        <div key={index} className='card-Skills'>
          <div className='item-Skills'>
            <img className='img-Skills' src={language.icon} alt={language.name} />
          </div>
          <div className='item-Skills description'>
            <div className={`progress bg-light ${language.color}`} style={{ borderRadius: '5px', overflow: 'hidden' }}>
              <div className='progress-bar' role="progressbar" style={{ width: `${language.percentage}%` }} aria-valuenow={language.percentage} aria-valuemin="0" aria-valuemax="100">
                {language.percentage}%
              </div>
            </div>
            <div className='title-Skills'>{language.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;