import mongoose from "mongoose";

export interface RoomInput {
  name: string;
  description: string;
  imageUrl: string;
}

export interface RoomDocument extends RoomInput, mongoose.Document {
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
    imageUrl: {
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

const RoomModel = mongoose.model<RoomDocument>("Room", roomSchema);

export default RoomModel;
