<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    validator(value) {
      if (value && typeof value === 'string')
        return ['primary', 'info', 'warning'].includes(value)
      else
        return false
    },
    default: 'primary',
  },
})

const cardClassify = ref([''])
watchEffect(() => {
  switch (props.type) {
    case 'primary':
      cardClassify.value = ['bg-slate-50', 'text-slate-500']
      break
    case 'info':
      cardClassify.value = ['bg-sky-50', 'text-sky-500']
      break
    case 'warning':
      cardClassify.value = ['bg-amber-50', 'text-amber-500']
      break
  }
})
</script>

<template>
  <div class="relative border-box w-full p-4 my-4 rounded-lg border border-black/5 text-sm" :class="[...cardClassify]">
    <slot />
  </div>
</template>
