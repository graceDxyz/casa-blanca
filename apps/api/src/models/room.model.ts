import mongoose from "mongoose";

export interface RoomInput {
  name: string;
  description: string;
}

export interface IRoom extends RoomInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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

const RoomModel = mongoose.model<IRoom>("Room", roomSchema);

export default RoomModel;
