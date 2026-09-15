<template>
  <section id="journey" class="section journey">
    <p class="eyebrow">05 / PARCOURS</p>
    <div class="split-heading"><h2>Formation <em>&</em><br>certifications.</h2><p>Un parcours en construction, renforcé par des formations qui soutiennent directement mes projets Data, IA et logiciel.</p></div>
    <div class="journey-line">
      <article class="journey-current"><span class="journey-kicker">PARCOURS ACTUEL</span><div><span class="journey-dot progress"></span><p class="journey-type">EPITECH</p><h3>Parcours RNCP</h3><p class="journey-status progress">● EN COURS</p></div></article>
      <div class="journey-featured"><p class="journey-kicker">CERTIFICATIONS À LA UNE</p><article v-for="certificate in featured" :key="certificate.title" class="certificate-card"><div><span class="journey-dot"></span><p class="journey-type">{{ certificate.provider }} <em v-if="certificate.category">/ {{ certificate.category }}</em></p><h3>{{ certificate.title }}</h3><p class="journey-status">✓ TERMINÉE</p></div><a :href="certificate.href" target="_blank" rel="noopener noreferrer">VOIR LE CERTIFICAT ↗</a></article></div>
      <div class="journey-complementary"><p class="journey-kicker">FORMATIONS COMPLÉMENTAIRES</p><div class="compact-certificates"><article v-for="certificate in complementary" :key="certificate.title"><div><p>{{ certificate.title }}</p><span>{{ certificate.provider }} · ✓ TERMINÉE</span></div><a v-if="certificate.href" :href="certificate.href" target="_blank" rel="noopener noreferrer" :aria-label="`Voir le certificat ${certificate.title}`">↗</a></article></div></div>
    </div>
  </section>
</template>
<script setup>
const featured = [
  { title: 'DATA / IA', provider: 'GIZ', category: 'DATA & IA', href: 'https://drive.google.com/file/d/1wZPP0mm-rccdxu5ovXEft67ogM6yNZyx/view?usp=sharing' },
  { title: 'Objectif IA : initiez-vous à l’intelligence artificielle', provider: 'OpenClassrooms', category: 'IA / MACHINE LEARNING', href: 'https://drive.google.com/file/d/1_35uTPovTR7A3SCBCHzaa5ybTrj6-voD/view?usp=sharing' },
  { title: 'HTML & CSS', provider: 'OpenClassrooms', category: 'LOGICIEL', href: 'https://drive.google.com/file/d/1XngvLGNbl3UGh3FCOdIKObpHosYo88Qi/view?usp=sharing' }
]
const complementary = [
  { title: 'Basic Information Literacy', provider: 'Coursera', href: 'https://drive.google.com/file/d/1ynKbvDwZXBr6zvrEUoeKL5gV4H6ND0Fx/view?usp=sharing' },
  { title: 'Creativity, Innovation and Transformation', provider: 'Coursera', href: 'https://drive.google.com/file/d/1Uza7OmOK0TEW0VY8Fn5zv_B4FU-NBKFQ/view?usp=sharing' },
  { title: 'Learning How to Learn', provider: 'Coursera', href: 'https://drive.google.com/file/d/1NlyQlD5_m9kFn1dkYprwLA3XtK8XgYas/view?usp=sharing' },
  { title: 'Speaking and Presenting', provider: 'Coursera' },
  { title: 'Google Docs', provider: 'Coursera / Google Workspace', href: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2F7C4P3CTWOPCO&urlhash=4jBc&mt=N25oUdoHuOQKRGeZ5WZUw5Jq0Zdh3iXjZjDRK-3AJHrVK_fLfzQebWOIy0R8qA7ckeprbfveAsAhhUs1dUh2s-ik-Lj-&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FahEKqhOR9CNRvmUyKQmIQ%3D%3D' },
  { title: 'Google Sheets', provider: 'Coursera / Google Workspace', href: 'https://www.coursera.org/account/accomplishments/verify/HXIZ2VTFGYAB' },
  { title: 'Gmail', provider: 'Coursera / Google Workspace', href: 'https://www.coursera.org/account/accomplishments/verify/32LQZEPA25IQ' },
  { title: 'Google Slides', provider: 'Coursera / Google Workspace', href: 'https://www.coursera.org/account/accomplishments/verify/X27BOOLAO9MG' },
  { title: 'Google Drive', provider: 'Coursera / Google Workspace', href: 'https://www.coursera.org/account/accomplishments/verify/EHLG8QM4WBWQ' }
]
</script>
