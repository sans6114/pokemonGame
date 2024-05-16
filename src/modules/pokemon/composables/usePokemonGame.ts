//aqui estara la logica principal de mi juego
//importo los modulos necesarios
import { pokeApi } from '../api/pokemonApi'
import { computed, onMounted, ref } from 'vue'
import { GameStatus, type PokemonList, type pokemon } from '../interfaces'
import confeti from 'canvas-confetti'

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)

  const pokemons = ref<pokemon[]>([])
  const isLoading = computed(() => {
    return pokemons.value.length === 0
  })

  const pokemonOptions = ref<pokemon[]>([])

  const getPokemonOption = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)
    return pokemonOptions.value[randomIndex]
  })

  const getPokemon = async (): Promise<pokemon[]> => {
    const res = await pokeApi.get<PokemonList>('/?limit=151')

    const pokemonArray = res.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/')
      const urlId = urlParts.at(-2) ?? '0'
      return {
        name: pokemon.name,
        id: +urlId
      }
    })

    return pokemonArray.sort(() => Math.random() - 0.5)
  }

  const checkAnswer = (id: number) => {
    const hasWon = getPokemonOption.value.id === id

    if (hasWon) {
      gameStatus.value = GameStatus.Won
      confeti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      })
    } else {
      gameStatus.value = GameStatus.Lost
    }
    return hasWon
  }

  const lost = ref(0)
  const won = ref(0)
  const games = ref(-1)
  const increment = () => {
    if (gameStatus.value === GameStatus.Won) {
      won.value++
    } else if (gameStatus.value === GameStatus.Lost) {
      lost.value++
    }
  }
  const getNextRound = (howMany: number = 4) => {
    pokemonOptions.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
    games.value++
    increment()
  }

  onMounted(async () => {
    pokemons.value = await getPokemon()
    getNextRound()
    console.log(pokemonOptions.value)
  })
  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    getPokemonOption,
    checkAnswer,
    lost,
    won,
    games,
    //methods
    getNextRound,
    increment
  }
}
