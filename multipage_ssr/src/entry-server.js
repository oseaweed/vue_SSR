import { createApp } from "./pages/second/second";
export default (context) => {
  return new Promise((resolve, reject) => {
    const { second, router } = createApp();
    router.push(context.url);
    router.Onready(() => {
      const matchedComponents = router.getMatchedComponents(); // 返回当前路由的组件数组
      if (!matchedComponents.length) {
        return reject(new Error('no components matched'))
      }
      resolve(second);
    }, reject);
  })
};
