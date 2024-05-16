<template>
  <div class="mt-5 w-screen md:w-2/4 p-10">
    <ul
      class="px-16 py-10 flex flex-col gap-10 rounded-md text-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
    >
      <button
        :class="[
          'capitalize shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] cursor-pointer transition-all p-3 px-4 rounded-2xl hover:font-bold',
          {
            correct: correctAnswer === id && blockSelection,
            incorrect: correctAnswer !== id && blockSelection
          }
        ]"
        v-for="{ name, id } in options"
        :key="id"
        @click="$emit('selectedOption', id)"
        :disabled="blockSelection"
      >
        {{ name }}
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type pokemon } from '../interfaces'
interface Props {
  options: pokemon[]
  blockSelection: boolean
  correctAnswer: number
}
defineProps<Props>()

defineEmits<{
  selectedOption: [id: number]
}>()
//intento de definir propiedad para que al tocar una vez un boton se deshabiliten los otyres
</script>

<style scoped>
.correct {
  background-color: blue;
  color: white;
}
.incorrect {
  background-color: rgba(195, 177, 177, 0.8);
}
</style>
