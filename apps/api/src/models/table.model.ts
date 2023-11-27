import mongoose from "mongoose";
import { IRoom } from "./room.model";

export interface TableInput {
  room: IRoom["_id"];
  name: string;
  description: string;
  capacity: number;
  status: string;
}

export interface ITable extends TableInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const tableSchema = new mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["available", "reserved"],
      default: "available",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
    },
  },
);

const TableModel = mongoose.model<ITable>("Table", tableSchema);

export default TableModel;
