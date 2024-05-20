import { pokeApi } from '@/api'
import { type Pokemon, type PokemonsResponse } from '@/interface'
import { onMounted, ref } from 'vue'

export const usePokemon = () => {
  // const onStateGame = ref<stateGame>(stateGame.Playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonOptions = ref<Pokemon[]>([])
  const pokemonSelected = ref<Pokemon>()
  const hasPokemons = ref(false)
  const initialCountOptions = 4

  const getPokemons = async () => {
    try {
      const pokemonsResponse = await pokeApi.get<PokemonsResponse>('/?limit=151')

      const pokemonResults = pokemonsResponse.data.results
      hasPokemons.value = pokemonResults.length > 0

      if (hasPokemons.value) {
        pokemons.value = pokemonResults.map((pokemon) => {
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
    const pokemonsOrder = pokemons.value.sort(() => Math.random() - 0.5)
    const options = pokemonsOrder.slice(0, countOptions)
    pokemonOptions.value = options

    generatePokemonSelected()
  }

  const generatePokemonSelected = () => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)
    pokemonSelected.value = pokemonOptions.value[randomIndex]
  }

  // const generatePokemonSelected = computed(() => {
  //   const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)
  //   return pokemonOptions.value[randomIndex]
  // })

  // const checkRes = (id: number) => {
  //   console.log(id)
  //   console.log(generatePokemonSelected.value.id)

  //   const youWon = generatePokemonSelected.value.id === id
  //   if (youWon) {
  //     onStateGame.value = stateGame.Won
  //     console.log('you won')
  //   } else {
  //     onStateGame.value = stateGame.Lost
  //     console.log('you lost')
  //   }
  // }

  onMounted(async () => {
    await getPokemons()
    if (hasPokemons.value) {
      generatePokemonOptions()
    }
  })
  return {
    // onStateGame,
    pokemonOptions,
    pokemonSelected
    // generatePokemonOptions,
    // generatePokemonSelected,
    // checkRes
  }
}
