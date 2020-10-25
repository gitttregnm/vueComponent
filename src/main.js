import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: "small" // set element-ui default size
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
