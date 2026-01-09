'use client'

import Image from 'next/image'

export default function GallerySection() {
  const images = [
    { src: '/ok111.webp', alt: 'OK11 Game Screenshot 1', badge: 'HOT', badgeClass: 'badge-hot' },
    { src: '/ok112.webp', alt: 'OK11 Game Screenshot 2', badge: 'NEW', badgeClass: 'badge-new' },
    { src: '/ok113.webp', alt: 'OK11 Game Screenshot 3', badge: 'POPULAR', badgeClass: 'badge-popular' },
    { src: '/ok114.webp', alt: 'OK11 Game Screenshot 4', badge: 'TRENDING', badgeClass: 'badge-trending' },
  ]

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">ok11 Game Gallery</h2>

      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="clean-image-card">
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={533}
              sizes="(max-width: 768px) 50vw, 300px"
              quality={85}
              loading="lazy"
              className="clean-image"
            />
            <div className={`image-badge ${img.badgeClass}`}>
              {img.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
