import React from 'react';
import Cart from '../components/Cart';

function CartPage({ cartItems, onRemove, onQuantityChange }) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-4">Your Cart</h1>
            <Cart cartItems={cartItems} onRemove={onRemove} onQuantityChange={onQuantityChange} />
        </div>
    );
}

export default CartPage;
