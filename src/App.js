import Skills from './components/jsx/Skills.jsx';
import Information from './components/jsx/Information.jsx';
import Projects from './components/jsx/Projects.jsx';
import Education from './components/jsx/Education.jsx';
import Experience from './components/jsx/Experience.jsx';
import Contact from './components/jsx/Contact.jsx';

import './App.css';

function App() {
  return (
    <div className='App'>
      <section className="Information">
        <Information />
      </section>

      <section className="skills">
        <h2 className="text-center">skills</h2>
        <Skills />
      </section>

      <section className="Projects">
        <h2 className="text-center">Projects</h2>
        <Projects />
      </section>

      <section className="Experience">
        <h2 className="text-center">Experience</h2>
        <Experience />
      </section>

      <section className="Education">
        <h2 className="text-center">Education</h2>
        <Education />
      </section>

      <footer className='m-0 w-100'>
        <section className="Contact">
          <Contact />
        </section>
      </footer>
    </div>
  );
}

export default App;
