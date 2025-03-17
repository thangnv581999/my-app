import React, { useState } from 'react';
import '../styles/Men.css';
import Product from '../components/Product/Product';
import t1 from '../assets/t1.webp';

const Men = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    gender: true,
    colour: true,
    size: true
  });

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Print Tee #7',
      price: 232.00,
      image: t1,
      colors: ['#CCCCCC', '#FFFFFF']
    },
    {
      id: 2,
      name: 'Print Tee #8',
      price: 232.00,
      image: t1,
      colors: ['#CCCCCC', '#000000']
    },
    {
      id: 3,
      name: 'Print Pocket Tee',
      price: 184.00,
      image: t1,
      colors: ['#000000', '#FF6B6B']
    },
    {
      id: 4,
      name: 'Pull Over Crewneck Sweat Shirt',
      price: 460.00,
      image: t1,
      colors: ['#A4C2F4', '#FFFFFF']
    },
    {
      id: 5,
      name: 'Pull Over Crewneck Sweat Shirt',
      price: 460.00,
      image: t1,
      colors: ['#A4C2F4', '#FFFFFF']
    }
    ,
    {
      id: 6,
      name: 'Pull Over Crewneck Sweat Shirt',
      price: 460.00,
      image: t1,
      colors: ['#A4C2F4', '#FFFFFF']
    }
    ,
    {
      id: 7,
      name: 'Pull Over Crewneck Sweat Shirt',
      price: 460.00,
      image: t1,
      colors: ['#A4C2F4', '#FFFFFF']
    }
  ];

  const categories = [
    { name: 'Accessories', count: 75 },
    { name: 'Bags', count: 37 },
    { name: 'Bedding', count: 18 },
    { name: 'Belts', count: 6 },
    { name: 'Cap', count: 116 },
    { name: 'Cushion', count: 6 },
    { name: 'Down Jackets', count: 36 },
    { name: 'Electronic Item C', count: 27 },
    { name: 'Face Mask', count: 7 },
    { name: 'Figure', count: 4 },
    { name: 'Gift Items', count: 1 },
    { name: 'Gloves', count: 1 },
    { name: 'Hat', count: 66 },
  ];

  const brands = [
    { name: 'BAPE', count: 1200 },
    { name: 'Baby Milo', count: 300 },
    { name: 'Mr. Bathing Ape', count: 265 },
  ];

  const genders = [
    { name: 'Men', count: 1500 },
    { name: 'Women', count: 200 },
    { name: 'Unisex', count: 65 },
  ];

  const colours = [
    { name: 'Black', count: 500 },
    { name: 'White', count: 450 },
    { name: 'Grey', count: 300 },
    { name: 'Blue', count: 250 },
    { name: 'Red', count: 200 },
  ];

  const sizes = [
    { name: 'XS', count: 100 },
    { name: 'S', count: 300 },
    { name: 'M', count: 500 },
    { name: 'L', count: 450 },
    { name: 'XL', count: 300 },
    { name: 'XXL', count: 100 },
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderFilterGroup = (title, items, section) => (
    <div className="filter-group">
      <div className="filter-header" onClick={() => toggleSection(section)}>
        <div className="title-wrapper">
          <h3>{title}</h3>
          <svg 
            className={`arrow ${expandedSections[section] ? 'expanded' : ''}`}
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {expandedSections[section] && (
        <ul className="category-list">
          {items.map((item) => (
            <li key={item.name} className="category-item">
              <label>
                <input type="checkbox" />
                {item.name}
                <span className="count">({item.count})</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="men-page">
      {/* Header Section */}
      <div className="men-header">
        <h1>Men</h1>
        <p className="description">
          Transform your wardrobe with the exclusive BAPE Men collection, where urban culture meets high fashion. 
          Designed for the modern man, BAPE offers a unique blend of bold designs and premium quality.
        </p>
      </div>

      {/* Filter and Sort Section */}
      <div className="filter-sort-container">
        <div className="filter-section">
          <button className="filter-button" onClick={toggleFilter}>
            <span>Filter</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8H12M2 4H14M6 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="product-count">1765 products</span>
        </div>

        <div className="sort-section">
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Sort by</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="best-selling">Best Selling</option>
          </select>
        </div>
      </div>

      <div className="content-container">
        {/* Filter Panel */}
        {isFilterOpen && (
          <aside className="filter-panel">
            {renderFilterGroup('Category', categories, 'category')}
            {renderFilterGroup('Brand', brands, 'brand')}
            {renderFilterGroup('Gender', genders, 'gender')}
            {renderFilterGroup('Colour', colours, 'colour')}
            {renderFilterGroup('Size', sizes, 'size')}
          </aside>
        )}

        {/* Products Grid */}
        <div className="products-grid">
          {products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              colors={product.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;