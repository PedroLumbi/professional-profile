import Skills from './components/jsx/Skills.jsx';
import Information from './components/jsx/Information.jsx';
import ProjectCatalog from './components/jsx/ProjectCatalog';
import Education from './components/jsx/Education.jsx';
import Experience from './components/jsx/Experience.jsx';
import Contact from './components/jsx/Contact.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='title-profile'>Pedro Pablo Lumbí Alvarez</h1>
      </header>
      
      <Information />

      <Skills />

      <ProjectCatalog />

      <Experience />

      <Education />
      
      <Contact />
    </div>
  );
}

export default App;
