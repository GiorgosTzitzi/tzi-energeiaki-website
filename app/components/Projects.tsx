'use client'

import './Projects.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Our Solar Energy Parks</h2>
        <p className="section-subtitle">
          Strategically located across Greece to maximize solar potential
        </p>
        
        <div className="projects-content">
          <div className="projects-image">
            {!imageError ? (
              <Image
                src="/solar-park.jpg"
                alt="Solar energy park in Greece"
                width={800}
                height={500}
                className="park-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="image-placeholder">
                <span className="placeholder-icon">☀️</span>
                <p>Add your solar park image to /public/solar-park.jpg</p>
              </div>
            )}
          </div>
          <div className="projects-text">
            <p>
              Our solar energy parks are strategically based throughout Greece, 
              taking advantage of the country's exceptional solar irradiance and 
              ideal climate conditions. With locations spanning from the mainland 
              to the islands, we've positioned our facilities to maximize energy 
              generation while contributing to Greece's renewable energy goals.
            </p>
            <p>
              Each of our parks is carefully selected and designed to integrate 
              seamlessly with the local environment, providing clean, sustainable 
              energy to communities across Greece. Our commitment to excellence 
              and environmental stewardship ensures that every installation 
              represents the highest standards in solar energy production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

