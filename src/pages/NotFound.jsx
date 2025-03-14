import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className="page">
      <div className="content" style={{ textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" style={{ 
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          transition: 'background-color 0.2s'
        }}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
