import React from 'react'
import logo from '../assets/profile.jpg'
import './profile.css'

function ProfileCard() {
  return (
    <div className='profile-card'>
      <div className='profile-content'>
        <div className='profile-text'>
          <h3>Hi, I'm</h3>
          <span className='profile-name'>ARITRA</span>
          <p className='profile-description'>
            Welcome to my profile! I'm passionate about web development and creating amazing user experiences.
          </p>
        </div>
        <div className='profile-image-container'>
          <img src={logo} alt='Profile' className='profile-image' />
        </div>
      </div>
    </div>
  )
}

export default ProfileCard