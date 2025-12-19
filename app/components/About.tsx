import './About.css'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About TZI-ENERGEIAKI</h2>
        <p className="section-subtitle">
          Pioneering sustainable energy solutions across Greece
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              TZI-ENERGEIAKI is dedicated to transforming Greece's energy landscape through 
              innovative solar energy solutions. We develop, construct, and operate 
              state-of-the-art solar energy parks that harness the abundant sunshine 
              of Greece to generate clean, renewable electricity.
            </p>
            <p>
              Our commitment extends beyond energy production—we're building a sustainable 
              future for Greece, reducing carbon emissions, and contributing to energy 
              independence while creating economic opportunities in local communities.
            </p>
            
            <h3>Why Choose Us</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">☀️</div>
                <h4>Proven Expertise</h4>
                <p>Years of experience in solar energy development and operations</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌱</div>
                <h4>Sustainable Impact</h4>
                <p>Significant reduction in carbon footprint for a greener Greece</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Reliable Power</h4>
                <p>Consistent energy generation with cutting-edge technology</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤝</div>
                <h4>Local Partnership</h4>
                <p>Strong relationships with communities and stakeholders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

