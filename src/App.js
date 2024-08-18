import React, { useState, useRef } from 'react';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")// manage search query from header 
  const cartRef = useRef(null); // Reference to the cart element

  const handleAddToCart = (product) => { //
    const existingProduct = cartItems.find(item => item.id === product.id); //check if item is present in the cart 
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Scroll to the bottom when an item is added to the cart
    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // remove item from cart
  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };
  console.log('search query value in app', searchQuery)
  const handleQuantityChange = (product, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(product);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity }
          : item
      ));
    }
  };

  return (
    <div className="App">
      {/*pass search query and setSearchQuery  too head */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HomePage onAddToCart={handleAddToCart}
        searchQuery={searchQuery} />{/**pass search query to homepage  */}
      <div ref={cartRef}>
        <CartPage
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onQuantityChange={handleQuantityChange}
        />
      </div>
    </div>
  );
}

export default App;
