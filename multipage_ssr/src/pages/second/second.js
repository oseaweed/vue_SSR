import Vue from "vue";
import Second from "./second.vue";
import {createRouter} from "./../../router/second";
Vue.config.productionTip = false;

// const second = new Vue({
//   router,
//   render: (h) => h(Second),
// });
// export function createApp(){
//   return {second,router};
// }
export function createApp() {
  const router = new createRouter();
  const app = new Vue({
    router,
    render: h => h(Second)
  });
  return { app, router };
}