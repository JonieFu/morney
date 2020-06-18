import Vue from "vue";
import Vuex from "vuex";
import clone from "../lib/clone";
import createId from "@/lib/createId";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },

  mutations: {
    fetchTag(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      );
    },
    createTag(state, name: string) {
      const names = state.tagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签已存在");
        return "duplicated";
      } else {
        const id = createId().toString();
        state.tagList.push({ id: id, name: name });
        store.commit("saveTags");
        window.alert("创建标签成功");
        return "success";
      }
    },
    saveTags(state) {
      window.localStorage.setItem("recordList", JSON.stringify(state.tagList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      );
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      console.log(state.recordList);

      store.commit("saveRecords");
    },
    saveRecords(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordList)
      );
    },
  },
});

export default store;
