<template>
  <section id="hero">
    <ParticlesCanvas />
    <div class="hero-content">
      <div class="hero-photo-wrap">
        <img src="/photo.jpg" alt="KOUAME JUDE SAMSON TANOH" class="hero-photo">
      </div>

      <div class="hero-eyebrow">Disponible pour un stage</div>

      <h1 class="hero-title">
        <span class="name">KOUAME JUDE SAMSON TANOH</span>
        <span class="role">Data Scientist Junior</span>
      </h1>

      <p class="hero-summary">
        Étudiant passionné par la <strong>Data Science</strong> et l'<strong>Intelligence Artificielle</strong>,
        doté de compétences solides en analyse de données, machine learning, NLP et deep learning.
        Capable de concevoir des pipelines complets, de la collecte à la visualisation, avec des bases
        en développement web. Aspire à contribuer à des projets innovants en IA appliquée et à
        approfondir ses compétences en data engineering et modélisation prédictive.
      </p>

      <div class="hero-cta">
        <a href="#projects-featured" class="btn btn-primary">Voir mon portfolio ↓</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ParticlesCanvas from './ParticlesCanvas.vue'
</script>
