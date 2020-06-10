declare type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  // ?是指这个属性有没有都行
  createdAt?: Date;
};
