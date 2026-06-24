<template>
  <section id="projects-featured">
    <div class="section-label">// projets</div>
    <h2 class="section-title">Projets concrets</h2>
    <p class="section-sub">4 projets representatifs de mon parcours : data engineering, machine learning, deep learning, visualisation et developpement full stack.</p>

    <div class="projects-grid">
      <div class="project-card project-card-compact" v-for="project in projects" :key="project.title">
        <div class="project-header">
          <div class="project-icon">{{ project.icon }}</div>
          <div class="project-links">
            <a :href="project.codeUrl" class="project-link" title="Code" target="_blank">Code</a>
            <a :href="project.demoUrl" class="project-link" title="Demo" target="_blank">Demo</a>
          </div>
        </div>
        <div class="project-body">
          <span class="featured-badge">{{ project.badge }}</span>
          <div class="project-title">{{ project.title }}</div>
          <div class="project-desc">{{ project.context }}</div>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag.label" :class="['tag', tag.color]">{{ tag.label }}</span>
          </div>
          <button class="btn btn-outline project-detail-btn" type="button" @click="selectedProject = project">
            Voir details
          </button>
        </div>
      </div>
    </div>

    <div v-if="selectedProject" class="project-modal" @click.self="selectedProject = null">
      <article class="project-modal-card">
        <button class="project-modal-close" type="button" aria-label="Fermer" @click="selectedProject = null">x</button>
        <div class="project-header">
          <div class="project-icon">{{ selectedProject.icon }}</div>
          <div class="project-links">
            <a :href="selectedProject.codeUrl" class="project-link" title="Code" target="_blank">Code</a>
            <a :href="selectedProject.demoUrl" class="project-link" title="Demo" target="_blank">Demo</a>
          </div>
        </div>
        <div class="project-body">
          <span class="featured-badge">{{ selectedProject.badge }}</span>
          <h3 class="project-title">{{ selectedProject.title }}</h3>
          <div class="project-meta">
            <div class="project-meta-row">
              <span class="project-meta-label">Contexte</span>
              <span class="project-meta-text">{{ selectedProject.context }}</span>
            </div>
            <div class="project-meta-row">
              <span class="project-meta-label">Methode</span>
              <span class="project-meta-text">{{ selectedProject.method }}</span>
            </div>
            <div class="project-meta-row">
              <span class="project-meta-label">Resultats</span>
              <span class="project-meta-text">{{ selectedProject.results }}</span>
            </div>
          </div>
          <div class="tags">
            <span v-for="tag in selectedProject.tags" :key="tag.label" :class="['tag', tag.color]">{{ tag.label }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedProject = ref(null)

const projects = [
  {
    icon: '🎬',
    badge: 'Data Engineering · ML',
    title: "Pipeline d'analyse de sentiment",
    context: 'Classifier automatiquement des commentaires de films en positif/negatif pour analyser leur reception.',
    method: 'Collecte des commentaires, pretraitement, modele Linear SVC (Python/Scikit-learn), publication des resultats dans un topic Kafka puis export vers une base de donnees.',
    results: 'Pipeline de streaming fonctionnel, resultats visualises dans un dashboard Power BI.',
    tags: [
      { label: 'Kafka', color: 'green' },
      { label: 'Python', color: 'cyan' },
      { label: 'Linear SVC', color: 'violet' },
      { label: 'Power BI', color: 'violet' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    icon: '👗',
    badge: 'Deep Learning',
    title: 'Classification d\'images - Fashion MNIST',
    context: 'Identifier automatiquement le type de vetement present sur une image, sur un dataset de plus de 3 millions de donnees.',
    method: "Pretraitement des images et entrainement d'un modele dense (reseau de neurones) en Python.",
    results: 'Modele capable de classifier correctement les vetements a grande echelle.',
    tags: [
      { label: 'Deep Learning', color: 'violet' },
      { label: 'Modele Dense', color: 'violet' },
      { label: 'Python', color: 'cyan' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    icon: '🏪',
    badge: 'Analyse · Visualisation',
    title: "Analyse d'achats - Supermarche",
    context: "Comprendre le comportement d'achat des clients d'un supermarche pour en tirer des indicateurs business.",
    method: 'Collecte et structuration des donnees, analyse exploratoire avec Pandas et Seaborn, construction de tableaux de bord Power BI.',
    results: 'Indicateurs cles : taux de commandes par jour, articles les plus vendus, temps moyen avant recommande.',
    tags: [
      { label: 'Power BI', color: 'violet' },
      { label: 'Python', color: 'cyan' },
      { label: 'Pandas', color: 'violet' },
      { label: 'Seaborn', color: 'violet' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    icon: '⚙️',
    badge: 'Full Stack',
    title: 'Gestion des charges pedagogiques - UVCI PCT',
    context: "Automatiser la gestion et le calcul des charges pedagogiques pour l'UVCI (projet realise en equipe).",
    method: 'Modelisation de la base de donnees relationnelle, algorithme de calcul automatise des volumes horaires selon la complexite des contenus, interface Vue.js et backend Laravel.',
    results: "Application web responsive avec tableaux de bord statistiques et modules d'export PDF/Excel.",
    tags: [
      { label: 'Laravel', color: 'cyan' },
      { label: 'Vue.js', color: 'cyan' },
      { label: 'Base de donnees', color: '' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  }
]
</script>
