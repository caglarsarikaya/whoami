import React from 'react';
import './AboutMeSection.css';

const AboutMeSection: React.FC = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="summary-content">
        <p>
          Hi, I'm <strong>Çağlar Sarıkaya</strong> — a passionate <strong>full-stack software developer</strong> with a strong focus on <strong>.NET technologies</strong> and modern web development. I enjoy building <strong>clean, maintainable systems</strong> and constantly explore better ways to solve real-world problems with code.
        </p>

        <p>
          Over the years, I've worked on projects ranging from <strong>backend APIs</strong> and <strong>authentication systems</strong> to <strong>AI-integrated platforms</strong> and frontend interfaces built with <strong>React, Vue</strong>, and <strong>Angular</strong>. I'm particularly interested in <strong>software architecture</strong>, <strong>automation</strong>, and using AI tools like <strong>Cursor</strong> and <strong>Copilot</strong> to boost productivity without sacrificing code quality.
        </p>

        <p>
          I enjoy staying connected with the <strong>global developer community</strong> and frequently share insights through my <strong><a href="https://medium.com/@caglarcansarikaya" target="_blank" rel="noopener noreferrer">Medium blog</a></strong> and <strong><a href="https://www.youtube.com/@caglarcansarikaya" target="_blank" rel="noopener noreferrer">YouTube channel</a></strong> — documenting <strong>development workflows</strong>, <strong>AI-assisted coding practices</strong>, and <strong>technical deep dives</strong> from real-world projects.
        </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection; 