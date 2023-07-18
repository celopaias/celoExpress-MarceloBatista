import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img
          src={viteLogo}
          className="logo"
          alt="Vite logo"
        />

        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
        />
      </div>
      <h1>CeloExpress</h1>
      <div className="card">
        <p>Projeto de Marcelo Batista</p>
      </div>
    </>
  );
}

export default App;
