import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to My App</h1>
      <div className="content">
        <div className="card">
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <h2>Feature 2</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>ádddddddddddd</p>
        </div>
        <div className="card">
          <h2>Feature 3</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
