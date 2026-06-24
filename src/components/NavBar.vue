<template>
  <nav>
    <a href="#hero" class="nav-logo">tanoh@jude:~$</a>

    <div class="nav-actions">
      <ul class="nav-links">
        <li><a href="#projects-featured">Projets</a></li>
        <li><a href="#skills">Competences</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#contact">Contact</a></li>
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
