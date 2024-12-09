import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h1 className='section_title'><span>03 </span>CONTACT</h1>
        <div className="contact_section">
          <div className="contact_info">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30124.50597035897!2d72.81926285036693!3d19.30135039478321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b02afa358a35%3A0x2356aebf3c63cb2a!2sBhayandar%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693396637491!5m2!1sen!2sin" width="100%" height="300" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="contact_box">
              <AiOutlineMail className="contact_icon" />
              <div>
                <h4>Email</h4>
                <span><a href="mailto:ashokredkar66@gmail.com">ashokredkar66@gmail.com</a></span>
              </div>
            </div>
            <div className="contact_box">
              <GrLinkedinOption className="contact_icon" />
              <div>
                <h4>Linked In</h4>
                <span><a href="https://www.linkedin.com/in/ashok-redkar-375a91215" target='_blank'>Profile</a></span>
              </div>
            </div>
          </div>
          <form action="https://formspree.io/f/xpzeyzdl" method="POST" className='contact_form'>
            <input type="text" placeholder="Name" name="username" required autoComplete="off" />
            <input type="email" placeholder="Email" name="email" required autoComplete="off" />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message' required autoComplete="off" ></textarea>
            <button type="submit" className='custom_btn'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact