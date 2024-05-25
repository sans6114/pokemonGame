<template>
  <img :src="`${urlSprites}/${id}.svg`" :alt="name" class="w-[200px] brightness-0 mx-auto mb-6" />
</template>

<script lang="ts" setup>
import { urlSprites } from "../utils";
import { type Pokemon } from '../interface';

const { id, name } = defineProps<Pokemon>();
</script>
