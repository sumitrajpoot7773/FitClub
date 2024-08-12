import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o1cjvuy', 'template_y7vnhqj', form.current, {
        publicKey: 'ITrr4RDYVKdW7a_rW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className='email-container'>
          <input type="text" name='user_name' placeholder='enter your email address'/>
          <button className='btn-j btn-join'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join;
