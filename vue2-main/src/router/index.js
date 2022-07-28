import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/micro-app-hash",
    name: "micro-app-hash",
    component: () =>
      import(
        /* webpackChunkName: "micro-app-hash" */ "../views/micro-app-hash.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (["Login"].includes(to.name)) {
    next();
  } else {
    const token = store.state.token;
    if (token) {
      next();
    } else {
      next({
        name: "Login",
        query: {
          redirect: to.fullPath,
        },
      });
    }
  }
});
export default router;
