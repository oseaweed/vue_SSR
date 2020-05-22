import { createApp } from "./pages/second/second";
const { app, router } = createApp();

router.onReady(() => {
  app.$mount("#second");
});
