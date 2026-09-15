<template>
  <NavBar />
  <router-view />
  <PortfolioAssistant />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import PortfolioAssistant from './components/PortfolioAssistant.vue'
</script>
