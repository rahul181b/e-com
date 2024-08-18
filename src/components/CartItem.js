import React from 'react';

function CartItem({ item, onRemove, onQuantityChange }) {
    return (
        <div className="flex justify-between items-center border-b pb-2 mb-2">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
            <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700">${item.price}</p>
                <div className="flex items-center mt-2">
                    <button onClick={() => onQuantityChange(item, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={() => onQuantityChange(item, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
            </div>
            <button onClick={() => onRemove(item)} className="text-red-500 font-bold">Remove</button>
        </div>
    );
}

export default CartItem;
