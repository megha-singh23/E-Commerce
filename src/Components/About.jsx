import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '20px',
    color: '#333',
  };

  const subheadingStyle = {
    fontSize: '24px',
    marginTop: '30px',
    color: '#444',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#555',
    marginTop: '10px',
  };

  const listStyle = {
    marginTop: '15px',
    paddingLeft: '20px',
    color: '#555',
  };

  return (
    <div style={containerStyle} >
      <h1 style={headingStyle} className='mt-12'>About Fasten</h1>
      <p style={paragraphStyle}>
        Welcome to <strong>Fasten</strong> — your one-stop destination for fast, reliable, and enjoyable online shopping.
      </p>

      <h2 style={subheadingStyle}>Who We Are</h2>
      <p style={paragraphStyle}>
        Fasten is an innovative eCommerce platform offering a wide range of quality products across fashion, electronics, home essentials, and more.
        Our goal is to make shopping simple, quick, and satisfying for everyone.
      </p>

      <h2 style={subheadingStyle}>Our Mission</h2>
      <p style={paragraphStyle}>
        At Fasten, we aim to deliver a smooth and secure shopping experience. From user-friendly navigation to fast deliveries and great support,
        we’re committed to customer satisfaction at every step.
      </p>

      <h2 style={subheadingStyle}>Why Choose Us?</h2>
      <ul style={listStyle}>
        <li>✔ Wide selection of quality products</li>
        <li>✔ Fast and secure checkout</li>
        <li>✔ Mobile-friendly and responsive design</li>
        <li>✔ Friendly and responsive customer support</li>
      </ul>
    </div>
  );
};

export default About;
