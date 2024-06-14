<template>
  <img :src="`${urlSprites}/${store.pokemonSelected?.id}.svg`"
    :class="{ 'brightness-0': store.opportunities > 0 }" class="w-[250px] mx-auto" />
</template>

<script setup lang="ts">
import { urlSprites } from '@/constants';
import { useStorePokemons } from '@/store';

const store = useStorePokemons();
</script>