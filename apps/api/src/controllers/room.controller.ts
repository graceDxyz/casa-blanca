import { Request, Response } from "express";

import { getAllRoom } from "@/services/room.service";

const getAllRoomHandler = async (req: Request, res: Response) => {
  const rooms = await getAllRoom();
  return res.send(rooms);
};

export { getAllRoomHandler };
