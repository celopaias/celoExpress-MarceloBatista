import { useState } from 'react';
import { NavBar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/navbar/Navbar';
import Products from './components/products/Products';
import { Hero } from './components/hero/Hero';

function App() {
  const [cartNumber, setCartNumber] = useState(5);
  return (
    <>
      <NavBar cartNumber={cartNumber} />
      <Hero />
      <ItemListContainer />
      <Products />
    </>
  );
}

export default App;
