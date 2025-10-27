import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects, { Project } from './components/Projects';
import RayleighSolarTech from './components/RayleighSolarTech';

const projects: Project[] = [
  {
    title: 'Rayleigh Solar Tech (Capstone + WIL Projects)',
    description:
      'Co-Lead Developer – Built a photovoltaic Efficiency Estimator & G-Code Generator using PyQt6, pvlib, and NumPy. Implemented MVVM architecture and PXIe IV demo tool.',
    private: true,
    summary: '/projects/rayleigh-solar-tech',
  },
  {
    title: 'OSRS DPS Calculator (Personal Project)',
    description:
      'Full Stack Developer – Built interactive combat simulator web app using React/TypeScript, Zustand, ShadCN, FastAPI, and SQLite. Features include loadout previews and real-time simulations.',
    live: 'https://scapelab.net',
    code: 'https://github.com/QualitySushi/osrs-simulator',
  },
];

const skillsList = [
  'JavaScript (TypeScript)',
  'Python',
  'Java',
  'C#',
  'C++',
  'Kotlin',
  'PHP',
  'React.js',
  'Angular',
  'Bootstrap',
  'Tailwind',
  'Node.js',
  'Express.js',
  'ASP.NET',
  'FastAPI',
  'FlaskAPI',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'SQLite',
  'Azure',
  'CI/CD',
  'Git/GitHub',
  'Figma',
];

const educationData = [
  {
    title: 'Diploma in IT Programming',
    institution: 'Nova Scotia Community College (NSCC)',
    date: 'September 2023 → May 2025',
    description:
      'Focused on full stack web/mobile development, API design, cloud deployment, and AI integration.',
  },
];

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <section className="container">
                <About />
                <Projects projects={projects} />
                <Skills skills={skillsList} />
                <Education education={educationData} />
              </section>
            }
          />
          <Route path="/projects/rayleigh-solar-tech" element={<RayleighSolarTech />} />
          <Route path="*" element={<section className="container"><h2>Page Not Found</h2></section>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
