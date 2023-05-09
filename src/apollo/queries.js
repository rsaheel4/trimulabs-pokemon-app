import { gql, useQuery } from "@apollo/client";

// Custom hook to get all the pokemons
export const useGetAllPokemons = () => {
  /** 
   * reference https://graphqlpokemon.favware.tech/v7
   * Query to get all the pokemons
  */
  const GET_POKEMONS = gql`
  query {
    getAllPokemon {
      key
      species
      weight
      height
      shinySprite
      sprite
    }
  }`;
  return useQuery(GET_POKEMONS)
}

// custom hook to fetch single pokemon
export const useGetPokemon = (key) => {
  /** 
   * reference https://graphqlpokemon.favware.tech/
   * Query to get a single pokemon
  */
  const GET_POKEMON = gql`
  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      abilities {
        first {
          bulbapediaPage
          desc
          isFieldAbility
          key
          name
          serebiiPage
          shortDesc
          smogonPage
        }
        hidden {
          bulbapediaPage
          key
          isFieldAbility
          desc
          name
          serebiiPage
          shortDesc
          smogonPage
        }
      }
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      color
      cosmeticFormes
      eggGroups
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      evolutionLevel
      flavorTexts {
        flavor
        game
      }
      formeLetter
      forme
      gender {
        female
        male
      }
      height
      isEggObtainable
      key
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      weight
      types {
        name
      }
      catchRate {
        base
      }
    }
  }
  `;

  return useQuery(GET_POKEMON, {
    variables: {pokemon: key}
  })
}