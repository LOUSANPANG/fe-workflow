<script setup>
defineProps({
  src: String,
})
</script>

<template>
  <img :src="src" class="block! rounded-lg! mx-auto! mb-8! shadow-sm!">
</template>
