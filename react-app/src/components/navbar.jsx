import React, { useState, useEffect } from 'react'
import './navbar.css'

function Navbar({ onSectionChange }) {
  const [activeItem, setActiveItem] = useState('Home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = ['Home', 'About', 'Projects', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleItemClick = (item) => {
    setActiveItem(item)
    if (onSectionChange) {
      onSectionChange(item)
    }
  }

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <span className='brand-text'>ARITRA</span>
          <span className='brand-subtitle'>Developer</span>
        </div>
        
        <ul className='navbar-menu'>
          {navItems.map((item) => (
            <li 
              key={item}
              className={`navbar-item ${activeItem === item ? 'active' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <span className='navbar-link'>
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className='navbar-toggle'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar