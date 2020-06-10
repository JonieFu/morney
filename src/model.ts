const localStorageKeyName = "recordList";
const model = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    const x: RecordItem[] = JSON.parse(
      window.localStorage.getItem("recordList") || "[]"
    );
    return x;
  },
  save(data: RecordItem | RecordItem[]) {
    window.localStorage.setItem("recordList", JSON.stringify(data));
  },
};

export default model;
