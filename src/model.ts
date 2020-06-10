const localStorageKeyName = "recordList";
const model = {
  fetch() {
    const recordList: RecordItem[] = JSON.parse(
      window.localStorage.getItem("recordList") || "[]"
    );
    return recordList;
  },
};

export default model;
