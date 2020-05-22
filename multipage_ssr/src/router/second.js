import Vue from "vue";
import VueRouter from "vue-router";
import seCom from "../pages/second/seCom"
Vue.use(VueRouter);

const routes = [
  {
    path: "/component",
    name: "component",
    component: seCom,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export function createRouter() {
  return router;
}
// export default router;
