<template>
  <section id="contact">
    <div class="section-label">// contact</div>
    <h2 class="section-title">Travaillons ensemble</h2>
    <div class="contact-card">
      <p>Disponible pour des missions freelance, des collaborations ou des opportunités en CDI/stage. N'hésitez pas à me contacter !</p>
      <div class="contact-links">
        <a href="mailto:samson.kouame@epitech.eu" class="contact-link">✉ Email</a>
        <a href="https://www.linkedin.com/in/jude-samson-tanoh-kouame-76032a38b/" class="contact-link" target="_blank">🔗 LinkedIn</a>
        <a href="https://github.com" class="contact-link" target="_blank">⌥ GitHub</a>
      </div>

      <form class="contact-form" @submit.prevent="sendMessage">
        <input type="text" v-model="form.nom" placeholder="Votre nom" required>
        <input type="email" v-model="form.email" placeholder="Votre email" required>
        <textarea v-model="form.message" rows="4" placeholder="Votre message" required></textarea>
        <button type="submit" class="btn btn-primary">Envoyer →</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ nom: '', email: '', message: '' })

function sendMessage() {
  const subject = encodeURIComponent(`Contact portfolio — ${form.nom}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.nom} (${form.email})`)
  window.location.href = `mailto:samson.kouame@epitech.eu?subject=${subject}&body=${body}`
}
</script>
