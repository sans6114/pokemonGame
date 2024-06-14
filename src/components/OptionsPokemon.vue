<template>
  <div class="mb-3 grid grid-cols-2 gap-4 w-[400px]">
    <button @click="store.onValidateSelectedPokemon(pokemon.id)"
      class="uppercase p-4 bg-blue-500 text-white w-full shadow-lg rounded-md font-bold" v-for="pokemon in pokemons"
      :key="pokemon.id">
      {{ pokemon.name }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useStorePokemons } from '@/store';

const store = useStorePokemons();
const pokemons = ref();

onMounted(async () => {
  await store.getPokemons();
  pokemons.value = store.pokemonOptions;
});
</script>