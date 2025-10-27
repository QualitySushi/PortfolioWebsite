import React from 'react';

export interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <span className="skill-badge" key={idx}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
