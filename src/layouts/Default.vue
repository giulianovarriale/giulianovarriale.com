<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      meta: [
        { name: 'description', content: 'Giuliano Varriale, 30, front-end developer' }
      ]
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  @tailwind preflight;

  body {
    font-family: Montserrat, sans-serif;
  }

  @tailwind components;
  @tailwind utilities;
</style>
