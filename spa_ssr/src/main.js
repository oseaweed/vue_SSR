import Vue from "vue";
import App from "./App";
import { CreateRouter } from "./router";

export function createApp() {
  const router = new CreateRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router };
}
