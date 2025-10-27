import React from 'react';
import { Link } from 'react-router-dom';

const RayleighSolarTech: React.FC = () => {
  return (
    <main className="content">
      <section className="container about">
        <h2>Rayleigh Solar Tech (Capstone + WIL Projects)</h2>

        <p><strong>Role:</strong> Co-Lead Developer</p>

        <p>
          <strong>Overview:</strong> Developed a photovoltaic efficiency estimator and G-Code generator using
          <strong> PyQt6</strong>, <strong>pvlib</strong>, and <strong>NumPy</strong>. Implemented MVVM architecture,
          reusable templates, and a PXIe IV demo tool for data acquisition and characterization.
        </p>

        <p>
          The application supports engineers in analyzing solar cell performance and producing G-Code for CNC-based
          fabrication workflows. Built as part of an industry partnership capstone and WIL engagement.
        </p>

        <p>
          <em>Note:</em> Source code and assets are proprietary to Rayleigh Solar Tech. A high-level walkthrough and
          sanitized visuals are available upon request.
        </p>

        <div style={{ marginTop: '1rem' }}>
          <Link to="/" className="btn">← Back to Portfolio</Link>
        </div>
      </section>
    </main>
  );
};

export default RayleighSolarTech;
