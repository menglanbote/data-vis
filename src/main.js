import Vue from "vue";
//引入ElementUI 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";

// 权限拦截
import './permission'

Vue.use(ElementUI);

Vue.config.productionTip = process.env.NODE_ENV === "production";
console.log(process.env.NODE_ENV); // 开发环境 development, 生产环境 production

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
