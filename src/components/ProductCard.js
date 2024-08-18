import React from "react";


function ProductCard({ product, onAddToCart }) {
    return (
        <div className="border p-4 rounded-lg shadow">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4 hover:-translate-y-6 duration-300" />

            <h2 data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="text" className="text-xl font-bold mb-2 truncate  " title={product.title} >
                {product.title}
            </h2>
            <div id="tooltip-hover" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                {product.title}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>


            <p className="text-gray-700 mb-2">${product.price}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:bg-indigo-500 duration-300"
                onClick={() => onAddToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;