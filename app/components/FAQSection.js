'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Is ok11 Game free to download?',
      answer: 'Yes, ok11 Game is completely free to download and play. There are no hidden charges or subscription fees.'
    },
    {
      question: 'What type of games are available?',
      answer: 'We offer a wide variety of games including puzzle games, arcade games, strategy games, casual games, and many more categories.'
    },
    {
      question: 'Is an internet connection required?',
      answer: 'Most games can be played offline. Some features may require internet connection for updates or community features.'
    },
    {
      question: 'Is ok11 Game suitable for children?',
      answer: 'Yes, ok11 Game contains family-friendly content suitable for all ages. We follow strict content guidelines.'
    },
    {
      question: 'How do I get support?',
      answer: 'You can contact our support team through the app or via email. We typically respond within 24 hours.'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <i className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
