import React from 'react';
import { formatCurrency } from '../../utils/format';
import './Product.css';

const Product = ({ name, price, image, colors = [] }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">{formatCurrency(price, 'USD')}</div>
        <div className="product-colors">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product; 