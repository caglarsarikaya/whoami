import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectsSection.css';

const ProjectsSection = () => {
  // Sample project data - can be replaced with actual projects
  const projects = [
    {
      id: 1,
      title: 'Web Page Tester',
      description: 'A powerful and efficient ai builded web page testing tool that analyzes website response times and detects errors. This tool helps website administrators and developers identify performance bottlenecks and problematic URLs across their websites.',
      tech: ['C#', '.NET'],
      github: 'https://github.com/caglarsarikaya/PageTester',
    },
    {
      id: 2,
      title: 'Tightrope Walker Game',
      description: 'The Tightrope Walker Game is a browser-based 3D game implemented using JavaScript and WebGL via the Three.js library. The game features a character who must traverse a tightrope stretched between two mountains while maintaining balance.',
      tech: ['JavaScript', 'HTML', 'CSS', 'React', 'Three.js', 'Vite.js'],
      github: 'https://github.com/caglarsarikaya/TightropeWalker',
      demoLink: 'https://caglarsarikaya.github.io/TightropeWalker/'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Code
                </a>
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 