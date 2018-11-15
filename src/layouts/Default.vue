<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

  @tailwind preflight;

  body {
    font-family: Montserrat, sans-serif;
  }

  @tailwind components;
  @tailwind utilities;
</style>
