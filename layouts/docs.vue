<template>
  <div>
    <div class="w-full h-[10rem] bg-cyan-400"></div>

    <div class="flex">
      <div class="w-1/3 bg-red-300 h-[20rem]"></div>
      <div class="w-2/3 bg-gray-500 h-[20rem]">
        <slot />
      </div>
    </div>
  </div>
</template>
