import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
export default createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes: [{ path: '/', component: HomeView }, { path: '/portfolio', redirect: '/' }], scrollBehavior: (to, from, saved) => saved || (to.hash ? { el: to.hash, behavior: 'smooth' } : { top: 0 }) })
