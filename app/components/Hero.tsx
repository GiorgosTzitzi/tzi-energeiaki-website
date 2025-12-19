import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">
            Powering Greece with
            <span className="highlight"> Clean Solar Energy</span>
          </h1>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Explore Our Projects</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  )
}

