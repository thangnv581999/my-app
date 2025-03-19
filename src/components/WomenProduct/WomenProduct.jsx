import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './WomenProduct.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const WomenProduct = ({ image, name, price, description }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevent link navigation
    setIsFavorite(!isFavorite);
    setShowNotification(true);
    
    // Auto hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="women-product">
      <Link to="/product-details" className="women-product-link">
        <div className="women-product-image">
          <img src={image} alt={name} />
          <button 
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
        <div className="women-product-info">
          <h3 className="women-product-name">{name}</h3>
          {description && <p className="women-product-description">{description}</p>}
          {price && <p className="women-product-price">{price.toLocaleString('vi-VN')} đ</p>}
        </div>
      </Link>
      {showNotification && (
        <div className="favorite-notification">
          <div className="notification-content">
            <div className="notification-icon">
              <img src={image} alt={name} />
            </div>
            <div className="notification-text">
              <p>Đã thêm sản phẩm này vào danh sách yêu thích của bạn</p>
              <p className="notification-subtext">Truy cập vào danh sách yêu thích</p>
            </div>
            <button 
              className="close-notification"
              onClick={(e) => {
                e.preventDefault();
                setShowNotification(false);
              }}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

WomenProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default WomenProduct; 