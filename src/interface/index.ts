export interface PokemonsResponse {
  count:    number;
  next:     string;
  previous: string;
  results:  ResultPokemon[];
}

export interface ResultPokemon {
  name: string;
  url:  string;
}

export interface Pokemon {
  id: number;
  name: string;
}
