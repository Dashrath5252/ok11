'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Experience Amazing Mobile Games</h1>
          <p className="hero-subtitle">
            Join millions of players enjoying ok11 Game's collection of fun and exciting games. Pure entertainment, anytime, anywhere.
          </p>
          
          <div className="floating-app-icon">
            <div className="floating-icon-container">
              <Image
                src="/ok11icon.webp"
                alt="OK11 Game Official App Icon"
                width={120}
                height={120}
                priority
              />
            </div>
          </div>

          <div className="download-section">
            <a 
              href="https://www.88ok11.com/?id=191397854" 
              className="download-btn" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download btn-icon"></i>
              Download OK11 Game
            </a>
            <p style={{ marginTop: '15px', color: '#a9b6c7' }}>Free • Safe • For Everyone</p>
          </div>
          
          <div className="game-stats">
            <div className="stat-box">
              <div className="stat-number">5.0★</div>
              <div className="stat-label">User Rating</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">2M+</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-label">Games</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
