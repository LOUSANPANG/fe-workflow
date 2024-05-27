<script setup lang="ts">
const props = defineProps({ error: Object })
const is404 = props.error?.statusCode === 404
const statusCode = `Error ${props.error?.statusCode || '404'}`
const statusMessage = is404 ? 'Page Not Found' : (props.error?.statusMessage || 'An Error Occurred')

const { data: navigation } = await useLazyAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
provide('navigation', navigation)

function goHome() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error overflow-hidden relative w-screen h-screen flex items-center justify-center bg-dark select-none text-light">
    <div class="mobile:hidden pc:block">
      <div class="error-code absolute top-1/4 left-1/4 text-5xl text-light">
        {{ statusCode }}
      </div>
      <div class="error-message absolute bottom-1/4 right-1/4 text-5xl text-light">
        {{ statusMessage }}
      </div>
    </div>

    <div class="code">
      <code><span class="text-green-800">&lt;!DOCTYPE</span><span class="text-yellow-800">&emsp;html</span><span class="text-green-800">&gt;</span></code><br>
      <code><span class="text-green-800">&lt;html</span><span class="text-yellow-800">&emsp;lang="en"</span><span class="text-green-800">&gt;</span></code><br>
      <code><span class="text-green-800">&lt;body&gt;</span></code><br><br>
      <code><span class="text-yellow-800">&emsp;&emsp;{{ statusCode }}</span></code><br><br>
      <code><span class="text-yellow-800">&emsp;&emsp;&emsp;&emsp;{{ statusMessage }}</span></code><br><br>
      <code @click="goHome">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span class="cursor-pointer text-primary underline underline-primary">Go Home</span></code><br><br>
      <code><span class="text-green-800">&lt;/body&gt;</span></code><br>
      <code><span class="text-green-800">&lt;/html&gt;</span></code>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @keyframes noise-1 {
    0%,3%,5%,42%,44%,100% {opacity: 1; transform: scaleY(1);}
    4.3% {opacity: 1; transform: scaleY(4);}
    43% {opacity: 1; transform: scaleX(10) rotate(60deg);}
  }
  @keyframes noise-2 {
    0%, 20%, 50%, 80% {opacity: 0;}
    10% {opacity: .1;}
    50% {opacity: .4; left: 24%;}
    100% {opacity: .7; left: 25%;}
  }
  @keyframes noise-3 {
    0%, 20%, 50%, 80% {opacity: 0;}
    10% {opacity: .1;}
    50% {opacity: .4; right: 24%;}
    100% {opacity: .7; right: 25%;}
  }

  .error {
    animation: noise-1 1s linear infinite;
  }
  .error-code {
    animation: noise-2 .2s linear infinite;
  }
  .error-message {
    animation: noise-3 .2s linear infinite;
  }
</style>
