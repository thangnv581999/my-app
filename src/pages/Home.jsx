import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/images/b1.jpg", "/images/b2.jpg", "/images/b3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Slideshow */}
      <div className="slideshow">
        <div
          className="slide"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <h1></h1>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="products">
          <div className="product-card">
            <img src="/images/giay.jpg" alt="BAPE STA Kids #1" />
            <h3>BAPE STA Kids #1</h3>
            <p>$202.00</p>
          </div>
          <div className="product-card">
            <img src="/images/ao1.jpg" alt="Print Tee #7" />
            <h3>Print Tee #7</h3>
            <p>$232.00</p>
          </div>
          <div className="product-card">
            <img src="/images/ao2.png" alt="Print Tee #8" />
            <h3>Print Tee #8</h3>
            <p>$232.00</p>
          </div>
          <div className="product-card">
            <img src="/images/ao3.jpg" alt="Print Pocket Tee" />
            <h3>Print Pocket Tee</h3>
            <p>$184.00</p>
          </div>
        </div>
      </div>

      {/* Nội dung bên dưới slideshow */}
      <div className="fashion-collection">
        <div className="fashion-image">
          <img src="/images/BAPE1.jpg" alt="Mr. Bathing Ape" />
          <div className="fashion-text">
            <h2>Mr. BATHING APE</h2>
          </div>
        </div>
        <div className="fashion-image">
          <img src="/images/BAPE2.jpg" alt="BAPE BLACK" />
          <div className="fashion-text">
            <h2>BAPE BLACK</h2>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="brand-section">
        <h2>Brand</h2>
        <div className="brand-list">
          <div className="brand-card">
            <img src="/images/br1.jpg" alt="A Bathing Ape" />
          </div>
          <div className="brand-card">
            <img src="/images/br2.jpg" alt="BAPE BLACK" />
          </div>
          <div className="brand-card">
            <img src="/images/br3.png" alt="Baby Milo" />
          </div>
          <div className="brand-card">
            <img src="/images/br4.jpg" alt="Aape" />
          </div>
          <div className="brand-card">
            <img src="/images/br5.jpg" alt="Bapy" />
          </div>
        </div>
      </div>

      <div className="card">
        <img src="/images/feature3.jpg" alt="Feature 3" className="card-img" />
        <h2>Feature 3</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </>
  );
};

export default Home;
