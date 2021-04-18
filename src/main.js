import Vue from 'vue'
import App from './App.vue'
import Smog from './components/Smog'
import VueRouter from 'vue-router'
import Long from './components/LongTerm'
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
Vue.use(VueRouter)
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false


const routes =[
  {
    path:'/smog',
    component: Smog
    
  },
  {
    path:'/long',
    component: Long
  }
]
const router =new VueRouter({
  routes,
  mode:'history'
})
var ApiKey1='0892f560';
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
export{router}
export{ApiKey1}

