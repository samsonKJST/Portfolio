<template>
  <main id="portfolio-page">
    <FeaturedProjects />
    <OtherProjects />
    <Skills />
    <CvSection />
    <Contact />
    <Footer />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
import OtherProjects from '../components/OtherProjects.vue'
import Skills from '../components/Skills.vue'
import CvSection from '../components/CvSection.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.project-card, .stat-card, .map-domain, .map-center').forEach(el => {
    el.classList.add('reveal')
    observer.observe(el)
  })
})
</script>

<style scoped>
#portfolio-page {
  padding-top: 6rem; /* espace pour la navbar */
}
</style>
