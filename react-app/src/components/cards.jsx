import React from 'react'
import './cards.css'

function Cards() {
  const cardData = [
    {
      title: "Web Development",
      description: "Creating modern and responsive websites using the latest technologies like React, Node.js, and more."
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces that provide excellent user experiences."
    },
    {
      title: "Mobile Apps",
      description: "Building cross-platform mobile applications using React Native and other modern frameworks."
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications with databases, APIs, and cloud integration."
    },
    {
      title: "E-commerce Solutions",
      description: "Building complete e-commerce platforms with payment integration and inventory management."
    },
    {
      title: "Database Design",
      description: "Designing and optimizing databases with SQL/NoSQL technologies for efficient data management."
    }
  ]

  return (
    <div className='skills-section'>
      <h2 className='section-title'>My Skills</h2>
      <div className='cards-container'>
        {cardData.map((card, index) => (
          <div key={index} className='card'>
            <div className='card-content'>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
