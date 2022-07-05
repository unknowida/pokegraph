import React from 'react'

export function PokemonList() {

  const [pokemons, setPokemons] = React.useState([])

  const onClick = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const pokemonsJSON = await response.json()

    setPokemons(pokemonsJSON.results.map(pokemon => pokemon.name))
    console.log(pokemons)
  }

  return <div>
    <button onClick={onClick}>Rechercher Pokemons</button>
    <ul>
        {pokemons.map(pokemon => (<li>(pokemon)</li>))}
    </ul>
  </div>
}