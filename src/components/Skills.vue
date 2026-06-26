<template>
  <section id="skills">
    <ParticlesCanvas />
    <div class="section-label">// cartographie</div>
    <h2 class="section-title">Compétences</h2>
    <p class="section-sub">
      Trois territoires, un même fil conducteur : collecter, comprendre, prédire,
      puis livrer une solution propre et utilisable.
    </p>

    <div class="skills-interactive-map">
      <!-- Centre: Photo -->
      <div class="map-center reveal">
        <div class="photo-container">
          <img src="/photo.jpg" alt="KOUAME JUDE SAMSON TANOH" class="center-photo">
          <div class="glow-ring"></div>
        </div>
        <div class="center-text">
          <span class="center-kicker">profil hybride</span>
          <strong>Data x IA x Dev</strong>
        </div>
      </div>

      <!-- Domaines -->
      <article
        v-for="domain in domains"
        :key="domain.title"
        :class="['map-domain', domain.position, domain.tone, 'reveal']"
      >
        <div class="domain-head">
          <span class="domain-icon">{{ domain.icon }}</span>
          <div class="domain-title-wrap">
            <span class="domain-name">{{ domain.title }}</span>
            <strong class="domain-promise">{{ domain.promise }}</strong>
          </div>
        </div>

        <div class="domain-skills">
          <span v-for="skill in domain.skills" :key="skill" class="skill-pill">{{ skill }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import ParticlesCanvas from './ParticlesCanvas.vue';

const domains = [
  {
    title: 'Data',
    promise: 'Nettoyer, explorer, visualiser',
    icon: '📊',
    position: 'pos-top-left',
    tone: 'tone-cyan',
    skills: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Matplotlib', 'Seaborn', 'Scraping']
  },
  {
    title: 'IA',
    promise: 'Entraîner, évaluer, prédire',
    icon: '🧠',
    position: 'pos-top-right',
    tone: 'tone-violet',
    skills: ['Scikit-learn', 'Linear SVC', 'Deep Learning', 'NLP', 'NLTK', 'Ensemble Learning']
  },
  {
    title: 'Dev',
    promise: 'Industrialiser, connecter, livrer',
    icon: '💻',
    position: 'pos-bottom-center',
    tone: 'tone-green',
    skills: ['Vue.js', 'Laravel', 'PHP', 'JavaScript', 'HTML/CSS', 'Kafka', 'Docker']
  }
]
</script>

<style scoped>
.skills-interactive-map {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  align-items: center;
  justify-items: center;
}

.map-center {
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: relative;
}

.map-center::before {
  content: ''; position: absolute;
  top: 40%; right: 100%;
  width: 3rem; height: 2px;
  border-top: 2px dashed var(--cyan);
  z-index: 1;
}

.map-center::after {
  content: ''; position: absolute;
  top: 40%; left: 100%;
  width: 3rem; height: 2px;
  border-top: 2px dashed var(--violet);
  z-index: 1;
}

.photo-container {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.center-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--bg2);
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.glow-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: conic-gradient(var(--cyan), var(--violet-light), var(--green), var(--cyan));
  animation: spin 6s linear infinite;
  z-index: 1;
  filter: blur(15px);
  opacity: 0.7;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.center-text {
  background: rgba(13, 20, 38, 0.85);
  backdrop-filter: blur(12px);
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.center-kicker {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: var(--cyan);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.2rem;
}

.center-text strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  color: #fff;
}

.map-domain {
  width: 100%;
  max-width: 360px;
  background: rgba(13, 20, 38, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.8rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  position: relative;
}

.map-domain:hover {
  transform: translateY(-10px) scale(1.02);
  z-index: 20;
}

.map-domain::before {
  content: '';
  position: absolute;
  z-index: -1;
  border: 2px dashed rgba(255,255,255,0.1);
}

/* Connexions visuelles (lignes) supprimées car le grid gère l'espacement proprement */
.pos-top-left {
  grid-column: 1;
  grid-row: 1;
}

.pos-top-right {
  grid-column: 3;
  grid-row: 1;
}

.pos-bottom-center {
  grid-column: 1 / -1;
  grid-row: 2;
  position: relative;
}

.pos-bottom-center::before {
  content: ''; position: absolute;
  bottom: 100%; left: 50%;
  height: 3rem; width: 2px;
  border-left: 2px dashed var(--green);
  transform: translateX(-50%);
  z-index: 1;
}

.pos-bottom-center:hover {
  transform: translateY(-10px) scale(1.02);
}

.tone-cyan:hover { box-shadow: 0 15px 40px rgba(0, 212, 255, 0.15); border-color: rgba(0, 212, 255, 0.4); }
.tone-violet:hover { box-shadow: 0 15px 40px rgba(124, 58, 237, 0.15); border-color: rgba(124, 58, 237, 0.4); }
.tone-green:hover { box-shadow: 0 15px 40px rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.4); }

.domain-head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.domain-icon {
  font-size: 2.2rem;
  background: rgba(255,255,255,0.05);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  flex-shrink: 0;
}

.domain-name {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.domain-promise {
  font-size: 0.95rem;
  color: var(--muted);
  font-weight: 400;
}

.domain-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-pill {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  color: var(--text);
  transition: all 0.2s;
}

.tone-cyan .skill-pill:hover { background: rgba(0,212,255,0.1); border-color: var(--cyan); color: #fff; }
.tone-violet .skill-pill:hover { background: rgba(124,58,237,0.1); border-color: var(--violet-light); color: #fff; }
.tone-green .skill-pill:hover { background: rgba(16,185,129,0.1); border-color: var(--green); color: #fff; }

@media (max-width: 992px) {
  .skills-interactive-map {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 3rem;
  }
  .map-center {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 1rem;
  }
  .pos-top-left { grid-column: 1; grid-row: 2; }
  .pos-top-right { grid-column: 1; grid-row: 3; }
  .pos-bottom-center { grid-column: 1; grid-row: 4; }
  .map-center::before, .map-center::after, .pos-bottom-center::before {
    display: none;
  }
  .map-domain {
    max-width: 100%;
  }
}
</style>
