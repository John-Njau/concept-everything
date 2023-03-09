import { createRouter, createWebHistory } from 'vue-router'

import TestComp from '../components/TestComp.vue'
import Sidebar from '../components/SideBar.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Auth/LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Auth/SignUpPage.vue'),
    },
    {
        path: '/test',
        name: 'Test',
        component: TestComp,
    },
    {
        path: '/sidebar',
        name: 'Sidebar',
        component: Sidebar,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
