import { useState } from 'react';
import { NavBar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/itemList/ItemDetail';
import CartProvider from './providers/CartProvider';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Hero />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route
            path="/category"
            element={<ItemListContainer />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetail />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
