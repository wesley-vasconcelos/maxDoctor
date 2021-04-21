<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import BootstrapVue from 'bootstrap-vue'
import './style/global.css'
import CxltToastr from 'cxlt-vue2-toastr'



var toastrConfigs = {
  position: 'bottom right',
  showDuration: 1000,
  hideDuration: 6000,
  successColor: 'green',
  errorColor: 'red'
}
Vue.use(CxltToastr, toastrConfigs)
Vue.use(BootstrapVue)

export default {
  name: 'App',
}
</script>


<style >
@import '../node_modules/cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';
</style>
