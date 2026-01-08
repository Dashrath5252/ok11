export default function FeaturesSection() {
  const features = [
    {
      icon: 'fas fa-gamepad',
      title: 'Diverse Game Library',
      description: 'Explore 100+ games across various categories - puzzle, arcade, strategy, and more.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Optimized',
      description: 'Perfectly designed for mobile devices with smooth gameplay and intuitive controls.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safe & Secure',
      description: 'Your privacy and security are our top priority. No unnecessary permissions required.'
    },
    {
      icon: 'fas fa-users',
      title: 'Community Driven',
      description: 'Join a vibrant community of gamers. Share experiences and make new friends.'
    }
  ]

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Why Choose ok11 Game?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
