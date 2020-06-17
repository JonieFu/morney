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

window.tagList = tagListModel.fetch();
window.createTag = (name) => {
  const message = tagListModel.create(name);
  if (message === "duplicated") {
    window.alert("标签已存在");
  }
  window.alert("创建标签成功");
};
window.createRecord = (record: RecordItem) => model.create(record);

window.findTag = (id: string) => {
  return window.tagList.filter((tag) => tag.id === id)[0];
};
window.removeTag = (id: string) => {
  tagListModel.remove(id);
  return true;
};
window.recordList = model.fetch();
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name);
};
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
