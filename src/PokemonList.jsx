import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

export function PokemonList() {
  const [pokemons, setPokemons] = React.useState([])

  const onClick = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const pokemonsJSON = await response.json()

    // sort by name
    pokemonsJSON.results.sort(function (a, b) {
      const nameA = a.name.toUpperCase() // ignore upper and lowercase
      const nameB = b.name.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      // names must be equal
      return 0
    })

    // effacer bulbasaur
    const filterPokemons = pokemonsJSON.results.filter(function (p) {
      return p.name != 'bulbasaur'
    })

    setPokemons(
      filterPokemons.map(function (pokemon) {
        return pokemon.name
      }),
    )
    console.log(pokemons)
  }

  //a chaque clique, on récupère les pokemons
  return (
    <div>
      <button onClick={onClick}>Rechercher Pokemons</button>
      <ul>
        {pokemons.map((pokemon) => (
          <li>{pokemon}</li>
        ))}
      </ul>
    </div>
  )
}
