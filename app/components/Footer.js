import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="app-icon">
              <Image
                src="/ok11icon.webp"
                alt="OK11 Game Official App Icon"
                width={50}
                height={50}
              />
            </div>
            <div>
              <div className="logo-text">ok11 GAME</div>
              <div className="tagline">Entertainment & Fun</div>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#games">Games</a>
            <a href="#about">About</a>
            <a href="#support">Support</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          
          <div className="legal-section">
            <h3 className="legal-title">⚠️ IMPORTANT NOTICE</h3>
            <p>ok11 Game is an entertainment platform offering various mobile games for fun and relaxation. This platform is intended for recreational purposes only.</p>
            <p style={{ marginTop: '10px' }}>All games are designed for entertainment and do not involve real money gambling or betting. Users must be at least 13 years old to use this platform.</p>
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#ffaaaa' }}>
              <strong>सूचना:</strong>
              ok11 गेम एक मनोरंजन प्लेटफॉर्म है। यहाँ सभी गेम्स केवल मनोरंजन के उद्देश्य से हैं। कोई भी वास्तविक पैसों का जुआ या दाँव नहीं लगाया जाता है।
            </p>
          </div>
          
          <div className="copyright">
            <p>© 2026 ok11 Game Entertainment. All rights reserved.</p>
            <p style={{ marginTop: '8px', fontSize: '13px' }}>This platform offers entertainment games only. Play responsibly.</p>
            
            <div className="copyright-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
              <a href="#contact">Contact Us</a>
            </div>
            
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#778da9' }}>
              ok11 Game is a trademark of ok11 Game Entertainment. All game content is protected by copyright.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
