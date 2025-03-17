import React, { useState, useRef, useEffect } from 'react';
import '../styles/Women.css';
import Product from '../components/Product/Product';
import t1 from '../assets/t1.webp';
import t2 from '../assets/t2.webp';

// Sample data for filter options
const filterData = {
    category: [
        { id: 1, name: 'Dresses', count: 45 },
        { id: 2, name: 'Tops', count: 38 },
        { id: 3, name: 'T-Shirts', count: 25 },
        { id: 4, name: 'Sweaters', count: 20 },
        { id: 5, name: 'Jeans', count: 30 },
        { id: 6, name: 'Pants', count: 28 },
        { id: 7, name: 'Skirts', count: 22 },
        { id: 8, name: 'Activewear', count: 15 },
        { id: 9, name: 'Swimwear', count: 12 },
        { id: 10, name: 'Outerwear', count: 18 },
        { id: 11, name: 'Accessories', count: 40 },
        { id: 12, name: 'Shoes', count: 35 }
    ],
    style: [
        { id: 1, name: 'Casual', count: 85 },
        { id: 2, name: 'Formal', count: 45 },
        { id: 3, name: 'Party', count: 30 },
        { id: 4, name: 'Business', count: 25 },
        { id: 5, name: 'Vacation', count: 20 }
    ],
    size: [
        { id: 1, name: 'XS', count: 45 },
        { id: 2, name: 'S', count: 62 },
        { id: 3, name: 'M', count: 75 },
        { id: 4, name: 'L', count: 58 },
        { id: 5, name: 'XL', count: 42 },
        { id: 6, name: 'XXL', count: 28 }
    ],
    color: [
        { id: 1, name: 'Black', count: 55 },
        { id: 2, name: 'White', count: 48 },
        { id: 3, name: 'Red', count: 25 },
        { id: 4, name: 'Blue', count: 32 },
        { id: 5, name: 'Pink', count: 28 },
        { id: 6, name: 'Green', count: 18 }
    ],
    price: [
        { id: 1, name: 'Under $50', count: 45 },
        { id: 2, name: '$50 - $100', count: 65 },
        { id: 3, name: '$100 - $200', count: 38 },
        { id: 4, name: 'Over $200', count: 22 }
    ]
};

// Sample product data for women's collection
const sampleProducts = [
    {
        id: 1,
        name: "Floral Summer Dress",
        price: 79.99,
        image: t1,
        colors: ['#FF69B4', '#98FB98', '#87CEEB'],
        category: 'Dresses',
        style: 'Casual',
        size: ['S', 'M', 'L']
    },
    {
        id: 2,
        name: "Classic Denim Jeans",
        price: 89.99,
        image: t2,
        colors: ['#000080', '#4169E1'],
        category: 'Jeans',
        style: 'Casual',
        size: ['XS', 'S', 'M', 'L']
    },
    {
        id: 3,
        name: "Elegant Evening Gown",
        price: 299.99,
        image: t1,
        colors: ['#000000', '#FF0000'],
        category: 'Dresses',
        style: 'Formal',
        size: ['S', 'M', 'L']
    },
    {
        id: 4,
        name: "Casual Cotton T-Shirt",
        price: 29.99,
        image: t2,
        colors: ['#FFFFFF', '#FFB6C1', '#98FB98'],
        category: 'T-Shirts',
        style: 'Casual',
        size: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: "Business Blazer",
        price: 149.99,
        image: t1,
        colors: ['#000000', '#1E90FF'],
        category: 'Outerwear',
        style: 'Business',
        size: ['S', 'M', 'L']
    },
    {
        id: 6,
        name: "Summer Beach Dress",
        price: 59.99,
        image: t2,
        colors: ['#FFB6C1', '#98FB98', '#87CEEB'],
        category: 'Dresses',
        style: 'Vacation',
        size: ['XS', 'S', 'M', 'L']
    }
];

const sortOptions = [
  { value: 'best-selling', label: 'Best selling' },
  { value: 'alpha-asc', label: 'Alphabetically, A-Z' },
  { value: 'alpha-desc', label: 'Alphabetically, Z-A' },
  { value: 'price-asc', label: 'Price, low to high' },
  { value: 'price-desc', label: 'Price, high to low' },
  { value: 'date-asc', label: 'Date, old to new' },
  { value: 'date-desc', label: 'Date, new to old' }
];

