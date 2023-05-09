import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Search({setPokemons, data}) {

    const [query, setQuery] = useState('')
    /**
     * Function to handle search query. Based on user input, it will update the state
     * using function (setPokemons) that is passed to this component through props. 
     */
    function handleQuery(e){
        const value = e.target.value.toLowerCase();
        setQuery(value)
        if(value === '') 
            setPokemons([...data.getAllPokemon])
        else{
            const filtered = data.getAllPokemon.filter
            (p => 
                p.key.toLowerCase().includes(value) || 
                p.species.toLowerCase().includes(value));
            setPokemons(filtered)
        }
            
    }
    useEffect(() => {
        if(data?.getAllPokemon){
            setPokemons([...data.getAllPokemon])
        }
    },[data, setPokemons]);

  return (
    <input className='search'
      type="text"
      placeholder='Enter key or specie of Pokemon to search'
      value={query}
      onChange={handleQuery}
    />
  )
}

export default Search