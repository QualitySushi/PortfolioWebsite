import React from 'react';

export interface Project {
  title: string;
  description: string;
  /** Optional live site link (e.g. demo URL) */
  live?: string;
  /** Optional code repository link (e.g. GitHub URL) */
  code?: string;
  /** Optional internal case study or summary page link */
  summary?: string;
  /** Flag for proprietary / non-public projects */
  private?: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              {/* Live demo */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
              )}

              {/* Public code repo */}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Code
                </a>
              )}

              {/* Private project summary */}
              {project.private && project.summary && (
                <a
                  href={project.summary}
                  className="btn"
                >
                  View Summary
                </a>
              )}

              {/* Fallback: if none of the above */}
              {!project.live && !project.code && !project.summary && (
                <p style={{ color: '#888', fontSize: '0.9rem' }}>
                  (Private project – details available on request)
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
