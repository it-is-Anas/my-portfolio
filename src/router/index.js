import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    component: ()=>import('../views/HomeEng.vue'),
  },
  {
    path:'/lan-ara',
    component: ()=>import('../views/HomeAra.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
