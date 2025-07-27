import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const existing = localStorage.getItem('file');
    const submissions = existing ? JSON.parse(existing) : [];
    submissions.push(form);
    localStorage.setItem('file', JSON.stringify(submissions));
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p className="contact-desc">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {submitted && <div className="contact-success">Thank you for contacting us! We'll reply soon.</div>}
    </div>
  );
};

export default Contact;
