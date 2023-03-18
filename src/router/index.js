import {createRouter,
    createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: import('../views/Info.vue')
    },
    {
        path: '/login',
        component: import('../views/login.vue')
    },
    {
        path: '/file',
        component: import('../views/file.vue')
    }
]

const router = createRouter({
history: createWebHashHistory(),   
routes
})

export default router