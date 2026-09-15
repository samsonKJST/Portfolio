<template>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Retour en haut">SAMSON<span>.</span></a>
    <button class="menu-toggle" type="button" :aria-expanded="open" aria-controls="navigation" @click="open = !open"><span></span><span></span><span class="sr-only">Menu</span></button>
    <nav id="navigation" :class="{ open }" aria-label="Navigation principale">
      <a v-for="item in items" :key="item.href" :href="item.href" @click="open = false">{{ item.label }}</a>
      <a href="https://github.com" target="_blank" @click="open = false">GitHub ↗</a>
      <a href="https://www.linkedin.com/in/jude-samson-tanoh-kouame-76032a38b/" target="_blank" @click="open = false">LinkedIn ↗</a>
      <a class="nav-cv" href="/CV_KOUAME_JUDE_SAMSON_TANOH.pdf" target="_blank" @click="open = false">CV ↗</a>
    </nav>
    <span class="availability"><i></i> OPEN TO OPPORTUNITIES</span>
  </header>
</template>
<script setup>
import { ref } from 'vue'
const open = ref(false)
const items = [{ label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' }, { label: 'Projects', href: '#projects' }, { label: 'Process', href: '#process' }, { label: 'Contact', href: '#contact' }]
</script>
