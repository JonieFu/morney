import tagListModel from "@/models/tagListModel";
export default {
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === "duplicated") {
      window.alert("标签已存在");
    }
    window.alert("创建标签成功");
  },

  findTag(id: string) {
    return this.tagList.filter((tag) => tag.id === id)[0];
  },
  removeTag: (id: string) => {
    tagListModel.remove(id);
    return true;
  },

  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
};
