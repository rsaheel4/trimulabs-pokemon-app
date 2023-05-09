import React from 'react'
import PokemonList from './PokemonList'
import Search from './Search'

function HomePage({data, pokemons, setPokemons}) {

  return (
    <div className='conatiner'>
        <div className="wraper">
            <div className="main-heading"> List of Pokemons </div>
            <Search setPokemons={setPokemons} data={data}/>
            <PokemonList pokemons={pokemons}/>
        </div>
    </div>
  )
}

export default HomePage