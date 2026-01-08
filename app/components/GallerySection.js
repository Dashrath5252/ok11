'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function GallerySection() {
  useEffect(() => {
    const imageCards = document.querySelectorAll('.clean-image-card')
    
    imageCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)'
        card.style.boxShadow = '0 20px 40px rgba(255, 158, 0, 0.3)'
      })
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)'
        card.style.boxShadow = 'none'
      })
    })

    return () => {
      imageCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">ok11 Game Gallery</h2>
      
      <div className="image-grid">
        <div className="clean-image-card">
          <Image
            src="/ok111.webp"
            alt="OK11 Game Screenshot 1 - Slots Game"
            width={300}
            height={533}
            sizes="(max-width: 768px) 50vw, 300px"
            loading="lazy"
            quality={85}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="image-badge badge-hot">HOT</div>
        </div>
        
        <div className="clean-image-card">
          <Image
            src="/ok112.webp"
            alt="OK11 Game Screenshot 2 - Poker Game"
            width={300}
            height={533}
            sizes="(max-width: 768px) 50vw, 300px"
            loading="lazy"
            quality={85}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="image-badge badge-new">NEW</div>
        </div>
        
        <div className="clean-image-card">
          <Image
            src="/ok113.webp"
            alt="OK11 Game Screenshot 3 - Fishing Game"
            width={300}
            height={533}
            sizes="(max-width: 768px) 50vw, 300px"
            loading="lazy"
            quality={85}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="image-badge badge-popular">POPULAR</div>
        </div>
        
        <div className="clean-image-card">
          <Image
            src="/ok114.webp"
            alt="OK11 Game Screenshot 4 - Roulette Game"
            width={300}
            height={533}
            sizes="(max-width: 768px) 50vw, 300px"
            loading="lazy"
            quality={85}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="image-badge badge-trending">TRENDING</div>
        </div>
      </div>
    </div>
  )
}
