<template>
  <aside class="h-full">
    <h1 class="text-4xl font-bold mb-5 text-center">¿Quien es el pokemon?</h1>
    <div class="w-2/4 mx-auto">
      <img v-if="showPokemon" :src="pokemonImage" alt="img pokemon" class="w-full brightness-0" />
      <img v-else :src="pokemonImage" alt="img pokemon" class="w-full" />
    </div>
    <h3>{{ pokemonId }}</h3>
    <button
      class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full"
      @click="playAgain"
      v-if="afterRes"
    >
      Play again
    </button>
    <div class="flex flex-col justify-center items-center gap-5">
      <button
        class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full"
        v-for="{ name, id } in options"
        :key="id"
        @click="checkRes(id)"
      >
        {{ id }}
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePokemon } from '@/composables'
const { checkRes } = usePokemon()

interface Props {
  pokemonId: number
  showPokemon: boolean
  afterRes: boolean
  options: {
    id: number
    name: string
  }
}
const props = defineProps<Props>()
const emits = defineEmits(['generate-options'])

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
)
const playAgain = () => {
  emits('generate-options')
}
</script>
