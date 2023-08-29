import { useState } from 'react';
import { NavBar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/itemList/ItemDetail';
import { Data } from './data/Data';
import CartProvider from './providers/CartProvider';

function App() {
  const [cartNumber, setCartNumber] = useState(0);
  console.log(cartNumber);
  return (
    <CartProvider>
      <NavBar cartNumber={cartNumber} />
      <Hero />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                data={Data}
                setCartNumber={setCartNumber}
              />
            }
          />
          <Route
            path="/category"
            element={
              <ItemListContainer
                data={Data}
                setCartNumber={setCartNumber}
              />
            }
          />
          <Route
            path="/item/:id"
            element={<ItemDetail data={Data} />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
