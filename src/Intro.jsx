import React from 'react';

const Intro = () => {
  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={titleStyle}>FRANKLIN EKE</h1>
        <h2 style={subtitleStyle}>Web Developer & Designer</h2>
        <button style={buttonStyle}>Contact Me</button>
      </div>
    </div>
  );
};

// Styles for the container
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh', // Full viewport height
  backgroundImage: 'url(https://example.com/your-background-image.jpg)', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

// Styles for the overlay
const overlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '35%', // Move content a little to the left
  transform: 'translate(-35%, -50%)', // Adjust translation to account for left shift
  textAlign: 'left', // Align text to the left
  color: 'black', // Text color
};

// Styles for the title
const titleStyle = {
  fontSize: '3rem',
  margin: '0 0 0.5rem 0', // Margin below title
};

// Styles for the subtitle
const subtitleStyle = {
  fontSize: '1.5rem',
  margin: '0 0 1rem 0', // Margin below subtitle to add space before the button
};

// Styles for the button
const buttonStyle = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  color: 'white',
  backgroundColor: 'black', // Bootstrap primary color
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  marginTop: '1rem', // Margin above button to separate it from the text
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

export default Intro;
