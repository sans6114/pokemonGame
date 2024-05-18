<template>
  <aside class="h-full">
    <h1 class="text-4xl font-bold mb-5 text-center">¿Quien es el pokemon?</h1>
    <div class="w-2/4 mx-auto">
      <img v-if="showPokemon" :src="pokemonImage" alt="img pokemon" class="w-full brightness-0" />
    </div>
    <ul>
      <p>Pokemon 1</p>
      <p>Pokemon 1</p>
      <p>Pokemon 1</p>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  pokemonId: number
  showPokemon: boolean
}
const props = defineProps<Props>()

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
)
</script>
