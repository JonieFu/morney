import createId from "@/lib/createId.ts";

const localStorageKeyName = "tagsList";
const tagStore = {
  tagList: [] as Tag[],
  fetchTag() {
    this.tagList = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    );
    return this.tagList;
  },
  createTag(name: string) {
    const names = this.tagList.map((item) => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert("标签已存在");
      return "duplicated";
    } else {
      const id = createId().toString();
      this.tagList.push({ id: id, name: name });
      this.saveTags();
      window.alert("创建标签成功");
      return "success";
    }
  },

  findTag(id: string) {
    return this.tagList.filter((tag) => tag.id === id)[0];
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        this.tagList.splice(index, 1);
        this.saveTags();
        window.alert("删除标签成功");
      }
    }
  },
  saveTags() {
    window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.tagList)
    );
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map((item) => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert("标签重复了");
        return "duplicated";
      } else {
        const tag = this.tagList.filter((item) => item.id === id)[0];
        tag.name = name;
        this.saveTags();
        return "success";
      }
    } else {
      return "not found";
    }
  },
};

tagStore.fetchTag();

export default tagStore;
