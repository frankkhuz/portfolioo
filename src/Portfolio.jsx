import React from 'react';

const Portfolio = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ 
        fontSize: '3rem', // Larger font size
        fontWeight:"350",
        marginBottom: '4rem', // Space between heading and boxes
        textAlign: 'left',
        marginLeft: '4rem',
      }}>
        Portfolio
      </h2>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally within each row
        gap: '3rem', // Gap between rows
      }}>
        <div style={{ display: 'flex', gap: '3rem' }}>
          <BoxLink href="#" text="WEB DESIGN" color="#d3d3d3" />
          <BoxLink href="#" text="MOBILE DESIGN" color="#555555" />
          <BoxLink href="#" text="LOGO DESIGN" color="#d3d3d3" />
        </div>
        <div style={{ display: 'flex', gap: '3rem' }}>
          <BoxLink href="#" text="WEB APPLICATION DEVELOPMENT" color="#555555" />
          <BoxLink href="#" text="MOBILE APPLICATION DEVELOPMENT" color="#d3d3d3" />
          <BoxLink href="#" text="PWA DEVELOPMENT" color="#555555" />
        </div>
      </div>
    </div>
  );
};

// Link component with hover effect inside a box and color
const BoxLink = ({ href, text, color }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a 
      href={href}
      style={{ 
        ...boxStyle,
        backgroundColor: color,
        textDecoration: hovered ? 'underline' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
    </a>
  );
};

// Common style for each box
const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  boxSizing: 'border-box', // Ensure border and padding are included in size
  textDecoration: 'none', // Remove underline by default
  color: '#fff', // Text color
  fontSize: '1rem', // Adjust font size if needed
  textAlign: 'center',
  width: '16rem', // Width of the box
  height: '12rem', // Height of the box
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Light shadow
};

export default Portfolio;
