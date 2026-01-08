export default function CategoriesSection() {
  const categories = [
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Puzzle Games',
      description: 'Brain teasers and logic challenges'
    },
    {
      icon: 'fas fa-racing-flag',
      title: 'Arcade Games',
      description: 'Fast-paced action and adventure'
    },
    {
      icon: 'fas fa-brain',
      title: 'Strategy Games',
      description: 'Think and plan your moves'
    },
    {
      icon: 'fas fa-dice',
      title: 'Casual Games',
      description: 'Relax and enjoy simple fun'
    }
  ]

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">Game Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
