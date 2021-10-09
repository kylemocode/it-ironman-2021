import { useState } from 'react';
import './App.css';
import PokemonList from './PokemonList';

function App() {
  const [offset, setOffset] = useState(0);

  return (
    <div className='App'>
      <h3>Pokemon List</h3>
      <button onClick={() => setOffset(offset === 0 ? 20 : 0)}>
        Change Offset
      </button>
      <PokemonList offset={offset} />
    </div>
  );
}

export default App;
