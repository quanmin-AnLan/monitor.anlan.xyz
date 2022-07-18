import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
    {
        path: '/:catchAll(.*)',
        redirect: '404'
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/edit',
        name: 'Edit',
        component: () => import('./views/edit.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('./views/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
