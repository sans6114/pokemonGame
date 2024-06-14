import type { PokemonGameStatus, PokemonState } from '.'

export interface PokemonStore {
  pokemons: PokemonState[]
  pokemonSelected: PokemonState | null
  loading: boolean
  hasPokemons: boolean
  pokemonOptions: PokemonState[]
  pokemonStatusGame: PokemonGameStatus
  opportunities: number
  defeats: number
  showPokemonOptions: boolean
}
