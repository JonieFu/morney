declare type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  // ?是指这个属性有没有都行
  createdAt?: Date;
};
type Tag = {
  id: string;
  name: string;
};
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated";
  update: (id: string, name: string) => "success" | "duplicated" | "not found";
  remove: (id: string) => void;
  save: () => void;
};
interface Window {
  tagList: Tag[];
}
