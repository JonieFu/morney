import Vue from "vue";
import Vuex from "vuex";
import clone from "../lib/clone";
import createId from "@/lib/createId";
import router from "@/router";
import dayjs from "dayjs"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
  } as RootState,

  mutations: {
    fetchTag(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      );
    },
    createTag(state, name: string) {
      const names = state.tagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签已存在");
      } else {
        const id = createId().toString();
        state.tagList.push({ id, name });
        store.commit("saveTags");
        window.alert("创建标签成功");
      }
    },
    saveTags(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
    removeTag(state, id) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          state.tagList.splice(index, 1)
          store.commit("saveTags");
          window.alert("删除标签成功");
          router.back();
        }
      }
    },
    findTag(state, id: string) {
      return state.tagList.filter((tag) => tag.id === id)[0];
    },
    setCurrentTag(state, id: string) {
      const tag = state.tagList.filter((tag) => tag.id === id)[0];
      state.currentTag = tag;
    },
    updateTag(state, payload: { id: string, name: string }) {
      const { id, name } = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert('标签名重复了');
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      );
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createdAt = dayjs().format()
      state.recordList.push(record2);
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
