import React from "react";
import email from "./images/icons8-email-50.png";
import contact from "./images/icons8-phone-contact-50.png";
import linkedin from "./images/icons8-linkedin-50.png";
import insta from "./images/icons8-instagram-50.png";
import twitter from "./images/icons8-twitterx-50.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 lg:bg-gray-500 sm:bg-blue-400 mt-8">
    <div
    className="p-4 "
      style={{
        
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        height: "8rem",
      
        alignItems: "center",
        marginTop:"rem"
      }}
    >
      <div className="flex flex-col item-start ">
        <p style={{ fontSize: "1.3rem" }}>GET IN TOUCH</p>
        <div>
        <a
  href="mailto:frankkhuzy@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '1rem',
    textDecoration: 'none',
    color: 'inherit',
  }}
>
  <img
    src={email}
    alt="email"
    style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}
  />
  <p style={{ margin: 0 }}>frankkhuzy@gmail.com</p>
</a>
        </div>
        <div
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '1rem',
  }}
>
  <img
    src={contact}
    alt=""
    style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}
  />
  <p style={{ margin: 0 }}>(234)901-663-2497</p>
</div>
      </div>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          border: "2px solid white",
          width: "15rem",
          height: "3rem",
        }}
      >
        Contact Me
      </button>
      <div className="flex flex-h[10]] lg:flex-row sm:flex-col justify-around ">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            style={{ width: "2rem", height: "2rem" }}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={insta}
            alt="instagram"
            style={{ width: "2rem", height: "2rem" }}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src={twitter}
            alt="Twitter"
            style={{ width: "2rem", height: "2rem" }}
          />
        </a>
        
        
      </div>
    </div>
    <p>copyright &copy; 2019 FE</p>
    </footer>
  );
};

export default Footer;
