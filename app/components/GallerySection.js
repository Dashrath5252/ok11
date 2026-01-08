'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function GallerySection() {
  useEffect(() => {
    // Add image interaction effects
    const imageCards = document.querySelectorAll('.clean-image-card')
    
    imageCards.forEach(card => {
      const img = card.querySelector('.clean-image')
      
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)'
        card.style.boxShadow = '0 20px 40px rgba(255, 158, 0, 0.3)'
        if (img) img.style.transform = 'scale(1.05)'
      })
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)'
        card.style.boxShadow = 'none'
        if (img) img.style.transform = 'scale(1)'
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
        {/* Image 1 */}
        <div className="clean-image-card">
          <Image
            src="/ok111.webp"
            alt="OK11 Game Screenshot 1"
            fill
            className="clean-image"
            sizes="(max-width: 768px) 50vw, 25vw"
            loading="lazy"
          />
          <div className="image-badge badge-hot">HOT</div>
        </div>
        
        {/* Image 2 */}
        <div className="clean-image-card">
          <Image
            src="/ok112.webp"
            alt="OK11 Game Screenshot 2"
            fill
            className="clean-image"
            sizes="(max-width: 768px) 50vw, 25vw"
            loading="lazy"
          />
          <div className="image-badge badge-new">NEW</div>
        </div>
        
        {/* Image 3 */}
        <div className="clean-image-card">
          <Image
            src="/ok113.webp"
            alt="OK11 Game Screenshot 3"
            fill
            className="clean-image"
            sizes="(max-width: 768px) 50vw, 25vw"
            loading="lazy"
          />
          <div className="image-badge badge-popular">POPULAR</div>
        </div>
        
        {/* Image 4 */}
        <div className="clean-image-card">
          <Image
            src="/ok114.webp"
            alt="OK11 Game Screenshot 4"
            fill
            className="clean-image"
            sizes="(max-width: 768px) 50vw, 25vw"
            loading="lazy"
          />
          <div className="image-badge badge-trending">TRENDING</div>
        </div>
      </div>
    </div>
  )
}
