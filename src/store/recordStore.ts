import model from "@/models/recordList";
export default {
  createRecord: (record: RecordItem) => model.create(record),
  recordList: model.fetch(),
};
