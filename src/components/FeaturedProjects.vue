<template>
  <section id="projects-featured">
    <div class="section-label">// projets</div>
    <h2 class="section-title">Projets tendances</h2>
    <p class="section-sub">4 projets représentatifs de mon parcours : data engineering, machine learning, deep learning, visualisation et développement full stack.</p>

    <div class="projects-grid">
      <div class="project-card project-card-compact" v-for="project in projects" :key="project.title">
        <div class="project-preview-gradient"></div>
        <div class="project-body">
          <div class="project-title">{{ project.title }}</div>
          <div class="project-desc">{{ project.context }}</div>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag.label" :class="['tag', tag.color]">{{ tag.label }}</span>
          </div>
          <button class="btn project-detail-btn" type="button" @click="selectedProject = project">
            <span>Voir détails</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="selectedProject" class="project-modal" @click.self="selectedProject = null">
      <article class="project-modal-card">
        <button class="project-modal-close" type="button" aria-label="Fermer" @click="selectedProject = null">x</button>

        <div class="project-body">
          <h3 class="project-title">{{ selectedProject.title }}</h3>
          <div class="project-meta">
            <div class="project-meta-row">
              <span class="project-meta-label">Description</span>
              <span class="project-meta-text">{{ selectedProject.context }}</span>
            </div>
            <div v-if="selectedProject.role" class="project-meta-row">
              <span class="project-meta-label">Rôle</span>
              <span class="project-meta-text">{{ selectedProject.role }}</span>
            </div>
          </div>
          <div style="margin-top: 1rem; margin-bottom: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.92rem; color: var(--cyan); text-transform: uppercase;">Technologies utilisées</div>
          <div class="tags">
            <span v-for="tag in selectedProject.tags" :key="tag.label" :class="['tag', tag.color]">{{ tag.label }}</span>
          </div>
          <div v-if="selectedProject.demoUrl" style="margin-top: 2rem;">
            <a :href="selectedProject.demoUrl" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center;">Visiter le projet</a>
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
    badge: 'Data Engineering · ML',
    title: "Pipeline d'analyse de sentiment",
    context: 'Classifier automatiquement des commentaires de films en positif/négatif pour analyser leur réception.',
    role: 'Développeur Data / ML',
    tags: [
      { label: 'Kafka', color: 'green' },
      { label: 'Python', color: 'cyan' },
      { label: 'Linear SVC', color: 'violet' },
      { label: 'Power BI', color: 'violet' }
    ],
    demoUrl: '#'
  },
  {
    badge: 'Deep Learning',
    title: 'Classification d\'images - Fashion MNIST',
    context: 'Identifier automatiquement le type de vêtement présent sur une image, sur un dataset de plus de 3 millions de données.',
    role: 'Data Scientist',
    tags: [
      { label: 'Deep Learning', color: 'violet' },
      { label: 'Modèle Dense', color: 'violet' },
      { label: 'Python', color: 'cyan' }
    ],
    demoUrl: '#'
  },
  {
    badge: 'Analyse · Visualisation',
    title: "Analyse d'achats - Supermarché",
    context: "Comprendre le comportement d'achat des clients d'un supermarché pour en tirer des indicateurs business.",
    tags: [
      { label: 'Power BI', color: 'violet' },
      { label: 'Python', color: 'cyan' },
      { label: 'Pandas', color: 'violet' },
      { label: 'Seaborn', color: 'violet' }
    ],
    demoUrl: '#'
  },
  {
    badge: 'Full Stack',
    title: 'Gestion des charges pédagogiques - UVCI PCT',
    context: "Automatiser la gestion et le calcul des charges pédagogiques pour l'UVCI (projet réalisé en équipe).",
    role: 'Développeur Full Stack',
    tags: [
      { label: 'Laravel', color: 'cyan' },
      { label: 'Vue.js', color: 'cyan' },
      { label: 'Base de données', color: '' }
    ],
    demoUrl: '#'
  }
]
</script>
