<template>
  <div class="w-[250px] mx-auto rounded-lg shadow-lg overflow-hidden  mb-2">
    <button class="px-2 py-3 bg-blue-500 text-white font-semibold w-full" @click="() => onValidateSelected(id)">
      {{ name }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { type Pokemon } from '../interface';
interface Props extends Pokemon {
  onValidateSelected: (id: number) => void;
}

const { id, name, onValidateSelected } = defineProps<Props>();
</script>
