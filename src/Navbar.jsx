import React from 'react';

const Navbar = () => {
  return (
    <div style={{ 
      backgroundColor: "white", 
      height: "10rem", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "0 2rem" 
    }}>
      <h1 style={{ margin: 0,fontSize:"3rem" }}>F E</h1>
      
      <ul style={{ 
        display: "flex", 
        listStyleType: "none", 
        margin: 0, 
        padding: 0, 
        gap: "2rem" // Space between items
      }}>
        <li><a href="#home" style={{ textDecoration: "none", color: "black" }}>HOME</a></li>
        <li><a href="#about" style={{ textDecoration: "none", color: "black" }}>ABOUT</a></li>
        <li><a href="#project" style={{ textDecoration: "none", color: "black" }}>PROJECT</a></li>
        <li><a href="#contact" style={{ textDecoration: "none", color: "black" }}>CONTACT</a></li>
      </ul>
      
      <div style={{ 
        display: "flex", 
        gap: "1rem" // Space between icons
      }}>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon.png" alt="LinkedIn" style={{ width: "2rem", height: "2rem" }} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="facebook-icon.png" alt="Facebook" style={{ width: "2rem", height: "2rem" }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="twitter-icon.png" alt="Twitter" style={{ width: "2rem", height: "2rem" }} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
