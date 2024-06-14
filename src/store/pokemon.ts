import { pokeApi } from '@/api'
import { PokemonGameStatus, type PokemonStore, type PokemonsResponse } from '@/interfaces'
import { formatPokemonsResponse } from '@/utils'
import confetti from 'canvas-confetti'
import { defineStore } from 'pinia'

export const useStorePokemons = defineStore('pokemons', {
  state: (): PokemonStore => {
    return {
      pokemons: [],
      pokemonSelected: null,
      pokemonOptions: [],
      loading: true,
      hasPokemons: false,
      pokemonStatusGame: PokemonGameStatus.Playing,
      opportunities: 2,
      defeats: 0,
      showPokemonOptions: true
    }
  },
  getters: {
    getPokemonSelected: (state) => {
      return state.pokemonSelected
    }
  },
  actions: {
    async getPokemons() {
      this.loading = true
      try {
        const response = await pokeApi.get<PokemonsResponse>('/?limit=151')
        const results = response.data.results
        this.hasPokemons = results.length > 0

        if (this.hasPokemons) {
          this.pokemons = formatPokemonsResponse(results)
          this.generatePokemonsOptions()
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    generatePokemonsOptions() {
      const pokemonsOrder = this.pokemons.sort(() => Math.random() - 0.5)
      const options = pokemonsOrder.slice(0, 4)
      this.pokemonOptions = options
      this.generatePokemonSelected()
    },
    generatePokemonSelected() {
      const randomIndex = Math.floor(Math.random() * this.pokemonOptions.length)
      this.pokemonSelected = this.pokemonOptions[randomIndex]
    },
    onValidateSelectedPokemon(pokemonId: number) {
      this.opportunities--
      this.defeats++
      if (this.opportunities === 0) {
        this.showPokemonOptions = false;
        return
      }
      const youWon = this.pokemonSelected?.id === pokemonId


      if (youWon) {
        this.pokemonStatusGame = PokemonGameStatus.Won
        this.showPokemonOptions = false
        confetti({
          particleCount: 300,
          spread: 150,
          origin: { y: 0.6 }
        })
      } else {
        this.pokemonStatusGame = PokemonGameStatus.Lost
      }
    },
    resetGame() {
      this.pokemonStatusGame = PokemonGameStatus.Playing
      this.opportunities = 2
      this.defeats = 0
      this.showPokemonOptions = true
      this.generatePokemonsOptions()
    }
  }
})
