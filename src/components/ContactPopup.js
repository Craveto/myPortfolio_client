import React, { useState } from 'react';
import './ContactPopup.css';
import emailjs from '@emailjs/browser';

const ContactPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('SnehalDighore', 'template_ozhfszo', formData, 'WS0vWjbxOzs0PRHja')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);  // Show Thank You message
        setTimeout(() => {
          onClose();         // Close popup after 2 seconds
        }, 4000);
      })
      .catch((error) => {
        console.error(error.text);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>

        {!submitted ? (
          <>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="popup-submit">
                Send Message
              </button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>🎉 Thank You!</h2>
            <p>Your message has been sent successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;

