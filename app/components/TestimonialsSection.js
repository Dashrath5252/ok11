export default function TestimonialsSection() {
  const testimonials = [
    {
      text: '"ok11 Game has an amazing collection of games. I love the variety and the smooth gameplay. Perfect for passing time!"',
      author: '- Priya Sharma, Mumbai'
    },
    {
      text: '"The best mobile gaming app I\'ve used. No annoying ads and the games are genuinely entertaining."',
      author: '- Raj Patel, Delhi'
    },
    {
      text: '"Great for family entertainment. My kids love the puzzle games and I enjoy the strategy ones."',
      author: '- Anil Kumar, Bangalore'
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Players Say</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
