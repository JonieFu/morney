import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/icon.vue";
import Button from "@/components/Button.vue";
import tagListModel from "./models/tagListModel";
import model from "@/models/recordList.ts";

Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);
Vue.component("Button", Button);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
