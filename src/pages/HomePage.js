import React from 'react';
import ProductList from '../components/ProductList';

function HomePage({ onAddToCart, searchQuery }) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-green-600 p-4 ">Product Listing</h1>
            <ProductList onAddToCart={onAddToCart} searchQuery={searchQuery} />
        </div>
    );
}

export default HomePage;
