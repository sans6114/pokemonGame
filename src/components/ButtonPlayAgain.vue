<template>
    <button @click="store.resetGame"
        class="p-6 bg-red-500 text-white uppercase shadow-lg rounded-md font-bold w-[200px]">
        Volver a jugar
    </button>
</template>

<script lang="ts" setup>
import { useStorePokemons } from '@/store';

const store = useStorePokemons();


</script>