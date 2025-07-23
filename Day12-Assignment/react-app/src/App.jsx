import React, { useState } from 'react'
import Navbar from './components/navbar.jsx'
import ProfileCard from './components/profile.jsx'
import Cards from './components/cards.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('Home')

  const handleSectionChange = (section) => {
    setActiveSection(section)
    const targetId = section.toLowerCase()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <Navbar onSectionChange={handleSectionChange} />
      
      <div id="home" className="section-container">
        <ProfileCard />
      </div>
      
      <div id="about" className="section-container">
        <Cards />
      </div>
      
      <div id="projects" className="section-container">
        <Projects />
      </div>
      
      <div id="contact" className="section-container">
        <Contact />
      </div>
      
      <Footer />
    </>
  )
}

export default App
