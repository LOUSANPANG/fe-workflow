<script setup>
defineProps({
  src: String,
})
</script>

<template>
  <img :src="src">
</template>
