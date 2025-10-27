import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about container">
      <h2>About Me</h2>
      <p>
        I’m an emerging full-stack developer with hands-on experience designing and building modern web and desktop applications.
        My recent work includes developing a photovoltaic efficiency estimator for an industry partner and a full-stack combat simulator web app built with React, FastAPI, and SQLite.
        I enjoy crafting intuitive interfaces, architecting clean and maintainable systems, and solving real-world problems through code.
        Passionate about learning, collaboration, and delivering reliable software from concept to deployment.
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
      </div>
    </section>
  );
};

export default About;
