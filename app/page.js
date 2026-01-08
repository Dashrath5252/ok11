import Header from './components/Header'
import HeroSection from './components/HeroSection'
import GallerySection from './components/GallerySection'
import FeaturesSection from './components/FeaturesSection'
import CategoriesSection from './components/CategoriesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <CategoriesSection />
      <TestimonialsSection />
      <FAQSection />
      
      {/* Final CTA */}
      <section style={{ textAlign: 'center', padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', marginBottom: '20px', color: '#ffd166' }}>
            Ready to Start Playing?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#a9b6c7' }}>
            Download ok11 Game now and join the fun!
          </p>
          <a 
            href="https://www.88ok11.com/?id=191397854" 
            className="download-btn" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-download btn-icon"></i>
            Get ok11 Game Free
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
