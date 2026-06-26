<template>
  <div class="kjst-ia-container" :style="{ top: position.y + 'px', left: position.x + 'px' }">
    <!-- Chat Window -->
    <div v-if="isOpen" class="chat-window">
      <div class="chat-header" @mousedown="startDrag" @touchstart="startDrag">
        <h3>KJST IA</h3>
        <button @click="toggleChat" class="close-btn">&times;</button>
      </div>
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.sender]">
          {{ msg.text }}
        </div>
        <div v-if="isTyping" class="message bot typing">...</div>
      </div>
      <div class="chat-input-area">
        <input 
          type="text" 
          v-model="userInput" 
          @keyup.enter="sendMessage" 
          placeholder="Posez-moi une question..."
          :disabled="isTyping"
        />
        <button @click="sendMessage" :disabled="isTyping">Envoyer</button>
      </div>
    </div>

    <!-- Floating Action Button -->
    <div v-else class="fab" @click="toggleChat" @mousedown="startDrag" @touchstart="startDrag">
      <span class="fab-text">KJST IA</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
let genAI = null;
if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
}

const isOpen = ref(false);
const userInput = ref('');
const isTyping = ref(false);
const messages = ref([
  { sender: 'bot', text: 'Bonjour ! Je suis KJST IA, l\'assistant de Samson. Je connais parfaitement son parcours, ses compétences en Data et Web, ainsi que tous ses projets. Que voulez-vous savoir ?' }
]);
const messagesContainer = ref(null);

const position = ref({ x: window.innerWidth - 120, y: window.innerHeight - 80 });
let isDragging = false;
let startX = 0;
let startY = 0;

const toggleChat = (e) => {
  if (!isDragging) {
    isOpen.value = !isOpen.value;
  }
};

const startDrag = (e) => {
  if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'input') return;
  
  isDragging = false;
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  startX = clientX - position.value.x;
  startY = clientY - position.value.y;

  document.addEventListener('mousemove', drag);
  document.addEventListener('touchmove', drag);
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag);
};

const drag = (e) => {
  isDragging = true;
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  
  let newX = clientX - startX;
  let newY = clientY - startY;

  // Constrain to window bounds
  newX = Math.max(0, Math.min(newX, window.innerWidth - (isOpen.value ? 360 : 120)));
  newY = Math.max(0, Math.min(newY, window.innerHeight - (isOpen.value ? 480 : 60)));

  position.value = { x: newX, y: newY };
};

const stopDrag = () => {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('touchmove', drag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchend', stopDrag);
  
  // Small delay to prevent click event after drag
  setTimeout(() => {
    isDragging = false;
  }, 50);
};

const systemInstruction = `Tu es KJST IA, l'assistant virtuel de KOUAME JUDE SAMSON TANOH.
Samson est un Data Scientist, Data Analyst, Data Engineer et possède également de solides compétences en développement Full Stack.
Ses compétences techniques incluent : Python, Pandas, NumPy, Power BI, Matplotlib, Seaborn, Machine Learning (Scikit-learn, Deep Learning, NLP avec NLTK, Linear SVC), Kafka, Docker, HTML/CSS, JavaScript, Vue.js, Laravel, PHP.
Il maîtrise tout le cycle de la donnée : Scraping (BeautifulSoup), nettoyage, analyse, modélisation, jusqu'au streaming temps réel et le déploiement.
Projets majeurs réalisés :
- Pipeline d'analyse de sentiment (Kafka, Python, Linear SVC).
- Classification d'images Fashion MNIST (Deep Learning, modèle dense, plus de 3 millions de données traitées).
- Analyse d'achats pour un supermarché (Pandas, Seaborn, Power BI).
- Gestion des charges pédagogiques UVCI PCT (Full Stack : Laravel, Vue.js).
- Autres projets : Yow (centralisation de commentaires avec Vue.js/Laravel), FreeAds (site d'annonces en Laravel/PHP), Pos-it (SPA JS), MyShop (E-commerce PHP), Bibliothèque intelligente (NLP en Python/NLTK).
Ton rôle est de répondre de manière concise, très professionnelle, pertinente et amicale aux questions des visiteurs concernant Samson, ses projets, et comment le contacter (il peut être contacté via le formulaire de contact sur le site, par email ou LinkedIn).
Tu réponds en Français. Si la question n'a rien à voir avec Samson, redirige la conversation sur ses compétences poliment.`;

const getFallbackResponse = (text) => {
  const lowerText = text.toLowerCase();
  
  if (/qui est|nom|samson|jude|kouame/.test(lowerText) && !/projet|compétence|contact/.test(lowerText)) {
    return 'Il s\'agit de KOUAME JUDE SAMSON TANOH. Il est Data Scientist, Data Analyst, Data Engineer et possède également de solides compétences en développement Full Stack.';
  } else if (/data|ia|intelligence|machine learning|deep learning|nlp/.test(lowerText)) {
    return 'Samson maîtrise tout le cycle de la donnée : scraping (BeautifulSoup), analyse (Pandas, Power BI), modélisation (ML, Deep Learning, NLP avec NLTK) et streaming (Kafka).';
  } else if (/web|full stack|laravel|vue|php|javascript/.test(lowerText)) {
    return 'En plus de la Data, Samson est développeur Full Stack. Il travaille souvent avec Laravel, Vue.js, PHP et JavaScript pour créer des interfaces web et des APIs.';
  } else if (/compétence|skill|techno/.test(lowerText)) {
    return 'Les compétences de Samson incluent la Data (Python, Kafka, Power BI, ML/DL) et le Web (Vue.js, Laravel). Il a d\'ailleurs traité plus de 3 millions de données sur un de ses projets !';
  } else if (/mnist|fashion|vêtement/.test(lowerText)) {
    return 'Ah, le projet Fashion MNIST ! Samson a créé un modèle de Deep Learning capable d\'identifier des vêtements sur un dataset de plus de 3 millions d\'images.';
  } else if (/sentiment|commentaire|film/.test(lowerText)) {
    return 'Pour son pipeline d\'analyse de sentiment, Samson a combiné Kafka, Python et du Machine Learning (Linear SVC) pour classifier automatiquement des commentaires de films.';
  } else if (/supermarché|achat/.test(lowerText)) {
    return 'Il a réalisé une analyse approfondie des comportements d\'achat pour un supermarché en utilisant Pandas, Seaborn et Power BI.';
  } else if (/uvci|pct|charge/.test(lowerText)) {
    return 'C\'est un projet Full Stack (Laravel/Vue.js) réalisé en équipe pour automatiser la gestion des charges pédagogiques de l\'UVCI.';
  } else if (/yow|freeads|pos-it|myshop|bibliothèque/.test(lowerText)) {
    return 'C\'est l\'un de ses autres projets ! Il a créé divers outils allant du e-commerce (MyShop) à la recommandation NLP (Bibliothèque Intelligente) en passant par des SPA et plateformes d\'annonces.';
  } else if (/projet|portfolio|réalisation/.test(lowerText)) {
    return 'Samson a réalisé au moins 8 grands projets allant du Machine Learning (Analyse de sentiments, Fashion MNIST) au web Full Stack (FreeAds, Yow). Regardez la section Projets pour les détails !';
  } else if (/contact|email|téléphone|joindre|recruter|cv/.test(lowerText)) {
    return 'Vous pouvez contacter Samson via la section Contact de ce portfolio ou directement par email/LinkedIn. Il est toujours ouvert à de nouvelles opportunités !';
  } else if (/bonjour|salut|coucou|hey/.test(lowerText)) {
    return 'Bonjour ! Je suis l\'assistant IA de Samson. Demandez-moi ce que vous voulez sur son parcours, ses compétences en Data/Web ou ses projets !';
  } else if (/merci|top|génial/.test(lowerText)) {
    return 'Avec plaisir ! N\'hésitez pas si vous avez d\'autres questions.';
  } else {
    return 'Je suis un assistant simple (Mode hors-ligne). Demandez-moi plutôt : "Quelles sont ses compétences en Data ?", "Parle-moi de ses projets" ou "Comment le contacter ?".';
  }
};

const getBotResponse = async (text) => {
  if (!genAI) {
    return getFallbackResponse(text);
  }
  
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: systemInstruction 
    });
    
    // We can pass the conversation history, but for simplicity we will just pass the current prompt.
    // To make it better, let's pass a small history.
    const historyText = messages.value.map(m => `${m.sender === 'user' ? 'Visiteur' : 'Toi'}: ${m.text}`).join('\n');
    
    const prompt = `Historique de la conversation:\n${historyText}\n\nQuestion actuelle du Visiteur: ${text}`;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "Je rencontre actuellement un petit problème de connexion avec mon réseau neuronal. Veuillez réessayer plus tard !";
  }
};

