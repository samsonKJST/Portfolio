<template>
  <canvas ref="canvasEl"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasEl = ref(null)
let ctx, W, H, particles = [], rafId

class Particle {
  constructor() { this.reset() }
  reset() {
    this.x = Math.random() * W
    this.y = Math.random() * H
    this.baseR = Math.random() * 2 + 1
    this.r = this.baseR
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.alpha = Math.random() * 0.5 + 0.2
    this.pulsePhase = Math.random() * Math.PI * 2
    this.pulseSpeed = Math.random() * 0.05 + 0.02
    // Thème de couleurs du portfolio (Oranges/Rouges de --cyan, --violet, --green)
    const colors = ['#FF7B00', '#FF5500', '#FF3300', '#FFA200']
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }
  update() {
    this.x += this.vx
    this.y += this.vy
    
    // Effet de "pulsation" d'un neurone IA
    this.pulsePhase += this.pulseSpeed
    this.r = this.baseR + Math.sin(this.pulsePhase) * 1.5
    
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, Math.max(0.1, this.r), 0, Math.PI * 2)
    ctx.fillStyle = this.color
    // Effet de lueur (glow)
    ctx.shadowBlur = 10
    ctx.shadowColor = this.color
    ctx.globalAlpha = this.alpha
    ctx.fill()
    ctx.shadowBlur = 0 // reset
    ctx.globalAlpha = 1
  }
}

function resize() {
  const canvas = canvasEl.value
  if (!canvas || !canvas.parentElement) return
  W = canvas.width = canvas.parentElement.clientWidth
  H = canvas.height = canvas.parentElement.clientHeight
}

function animate() {
  ctx.clearRect(0, 0, W, H)
  
  // Update and draw particles (Neurons)
  particles.forEach(p => p.update())
  
  // Draw connections (Synapses)
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      
      if (dist < 120) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        
        // La ligne prend une couleur intermédiaire avec opacité basée sur la distance
        const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
        gradient.addColorStop(0, particles[i].color)
        gradient.addColorStop(1, particles[j].color)
        
        ctx.strokeStyle = gradient
        // Effet de transmission de données (les lignes clignotent légèrement)
        const pulse = (Math.sin(Date.now() * 0.002 + i) + 1) / 2
        ctx.globalAlpha = (1 - dist / 120) * 0.2 * (0.5 + pulse * 0.5)
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }
  }
  
  particles.forEach(p => p.draw())
  
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  ctx = canvasEl.value.getContext('2d')
  resize()
  // Plus de particules pour un effet réseau de neurones plus dense
  const particleCount = Math.min(Math.floor((W * H) / 8000), 120)
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
  window.addEventListener('resize', resize)
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
canvas {
  position: absolute; 
  inset: 0; 
  pointer-events: none;
  z-index: 0;
  opacity: 0.8;
}
</style>
