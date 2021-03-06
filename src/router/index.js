import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/all",
    name: "all"
  },
  {
    path: "/active",
    name: "active"
  },
  {
    path: "/complete",
    name: "complete"
  },
  {
    path: "*",
    redirect: "/all"
  }
];

const router = new VueRouter({
  mode: "hash",
  base: "todo/all",
  routes
});

export default router;
