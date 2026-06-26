<template>
  <nav>
    <router-link to="/" class="nav-logo">tanoh@jude:~$</router-link>

    <div class="nav-actions">
      <ul class="nav-links">
        <li><router-link to="/portfolio#projects-featured">Projets</router-link></li>
        <li><router-link to="/portfolio#skills">Competences</router-link></li>
        <li><router-link to="/portfolio#cv">CV</router-link></li>
        <li><router-link to="/portfolio#contact">Contact</router-link></li>
      </ul>

      <button class="theme-toggle" type="button" @click="toggleTheme">
        {{ isLightTheme ? 'Theme sombre' : 'Theme blanc' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isLightTheme = ref(false)

const applyTheme = () => {
  document.documentElement.classList.toggle('light-theme', isLightTheme.value)
  localStorage.setItem('portfolio-theme', isLightTheme.value ? 'light' : 'dark')
}

const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value
  applyTheme()
}

onMounted(() => {
  isLightTheme.value = localStorage.getItem('portfolio-theme') === 'light'
  applyTheme()
})
</script>
