import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p style={{ textAlign: 'center', lineHeight: 1.6 }}>
        © 2025 Abdalla Elshafei. All rights reserved.
        <span style={{ margin: '0 8px' }}>|</span>
        Built with React and TypeScript.
        <span style={{ margin: '0 8px' }}>|</span>
        <a
          href="https://github.com/QualitySushi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-color)' }}
        >
          GitHub
        </a>
        <span style={{ margin: '0 8px' }}>|</span>
        <a
          href="https://buymeacoffee.com/qualitysushi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-color)' }}
        >
          ☕ Buy Me a Coffee
        </a>
      </p>
    </footer>
  );
};

export default Footer;
