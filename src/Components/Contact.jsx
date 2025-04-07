import React from 'react';

const Contact = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '30px',
  };

  const sectionStyle = {
    marginBottom: '30px',
    color:'gray',
    fontWeight: 'bold',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const contactInfoStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle} className='mt-12'>Contact Us</h1>

      <div style={sectionStyle}>
        <h3>We’d love to hear from you!</h3>
        <p>
          Whether you have a question about your order, products, or just want to say hello —
          the Fasten team is here to help.
        </p>
      </div>

      <form>
        <label style={labelStyle}>Your Name</label>
        <input type="text" placeholder="Enter your name" style={inputStyle} />

        <label style={labelStyle}>Email</label>
        <input type="email" placeholder="Enter your email" style={inputStyle} />

        <label style={labelStyle}>Message</label>
        <textarea placeholder="Type your message here..." style={textareaStyle}></textarea>

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>

      <div style={{ ...sectionStyle, ...contactInfoStyle, marginTop: '40px' }}>
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> support@fasten.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Fasten Street, Online City, Webland</p>
      </div>
    </div>
  );
};

export default Contact;
