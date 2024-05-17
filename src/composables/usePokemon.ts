import { pokeApi } from '@/api'
import { type Pokemon, type PokemonsResponse } from '@/interface'
import { onMounted, ref } from 'vue'

export const usePokemon = () => {
  const pokemonsRef = ref<Pokemon[]>([])
  const pokemonOptions = ref<Pokemon[]>([])
  const hasPokemons = ref(false)
  const initialCountOptions = 4

  const getPokemons = async () => {
    try {
      const pokemonsResponse = await pokeApi.get<PokemonsResponse>('/?limit=151')

      const pokemons = pokemonsResponse.data.results
      hasPokemons.value = pokemons.length > 0

      if (hasPokemons.value) {
        pokemonsRef.value = pokemons.map((pokemon) => {
          const urlParts = pokemon.url.split('/')
          const pokemonId = urlParts.at(6) ?? '0'

          return {
            name: pokemon.name,
            id: +pokemonId
          }
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const generatePokemonOptions = (countOptions: number = initialCountOptions) => {
    const pokemonsOrder = pokemonsRef.value.sort(() => Math.random() - 0.5);
    const options = pokemonsOrder.slice(0, countOptions)
    pokemonOptions.value = options;
  }

  onMounted(async () => {
    await getPokemons()
    if (hasPokemons.value) {
      generatePokemonOptions()
    }
  })
  return {
    pokemonOptions,
    generatePokemonOptions
  }
}
