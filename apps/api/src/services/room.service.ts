import RoomModel from "@/models/room.model";

export async function getAllRoom() {
  return RoomModel.find();
}
