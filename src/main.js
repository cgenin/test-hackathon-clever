import Vue from 'vue'
import 'knacss/css/knacss.css';
import 'knacss/css/grillade-grid.css';
import 'knacss/css/grillade-flex.css';
import 'font-awesome/css/font-awesome.css';
import './palette.css';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
