# Portfolio — KOUAME JUDE SAMSON TANOH

Portfolio personnel développé en **Vue.js 3** (Vite).

## Contenu
- Page de couverture avec photo, profil et bouton "Voir mon portfolio"
- Projets concrets (Contexte / Méthodologie / Résultats / liens)
- Autres projets (dont le lien démo de **Pos-it**)
- Compétences techniques
- Section CV avec bouton de téléchargement (PDF inclus dans `public/`)
- Section Contact (Email, LinkedIn, GitHub + formulaire)

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (par défaut http://localhost:5173).

## Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`, prêt à être déployé (Netlify, Vercel, GitHub Pages, etc.).

## Fichiers importants
- `public/photo.jpg` — ta photo de profil
- `public/CV_KOUAME_JUDE_SAMSON_TANOH.pdf` — ton CV téléchargeable
- `src/components/Contact.vue` — modifie ici l'email, LinkedIn, GitHub
- `src/components/FeaturedProjects.vue` / `OtherProjects.vue` — modifie ici tes projets et leurs liens (code/démo)