const sendMessage = async () => {
  if (!userInput.value.trim() || isTyping.value) return;
  
  const text = userInput.value;
  messages.value.push({ sender: 'user', text });
  userInput.value = '';
  isTyping.value = true;
  
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }

  const response = await getBotResponse(text);
  
  isTyping.value = false;
  messages.value.push({ sender: 'bot', text: response });
  
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// Handle window resize
const handleResize = () => {
  const w = isOpen.value ? 360 : 120;
  const h = isOpen.value ? 480 : 60;
  if (position.value.x > window.innerWidth - w) {
    position.value.x = window.innerWidth - w - 20;
  }
  if (position.value.y > window.innerHeight - h) {
    position.value.y = window.innerHeight - h - 20;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.kjst-ia-container {
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

.fab {
  width: auto;
  height: 60px;
  padding: 0 1.4rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--primary-color, #3b82f6), var(--accent-color, #8b5cf6));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  cursor: grab;
  transition: transform 0.2s, box-shadow 0.2s;
  user-select: none;
}

.fab-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.05em;
}

.fab:active {
  cursor: grabbing;
}

.fab:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}

.chat-window {
  width: 360px;
  height: 480px;
  background-color: var(--bg-light, #1f2937);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.7);
  overflow: hidden;
}

.chat-header {
  background: linear-gradient(135deg, var(--primary-color, #3b82f6), var(--accent-color, #8b5cf6));
  color: white;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: grab;
  user-select: none;
}

.chat-header:active {
  cursor: grabbing;
}

.chat-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.chat-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: var(--bg-dark, #111827);
}

.message {
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 0.95rem;
  line-height: 1.5;
  word-wrap: break-word;
}

.message.bot {
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 0.08);
  color: #f3f4f6;
  border-bottom-left-radius: 4px;
}

.message.user {
  align-self: flex-end;
  background-color: var(--primary-color, #3b82f6);
  color: white;
  border-bottom-right-radius: 4px;
}

.message.typing {
  opacity: 0.7;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 2px;
}

.chat-input-area {
  padding: 14px;
  display: flex;
  gap: 8px;
  background-color: var(--bg-light, #1f2937);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.chat-input-area input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  outline: none;
  font-family: 'Inter', sans-serif;
}

.chat-input-area input:focus {
  border-color: var(--primary-color, #3b82f6);
}

.chat-input-area button {
  background-color: var(--primary-color, #3b82f6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.chat-input-area button:hover:not(:disabled) {
  background-color: var(--accent-color, #8b5cf6);
}

.chat-input-area button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
