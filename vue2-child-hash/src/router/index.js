import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/detail",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/detail.vue"),
  },
];

export default routes;
