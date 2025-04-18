import React from 'react';
import './ProfessionalSummarySection.css';

const ProfessionalSummarySection: React.FC = () => {
  return (
    <section className="professional-summary" id="professional-summary">
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        
        <div className="summary-content">
          <p>
            Software Engineer with 5+ years of expertise in developing scalable backend systems, API integration, and database optimization. Proficient in .NET, cloud solutions (Azure, AWS), and DevOps practices, with a proven ability to work with cross-functional teams to deliver high-performance applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummarySection; 