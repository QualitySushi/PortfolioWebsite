import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects, { type Project } from './components/Projects';
import RayleighSolarTech from './components/RayleighSolarTech';

const projects: Project[] = [
  {
    title: 'Rayleigh Solar Tech Capstone + WIL Projects (Python + PyQt6)',
    description:
      'Co-lead developer on a production-adjacent photovoltaic efficiency estimator and G-Code generator built with PyQt6, pvlib, NumPy, and MVVM architecture for an industry partner.',
    private: true,
    summary: '/projects/rayleigh-solar-tech',
  },
  {
    title: 'ScapeLab DPS Calculator (Full-Stack + DevOps)',
    description:
      'Full-stack combat simulation platform using React/TypeScript, Zustand, ShadCN, FastAPI, and Azure SQL, with GitHub Actions CI/CD pipelines, automated data scrapers, and real-time loadout previews.',
    live: 'https://scapelab.net',
    code: 'https://github.com/QualitySushi/osrs-simulator',
  },
];

const skillsList = [
  'Python',
  'TypeScript',
  'React',
  'FastAPI',
  'PyQt6',
  'Azure SQL',
  'Linux',
  'Bash',
  'Git/GitHub',
  'CI/CD (GitHub Actions)',
  'Unit & Integration Testing',
  'System Design',
];

const educationData = [
  {
    title: 'Diploma in IT Programming',
    institution: 'Nova Scotia Community College (NSCC)',
    date: 'September 2023 → May 2025',
    description:
      'Comprehensive two-year program covering software engineering, systems, and applied project work. Core coursework included data structures, object-oriented programming (Java/C++/C#), C programming, databases, Linux and Windows administration, networking & security, systems analysis and design, project management, web and mobile development, and a final integrated project plus an industry work term.',
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
          <Route
            path="*"
            element={
              <section className="container">
                <h2>Page Not Found</h2>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
