<template>
  <div :class="['p-4', 'my-4', 'rounded-lg', 'text-sm', alertClassify]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    // warning info output
    type: {
      type: String,
      default: 'warning',
    },
  })

  const alertClassify = ref<Array<string>>([''])
  watchEffect(() => {
    switch (props.type) {
      case 'warning':
        alertClassify.value = ['bg-amber-50', 'text-amber-600']
        break
      case 'info':
        alertClassify.value = ['bg-sky-50', 'text-sky-600']
        break
      case 'output':
        alertClassify.value = ['bg-slate-50', 'text-slate-500', 'font-medium']
        break
    }
  })
</script>
