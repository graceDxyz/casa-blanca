import TableModel from "@/models/table.model";

export async function getAllTable() {
  return TableModel.find();
}
