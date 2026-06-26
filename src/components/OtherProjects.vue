<template>
  <section id="projects-other">
    <div class="section-label">// autres réalisations</div>
    <h2 class="section-title">Autres projets</h2>
    <p class="section-sub">D'autres projets web et data réalisés en formation, en solo ou en équipe.</p>

    <div class="projects-grid">
      <div class="project-card project-card-compact" v-for="project in projects" :key="project.title">
        <div class="project-preview-gradient"></div>
        <div class="project-body">
          <div class="project-title">{{ project.title }}</div>
          <div class="project-desc">{{ project.desc }}</div>
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
              <span class="project-meta-text">{{ selectedProject.desc }}</span>
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
    title: 'Yow',
    desc: 'Plateforme de centralisation des commentaires provenant de tout ce qui se trouve sur internet.',
    role: 'Développeur',
    tags: [
      { label: 'Vue.js', color: 'cyan' },
      { label: 'Laravel', color: 'cyan' },
      { label: 'REST API', color: '' }
    ],
    demoUrl: '#'
  },
  {
    title: 'FreeAds',
    desc: "Site d'annonces en ligne permettant de publier, consulter et gérer des annonces facilement.",
    tags: [
      { label: 'Laravel', color: 'cyan' },
      { label: 'PHP', color: 'cyan' }
    ],
    demoUrl: '#'
  },
  {
    title: 'Pos-it',
    desc: 'Application web monopage permettant de créer et gérer des activités à faire, via une API externe.',
    tags: [
      { label: 'JavaScript', color: 'cyan' },
      { label: 'SPA', color: '' }
    ],
    demoUrl: 'https://fastidious-frangollo-b44eda.netlify.app/'
  },
  {
    title: 'MyShop',
    desc: 'Site e-commerce permettant de vendre des articles en ligne : catalogue, panier et commandes.',
    tags: [
      { label: 'PHP', color: 'cyan' },
      { label: 'E-commerce', color: '' }
    ],
    demoUrl: '#'
  },
  {
    title: 'NLP - Bibliothèque Intelligente',
    desc: 'Système NLP permettant de rechercher un livre et de proposer des livres similaires.',
    tags: [
      { label: 'Python', color: 'cyan' },
      { label: 'NLTK', color: 'violet' }
    ],
    demoUrl: '#'
  }
]
</script>
