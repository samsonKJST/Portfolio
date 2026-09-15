<template><canvas ref="canvas" class="data-canvas" aria-hidden="true"></canvas></template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
const canvas = ref(null); let frame, points = [], reduced = false
function draw() {
  const el = canvas.value, ctx = el.getContext('2d'), box = el.getBoundingClientRect(), ratio = Math.min(devicePixelRatio, 2)
  el.width = box.width * ratio; el.height = box.height * ratio; ctx.scale(ratio, ratio)
  points = Array.from({ length: Math.min(42, Math.floor(box.width / 22)) }, () => ({ x: Math.random() * box.width, y: Math.random() * box.height, dx: (Math.random() - .5) * .22, dy: (Math.random() - .5) * .22 }))
  const tick = () => { ctx.clearRect(0, 0, box.width, box.height); for (let i = 0; i < points.length; i++) { const p = points[i]; p.x += p.dx; p.y += p.dy; if (p.x < 0 || p.x > box.width) p.dx *= -1; if (p.y < 0 || p.y > box.height) p.dy *= -1; for (let j = i + 1; j < points.length; j++) { const q = points[j], d = Math.hypot(p.x-q.x, p.y-q.y); if (d < 115) { ctx.strokeStyle = `rgba(232,184,75,${.15 * (1-d/115)})`; ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke() } } ctx.fillStyle = '#e8b84b'; ctx.globalAlpha = .5; ctx.fillRect(p.x-1,p.y-1,2,2); ctx.globalAlpha = 1 } if (!reduced) frame = requestAnimationFrame(tick) }
  tick()
}
onMounted(() => { reduced = matchMedia('(prefers-reduced-motion: reduce)').matches; draw(); addEventListener('resize', draw) })
onBeforeUnmount(() => { cancelAnimationFrame(frame); removeEventListener('resize', draw) })
</script>
