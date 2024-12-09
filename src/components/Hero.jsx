import React, { useRef } from 'react';
import resume from "../assets/ashok_web_resume.pdf";

const Hero = () => {
  
  return (
    <section id="hero">
      <div className="container">
        <h1>Hey! <span>I'm Ashok Redkar.</span></h1>
        <h4>FRONTEND DEVELOPER</h4>
        <p>A passionate and outstandingly “normal” web developer with creative thinking and close to two years of experience.</p>
        <a href={resume} download className="custom_btn">Get Resume</a>
      </div>
    </section>
  )
}

export default Hero