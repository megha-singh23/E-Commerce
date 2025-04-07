import React from 'react'
import { Outlet } from 'react-router-dom'

            
const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '40px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
  };

  const cardStyle = {
    backgroundColor: '#f8f8f8',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: '0.3s ease',
  };

  const cardTitleStyle = {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#222',
  };

  const cardTextStyle = {
    fontSize: '15px',
    color: '#555',
  };

  const services = [
    {
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly with our trusted logistics partners.',
    },
    {
      title: '24/7 Customer Support',
      description: 'We’re here to help you anytime with queries, returns, or product information.',
    },
    {
      title: 'Easy Returns',
      description: 'Hassle-free return process within 7 days of delivery for eligible products.',
    },
    {
      title: 'Secure Payments',
      description: 'Shop safely with encrypted payment methods and trusted gateways.',
    },
  ];
const Services = () => {
    return (
        <div className='mt-12'>
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Services</h1>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={cardTitleStyle}>{service.title}</h3>
            <p style={cardTextStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
 

            <Outlet />
        </div>
    )
}

export default Services
const sectionStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };

const AddUser = () => {
    return (
       
            <div style={sectionStyle}>
              <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>🚚 Fast Delivery</h2>
              <p>
                Your time is valuable! At Fasten, we ensure your orders are shipped within 24 hours and delivered within 2-4 business days.
                Our real-time tracking lets you stay updated, every step of the way.
              </p>
            </div>
    )
};
const Style = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };
const UpdateUser = () => {
    return (
        <div style={Style}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>📞 24/7 Customer Support</h2>
        <p>
          Have a question or issue? Our dedicated support team is available 24/7 to help you via chat, email, or phone. 
          We believe in making shopping smooth — and that means always being there when you need us.
        </p>
      </div>
    )
};

const easy = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };

const DeleteUser = () => {
    return (
        <div style={easy}>
      <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>🔁 Easy Returns</h2>
      <p>
        Changed your mind? No worries! We offer easy returns on most products within 7 days of delivery. 
        Just initiate the return through your Fasten account and we’ll handle the rest.
      </p>
    </div>
    )
};
const payments = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fdfdfd',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };
const SeeAllUser = () => {
    return (
        <div style={payments}>
      <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>🔒 Secure Payments</h2>
      <p>
        Your safety is our top priority. We use industry-standard encryption and secure gateways for every transaction.
        Pay with confidence using cards, UPI, net banking, or digital wallets.
      </p>
    </div>
    )
};

export {AddUser,UpdateUser,DeleteUser,SeeAllUser}