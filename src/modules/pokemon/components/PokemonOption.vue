<template>
  <div class="mt-5 w-screen md:w-2/4 p-10">
    <ul
      class="px-16 py-10 flex flex-col gap-10 rounded-md text-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
    >
      <button
        class="capitalize shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] cursor-pointer transition-all p-3 px-4 rounded-2xl hover:font-bold"
        v-for="{ name, id } in pokemonOptions"
        :key="id"
        @click="$emit('selectedOption', id)"
      >
        {{ id }}
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { pokemon } from '../interfaces'
import { usePokemonGame } from '../composables/usePokemonGame'

// Importo el composable y extraigo las propiedades necesarias
const { pokemonOptions } = usePokemonGame()

interface Props {
  options: pokemon[]
}
defineProps<Props>()

defineEmits<{
  selectedOption: [id: number]
}>()
</script>
