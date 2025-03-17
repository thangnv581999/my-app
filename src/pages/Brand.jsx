import React, { useState, useRef, useEffect } from 'react';
import '../styles/Brand.css';
import Product from '../components/Product/Product';
import t1 from '../assets/t1.webp';
import t2 from '../assets/t2.webp';

// Sample data for filter options
const filterData = {
    category: [
        { id: 1, name: 'Bags', count: 5 },
        { id: 2, name: 'Bedding', count: 1 },
        { id: 3, name: 'Cap', count: 8 },
        { id: 4, name: 'Dresses', count: 2 },
        { id: 5, name: 'Electronic Item C', count: 2 },
        { id: 6, name: 'Hat', count: 1 },
        { id: 7, name: 'Jackets', count: 1 },
        { id: 8, name: 'Jeans', count: 4 },
        { id: 9, name: 'Jewelry', count: 11 },
        { id: 10, name: 'Knitwears', count: 5 },
        { id: 11, name: 'Lightweight Jackets', count: 12 },
        { id: 12, name: 'Long Sleeve Tee', count: 2 },
        { id: 13, name: 'Pants', count: 8 }
    ],
    brand: [
        { id: 1, name: 'A BATHING APE', count: 74 },
        { id: 2, name: 'AAPE', count: 0 },
        { id: 3, name: 'BABY MILO STORE', count: 7 },
        { id: 4, name: 'BAPE BLACK', count: 17 }
    ],
    gender: [
        { id: 1, name: 'Men', count: 120 },
        { id: 2, name: 'Women', count: 95 },
        { id: 3, name: 'Unisex', count: 25 }
    ],
    color: [
        { id: 1, name: 'Black', count: 45 },
        { id: 2, name: 'White', count: 38 },
        { id: 3, name: 'Red', count: 15 },
        { id: 4, name: 'Blue', count: 22 },
        { id: 5, name: 'Green', count: 18 },
        { id: 6, name: 'Yellow', count: 12 }
    ],
    size: [
        { id: 1, name: 'XS', count: 15 },
        { id: 2, name: 'S', count: 42 },
        { id: 3, name: 'M', count: 55 },
        { id: 4, name: 'L', count: 48 },
        { id: 5, name: 'XL', count: 32 },
        { id: 6, name: 'XXL', count: 18 }
    ]
};

// Sample product data
const sampleProducts = [
    {
        id: 1,
        name: "BAPE ABC CAMO COLLEGE TEE",
        price: 129.99,
        image: t1,
        colors: ['#000000', '#FFFFFF', '#FF0000'],
        category: 'Long Sleeve Tee',
        brand: 'A BATHING APE',
        gender: 'Men',
        size: ['M', 'L', 'XL']
    },
    {
        id: 2,
        name: "BAPE SHARK FULL ZIP HOODIE",
        price: 379.99,
        image: t2,
        colors: ['#000000', '#808080'],
        category: 'Jackets',
        brand: 'A BATHING APE',
        gender: 'Men',
        size: ['S', 'M', 'L']
    },
    {
        id: 3,
        name: "BABY MILO CANVAS TOTE BAG",
        price: 89.99,
        image: t1,
        colors: ['#FFFFFF', '#000000'],
        category: 'Bags',
        brand: 'BABY MILO STORE',
        gender: 'Unisex',
        size: ['ONE SIZE']
    },
    {
        id: 4,
        name: "BAPE BLACK CAMO PANTS",
        price: 249.99,
        image: t2,
        colors: ['#000000'],
        category: 'Pants',
        brand: 'BAPE BLACK',
        gender: 'Men',
        size: ['S', 'M', 'L', 'XL']
    },
    {
        id: 5,
        name: "AAPE LOGO PRINT T-SHIRT",
        price: 99.99,
        image: t1,
        colors: ['#FFFFFF', '#000000', '#0000FF'],
        category: 'Long Sleeve Tee',
        brand: 'AAPE',
        gender: 'Women',
        size: ['XS', 'S', 'M']
    },
    {
        id: 6,
        name: "BAPE CAMO BASEBALL CAP",
        price: 89.99,
        image: t2,
        colors: ['#00FF00', '#0000FF', '#FF0000'],
        category: 'Cap',
        brand: 'A BATHING APE',
        gender: 'Unisex',
        size: ['ONE SIZE']
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

const Brand = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSort, setSelectedSort] = useState('featured');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [expandedCategories, setExpandedCategories] = useState({
    category: true,
    brand: true,
    gender: true,
    color: true,
    size: true
  });
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    gender: [],
    color: [],
    size: []
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

    const brandMatch = selectedFilters.brand.length === 0 || 
      selectedFilters.brand.some(id => 
        filterData.brand.find(b => b.id === id)?.name === product.brand
      );

    const genderMatch = selectedFilters.gender.length === 0 || 
      selectedFilters.gender.some(id => 
        filterData.gender.find(g => g.id === id)?.name === product.gender
      );

    const sizeMatch = selectedFilters.size.length === 0 || 
      selectedFilters.size.some(id => 
        product.size.includes(filterData.size.find(s => s.id === id)?.name)
      );

    return categoryMatch && brandMatch && genderMatch && sizeMatch;
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
        // You might want to add a sales/popularity field to products for this
        return 0;
      default: // featured
        return 0;
    }
  });

  const handleSortClick = (value) => {
    setSelectedSort(value);
    setShowSortOptions(false);
  };

  return (
    <div>
        <div className="headerBrand">
            <p className='brand'>New Arrivals</p>
            <p className='quoteBrand'>
            Discover the latest trends in our New Arrivals collection! Shop fresh styles, exclusive pieces, and must-have items that elevate your wardrobe. 
            Whether you're looking for chic apparel, stylish accessories, or unique home decor, our new arrivals offer something for everyone. 
            Don't miss out—explore now!
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
                                    // Delay hiding to allow click events on options
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

        <div className='bodyBrand'>
            {showFilters && (
                <div className="filterBar">
                    <div className="filterOptions">
                        {renderFilterGroup('category', 'Category')}
                        {renderFilterGroup('brand', 'Brand')}
                        {renderFilterGroup('gender', 'Gender')}
                        {renderFilterGroup('color', 'Colour')}
                        {renderFilterGroup('size', 'Size')}
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

export default Brand;