export interface PokemonsResponse {
  count: number
  next: string
  previous: string
  results: PokemonResult[]
}

export interface PokemonResult {
  name: string
  url: string
}

export interface PokemonState extends Pick<PokemonResult, 'name'> {
  id: number
}

export enum PokemonGameStatus {
  Playing = 'playing',
  Won = 'won',
  Lost = 'lost'
}
