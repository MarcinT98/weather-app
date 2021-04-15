import Vue from 'vue'
import App from './App.vue'
import Smog from './components/Smog'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes =[
  {
    path:'/smog',
    component: Smog
    
  }
]
const router =new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
export{router}
