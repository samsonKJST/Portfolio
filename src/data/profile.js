export const profile = {
  name: 'Kouame Jude Samson Tanoh',
  title: 'Data Scientist Junior',
  positioning: ['Data Science', 'Data Analysis', 'Machine Learning / Deep Learning', 'NLP / AI', 'Data Engineering', 'Développement Web'],
  summary: 'Profil hybride Data Scientist Junior : il transforme les données en insights, modèles et applications.',
  skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'scikit-learn', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'NLP', 'Data Visualization', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Laravel', 'Vue.js', 'PHP', 'JavaScript', 'REST API'],
  projects: [
    { name: 'Sentiment Analysis Pipeline', detail: 'Pipeline temps réel : commentaires de films → Kafka → LinearSVC → PostgreSQL → dashboard. Accuracy ≈ 89 % sur environ 50 000 commentaires.' },
    { name: 'Malaria & Climate Data', detail: 'Projet Data Science sur le lien entre climat et paludisme en Côte d’Ivoire (2000–2024). R² ≈ 0,866.' },
    { name: 'Exploratory Data Analysis', detail: 'Exploration, nettoyage, analyse statistique, visualisation et dashboard avec Python, Pandas, Seaborn et Power BI.' },
    { name: 'Book Recommendation System', detail: 'Projet NLP : Bag of Words, TF-IDF, TruncatedSVD et similarité cosinus pour recommander des livres.' },
    { name: 'POST-IT', detail: 'Application Single Page en JavaScript pour créer et gérer des post-it virtuels, connectée à une API externe.' },
    { name: 'YOWL', detail: 'Plateforme de centralisation et de commentaire de contenus en ligne avec Vue.js et Laravel.' },
    { name: 'FreeAds', detail: 'Application Laravel de publication et gestion d’annonces avec authentification et CRUD.' },
    { name: 'MyShop', detail: 'Application e-commerce et gestion de produits en PHP orienté objet, PDO et MySQL.' }
  ],
  education: ['Parcours RNCP — EPITECH (en cours)', 'Informatique et Sciences du Numérique — UVCI'],
  contact: { email: 'samson.kouame@epitech.eu', linkedin: 'https://www.linkedin.com/in/jude-samson-tanoh-kouame-76032a38b/', cv: '/CV_KOUAME_JUDE_SAMSON_TANOH.pdf' }
}

export const profileContext = JSON.stringify(profile, null, 2)
