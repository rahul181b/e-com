import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from './services/api';

function ProductList({ onAddToCart, searchQuery }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, []);

    // Filter products based on the search query
    console.log(searchQuery, 'in product lis');
    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase())
    })

    return (
        <div className="grid grid-cols-5 gap-4 p-4">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
}

export default ProductList;
