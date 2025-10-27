import React from 'react';

export interface EducationItem {
  title: string;
  institution: string;
  date: string;
  description?: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="education container">
      <h2>Education & Certifications</h2>
      <div className="education-grid">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.title}</h3>
            <p className="institution">{item.institution} - {item.date}</p>
            {item.description && <p className="description">{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
