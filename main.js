import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import App from './app.vue';
import VueBus from './vue-bus';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBus);

const store = new Vuex.Store({
  modules: {
    mod1: {
      state: {
        count: 1000
      },
      getters: {
        count: function (state, getters, rootState) {
          return state.count + rootState.count;
        }
      }
    }
  },
  state: {
    count: 11,
    list: [1, 5, 7, 6, 100, 200]
  },
  mutations: {
    increment (state, n = 1) {
      state.count += n;
    },
    addItem (state) {
      state.list.push(parseInt(Math.random() * 1000));
    }
  },
  actions: {
    addItem (context) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          context.commit("addItem");
          resolve(true);
        }, 0);
      });
    }
  },
  getters: {
    filteredList: state => {
      return state.list.filter(item => item > 50);
    },
    listCount: (state, getters) => {
      return getters.filteredList.length;
    },
  }
})

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
  next();//switch route only next() be called
});
router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0);
});

new Vue({
  el: '#app',
  router: router, 
  store: store,
  render: h => {
      return h(App)
  },
  created () {
    this.$bus.on('view-mounted', function (tar) {
      console.log(tar);
    });
  },
  mounted () {
    console.log(this.$store.state.mod1.count)
    console.log(this.$store.getters.count)
  }
});
