import Vue from 'vue'
import Router from 'vue-router'
import Smog from './components/Smog.vue'
import Map from './components/Map.vue'

Vue.use(Router)

const routes = [
    {
        path: '/smog',
        component: Smog
    },
    {
        path: '/mapa',
        component: Map
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router