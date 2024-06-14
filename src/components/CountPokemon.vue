<template>
  <div class="bg-white p-4 mx-auto w-[300px] text-center rounded-md ">
    <p class="text-xl"><b>Oportunidades:</b> {{ store.opportunities }}</p>
    <p class="text-xl"><b>Intentos:</b> {{ store.defeats }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useStorePokemons } from '@/store';

const store = useStorePokemons();

</script>