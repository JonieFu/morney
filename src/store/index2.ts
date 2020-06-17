import TagStore from "@/store/TagStore";
import recordStore from "@/store/recordStore";

window.store = {
  ...TagStore,
  ...recordStore,
};

export default store;
