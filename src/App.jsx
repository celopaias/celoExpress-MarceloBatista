import { useState } from 'react';
import { NavBar } from './components/Navbar';
import { ItemListContainer } from './components/Navbar';

function App() {
  const [cartNumber, setCartNumber] = useState(5);
  return (
    <>
      <NavBar cartNumber={cartNumber} />
      <ItemListContainer />
    </>
  );
}

export default App;
