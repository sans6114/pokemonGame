<template>
  <LayoutPokemon>
    <HeaderPokemon />
    <BodyPokemon />
    <FooterPokemon />
  </LayoutPokemon>
</template>

<script setup lang="ts">
import { LayoutPokemon, HeaderPokemon, BodyPokemon, FooterPokemon } from "@/components";
import { usePokemon } from "@/composables";

const { pokemonOptions } = usePokemon();
console.log(pokemonOptions.value);
</script>
