<template>
  <LayoutPokemon>
    <HeaderPokemon />
    <button
      class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full"
      @click="generatePokemonOptions(4)"
    >
      change options and pokemon
    </button>
    <BodyPokemon
      v-if="pokemonOptions.length"
      :pokemon-id="generatePokemonSelected.id"
      :show-pokemon="onStateGame == stateGame.Playing"
    />
    <FooterPokemon />
  </LayoutPokemon>
</template>

<script setup lang="ts">
import { LayoutPokemon, HeaderPokemon, BodyPokemon, FooterPokemon } from '@/components'
import { usePokemon } from '@/composables'
import { stateGame } from './interface'

const { pokemonOptions, generatePokemonOptions, generatePokemonSelected, onStateGame } =
  usePokemon()
</script>
