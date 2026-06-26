<template>
  <section id="home" class="home-view">
    <ParticlesCanvas />
    <div class="hero-content">
      <div class="hero-photo-wrap">
        <img src="/photo.jpg" alt="KOUAME JUDE SAMSON TANOH" class="hero-photo">
      </div>

      <h1 class="hero-title">
        <span class="name">KOUAME JUDE SAMSON TANOH</span>
        <span class="role">J'analyse, je modèle, je construis.</span>
      </h1>

      <div class="hero-cta">
        <router-link to="/portfolio" class="btn btn-primary">Entrer dans le portfolio</router-link>
        <a href="/CV_KOUAME_JUDE_SAMSON_TANOH.pdf" class="btn btn-outline" target="_blank">Voir le CV</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ParticlesCanvas from '../components/ParticlesCanvas.vue'
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 8rem 5% 4rem;
  position: relative; overflow: hidden;
}
</style>
