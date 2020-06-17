import TagStore from "@/store/TagStore";
import recordStore from "@/store/recordStore";

const store = {
  ...TagStore,
  ...recordStore,
};

export default store;
