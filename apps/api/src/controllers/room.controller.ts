import { GetItemInput } from "@/schema/base.schema";

import type { Request, Response } from "express";
import { findRoom, getAllRoom } from "@/services/room.service";

export async function getAllRoomHandler(req: Request, res: Response) {
  const rooms = await getAllRoom();
  return res.send(rooms);
}

export async function getRoomHandler(
  req: Request<GetItemInput["params"]>,
  res: Response,
) {
  try {
    const id = req.params.id;
    const room = await findRoom({ _id: id });

    if (!room) {
      return res.sendStatus(404);
    }

    return res.send(room);
  } catch (e) {
    return res.sendStatus(404);
  }
}
