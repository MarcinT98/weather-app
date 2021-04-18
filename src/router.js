import Vue from 'vue'
import Router from 'vue-router'
import Smog from './components/Smog.vue'
import Map from './components/Map.vue'
import Long from './components/LongTerm.vue'

Vue.use(Router)

const routes = [
    {
        path: '/smog',
        component: Smog
    },
    {
        path: '/mapa',
        component: Map
    },
    {
        path:'/long',
        component:Long
    }
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router