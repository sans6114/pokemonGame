import { pokeApi } from '@/api'
import { stateGame, type Pokemon, type PokemonsResponse } from '@/interface'
import { onMounted, ref, computed } from 'vue'

export const usePokemon = () => {
  const onStateGame = ref<stateGame>(stateGame.Playing)
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
    onStateGame.value = stateGame.Playing
    const pokemonsOrder = pokemonsRef.value.sort(() => Math.random() - 0.5)
    const options = pokemonsOrder.slice(0, countOptions)
    pokemonOptions.value = options
    console.log(pokemonOptions.value)
  }
  const generatePokemonSelected = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)
    console.log(pokemonOptions.value[randomIndex])
    return pokemonOptions.value[randomIndex]
  })

  const checkRes = (id: number) => {
    console.log(id)

    const youWon = generatePokemonSelected.value.id === id
    if (youWon) {
      onStateGame.value = stateGame.Won
      console.log('you won')
    } else {
      onStateGame.value = stateGame.Lost
      console.log('you lost')
    }
  }

  onMounted(async () => {
    await getPokemons()
    if (hasPokemons.value) {
      generatePokemonOptions()
    }
  })
  return {
    onStateGame,
    pokemonOptions,
    generatePokemonOptions,
    generatePokemonSelected,
    checkRes
  }
}
