import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uovhxsh', 'template_sggafl5', form.current, 'CuuEiuHl3B8sd30hz')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>contact@mitja.fi</h5>
            <a href="mailto:contact@mitja.fi" rel='noreferrer' target='_blank'>Send an email</a>
          </article>
          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Mitja Immonen</h5>
            <a href="https://t.me/mitjaimmonen" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact