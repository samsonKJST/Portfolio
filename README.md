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

## Assistant IA

Le chatbot appelle la fonction Netlify `/.netlify/functions/portfolio-assistant`. La clé Gemini reste uniquement côté serveur : ajoutez `GEMINI_API_KEY` dans les variables d'environnement Netlify. Ne créez pas de variable `VITE_GEMINI_API_KEY` : les variables `VITE_*` sont intégrées au navigateur.

À chaque message, le navigateur envoie l'historique de la session à la fonction. Celle-ci transmet au modèle les 16 derniers messages et la base de connaissances de `src/data/profile.js`, qui regroupe les informations disponibles du CV, de LinkedIn et du portfolio. Les boutons de suggestion envoient simplement une question au même modèle.

## Fichiers importants
- `public/photo.jpg` — ta photo de profil
- `public/CV_KOUAME_JUDE_SAMSON_TANOH.pdf` — ton CV téléchargeable
- `src/components/Contact.vue` — modifie ici l'email, LinkedIn, GitHub
- `src/components/FeaturedProjects.vue` / `OtherProjects.vue` — modifie ici tes projets et leurs liens (code/démo)
