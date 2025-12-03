import React from 'react';
import { Link } from 'react-router-dom';

const RayleighSolarTech: React.FC = () => {
  return (
    <section className="container about">
      <h2>Rayleigh Solar Tech (Capstone + WIL Projects)</h2>

      <p>
        <strong>Role:</strong> Co-Lead Developer
      </p>

      <p>
        <strong>Overview:</strong>{' '}
        Developed a photovoltaic efficiency estimator and G-Code generator using
        <strong> PyQt6</strong>, <strong>pvlib</strong>, and <strong>NumPy</strong>. Implemented MVVM architecture,
        reusable templates, and a PXIe IV demo tool for data acquisition and characterization.
      </p>

      <h3>Key Responsibilities</h3>
      <ul>
        <li>
          Designed and implemented a modular <strong>MVVM</strong> architecture for the desktop tooling suite,
          ensuring testability and separation of concerns.
        </li>
        <li>
          Built a <strong>photovoltaic efficiency estimator</strong> that ingests panel / cell characteristics and
          outputs performance estimates under different irradiance and temperature profiles.
        </li>
        <li>
          Implemented a <strong>G-Code generator</strong> that transforms layout parameters into CNC-ready toolpaths
          for laser ablation and patterning.
        </li>
        <li>
          Developed a <strong>PXIe IV demo tool</strong> for capturing IV curve data from lab equipment and visualizing
          it for engineering analysis.
        </li>
        <li>
          Collaborated closely with Rayleigh engineers to refine requirements, validate outputs, and align the tools
          with production workflows.
        </li>
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        <li>
          <strong>Languages / Frameworks:</strong> Python, PyQt6, NumPy, pvlib
        </li>
        <li>
          <strong>Architecture:</strong> MVVM with clearly separated UI, ViewModel, and Core logic layers
        </li>
        <li>
          <strong>Tooling:</strong> Git, GitHub, virtual environments, packaging for internal distribution
        </li>
      </ul>

      <h3>Highlights</h3>
      <ul>
        <li>
          Built reusable UI components and templates to speed up future tool development within the same ecosystem.
        </li>
        <li>
          Created configuration-driven workflows so that engineers can adapt tool behaviour without modifying code.
        </li>
        <li>
          Delivered production-adjacent tools that are actively used to support internal characterization and
          experimentation.
        </li>
      </ul>

      <p>
        <em>Note:</em> Source code and assets are proprietary to Rayleigh Solar Tech. A high-level walkthrough and
        sanitized visuals are available upon request.
      </p>

      <div style={{ marginTop: '1rem' }}>
        <Link to="/" className="btn">
          ← Back to Portfolio
        </Link>
      </div>
    </section>
  );
};

export default RayleighSolarTech;
