import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      console.log(result.text);
      setDone(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" placeholder="Your Name" name="user_name" required />
        <input type="email" placeholder="Your Email" name="user_email" required />
        <textarea placeholder="Your Message" name="message" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
        {done && <span className="thank-you">Thanks for contacting me!</span>}
      </form>
    </section>
  );
};

export default Contact;
