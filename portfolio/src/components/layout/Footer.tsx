import { FaGithub, FaLinkedin, FaYoutube, FaMedium, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact</h3>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:caglarcansarikaya@gmail.com">caglarcansarikaya@gmail.com</a>
            </div>
          </div>
          
          <div className="social-container">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://github.com/caglarsarikaya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/caglarcansarikaya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com/@caglarcansarikaya" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn">
                <FaYoutube />
              </a>
              <a href="https://caglarcansarikaya.medium.com" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="social-btn">
                <FaMedium />
              </a>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Caglar Sarikaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 