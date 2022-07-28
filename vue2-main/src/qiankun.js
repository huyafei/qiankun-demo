import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";

import actions from "./actions.js";

const useQiankun = function () {
  // 微应用
  let apps = [
    {
      name: "vue2-child-history", // 微应用的名称，必选，唯一
      entry: "http://localhost:8083", // 微应用的入口,必选
      container: "#micro-app-history-container", // 微应用的容器节点的选择器或者 Element 实例，必选
      activeRule: "/micro-app-history",
      props: {
        // 可选，主应用需要传递给微应用的数据。
        actions,
        msg: "hello micro-app-history",
      },
    },
    {
      name: "vue2-child-hash", // 微应用的名称，必选，唯一
      entry: "http://localhost:8084", // 微应用的入口,必选
      container: "#micro-app-hash-container", // 微应用的容器节点的选择器或者 Element 实例，必选
      activeRule: "/micro-app-hash",
      props: {
        // 可选，主应用需要传递给微应用的数据。
      },
    },
  ];
  // 生命周期
  let lifeCycles = {
    beforeLoad: (app) => {
      console.log(1, app);
    },
    beforeMount: (app) => {
      console.log(2, app);
    },
    afterMount: (app) => {
      console.log(3, app);
    },
    beforeUnmount: (app) => {
      console.log(4, app);
    },
    afterUnmount: (app) => {
      console.log(5, app);
    },
  };
  // 注册微应用
  registerMicroApps(apps, lifeCycles);
  // 全局的未捕获异常处理器。
  addGlobalUncaughtErrorHandler((event) => {
    const { msg } = event;
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
      console.log("加载失败");
    }
  });
  // 启动 qiankun
  start();
};
export { useQiankun };
