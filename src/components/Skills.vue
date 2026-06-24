<template>
  <section id="skills" style="background: var(--bg2);">
    <div class="section-label">// expertise</div>
    <h2 class="section-title">Compétences techniques</h2>

    <div class="skills-list">
      <div class="skills-row" v-for="row in skills" :key="row.label">
        <div class="skills-row-label">{{ row.label }}</div>
        <div class="skills-row-value" v-html="row.value"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { label: 'Langages', value: '<strong>Python</strong>, <strong>PHP</strong>, <strong>JavaScript</strong>, HTML, CSS' },
  { label: 'Frameworks', value: '<strong>Laravel</strong>, <strong>Vue.js</strong>' },
  { label: 'Data Science', value: '<strong>Scikit-learn</strong>, <strong>Pandas</strong>, <strong>NumPy</strong>, Linear SVC, Deep Learning, NLP (NLTK), Ensemble Learning' },
  { label: 'Data Engineering', value: '<strong>Kafka</strong>, Web Scraping (BeautifulSoup), Docker' },
  { label: 'Visualisation', value: '<strong>Power BI</strong>, Matplotlib, Seaborn' }
]
</script>
