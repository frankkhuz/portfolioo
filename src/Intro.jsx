import React from 'react';
import './index.css';

const Intro = () => {
  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={{ ...titleStyle, animation: 'slideFadeIn 1.5s ease-in-out forwards' }}>FRANKLIN EKE</h1>
        <h2 style={{ ...subtitleStyle, animation: 'slideFadeIn 1.8s ease-in-out forwards' }}>Web Developer & Designer</h2>
        <button style={buttonStyle} className="slamButton">Contact Me</button>
      </div>
    </div>
  );
};

// Styles for the container
const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '70vh', // Full viewport height
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
  opacity: 0, // Initially hidden for animation
};

// Styles for the subtitle
const subtitleStyle = {
  fontSize: '1.5rem',
  margin: '0 0 1rem 0', // Margin below subtitle to add space before the button
  opacity: 0, // Initially hidden for animation
};

// Styles for the button
const buttonStyle = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  color: 'white',
  backgroundColor: 'black', // Button color
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  marginTop: '1rem', // Margin above button to separate it from the text
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

// CSS animations
const animations = `
@keyframes slideFadeIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slam {
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Add the slam effect to the button on hover */
.slamButton:hover {
  animation: slam 0.2s ease-in-out;
}
`;

// Append the animations to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animations;
document.head.appendChild(styleSheet);

export default Intro;
