import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import HclKit from "./plugins/hcl-kit";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(HclKit);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
