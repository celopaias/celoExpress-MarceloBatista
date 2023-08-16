import { useState } from 'react';
import { NavBar } from './components/navbar/Navbar';
import { ItemListContainer } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';

function App() {
  const [cartNumber, setCartNumber] = useState(0);
  console.log(cartNumber);
  return (
    <>
      <NavBar cartNumber={cartNumber} />
      <Hero />
      <ItemListContainer setCartNumber={setCartNumber} />
    </>
  );
}

export default App;
