import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, onRemove, onQuantityChange }) {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} onRemove={onRemove} onQuantityChange={onQuantityChange} />
            ))}
            <div className="text-right">
                <p className="text-xl font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cart;
