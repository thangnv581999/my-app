import React from 'react';
import '../styles/About.css';

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "10+ years experience in software development"
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      description: "Expert in React and Node.js"
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      description: "Passionate about creating beautiful interfaces"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About Us</h1>
        <p className="subtitle">Building the future of web development</p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                We are passionate about creating innovative solutions that help businesses
                grow and succeed in the digital world. Our team of experts combines
                creativity with technical excellence to deliver outstanding results.
              </p>
              <p>
                With years of experience in web development and design, we understand
                what it takes to build successful digital products that users love.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We constantly push boundaries and embrace new technologies</p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>We deliver excellence in every project we undertake</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>We work closely with our clients to ensure success</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We maintain the highest standards of professional conduct</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 