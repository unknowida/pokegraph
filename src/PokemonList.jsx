import React from 'react'

export function PokemonList() {
  const [pokemons, setPokemons] = React.useState([])

  const onClick = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
    const pokemonJSON = await response.json()

    const pokemonArray = pokemonJSON.results.map(ligne => ligne.name)

    debugger;
    const pokemonTypesResponse = await fetch('https://pokeapi.co/api/v2/type/')
    const pokemonTypesResponseJSON = await pokemonTypesResponse.json()
    const pokemonTypesArray = pokemonTypesResponseJSON.results.map(result => result.name)

    const chartData = []
    for (const pokemonType of pokemonTypesArray) {
      // pokemonType vaut "fairy"

// On va chercher les pokemons qui ont ce type
      //reprendre ici video part 2 à 36:40s



    return
      ; <div>
        <button onClick={onClick}>Rechercher Pokemons</button>
        <ul>
          {pokemons.map((pokemon) => (
            <li>(pokemon)</li>
          ))}
        </ul>
      </div>
  }
