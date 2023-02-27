import { useState } from 'react';
import fetchPokemonData from '../components/fetchpokemondata';
import Clear from '../components/clear';

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
    function Btn() {
      handleClick()
      Clear()
    }
    // const [pokemonName, setPokemonName] = useState(null)

   const [pokemonData, setPokemonData] = useState(null);

  if (!pokemonData) {
    return (
      <div>
        <button onClick={Btn}>ポケモンを表示</button>
        <input type="text" id="input-field" name="name" />
      </div>
    );
  }

  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.imag} alt={pokemonData.name} />
      <button onClick={Btn}>ポケモンを表示</button>
      <input type="text" id="input-field" name="name" />
    </div>
  );
}
