import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './screens/Home'
import Initial from './screens/Initial'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {
      name:'initial',
      path:'/',
      component: Initial
    },
    {
      name:'maxdoctor',
      path:'/maxdoctor',
      component: Home
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
