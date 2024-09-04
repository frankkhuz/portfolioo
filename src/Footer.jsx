import React from 'react'
import email from "./images/icons8-email-50.png";
import contact from "./images/icons8-phone-contact-50.png";
import linkedin from "./images/icons8-linkedin-50.png";
import insta from "./images/icons8-instagram-50.png";
import twitter from "./images/icons8-twitterx-50.png";

const Footer = () => {
  return (
    <div>
      <div>
        <p>GET IN TOUCH</p>
        <img src={email} alt="" /> <p>Frankkhuz@gmail.com</p>
        <img src={contact} alt="" /><p>(234)901-663-2497</p>
      </div>
      <button>Contact Me</button>
      <div>
        <img src={linkedin} alt="" />
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
        <p>copyright &copy; 2019 FE</p>
      </div>
    </div>
  )
}

export default Footer