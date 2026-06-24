<template>
  <section id="about">
    <div class="about-grid">
      <div class="about-text">
        <div class="section-label">// à propos</div>
        <h2 class="section-title">Qui suis-je ?</h2>
        <p>Je suis <strong>KOUAME JUDE SAMSON TANOH</strong>, <strong>Data Scientist, Data Analyst et Data Engineer</strong> passionné par la donnée sous toutes ses formes — de la collecte brute à l'entraînement de modèles d'intelligence artificielle.</p>
        <p>Je maîtrise l'ensemble du cycle de la donnée : <strong>scraping</strong> avec BeautifulSoup, <strong>analyse</strong> avec Pandas, Seaborn et Power BI, <strong>modélisation</strong> avec classification, deep learning, NLP (NLTK) et ensemble learning, jusqu'aux pipelines de streaming avec <strong>Kafka et Docker</strong>.</p>
        <p>En complément, je dispose de solides compétences en <strong>développement Full Stack</strong> (Laravel, PHP, Vue.js) qui me permettent de construire des interfaces et des APIs autour de mes solutions data.</p>
        <div style="margin-top:2rem">
          <a href="#contact" class="btn btn-primary">Travaillons ensemble →</a>
        </div>
      </div>
      <div>
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: '4+', label: "Domaines d'expertise" },
  { number: '8', label: 'Projets réalisés' },
  { number: 'ML', label: 'Deep Learning & NLP' },
  { number: '3M+', label: 'Données traitées (Fashion MNIST)' }
]
</script>
