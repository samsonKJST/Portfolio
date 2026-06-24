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
    this.r = Math.random() * 1.5 + 0.3
    this.vx = (Math.random() - 0.5) * 0.3
    this.vy = (Math.random() - 0.5) * 0.3
    this.alpha = Math.random() * 0.5 + 0.1
    this.color = Math.random() > 0.6 ? '#00D4FF' : '#7C3AED'
  }
  update() {
    this.x += this.vx; this.y += this.vy
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.alpha
    ctx.fill()
    ctx.globalAlpha = 1
  }
}

function resize() {
  const canvas = canvasEl.value
  W = canvas.width = canvas.parentElement.clientWidth
  H = canvas.height = canvas.parentElement.clientHeight
}

function animate() {
  ctx.clearRect(0, 0, W, H)
  particles.forEach(p => { p.update(); p.draw() })
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = '#00D4FF'
        ctx.globalAlpha = (1 - dist / 100) * 0.08
        ctx.lineWidth = 0.5
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }
  }
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  ctx = canvasEl.value.getContext('2d')
  resize()
  for (let i = 0; i < 80; i++) particles.push(new Particle())
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
  position: absolute; inset: 0; pointer-events: none;
}
</style>
