import { useState } from 'react';
import fetchPokemonData from '../components/fetchPokemonData';

export default function RandomPokemon() {
  const [shownPokemonIds, setShownPokemonIds] = useState([])
  
   const randomid = Math.floor(Math.random() * 1008) + 1

  async function handleClick() {
    let id = randomid
    while (shownPokemonIds.includes(id)){
      id = randomid
    }
    setShownPokemonIds([...shownPokemonIds, id])
    const data = await fetchPokemonData(id)
    setPokemonData(data)
    // setPokemonName(name)
  }
    // const [pokemonName, setPokemonName] = useState(null)

   const [pokemonData, setPokemonData] = useState(null);

  if (!pokemonData) {
    return (
      <div>
        <button onClick={handleClick}>ポケモンを表示</button>
        <input type="text" name="name"/>
        <p>k</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.imag} alt={pokemonData.name} />
      <button onClick={handleClick}>ポケモンを表示</button>
      <input type="text" name="name"/>
    </div>
  );
}

