<template>
  <NavBar />
  <Hero />
  <FeaturedProjects />
  <OtherProjects />
  <Skills />
  <CvSection />
  <About />
  <Contact />
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import OtherProjects from './components/OtherProjects.vue'
import Skills from './components/Skills.vue'
import CvSection from './components/CvSection.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.project-card, .stat-card').forEach(el => {
    el.classList.add('reveal')
    observer.observe(el)
  })
})
</script>
