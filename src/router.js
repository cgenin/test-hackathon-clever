import Vue from 'vue'
import Router from 'vue-router'
import ListRoutes from './list-routes';

Vue.use(Router);



const routes = ListRoutes.concat([
  {
    path: '*', redirect: '/'
  }
]);

export default new Router({
  mode: 'history',
  routes
})
