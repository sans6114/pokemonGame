<template>
  <section class="underline bg-red-600 md:h-36 flex justify-center">
    <img class="w-full md:w-full md:h-full p-2" src="../assets/pokemon-23.svg" alt="pokemon svg" />
  </section>
  <section class="flex flex-col px-4 text-center mt-10 mb-10">
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      <span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-red-600"
        >Pokemon Game</span
      >
      it's a game with a simple objetive, learing vue skills.
    </h1>
    <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      Here it's a simple counter with the points you've win, the idea it's in the future the app
      going to have a table with all points of the users. I hope you like it.
    </p>
    <h3>you won {{ winning }} times</h3>
    <h3>you {{ losting }} times</h3>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePokemonGame } from '../composables/usePokemonGame'
const { lost, won } = usePokemonGame()
const winning = ref(won)
const losting = ref(lost)

watch([won, lost], ([newWon, newLost]) => {
  winning.value = newWon
  losting.value = newLost
})
</script>
