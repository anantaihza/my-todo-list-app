import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'
import ArchivedView from '@/views/ArchivedView.vue'
import AddTodoView from '@/views/AddTodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false, title: 'Login | Todo list' }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false, title: 'Register | Todo list' }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true, title: 'Home | Todo list' }
    },
    {
      path: '/archived',
      name: 'archived',
      component: ArchivedView,
      meta: { requiresAuth: true, title: 'Archived | Todo list' }
    },
    {
      path: '/add-todo',
      name: 'add-todo',
      component: AddTodoView,
      meta: { requiresAuth: true, title: 'Add | Todo list' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.access_token
  if (to.meta.requiresAuth && !token) {
    next({ name: 'login' })
  } else if (to.name === 'login' && token) {
    next({ name: 'home' })
  } else {
    document.title = to.meta.title || 'Todo List'
    next()
  }
})

export default router
