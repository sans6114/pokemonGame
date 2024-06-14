import type { PokemonResult, PokemonState } from '@/interfaces'

export const formatPokemonsResponse = (pokemonsResponse: PokemonResult[]): PokemonState[] => {
  return pokemonsResponse.map(({ url, name }) => {
    const urlParts = url.split('/')
    const pokemonId = urlParts.at(6) ?? '0'
    return { id: +pokemonId, name }
  })
}
