import store from "./store";
import { initGlobalState } from "qiankun";
const state = {
  // 这里写初始化数据
  token: "",
};
// 初始化 参数 state
const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("主应用状态变化", state, prev);
  store.commit("SET_TOKEN", state.token);
});
export default actions;