const Women = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState('featured');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [expandedCategories, setExpandedCategories] = useState({
    category: true,
    style: true,
    size: true,
    color: true,
    price: true
  });
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    style: [],
    size: [],
    color: [],
    price: []
  });

  // Focus input when dropdown opens
  useEffect(() => {
    if (showSortOptions && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSortOptions]);

  // Filter sort options based on search term
  const filteredSortOptions = sortOptions.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleFilterChange = (type, itemId) => {
    setSelectedFilters(prev => {
      const updatedFilters = { ...prev };
      if (updatedFilters[type].includes(itemId)) {
        updatedFilters[type] = updatedFilters[type].filter(id => id !== itemId);
      } else {
        updatedFilters[type] = [...updatedFilters[type], itemId];
      }
      return updatedFilters;
    });
  };

  const renderFilterGroup = (type, title) => (
    <div className="filterGroup">
        <button 
            className="categoryHeader" 
            onClick={() => toggleCategory(type)}
        >
            <h4>{title}</h4>
            <span className={`arrow ${expandedCategories[type] ? 'up' : 'down'}`}>▼</span>
        </button>
        {expandedCategories[type] && (
            <div className="categoryItems">
                {filterData[type].map(item => (
                    <label key={item.id}>
                        <input 
                            type="checkbox" 
                            checked={selectedFilters[type].includes(item.id)}
                            onChange={() => handleFilterChange(type, item.id)}
                        />
                        {item.name}
                        {item.count > 0 && <span>({item.count})</span>}
                    </label>
                ))}
            </div>
        )}
    </div>
  );

  // Filter products based on selected filters
  const filteredProducts = sampleProducts.filter(product => {
    const categoryMatch = selectedFilters.category.length === 0 || 
      selectedFilters.category.some(id => 
        filterData.category.find(cat => cat.id === id)?.name === product.category
      );

    const styleMatch = selectedFilters.style.length === 0 || 
      selectedFilters.style.some(id => 
        filterData.style.find(s => s.id === id)?.name === product.style
      );

    const sizeMatch = selectedFilters.size.length === 0 || 
      selectedFilters.size.some(id => 
        product.size.includes(filterData.size.find(s => s.id === id)?.name)
      );

    const priceMatch = selectedFilters.price.length === 0 || 
      selectedFilters.price.some(id => {
        const priceRange = filterData.price.find(p => p.id === id)?.name;
        const price = product.price;
        
        switch(priceRange) {
          case 'Under $50':
            return price < 50;
          case '$50 - $100':
            return price >= 50 && price <= 100;
          case '$100 - $200':
            return price > 100 && price <= 200;
          case 'Over $200':
            return price > 200;
          default:
            return true;
        }
      });

    return categoryMatch && styleMatch && sizeMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'alpha-asc':
        return a.name.localeCompare(b.name);
      case 'alpha-desc':
        return b.name.localeCompare(a.name);
      case 'date-asc':
        return a.id - b.id;
      case 'date-desc':
        return b.id - a.id;
      case 'best-selling':
        return 0;
      default:
        return 0;
    }
  });

  const handleSortClick = (value) => {
    setSelectedSort(value);
    setShowSortOptions(false);
  };

  return (
    <div>
        <div className="headerWomen">
            <p className='women'>Women's Collection</p>
            <p className='quoteWomen'>
            Discover our curated collection of women's fashion. From elegant dresses to casual wear, 
            find pieces that express your unique style. Shop the latest trends and timeless classics 
            designed for the modern woman.
            </p>
        </div>

        <div className="filterSortContainer">
            <div className="filterSection">
                <button className="filterButton" onClick={toggleFilters}>
                    <span>Filter</span>
                    <span className={`arrow ${showFilters ? 'up' : 'down'}`}>▼</span>
                </button>
                <span className="productCount">{sortedProducts.length} products</span>
            </div>

            <div className="sortSection">
                <div className="sortDropdown">
                    {!showSortOptions ? (
                        <button 
                            className="sortButton" 
                            onClick={() => {
                                setShowSortOptions(true);
                                setSearchTerm('');
                            }}
                        >
                            {sortOptions.find(opt => opt.value === selectedSort)?.label || 'Sort by'}
                            <span className={`arrow ${showSortOptions ? 'up' : 'down'}`}>▼</span>
                        </button>
                    ) : (
                        <div className="sortSearchContainer">
                            <input
                                ref={searchInputRef}
                                type="text"
                                className="sortSearch"
                                placeholder="Type to filter..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onBlur={() => {
                                    setTimeout(() => {
                                        if (!document.activeElement?.closest('.sortDropdown')) {
                                            setShowSortOptions(false);
                                        }
                                    }, 200);
                                }}
                            />
                        </div>
                    )}
                    {showSortOptions && (
                        <div className="sortOptions">
                            {filteredSortOptions.map(option => (
                                <button
                                    key={option.value}
                                    className={`sortOption ${selectedSort === option.value ? 'active' : ''}`}
                                    onClick={() => handleSortClick(option.value)}
                                >
                                    {option.label}
                                </button>
                            ))}
                            {filteredSortOptions.length === 0 && (
                                <div className="noResults">No matching options</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className='bodyWomen'>
            {showFilters && (
                <div className="filterBar">
                    <div className="filterOptions">
                        {renderFilterGroup('category', 'Category')}
                        {renderFilterGroup('style', 'Style')}
                        {renderFilterGroup('size', 'Size')}
                        {renderFilterGroup('color', 'Color')}
                        {renderFilterGroup('price', 'Price')}
                    </div>
                </div>
            )}
            
            <div className="productsGrid">
                {sortedProducts.map(product => (
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

export default Women; 