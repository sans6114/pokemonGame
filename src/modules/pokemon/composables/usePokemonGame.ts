//aqui estara la logica principal de mi juego
//importo los modulos necesarios
import { pokeApi } from '../api/pokemonApi'
import { computed, onMounted, ref } from 'vue'
import { GameStatus, type PokemonList, type pokemon } from '../interfaces'

export const usePokemonGame = () => {
  //defino una variable que evalua el estado de mi juego
  // al usar <> estoy definiendo el tipo de dato que contendra la variable gamestatus, eso significa que tendra tres tipos de valores
  //ahora al hacer '.playing' o '.won' puedo usarlo ya que importe la interface
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  //aqui debajo haremos una propiedad computada que servira a la hora de cargar nuevos pokemones
  const pokemons = ref<pokemon[]>([])
  const isLoading = computed(() => {
    return pokemons.value.length === 0
  })
  //pokemon options
  const pokemonOptions = ref<pokemon[]>([])
  //tengo que hacer una funcion que tome un pokemon random dentro del array pokemon options
  const getPokemonOption = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)
    const selectedPokemon = pokemonOptions.value[randomIndex]
    return selectedPokemon
  })
  //trabajare en esta parte para traer las datas desde la api de mis pokemones
  const getPokemon = async (): Promise<pokemon[]> => {
    //obtener informacion de los pokemones pero solo de los primeros 151, eso al usar la ruta con el slash
    //utilizo await ya que es una peticion asincrona a un servidor
    const res = await pokeApi.get<PokemonList>('/?limit=151')
    //realizar peticion
    //vamos a crear un array que contenga los pokemones pero de la forma que quiero osea con su nombre e id
    const pokemonArray = res.data.results.map((pokemon) => {
      //para tomar el id de mi pokemon
      const urlParts = pokemon.url.split('/')
      const urlId = urlParts.at(-2) ?? '0'
      return {
        //definimos el pokemon
        name: pokemon.name,
        id: +urlId
      }
    })
    //mezclare los pokemones dentro del return
    return pokemonArray.sort(() => Math.random() - 0.5)
  }

  //funcion para manejar las opciones que aparecen, supongo que tendra que tomar los primeros 4 elementos del array de pokemons, pero no lo se aun
  const nextOption = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing
    //almaceno 4 pokemons
    pokemonOptions.value = pokemons.value.slice(0, howMany)
    //almaceno todos los que quedan despues de esos 4, empieza a cortar de 4 para arriba
    pokemons.value = pokemons.value.slice(howMany)
  }
  onMounted(async () => {
    //extraigco mis pokemones
    pokemons.value = await getPokemon()
    nextOption()
    console.log(pokemonOptions.value)
  })
  return {
    //retorno el gamestatus
    gameStatus,
    isLoading,
    pokemonOptions,
    getPokemonOption,

    //methods
    nextOption
  }
}
