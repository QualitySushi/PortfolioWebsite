import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about container">
      <h2>About Me</h2>
      <p>
        I&apos;m a junior software engineer with hands-on experience developing full-stack
        applications, building automation pipelines, and designing production-adjacent tools.
        I enjoy working across the stack, from API design and data modelling to UI development
        and system integration, with a growing focus on DevOps, CI/CD, and reliable deployment
        workflows.
      </p>
      <p>
        My recent work includes a full-stack combat simulator built with React, TypeScript,
        FastAPI and a custom data pipeline, and a bundle of engineering tools for photovoltaic
        performance modeling built with Python, PyQt6, pvlib, and MVVM architecture. I also
        build small productivity tools such as AutoSort Pro and VS Code extensions that
        automate repetitive file and project organization tasks for developers.
      </p>
      <p>
        I&apos;m passionate about building systems that are cleanly architected, well-tested,
        and reliable. I value learning, communication, and contributing to high-quality
        software used in real-world environments.
      </p>
      <div className="contact-info">
        <p>
          <strong>Mobile:</strong>{' '}
          <a href="tel:17827747447">(782) 774-7447</a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:abdallaelshafei@gmail.com">abdallaelshafei@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/abdalla-elshafei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/abdalla-elshafei/
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
