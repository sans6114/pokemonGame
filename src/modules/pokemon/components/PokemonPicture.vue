<template>
  <div class="w-96">
    <img :src="pokemonImage" v-if="!showPokemon" alt="img pokemon" class="w-full brightness-0" />
    <img :src="pokemonImage" v-else alt="img pokemon" class="w-full" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
//definimos nuestras props
interface Props {
  pokemonId: number
  showPokemon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showPokemon: false
})

//computed property
const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
)
</script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
