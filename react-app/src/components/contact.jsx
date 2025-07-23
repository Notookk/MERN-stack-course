import React, { useState } from 'react'
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    socialMediaLink: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interest: '',
        socialMediaLink: ''
      })
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000)
    }, 1500)
  }

  return (
    <div className='contact-section'>
      <h2 className='section-title'>Contact Me</h2>
      <div className='contact-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name *</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder='Your first name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name *</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder='Your last name'
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email Address *</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='your.email@example.com'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='interest'>Area of Interest *</label>
            <textarea
              id='interest'
              name='interest'
              value={formData.interest}
              onChange={handleChange}
              required
              rows='3'
              placeholder='Describe your area of interest or project requirements...'
            ></textarea>
          </div>

          <div className='form-group'>
            <label htmlFor='socialMediaLink'>Social Media Profile</label>
            <input
              type='url'
              id='socialMediaLink'
              name='socialMediaLink'
              value={formData.socialMediaLink}
              onChange={handleChange}
              placeholder='https://linkedin.com/in/yourprofile'
            />
          </div>

          <button 
            type='submit' 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className='success-message'>
              ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact