
export default async function fetchPokemonData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    const imag = await data.sprites.other['official-artwork'].front_default

    const nameresponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const namedata = await nameresponse.json()
    const name = await namedata.names.find((name) => name.language.name === 'ja').name
    return {imag, name}
}
