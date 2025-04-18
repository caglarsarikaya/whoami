import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Çağlar Sarıkaya</h1>
            <h2>Full Stack Developer | .NET Specialist</h2>
            <p>
            Experienced software engineer crafting <strong>high-performance applications</strong>, scalable backends, and seamless frontend experiences. Passionate about <strong>automation</strong>, AI-assisted development, and delivering clean, reliable code across the stack.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Let's Connect</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-img">
              <span>C.S.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 