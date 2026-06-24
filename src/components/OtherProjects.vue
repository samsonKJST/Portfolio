<template>
  <section id="projects-other">
    <div class="section-label">// autres realisations</div>
    <h2 class="section-title">Autres projets</h2>
    <p class="section-sub">D'autres projets web et data realises en formation, en solo ou en equipe.</p>

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
          <div class="project-title">{{ project.title }}</div>
          <div class="project-desc">{{ project.desc }}</div>
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
          <h3 class="project-title">{{ selectedProject.title }}</h3>
          <div class="project-desc project-desc-large">{{ selectedProject.desc }}</div>
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
    icon: '💬',
    title: 'Yow',
    desc: 'Plateforme de centralisation des commentaires provenant de tout ce qui se trouve sur internet.',
    tags: [
      { label: 'Vue.js', color: 'cyan' },
      { label: 'Laravel', color: 'cyan' },
      { label: 'REST API', color: '' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    icon: '📢',
    title: 'FreeAds',
    desc: "Site d'annonces en ligne permettant de publier, consulter et gerer des annonces facilement.",
    tags: [
      { label: 'Laravel', color: 'cyan' },
      { label: 'PHP', color: 'cyan' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    icon: '📝',
    title: 'Pos-it',
    desc: 'Application web monopage permettant de creer et gerer des activites a faire, via une API externe.',
    tags: [
      { label: 'JavaScript', color: 'cyan' },
      { label: 'SPA', color: '' }
    ],
    codeUrl: '#',
    demoUrl: 'https://fastidious-frangollo-b44eda.netlify.app/'
  },
  {
    icon: '🛒',
    title: 'MyShop',
    desc: 'Site e-commerce permettant de vendre des articles en ligne : catalogue, panier et commandes.',
    tags: [
      { label: 'PHP', color: 'cyan' },
      { label: 'E-commerce', color: '' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  },
  {
    icon: '📚',
    title: 'NLP - Bibliotheque Intelligente',
    desc: 'Systeme NLP permettant de rechercher un livre et de proposer des livres similaires.',
    tags: [
      { label: 'Python', color: 'cyan' },
      { label: 'NLTK', color: 'violet' }
    ],
    codeUrl: '#',
    demoUrl: '#'
  }
]
</script>
