import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    meta: {
      title: "index page"
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
  },
  {
    path: '/about',
    meta: {
      title: "about page"
    },
    component: (resolve) => require(['./views/about.vue'], resolve)
  },
  {
    path: '/user/:id',
    meta: {
      title: "user page"
    },
    component: (resolve) => require(['./views/user.vue'], resolve)
  },
  {
    path: '*',
    meta: {
      title: "404 page"
    },
    component: (resolve) => require(['./views/404.vue'], resolve)
  },
];

const RouterConfig = {
  mode: 'history',
  routes: routes
}
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();//有next()才会发生路由切换
});
router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0);
});

new Vue({
  el: '#app',
  router: router, 
  render: h => {
      return h(App)
  }
});
