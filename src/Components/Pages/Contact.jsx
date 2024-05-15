import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zwgg427', 'template_xoc518k', form.current, {
        publicKey: 'e-ZzTmbXBup8Xeuxs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (
    <>
    <section id='contact' className='section5'>
    <form ref={form} onSubmit={sendEmail} className='form'>
      <label>Name</label>
      <input type="text" name="from_name" className='inputfield'/>
      <label>Subject</label>
      <input type="text" name="subject" className='inputfield' />    
      <label>Email</label>
      <input type="email" name="user_email" className='inputfield' />
      <label>Message</label>
      <textarea name="message" className='inputfield textfield' />
      <input type="submit" value="Send" className='formbtn'/>
    </form>
      </section> 
    </>
  )
}

export default Contact;
