import type { Document, FilterQuery, QueryOptions, Types } from "mongoose";
import RoomModel, { type RoomDocument } from "@/models/room.model";

export async function getAllRoom(): Promise<
  (Document<unknown, unknown, RoomDocument> &
    RoomDocument & {
      _id: Types.ObjectId;
    })[]
> {
  return RoomModel.find();
}

export async function findRoom(
  query: FilterQuery<RoomDocument>,
  options: QueryOptions = { lean: true },
): Promise<
  | (Document<unknown, unknown, RoomDocument> &
      RoomDocument & {
        _id: Types.ObjectId;
      })
  | null
> {
  return RoomModel.findOne(query, {}, options);
}
