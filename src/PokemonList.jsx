import{React} from 'react'


export function PokemonList() {

    const [pokemons, setPokemons] = React.useState([])

    return (
      <div>
            <button> Rechercher

            </button>
      </div>
    <ul>
      <li>Pokemon1</li>
      <li>Pokemon2</li>
    </ul>
  )
}
