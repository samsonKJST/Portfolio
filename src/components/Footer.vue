<template>
  <footer>
    <span>KOUAME JUDE SAMSON TANOH · </span>
    <span style="color: var(--cyan)">Data Scientist & Full Stack</span>
    <span> · {{ year }}</span>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
