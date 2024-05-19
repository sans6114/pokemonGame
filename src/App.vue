<template>
  <LayoutPokemon>
    <HeaderPokemon />
    <BodyPokemon
      v-if="options.length"
      :pokemon-id="generatePokemonSelected.id"
      :show-pokemon="onStateGame == stateGame.Playing"
      @generate-options="generatePokemonOptions(4)"
      :options="options"
      :afterRes="onStateGame !== stateGame.Playing"
    />
    <FooterPokemon />
  </LayoutPokemon>
</template>

<script setup lang="ts">
import { LayoutPokemon, HeaderPokemon, BodyPokemon, FooterPokemon } from '@/components'
import { usePokemon } from '@/composables'
import { stateGame } from './interface'

const {
  pokemonOptions: options,
  generatePokemonOptions,
  generatePokemonSelected,
  onStateGame
} = usePokemon()
</script>
