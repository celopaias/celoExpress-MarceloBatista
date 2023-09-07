import { useState } from 'react';
import { NavBar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/itemList/ItemDetail';
import CartProvider from './providers/CartProvider';
import { Cart } from './components/Cart/Cart';
import { FormInfo } from './components/info/formInfo';
import { InfoOrder } from './components/InfoOrder/InfoOrder';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetail />}
          />

          <Route
            path="/formInfo"
            element={<FormInfo />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/info/order"
            element={<InfoOrder />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
