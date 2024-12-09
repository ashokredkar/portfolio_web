import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiNetlify } from 'react-icons/si'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <p><a href="#">Portfolio | Ashok Redkar</a></p>
        <div className="social_links">
          <a href="https://github.com/ashokredkar" target='_blank' title="Github"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/ashok-redkar-375a91215" target='_blank' title="LinkedIn"><BsLinkedin /></a>
          <a href="https://app.netlify.com/teams/ashokredkar66/overview" target='_blank' title="Netlify"><SiNetlify /></a>
        </div>
      </div>
    </section>
  )
}

export default Footer